

async function newAdvice () {
    const url = "https://api.adviceslip.com/advice"
    try {
        let response = await fetch(url);
        let data = await response.json();
        showAdvice(data);
    } catch (error) {
        console.log(error);
    }
}

newAdvice(); 
const btn = document.getElementById("btn");
btn.onclick = () => {
   newAdvice(); 
}

function showAdvice(data) {
    const adviceNumberShow = document.getElementById("adviceNumber");
    adviceNumberShow.textContent = `ADVICE #${data.slip.id}`
    const adviceTextShow = document.getElementById("adviceText");
    adviceTextShow.textContent = `"${data.slip.advice}"`
}

x = window.screen.width;

if (x <= 428) {
    document.getElementById('line').innerHTML = '<svg id="line"  height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>';
    document.getElementById('line').style.width = "295";
}
