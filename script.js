function changeView(type, event) {
  var i;
  var x = document.getElementsByClassName("event");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(type).style.display = "block";

  var selected = document.getElementsByClassName("tab-button");
  for (i = 0; i < x.length; i++) {
    selected[i].className = selected[i].className.replace("selected", "");
  }
  event.currentTarget.className += " selected";
}

document.addEventListener("DOMContentLoaded", function () {
  var calendarDay = document.getElementById("event-day");
  var calendarDayR = new FullCalendar.Calendar(calendarDay, {
    initialView: "timeGridDay",
    events: dayGridWeek_event,
  });
  calendarDayR.render();

  var calendarWeek = document.getElementById("event-week");
  var calendarWeekR = new FullCalendar.Calendar(calendarWeek, {
    initialView: "timeGridWeek",
    events: dayGridWeek_event,
  });
  calendarWeekR.render();
  calendarWeek.style.display = "none";

  var calendarMonth = document.getElementById("event-month");
  var calendarMonthR = new FullCalendar.Calendar(calendarMonth, {
    initialView: "dayGridMonth",
    events: dayGridMonth_event,
  });
  calendarMonthR.render();
  calendarMonth.style.display = "none";
});

const dayGridMonth_event = [
  {
    title: "All Day Event",
    start: "2022-02-01",
  },
  {
    title: "Long Event",
    start: "2022-02-07",
    end: "2022-02-10",
  },
  {
    groupId: "999",
    title: "Repeating Event",
    start: "2022-02-09T16:00:00",
  },
  {
    groupId: "999",
    title: "Repeating Event",
    start: "2022-02-16T16:00:00",
  },
  {
    title: "Conference",
    start: "2022-02-11",
    end: "2022-02-13",
  },
  {
    title: "Meeting",
    start: "2022-02-12T10:30:00",
    end: "2022-02-12T12:30:00",
  },
  {
    title: "Lunch",
    start: "2022-02-12T12:00:00",
  },
  {
    title: "Meeting",
    start: "2022-02-12T14:30:00",
  },
  {
    title: "Birthday Party",
    start: "2022-02-13T07:00:00",
  },
  {
    title: "Click for Google",
    url: "http://google.com/",
    start: "2022-02-28",
  },
];

const dayGridWeek_event = [
  {
    groupId: "999",
    title: "Repeating Event",
    start: "2022-02-22T16:00:00",
  },
  {
    title: "Conference",
    start: "2022-02-22",
    end: "2022-02-24",
  },
  {
    title: "Meeting",
    start: "2022-02-23T10:30:00",
    end: "2022-02-23T12:30:00",
  },
  {
    title: "Lunch",
    start: "2022-02-23T12:00:00",
  },
  {
    title: "Birthday Party",
    start: "2022-02-24T07:00:00",
  },
];
