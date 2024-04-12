document.addEventListener("DOMContentLoaded", function() {
    // DOM 요소에 접근하거나 초기화하는 작업을 여기에 작성합니다.
    console.log("DOM이 로드되었습니다!");
});

document.getElementById('csHtml').addEventListener('click', function() {
    loadContent('csA.html');
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