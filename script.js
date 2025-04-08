let title = document.getElementById("title");
let submitBtn = document.getElementById("submit-btn");
let preview = document.querySelector(".preview");

title.innerHTML = "Exploring DOM Manipulation Events";

function btnStyle() {
    submitBtn.style.backgroundColor = "blue";
    submitBtn.style.padding = "10px";
    submitBtn.style.color = "white";
    submitBtn.style.fontSize = "20px";
    submitBtn.style.border = "none";
}
btnStyle();

submitBtn.addEventListener("mouseover", () => {
    submitBtn.style.backgroundColor = "white";
    submitBtn.style.border = "1px solid blue";
    submitBtn.style.color = "blue";
})

submitBtn.addEventListener("mouseleave", btnStyle);

submitBtn.addEventListener("click", () => {
    alert("Submitted!");
})

let previewClicked = false;

preview.addEventListener("click", () => {
    if (previewClicked) return;
    previewClicked = true;

    let list1 = document.createElement("li");
    list1.textContent = "Arithmetic Operators";
    preview.appendChild(list1);

    let list2 = document.createElement("li");
    list2.textContent = "Logical Operators";
    preview.appendChild(list2);

    let list3 = document.createElement("li");
    list3.textContent = "Comparison Operators";
    preview.appendChild(list3);

    let list4 = document.createElement("li");
    list4.textContent = "Assignment Operators";
    preview.appendChild(list4);

    let list5 = document.createElement("li");
    list5.textContent = "String Operators";
    preview.appendChild(list5);
});

