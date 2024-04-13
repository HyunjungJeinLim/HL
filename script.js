// add class 'txtCenter' for specific td
document.querySelectorAll('table tr').forEach(function(item){
    let num = item.children.length;
    if (num === 3) {
        item.children[0].classList.add('txtCenter');
    } else if (num === 4) {
        item.children[0].classList.add('txtCenter');
        item.children[1].classList.add('txtCenter');
    }
});

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = months[now.getMonth()];
    const day = days[now.getDay()];
    const date = now.getDate();
    const year = now.getFullYear();

    document.getElementById('date').textContent = `${day}, ${month} ${date}, ${year}`;
}

updateClock();
setInterval(updateClock, 1000);


function emailForm(){
    document.getElementById('modal-email').style.display = 'flex';
}

function closeModal(mName){
    document.getElementById('modal-email').style.display = 'none';
    document.getElementById('emailInput').value = '';
    document.getElementById('emailText').value = '';
}

function emailSent() {
    alert("Your Email has been sent to Hyunjung Lim. Thank you");
    document.getElementById('modal-email').style.display = 'none';
    document.getElementById('emailInput').value = '';
    document.getElementById('emailText').value = '';
}