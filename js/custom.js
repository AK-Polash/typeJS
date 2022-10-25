let type = document.querySelector(".type");
let text = type.innerHTML;
let count = 0;
type.innerHTML = "";

function typeJs() {
  console.log(count);
  type.innerHTML += text.charAt(count);
  if (count == text.length) {
    type.innerHTML = "";
    count = -1;
  }
  count++;
}

setInterval(() => {
  typeJs();
}, 400);
