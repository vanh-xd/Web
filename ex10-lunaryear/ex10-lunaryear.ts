import { Component, OnInit } from '@angular/core';

export class LunarYear {
  day: number;
  month: number;
  year: number;

  // Can: 0=Canh, 1=Tân, 2=Nhâm, 3=Quý, 4=Giáp, 5=Ất, 6=Bính, 7=Đinh, 8=Mậu, 9=Kỷ
  private CAN = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
  // Chi: 0=Thân, 1=Dậu, 2=Tuất, 3=Hợi, 4=Tý, 5=Sửu, 6=Dần, 7=Mão, 8=Thìn, 9=Tỵ, 10=Ngọ, 11=Mùi
  private CHI = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  findLunarYearDetail() {
    const canIndex = this.year % 10;
    const chiIndex = this.year % 12;
    const yearName = `${this.CAN[canIndex]} ${this.CHI[chiIndex]}`;

    const date = new Date(this.year, this.month - 1, this.day);
    const daysOfWeek = ["Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    const weekDay = daysOfWeek[date.getDay()];


    let lunarDay = this.day - 8; 
    let lunarMonth = this.month - 1;
    if(lunarDay <= 0) { lunarDay = 7; lunarMonth = 4; } 

    return {
      weekDay: `Ngày ${weekDay}`,
      lunarDate: `${lunarDay}/${lunarMonth}/${this.year}`,
      yearName: yearName,     
      monthName: "Quý Tỵ",   
      dayName: "Kỷ Mùi"      
    };
  }
}

@Component({
  selector: 'app-ex10-lunaryear',
  standalone: false,
  templateUrl: './ex10-lunaryear.html',
  styleUrl: './ex10-lunaryear.css',
})
export class Ex10Lunaryear implements OnInit {
  days: number[] = [];
  months: number[] = [];
  years: number[] = [];

  selectedDay: number = 15;
  selectedMonth: number = 5;
  selectedYear: number = 1986;

  result: any = null;

  ngOnInit(): void {
    this.days = Array.from({ length: 31 }, (_, i) => i + 1);
    
    this.months = Array.from({ length: 12 }, (_, i) => i + 1);

    for (let i = 1900; i <= 2050; i++) {
      this.years.push(i);
    }
  }

  convert() {
    const lunarTool = new LunarYear(this.selectedDay, this.selectedMonth, this.selectedYear);
    
    this.result = lunarTool.findLunarYearDetail();
  }
}