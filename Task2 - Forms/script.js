

document.getElementById("btn").addEventListener("click" , (e) => {
    e.preventDefault();
    let lab = document.querySelectorAll("label");
    let inp = document.querySelectorAll("input");

    for(let i=0; i<lab.length; i++) {
        console.log(lab[i].innerText , inp[i].value);
    }
})