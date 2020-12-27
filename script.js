///// CURRENT DAY DISPLAY /////
// Display today's date in header.
function getToday () {
    var date = dayjs().format("dddd, MMMM D")
    $("#currentDay").text(date);
}
getToday();
// Verify same-day todos.
function verifyTodayList() {
    var todayDate = dayjs().format("dddd, MMMM D");
    var storedDate = localStorage.getItem("date");
    if (storedDate === todayDate || null) {
        return;
    } else {
        localStorage.setItem("date", todayDate);
        localStorage.removeItem("toDoList");
    }
}
verifyTodayList();



///// COLOR-CODED TEXT-AREAS /////


///// TYPE TEXT ONTO SCREEN /////


///// RETRIEVE TEXT FROM LOCAL STORAGE /////


///// SAVE TEXT TO LOCAL STORAGE /////
// Step One:
// Q: What are you going to do?
// A: 
// Q: How are you going to do it?
// A:
// Q: Why are you going to do it?
// A:
