// THEMES
const theme = document.getElementById('theme')

theme.addEventListener('click', (e) => {
  document.body.classList.toggle('light');
  theme.classList.toggle('active');
  if (document.body.classList.contains("light")) {
    // setItem agrega un elemento al localStorage
    localStorage.setItem("light-mode", "true")
  } else {
    localStorage.setItem("light-mode", "false");
  }
})

if (localStorage.getItem("light-mode") == "true") {
  document.body.classList.add("light");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("light");
  btnSwitch.classList.remove("active");
}

// MENU
const menu = document.getElementById('menu');
const close = document.getElementById('close');

menu.addEventListener('click', (e) => {
  document.body.classList.toggle('burger');
  document.body.classList.toggle('open');
})

close.addEventListener('click', (e) => {
  document.body.classList.toggle('burger');
  document.body.classList.toggle('open');
})