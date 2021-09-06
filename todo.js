const button = document.querySelector("button");
const list = document.querySelector(".myUL");
button.addEventListener("click", () => {
  const input = document.querySelector(".myInput");
  const li = document.createElement("li");
  if (input.value === "") {
    alert("You must write something!")
  }
  else {
    li.innerHTML = input.value;
    input.value = ""
    list.append(li)
  }
})