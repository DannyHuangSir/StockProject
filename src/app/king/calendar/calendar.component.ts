import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat']

  monthDayCount?: number

  months: any[] = []

  numberOfMonths: number = 12

  constructor() {}

  ngOnInit(): void {
    const date = new Date()
    let currentMonth = date.getMonth()
    let currentYear = date.getFullYear()
    this.createMonths(currentMonth, currentYear)
  }

  createMonths(month: number, year: number) {
    for (let i = 0; i < this.numberOfMonths; i++) {
      let m = month + i
      let y = year
      if (m > 11) {
        m = (m % 11) - 1
        y = year + 1
      }
      this.months.push(this.createMonth(m, y))
    }
  }

  createMonth(month: number, year: number) {
    let firstDayIndex = this.getFirstDayOfMonthIndex(month, year) // 取的指定月份一號的索引
    let daysLength = this.getDaysCountInMonth(month, year) // 取得月份的天數
    let prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year) // 取得前一個月份的天數
    let monthRows = Math.ceil((daysLength + firstDayIndex) / 7) // 取得當月的週數
    let weeks: any[] = []
    let daysOfFirstWeekForCurrentMonth = 7 - firstDayIndex // 第一週的天數中當月佔幾天
    let daysOfFirstWeekForPrevMonth = 7 - daysOfFirstWeekForCurrentMonth // 第一週的天數中當月佔幾天

    for (let i = 1; i <= monthRows; i++) {
      let week = []
      if (i == 1) {
        for (
          let j = prevMonthDaysLength - daysOfFirstWeekForPrevMonth + 1;
          j <= prevMonthDaysLength;
          j++
        ) {
          week.push({
            date: j,
          })
        }

        for (let j = 1; j <= daysOfFirstWeekForCurrentMonth; j++) {
          week.push({
            date: j,
          })
        }
      } else {
        for (let j = 1; j <= 7; j++) {
          let date = (i - 2) * 7 + daysOfFirstWeekForCurrentMonth + j
          if (i == monthRows) {
            if (date > daysLength) {
              week.push({
                date: date - daysLength,
              })
            } else {
              week.push({
                date: date,
              })
            }
          } else {
            week.push({
              date: date,
            })
          }
        }
      }

      weeks.push({
        week: week,
      })
    }

    return {
      year: year,
      month: month,
      weeks: weeks,
    }
  }

  getFirstDayOfMonthIndex(month: number, year: number) {
    let day = new Date()
    day.setDate(1)
    day.setMonth(month)
    day.setFullYear(year)

    let dayIndex = day.getDay() + this.getSundayIndex()
    return dayIndex >= 7 ? dayIndex - 7 : dayIndex
  }

  getSundayIndex() {
    let firstDayOfWeek = 1

    return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0
  }

  getDaysCountInMonth(month: number, year: number) {
    return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate()
  }

  daylightSavingAdjust(date: any) {
    if (!date) {
      return null
    }

    date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0)

    return date
  }

  getDaysCountInPrevMonth(month: number, year: number) {
    let prev = this.getPreviousMonthAndYear(month, year)
    return this.getDaysCountInMonth(prev.month, prev.year)
  }

  getPreviousMonthAndYear(month: number, year: number) {
    let m, y

    if (month === 0) {
      m = 11
      y = year - 1
    } else {
      m = month - 1
      y = year
    }

    return { month: m, year: y }
  }

  getNextMonthAndMonth(month: number, year: number) {
    let m: number
    let y: number
    if (month === 11) {
      m = 0
      y = year + 1
    } else {
      m = month + 1
      y = year
    }
    return { month: m, year: y }
  }
}
