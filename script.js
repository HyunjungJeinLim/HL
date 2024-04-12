document.addEventListener("DOMContentLoaded", function() {
    // DOM 요소에 접근하거나 초기화하는 작업을 여기에 작성합니다.
    loadContent('main.html');
});

document.getElementById('csMain').addEventListener('click', function() {
    loadContent('main.html');
});

document.getElementById('csHtml').addEventListener('click', function() {
    loadContent('csA.html');
});

document.getElementById('csHtml').addEventListener('click', function() {
    loadContent('csB.html');
});

function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("main").innerHTML = "";
            document.getElementById("main").innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
