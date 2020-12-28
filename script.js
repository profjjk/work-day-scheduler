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

///// EVENT LISTENERS /////
// Add todo item 9am.
$("#button-9").on("click", function() {
    var text = $("#text-9").val();
    var hour = $(this).val();
    var toDoObj = {text: text, hour: hour};
    toDoList.splice(0, 0, toDoObj);
    writeToStorage();
    console.log(toDoList);
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
