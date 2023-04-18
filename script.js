// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  $("#currentDay").text(dayjs().format("dddd MMMM D, YYYY"));
  let start = dayjs().hour(9).minute(0).second(0);
  const end = dayjs().hour(17).minute(0).second(0);
  while (start.isBefore(end)) {
    let am_pm = start.format("h:mm A");

    let international_time = start.format("HH:mm");
    const formattedTimeBlock = `<div id="${international_time}" class="row time-block ${
      dayjs().hour() == start.format("HH")
        ? "present"
        : dayjs().hour() < start.format("HH")
        ? "future"
        : "past"
    }">
  <div class="col-2 col-md-1 hour text-center py-3">${am_pm}</div>
  <textarea class="col-8 col-md-10 description" rows="3"> ${
    localStorage.getItem(international_time) || ""
  }</textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="true"></i>
  </button>
</div>`;
    $("#time_container").append(formattedTimeBlock);
    start = start.add(1, "hour");
  }
  $("button").click(function () {
    let parent = $(this).parent();
    let value = parent.find("textarea").val();
    console.log(parent, value);
    localStorage.setItem(parent.attr("id"), value);
  });
});
