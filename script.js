///// GLOBAL VARIABLES /////
var toDoList = [];

///// FUNCTIONS /////
// Display today's date in header.
function getToday () {
    var date = dayjs().format("dddd, MMMM D")
    $("#currentDay").text(date);
}
getToday();
// Verify same-day todos.
function verifyToday() {
    var todayDate = dayjs().format("MMMM D");
    var storedDate = localStorage.getItem("date");
    if (storedDate === todayDate || null) {
        return;
    } else {
        localStorage.setItem("date", todayDate);
        localStorage.removeItem("toDoList");
    }
}
verifyToday();
// Store to do list.
function writeToStorage() {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
}
// Retrieve to do list.
function retrieveFromStorage() {
    if (localStorage === "") {
        return;
    } else {
        toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
    }
}
// Load to do items.
function loadToDos() {
    retrieveFromStorage();
    for (var i = 0; i < toDoList.length; i++) {
        var hour = toDoList[i].hour;
        var text = toDoList[i].text;
        $("#text-" + hour).val(text);
    }
}
loadToDos();

///// EVENT LISTENERS /////
// Save data on button click.
$("button").on("click", function() {
    var hour = $(this).val();
    var text = $("#text-" + hour).val();
    var toDoObj = {text: text, hour: hour};
    toDoList.splice((hour-9), 1, toDoObj);
    writeToStorage();
})





///// TYPE TEXT ONTO SCREEN /////

///// COLOR-CODED TEXT-AREAS /////

///// RETRIEVE TEXT FROM LOCAL STORAGE /////


///// SAVE TEXT TO LOCAL STORAGE /////
// Step One:
// Q: What are you going to do?
// A: 
// Q: How are you going to do it?
// A:
// Q: Why are you going to do it?
// A:
