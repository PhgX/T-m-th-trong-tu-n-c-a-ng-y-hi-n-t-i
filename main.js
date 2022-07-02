let names_days_of_the_week = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"]

let date = new Date().getDay();

console.log('Hôm nay là ' + names_days_of_the_week[date])