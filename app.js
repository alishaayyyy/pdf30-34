var Now = new Date();
document.write(Now);
var month = Now.getMonth();
document.write(`<br>` + "The month is: " + month);

// next

var currentDate = new Date();

var currentMonthIndex = currentDate.getMonth();

var monthNames = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

var currentMonthName = monthNames[currentMonthIndex];

document.write(`<br>` + "Current month is: " + currentMonthName);

// next

var current = new Date();

var currentMonthIndex1 = currentDate.getDay();

var dayNames = [
  "Mon" , "Tues" , "Wed" , "Thur" , "Fri" , "Sat" , "Sun"
];

var currentDayName = dayNames[currentMonthIndex1];

document.write(`<br>` + "Current day is: " + currentDayName);

// next
var currentDate = new Date();
var currentDay = currentDate.getDay(); 

if (currentDay === 0 || currentDay === 6) {
    document.write(`<br>` + "It's the weekend, enjoy your weekend!");
} else {
    document.write(`<br>` + "It's a weekday, keep working!");
}

// next
var datesOfMonths = new Date();
var dateOfMonth = datesOfMonths.getDate(); 
document.write("Date:" +`<br>` + dateOfMonth);
if(dateOfMonth<=15 ){
document.write(`<br>` + "It's starting day's of month");
}
else{
  document.write(`<br>` + "last day's of month");
}

// next
var onceAgainDate = new Date();
document.write(`<br>` + onceAgainDate);
// document.write("Milliseconds:" +`<br>` + onceAgainDate.getMilliseconds());
// var dateOfMonth = datesOfMonths.getDate(); 
var d = new Date();
var totalMills = d.getTime(); 
document.write(`<br>`+ "Elapsed Millisecond since january 1, 1970: " + totalMills);
var totalMinutes = Math.floor(totalMills / 60000);
document.write(`<br>`+ "Elapsed Minutes since january 1, 1970: " + totalMinutes);

// next

var d = new Date();
var hours = d.getHours(); // Get the current hour (0-23)

if (hours < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

// next

var laterDate = new Date(2020, 11, 31); 
document.write(`<br>`+ "Date:" + laterDate);

// next
var ramadanStartDate = new Date(2015, 5, 18); 
var currentDate = new Date();
var timeDifference = currentDate - ramadanStartDate;
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); 
document.write(`<br>`+ "Number of days since 1st Ramadan (June 18, 2015): " + daysPassed + "days");

// next

var d = new Date();
var Back = new Date(d.setFullYear(d.getFullYear() - 100));
document.write(`<br>`+ "Date 100 years back is: " + Back.toDateString());

// next
var birthYear = parseInt(prompt("What is yor Birth year"));
var calculate = 2024-birthYear;
document.write(`<br>`+ "Your age is:" +  calculate);
document.write(`<br>`+ "Your birth year is:" + birthYear);

// next

var customerName = "ABC Customer";
var month = "Februry";
var numOfUnit = 670;
var chargesPerUnit = 16;

var netAmountPayable = numOfUnit * chargesPerUnit;

document.write(`<br>`+ "Customer Name: " + customerName);
document.write(`<br>`+ "Month: " + month);
document.write(`<br>`+ "Number of Units: " + numOfUnit);
document.write(`<br>`+ "Charges Per Unit: $" + chargesPerUnit);
document.write(`<br>`+ "Net Amount Payable: $" + netAmountPayable);

var latePaymentCharges = 400;
document.write(`<br>`+ "Late payment charges is:"+latePaymentCharges);
var  GrossAmountPayable=netAmountPayable + latePaymentCharges;
document.write(`<br>`+ "Gross Amount payable  is:"+ GrossAmountPayable);



