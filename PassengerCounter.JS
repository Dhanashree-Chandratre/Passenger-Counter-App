let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  savedCount = count + " - ";
  saveEl.textContent += savedCount;
  countEl.textContent = 0;
  count = 0;
  console.log(count);
}

function reset() {
  saveEl.textContent = "Previous entires:";
}
