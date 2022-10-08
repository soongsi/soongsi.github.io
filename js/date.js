const clock = document.querySelector("#clock");
const today = document.querySelector("#today");

const dayText = ["일", "월", "화", "수", "목", "금", "토"];

getClock();
getDate();

function getClock() {
    const myDate = new Date();
    const hour = String(myDate.getHours()).padStart(2, "0");
    const minute = String(myDate.getMinutes()).padStart(2, "0");
    const second = String(myDate.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${minute}:${second}`;
}

function getDate() {
    const myDate = new Date();
    const year = String(myDate.getFullYear());
    const month = String(myDate.getMonth() + 1).padStart(2, "0");
    const date = String(myDate.getDate()).padStart(2, "0");
    const day = myDate.getDay();

    today.innerText = `${year}년 ${month}월 ${date}일 ${dayText[day]}요일`;

}

setInterval(getClock, 1000);