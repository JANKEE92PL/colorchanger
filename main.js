let sections;
let randomizer = false;

const createRandomColor = (randomizer = false) => {
  sections = document.querySelectorAll("section");
  if (randomizer === true) {
    sections.forEach((section) => {
      let randomColor = "#" + Math.round(0xffffff * Math.random()).toString(16);
      section.style.backgroundColor = randomColor;
      section.innerText = randomColor;
    });
  } else {
    let randomColor = "#" + Math.round(0xffffff * Math.random()).toString(16);
    sections.forEach((section) => {
      section.style.backgroundColor = randomColor;
      section.innerText = randomColor;
    });
  }
};

const toggleRandomizer = () => {
  if (main.childElementCount > 1) {
    randomBTN.classList.toggle("active");
    return (randomizer = !randomizer);
  } else {
    alert("please add one more Box");
  }
};

const resetSettings = () => {
  randomBTN.classList.remove("active");
  let randomColor = "#" + Math.round(0xffffff * Math.random()).toString(16);
  sections.forEach((section) => {
    section.style.backgroundColor = "lightgrey";
    section.innerText = "";
    if (main.lastChild) {
      removeBox();
    }
  });
};

const addBox = () => {
  let child = document.createElement("section");
  child.addEventListener("click", (e) => {
    copyToClipboard(e);
  });
  main.insertAdjacentElement("beforeend", child);
  return (sections = document.querySelectorAll("section"));
};

const removeBox = () => {
  if (main.lastChild) {
    main.removeChild(main.lastChild);
  }
};

const copyToClipboard = (e) => {
  let target = e.target.innerText;
  let value = navigator.clipboard.writeText(target);
  alert("Copy to Clipboard: " + target);
};

// Buttons

//#### Listeners

const startBTN = document.querySelector(".startBTN");
startBTN.addEventListener("click", () => {
  createRandomColor(randomizer);
});

const randomBTN = document.querySelector(".randomBTN");
randomBTN.addEventListener("click", toggleRandomizer);

const resetBTN = document.querySelector(".resetBTN");
resetBTN.addEventListener("click", resetSettings);

const addBoxBTN = document.querySelector(".addBoxBTN");
addBoxBTN.addEventListener("click", addBox);
