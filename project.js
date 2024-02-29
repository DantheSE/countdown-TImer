// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const week = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// let timer = document.querySelectorAll(".time");

// let today = new Date();
// let present_year = today.getFullYear();
// let present_day = today.getDate();
// let present_month = today.getMonth();

// let end_date = new Date(
//   present_year,
//   present_month,
//   present_day + 10,
//   11,
//   30,
//   0
// );

// let end_time = end_date.getTime();
// let end_minute = end_date.getMinutes();
// let end_hour = end_date.getHours();
// let end_day = end_date.getDate();
// let week_days = end_date.getDay();
// let end_month = end_date.getMonth();
// let end_year = end_date.getFullYear();

// let daycalculation = 1000 * 60 * 60 * 24;
// let hourcalculation = 1000 * 60 * 60;
// let minutecalculation = 1000 * 60;
// let secondcalculation = 1000;

// function countdownTimer() {
//   let present_time = new Date().getTime();
//   let time_left = end_time - present_time;

//   let days_left = Math.floor(time_left / daycalculation);
//   let hours_left = Math.floor((time_left % daycalculation) / hourcalculation);
//   let minutes_left = Math.floor(
//     (time_left % hourcalculation) / minutecalculation
//   );
//   let seconds_left = Math.floor(
//     (time_left % minutecalculation) / secondcalculation
//   );

//   const values_left = [days_left, hours_left, minutes_left, seconds_left];

//   function ddchecker(objects) {
//     if (objects < 10) {
//       return "0" + objects;
//     }
//     return objects;
//   }

//   timer.forEach(function (objects, index) {
//     objects.innerHTML = ddchecker(values_left[index]);
//   });
// }
// let timers = setInterval(countdownTimer, 1000);
// countdownTimer();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let timer = document.querySelectorAll(".time");

let today = new Date();
let present_year = today.getFullYear();
let present_day = today.getDate(); // Corrected typo: changed now to today
let present_month = today.getMonth();

let end_date = new Date(
  present_year,
  present_month,
  present_day + 10,
  11,
  30,
  0
);

let end_time = end_date.getTime();
let end_minute = end_date.getMinutes();
let end_hour = end_date.getHours();
let end_day = end_date.getDate();
let week_days = end_date.getDay();
let end_month = end_date.getMonth();
let end_year = end_date.getFullYear();

let daycalculation = 1000 * 60 * 60 * 24;
let hourcalculation = 1000 * 60 * 60;
let minutecalculation = 1000 * 60;
let secondcalculation = 1000;

function countdownTimer() {
  let present_time = new Date().getTime(); // Corrected typo: getTIme() to getTime()
  let time_left = end_time - present_time;

  let days_left = Math.floor(time_left / daycalculation);
  let hours_left = Math.floor((time_left % daycalculation) / hourcalculation);
  let minutes_left = Math.floor(
    (time_left % hourcalculation) / minutecalculation
  );
  let seconds_left = Math.floor(
    (time_left % minutecalculation) / secondcalculation
  );

  const values_left = [days_left, hours_left, minutes_left, seconds_left];

  function ddchecker(object) {
    if (object < 10) {
      return "0" + object;
    }
    return object.toString();
  }

  timer.forEach(function (object, index) {
    object.innerHTML = ddchecker(values_left[index]);
  });
}
let timers = setInterval(countdownTimer, 1000);
countdownTimer();
