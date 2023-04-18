// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  $("#currentDay").text(dayjs().format("dddd MMMM D, YYYY"));
  let start = dayjs().hour(9).minutes(0).second(0);
  const end = dayjs().hour(17).minute(0).second(0);
});
