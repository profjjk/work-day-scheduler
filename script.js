///// GLOBAL VARIABLES /////
var toDoList = [{text: "", hour: 9},{text: "", hour: 10},{text: "", hour: 11},{text: "", hour: 12},{text: "", hour: 13},{text: "", hour: 14},{text: "", hour: 15},{text: "", hour: 16},{text: "", hour: 17}];


///// FUNCTIONS /////
// Display today's date in header.
function getToday () {
    var date = dayjs().format("dddd, MMMM D")
    $("#currentDay").text(date);
}

// Verify same-day todos.
function verifyToday() {
    var todayDate = dayjs().format("MMMM D");
    var storedDate = localStorage.getItem("date");
    if (storedDate === todayDate || null) {
        return;
    } else {
        localStorage.setItem("date", todayDate);
        localStorage.removeItem("toDoList");
        writeToStorage();
    }
}

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


///// EVENT LISTENERS /////
// Save data on button click.
$("button").on("click", function() {
    var hour = $(this).val();
    var text = $("#text-" + hour).val();
    var toDoObj = {text: text, hour: hour};
    toDoList.splice((hour-9), 1, toDoObj);
    writeToStorage();
})


///// PAST, PRESENT, FUTURE /////
// Change textarea color based on time.
function changeColor() {
    var nowTime = dayjs().hour();
    for (var i = 0; i < toDoList.length; i++) {
        var toDoTime = parseInt(toDoList[i].hour);
        if (toDoTime < nowTime) {
            $("#text-" + toDoTime).addClass("past");
        } else if (toDoTime === nowTime) {
            $("#text-" + toDoTime).addClass("present");
        } else {
            $("#text-" + toDoTime).addClass("future");
        }
    }
}


///// EXECUTE FUNCTIONS /////
getToday();
verifyToday();
loadToDos();
changeColor();