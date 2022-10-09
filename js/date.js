const clock = document.querySelector("#clock span:first-child");
const seconds = document.querySelector("#second");
const noon = document.querySelector("#noon");
const today = document.querySelector("#today");

const dayText = ["일", "월", "화", "수", "목", "금", "토"];

getClock();
getDate();

function getClock() {
    const myDate = new Date();
    let hour;
    let _noon;

    if ( myDate.getHours() > 12 ) {
        hour = String(myDate.getHours() % 12).padStart(2, "0");
        _noon = 'PM';
    } else {
        hour = String(myDate.getHours()).padStart(2, "0");
        _noon = 'AM';
    }

    const minute = String(myDate.getMinutes()).padStart(2, "0");
    const second = String(myDate.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${minute}`;
    seconds.innerText = `${second}`;
    noon.innerText = `${_noon}`;

    if ( hour === "00" && minute === "00" && second === "00" ) {
        getDate();
    }
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