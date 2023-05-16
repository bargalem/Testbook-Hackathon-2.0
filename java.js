let btn = document.getElementById("sub-btn"); //button
let box = document.getElementById("show-list"); //ul tag
let input = document.getElementById("type-list");

//document.getElementById("error").innerHTML = "Please enter data";

btn.addEventListener("click", function () {
  document.getElementById("error").innerHTML = " ";
  //input text
  if (input.value === "") {
    document.getElementById("error").innerHTML = "Please enter data";
  } else {
    let li = document.createElement("li"); //create element  li
    li.setAttribute("id", Date.now());
    let div = document.createElement("div"); //create element 1 div
    li.appendChild(div);

    let toDoText = document.createElement("input");
    toDoText.classList.add("inpt");
    toDoText.disabled = true;
    toDoText.value = input.value;
    div.appendChild(toDoText); // all li in inputtext in a div
    input.value = "";

    let divBtn = document.createElement("div"); ////create element 2 div
    div.appendChild(divBtn);

    let c = document.createElement("button");
    c.classList.add("CHECK");
    let checkIcon = document.createElement("i");
    checkIcon.className = "fa fa-check";
    checkIcon.style.fontSize = "15px";
    c.appendChild(checkIcon);
    divBtn.appendChild(c);
    c.addEventListener("click", function () {
      if (toDoText.style.textDecoration === "line-through") {
        toDoText.style.textDecoration = "none";
      } else {
        toDoText.style.textDecoration = "line-through";
      }
    });

    let b = document.createElement("button");
    b.classList.add("edit");
    b.textContent = "EDIT";
    divBtn.appendChild(b);
    b.addEventListener("click", function (e) {
      let box = document.getElementById("show-list"); //ul
      let btnDiv = e.target.parentNode;
      input.value = btnDiv.previousSibling.value;
      let li = e.target.parentNode.parentNode.parentNode;
      box.removeChild(li);
    });

    let a = document.createElement("button");
    a.classList.add("close");
    a.textContent = "X";
    divBtn.appendChild(a);
    box.appendChild(li);
    a.addEventListener("click", function (e) {
      let box = document.getElementById("show-list"); //ul
      let li = e.target.parentNode.parentNode.parentNode;
      box.removeChild(li);
    });
  }
});
