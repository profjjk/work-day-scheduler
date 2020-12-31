# Work Day Scheduler

## Table of Contents
* [Project Summary](##project-summary)
* [Technologies Used](##technologies-used)
* [Example Code](##example-code)
* [How to Access](##how-to-access)
* [About Me](##about-me)
* [Screenshots](##screenshots)
* [Give Credit Where It's Due](##resource-reference)
---

## Project Summary
This is a work day scheduler that displays the current date, takes in information for each hour and remembers that information, and uses color-coding to display past, present, and future.

## Technologies Used
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [CSS3](https://developer.mozilla.org/en-US/docs/Archive/CSS3)

## Example Code
Verify same-day schedule.
```
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
```
Change text area color based on time.
```
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
```
Write to local storage ...
```
function writeToStorage() {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
}
```
... and retrieve from local storage.
```
function retrieveFromStorage() {
    if (localStorage === "") {
        return;
    } else {
        toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
    }
}
```


## How to Access
[Work Day Scheduler](https://profjjk.github.io/work-day-scheduler/)

## About Me
* [LinkedIn](www.linkedin.com/in/the-real-jordan-kelly)
* [GitHub](https://github.com/profjjk)

## Screenshots
![Scheduler](assets/scheduler-screenshot.png)