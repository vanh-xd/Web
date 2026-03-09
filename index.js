const express = require('express'); 
const app = express(); 
const port = 3002; 

const morgan=require("morgan") 
app.use(morgan("combined")) 

const bodyParser=require("body-parser") 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 

const cors=require("cors"); 
app.use(cors({
    origin: "http://localhost:4200", 
    credentials: true 
}));

app.listen(port,()=>{ 
console.log(`My Server listening on port ${port}`) 
}) 

app.get("/",(req,res)=>{ 
res.send("This Web server is processed for MongoDB") 
}) 

var cookieParser = require('cookie-parser'); 
app.use(cookieParser());

app.get("/create-cookie",cors(),(req,res)=>{ 
    res.cookie("username","phamvianh") 
    res.cookie("password","123456") 
    account={"username":"phamvianh", 
            "password":"123456"} 
    res.cookie("account",account) 
    res.send("cookies are created") 
    //Expires after 360000 ms from the time it is set. 
    res.cookie("infor_limit1", 'I am limited Cookie - way 1', {expire: 360000 + Date.now()});  
    res.cookie("infor_limit2", 'I am limited Cookie - way 2', {maxAge: 360000}); 
}) 

app.get("/read-cookie",cors(),(req,res)=>{ 
//cookie is stored in client, so we use req 
username=req.cookies.username 
password=req.cookies.password 
account=req.cookies.account 
infor="username = "+username+"<br/>" 
infor+="password = "+password+"<br/>" 
if(account!=null) 
{ 
infor+="account.username = "+account.username+"<br/>" 
infor+="account.password = "+account.password+"<br/>" 
}     
res.send(infor)     
}) 

app.get("/clear-cookie",cors(),(req,res)=>{ 
    res.clearCookie("account") 
    res.send("[account] Cookie is removed")     
}) 


const { MongoClient, ObjectId } = require('mongodb'); 
client = new MongoClient("mongodb://127.0.0.1:27017"); 
client.connect(); 
database = client.db("FashionData");       
fashionCollection = database.collection("Fashion"); 
const userCollection = database.collection("User");
const productCollection = database.collection("Product");

app.get("/fashions",cors(),async (req,res)=>{    
const result = await fashionCollection.find({}).toArray(); 
res.send(result) 
} 
) 

app.get("/fashions/:id",cors(),async (req,res)=>{ 
var o_id = new ObjectId(req.params["id"]); 
const result = await fashionCollection.find({_id:o_id}).toArray();     
res.send(result[0]) 
} 
) 

app.post("/login", cors(), async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await userCollection.findOne({ username: username, password: password });

        if (user) {
            const loginData = { username: user.username, password: user.password };
            res.cookie("rememberedUser", JSON.stringify(loginData), { 
                maxAge: 7 * 24 * 60 * 60 * 1000, 
                httpOnly: false 
            });
            
            res.send({ message: "Login successful", user: loginData });
        } else {
            res.status(401).send({ message: "Invalid username or password" });
        }
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

app.get("/get-remembered-user", cors(), (req, res) => {
    if (req.cookies.rememberedUser) {
        res.send(req.cookies.rememberedUser);
    } else {
        res.send(null);
    }
})

const session = require('express-session'); 
app.use(session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } 
})); 

app.get("/contact",cors(),(req,res)=>{ 
    if(req.session.visited!=null) 
    { 
        req.session.visited++ 
        res.send("You visited this page "+req.session.visited +" times") 
    } 
    else 
    { 
        req.session.visited=1 
        res.send("Welcome to this page for the first time!") 
    } 
}) 

app.get("/products", cors(), async (req, res) => {
    const result = await productCollection.find({}).toArray();
    res.send(result);
});

// 2. Thêm sản phẩm vào giỏ hàng (Lưu vào Session)
app.post("/add-to-cart", cors(), (req, res) => {
    const product = req.body;
    
    if (!req.session.cart) {
        req.session.cart = [];
    }

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ chưa
    const index = req.session.cart.findIndex(p => p._id === product._id);
    if (index !== -1) {
        req.session.cart[index].qty += 1; // Nếu có rồi thì tăng số lượng
    } else {
        product.qty = 1; // Nếu chưa có thì set số lượng là 1
        req.session.cart.push(product);
    }
    res.send(req.session.cart);
});

// 3. Lấy dữ liệu giỏ hàng từ Session để hiển thị ở trang Cart
app.get("/cart", cors(), (req, res) => {
    res.send(req.session.cart || []);
});

// 4. Cập nhật giỏ hàng (Xóa hoặc sửa số lượng)
app.post("/update-cart", cors(), (req, res) => {
    // Frontend sẽ gửi danh sách giỏ hàng mới (đã lọc bỏ các item bị Remove)
    req.session.cart = req.body;
    res.send(req.session.cart);
});