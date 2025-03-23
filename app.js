import {
  words,
  thaiWords,
  engRowLower,
  engRowUpper,
  thRowLower,
  thRowUpper,
  keyNames,
} from "./words.js";

const componentStates = [];
let componentIndex = 0;

// <========== Setstate =========>

export function useState(initialValue) {
  const index = componentIndex;

  if (componentStates[index] === undefined) {
    componentStates[index] = initialValue;
    componentIndex++;
  }

  function setState(newValue) {
    componentStates[index] = newValue;
    setTimeout(() => update(), 0);
  }

  return [() => componentStates[index], setState];
}

let language = "English";


function getRandomWord() {
  if (language == "Thai") {
    return thaiWords[Math.floor(Math.random() * words.length)];
  }
  if (language == "English") {
    console.log(words[Math.floor(Math.random() * words.length)])
    return words[Math.floor(Math.random() * words.length)];
  }
}

let text1 = getRandomWord();
let text2 = getRandomWord();
let textCorrect = "";
let textError = "";

let keyLow = engRowLower;
let keyUp = engRowUpper;


let active = [];

const Text = () => {
  return `<div class="word-display">
          <div class="word-display">
            <div id="currentWord" class="current-word"><span class="highlight-correct">${textCorrect}</span>&#x200B;<span class="highlight-incorrect">${textError}</span><span class="word-play">${text1}</span></div>
            <div id="next-Word" class="next-Word">next: ${text2}</div>
          </div>
          </div>`;
};

const key = () => {
  return `<div class="keyboard-row">
  <div class="key key-1 ${active[0]}" data-key="backquote">
    <span class="key-upper ">${keyUp[0]}</span>
    <span class="key-lower">${keyLow[0]}</span>
  </div>
  <div class="key key-1 ${active[1]}" data-key="digit1">
    <span class="key-upper">${keyUp[1]}</span>
    <span class="key-lower">${keyLow[1]}</span>
  </div>
  <div class="key key-1 ${active[2]}" data-key="digit2">
    <span class="key-upper">${keyUp[2]}</span>
    <span class="key-lower">${keyLow[2]}</span>
  </div>
  <div class="key key-1 ${active[3]}" data-key="digit3">
    <span class="key-upper">${keyUp[3]}</span>
    <span class="key-lower">${keyLow[3]}</span>
  </div>
  <div class="key key-1 ${active[4]}" data-key="digit4">
    <span class="key-upper">${keyUp[4]}</span>
    <span class="key-lower">${keyLow[4]}</span>
  </div>
  <div class="key key-1 ${active[5]}" data-key="digit5">
    <span class="key-upper">${keyUp[5]}</span>
    <span class="key-lower">${keyLow[5]}</span>
  </div>
  <div class="key key-1 ${active[6]}" data-key="digit6">
    <span class="key-upper">${keyUp[6]}</span>
    <span class="key-lower">${keyLow[6]}</span>
  </div>
  <div class="key key-1 ${active[7]}" data-key="digit7">
    <span class="key-upper">${keyUp[7]}</span>
    <span class="key-lower">${keyLow[7]}</span>
  </div>
  <div class="key key-1 ${active[8]}" data-key="digit8">
    <span class="key-upper">${keyUp[8]}</span>
    <span class="key-lower">${keyLow[8]}</span>
  </div>
  <div class="key key-1 ${active[9]}" data-key="digit9">
    <span class="key-upper">${keyUp[9]}</span>
    <span class="key-lower">${keyLow[9]}</span>
  </div>
  <div class="key key-1 ${active[10]}" data-key="digit0">
    <span class="key-upper">${keyUp[10]}</span>
    <span class="key-lower">${keyLow[10]}</span>
  </div>
  <div class="key key-1 ${active[11]}" data-key="minus">
    <span class="key-upper">${keyUp[11]}</span>
    <span class="key-lower">${keyLow[11]}</span>
  </div>
  <div class="key key-1 ${active[12]}" data-key="equal">
    <span class="key-upper">${keyUp[12]}</span>
    <span class="key-lower">${keyLow[12]}</span>
  </div>
  <div class="key key-1-5 ${active[13]}" data-key="backspace">
    <span class="function-key">${keyUp[13]}</span>
  </div>
</div>

<div class="keyboard-row">
  <div class="key key-1-5 ${active[14]}" data-key="tab">
    <span class="function-key">${keyUp[14]}</span>
  </div>
  <div class="key key-1 ${active[15]}" data-key="keyq">
    <span class="key-upper">${keyUp[15]}</span>
    <span class="key-lower">${keyLow[15]}</span>
  </div>
  <div class="key key-1 ${active[16]}" data-key="keyw">
    <span class="key-upper">${keyUp[16]}</span>
    <span class="key-lower">${keyLow[16]}</span>
  </div>
  <div class="key key-1 ${active[17]}" data-key="keye">
    <span class="key-upper">${keyUp[17]}</span>
    <span class="key-lower">${keyLow[17]}</span>
  </div>
  <div class="key key-1 ${active[18]}" data-key="keyr">
    <span class="key-upper">${keyUp[18]}</span>
    <span class="key-lower">${keyLow[18]}</span>
  </div>
  <div class="key key-1 ${active[19]}" data-key="keyt">
    <span class="key-upper">${keyUp[19]}</span>
    <span class="key-lower">${keyLow[19]}</span>
  </div>
  <div class="key key-1 ${active[20]}" data-key="keyy">
    <span class="key-upper">${keyUp[20]}</span>
    <span class="key-lower">${keyLow[20]}</span>
  </div>
  <div class="key key-1 ${active[21]}" data-key="keyu">
    <span class="key-upper">${keyUp[21]}</span>
    <span class="key-lower">${keyLow[21]}</span>
  </div>
  <div class="key key-1  ${active[22]}" data-key="keyi">
    <span class="key-upper">${keyUp[22]}</span>
    <span class="key-lower">${keyLow[22]}</span>
  </div>
  <div class="key key-1  ${active[23]}" data-key="keyo">
    <span class="key-upper">${keyUp[23]}</span>
    <span class="key-lower">${keyLow[23]}</span>
  </div>
  <div class="key key-1  ${active[24]}" data-key="keyp">
    <span class="key-upper">${keyUp[24]}</span>
    <span class="key-lower">${keyLow[24]}</span>
  </div>
  <div class="key key-1 ${active[25]}" data-key="bracketleft">
    <span class="key-upper">${keyUp[25]}</span>
    <span class="key-lower">${keyLow[25]}</span>
  </div>
  <div class="key key-1 ${active[26]}" data-key="bracketright">
    <span class="key-upper">${keyUp[26]}</span>
    <span class="key-lower">${keyLow[26]}</span>
  </div>
  <div class="key key-1 ${active[27]}" data-key="backslash">
    <span class="key-upper">${keyUp[27]}</span>
    <span class="key-lower">${keyLow[27]}</span>
  </div>
</div>

<div class="keyboard-row">
  <div class="key key-1-5  ${active[28]}" data-key="capslock">
    <span class="function-key">${keyUp[28]}</span>
  </div>
  <div class="key key-1  ${active[29]}" data-key="keya">
    <span class="key-upper">${keyUp[29]}</span>
    <span class="key-lower">${keyLow[29]}</span>
  </div>
  <div class="key key-1 ${active[30]}" data-key="keys">
    <span class="key-upper">${keyUp[30]}</span>
    <span class="key-lower">${keyLow[30]}</span>
  </div>
  <div class="key key-1 ${active[31]}" data-key="keyd">
    <span class="key-upper">${keyUp[31]}</span>
    <span class="key-lower">${keyLow[31]}</span>
  </div>
  <div class="key key-1 ${active[32]}" data-key="keyf">
    <span class="key-upper">${keyUp[32]}</span>
    <span class="key-lower">${keyLow[32]}</span>
  </div>
  <div class="key key-1 ${active[33]}" data-key="keyg">
    <span class="key-upper">${keyUp[33]}</span>
    <span class="key-lower">${keyLow[33]}</span>
  </div>
  <div class="key key-1 ${active[34]}" data-key="keyh">
    <span class="key-upper">${keyUp[34]}</span>
    <span class="key-lower">${keyLow[34]}</span>
  </div>
  <div class="key key-1 ${active[35]}" data-key="keyj">
    <span class="key-upper">${keyUp[35]}</span>
    <span class="key-lower">${keyLow[35]}</span>
  </div>
  <div class="key key-1 ${active[36]}" data-key="keyk">
    <span class="key-upper">${keyUp[36]}</span>
    <span class="key-lower">${keyLow[36]}</span>
  </div>
  <div class="key key-1 ${active[37]}" data-key="keyl">
    <span class="key-upper">${keyUp[37]}</span>
    <span class="key-lower">${keyLow[37]}</span>
  </div>
  <div class="key key-1 ${active[38]}" data-key="semicolon">
    <span class="key-upper">${keyUp[38]}</span>
    <span class="key-lower">${keyLow[38]}</span>
  </div>
  <div class="key key-1 ${active[39]}" data-key="quote">
    <span class="key-upper">${keyUp[39]}</span>
    <span class="key-lower">${keyLow[39]}</span>
  </div>
  <div class="key key-1-5 ${active[40]}" data-key="enter">
    <span class="function-key">${keyUp[40]}</span>
  </div>
</div>

<div class="keyboard-row">
  <div class="key key-2 ${active[41]}" data-key="shiftleft">
    <span class="function-key">${keyUp[41]}</span>
  </div>
  <div class="key key-1 ${active[42]}" data-key="keyz">
    <span class="key-upper">${keyUp[42]}</span>
    <span class="key-lower">${keyLow[42]}</span>
  </div>
  <div class="key key-1 ${active[43]}" data-key="keyx">
    <span class="key-upper">${keyUp[43]}</span>
    <span class="key-lower">${keyLow[43]}</span>
  </div>
  <div class="key key-1 ${active[44]}" data-key="keyc">
    <span class="key-upper">${keyUp[44]}</span>
    <span class="key-lower">${keyLow[44]}</span>
  </div>
  <div class="key key-1 ${active[45]}" data-key="keyv">
    <span class="key-upper">${keyUp[45]}</span>
    <span class="key-lower">${keyLow[45]}</span>
  </div>
  <div class="key key-1 ${active[46]}" data-key="keyb">
    <span class="key-upper">${keyUp[46]}</span>
    <span class="key-lower">${keyLow[46]}</span>
  </div>
  <div class="key key-1 ${active[47]}" data-key="keyn">
    <span class="key-upper">${keyUp[47]}</span>
    <span class="key-lower">${keyLow[47]}</span>
  </div>
  <div class="key key-1 ${active[48]}" data-key="keym">
    <span class="key-upper">${keyUp[48]}</span>
    <span class="key-lower">${keyLow[48]}</span>
  </div>
  <div class="key key-1 ${active[49]}" data-key="comma">
    <span class="key-upper">${keyUp[49]}</span>
    <span class="key-lower">${keyLow[49]}</span>
  </div>
  <div class="key key-1 ${active[50]}" data-key="period">
    <span class="key-upper">${keyUp[50]}</span>
    <span class="key-lower">${keyLow[50]}</span>
  </div>
  <div class="key key-1 ${active[51]}" data-key="slash">
    <span class="key-upper">${keyUp[51]}</span>
    <span class="key-lower">${keyLow[51]}</span>
  </div>

  <div class="key key-2 ${active[52]}" data-key="shiftright">
    <span class="function-key">${keyUp[52]}</span>
  </div>
</div>

<div class="keyboard-row">
  <div class="key key-spacebar ${active[53]}" data-key="space">
    <span class="function-key">${keyUp[53]}</span>
  </div>
</div>

          `;
};

function changeTitle() {
  if (language == "Thai") {
    document.title = "โปรแกมฝึกการพิมพ์";
    document.querySelector("h1").textContent = "โปรแกรมฝึกการพิมพ์";
  }
  if (language == "English") {
    document.title = "Typing Practice";
    document.querySelector("h1").textContent = "Typing Practice";
  }
}

document.getElementById("languageSelector").value = "en";

document.addEventListener("keydown", (event) => {
  active[keyNames.indexOf(event.code.toLowerCase())] = "active";
  update();
  if (textError != "") {
    text1 = textError + text1;
    textError = "";
  }

  console.log(text1[0].charCodeAt(0) === 8203)
  if (event.shiftKey) {
    if (event.key != "Shift" && textError == "") {
      if (keyUp[keyNames.indexOf(event.code.toLowerCase())] == text1[0]) {
        textCorrect += text1[0];
        text1 = text1.slice(1);
        update();
      } else {
        let temp = text1;
        textError = text1[0];
        text1 = text1.slice(1);
        update();
        setTimeout(() => {
          text1 = temp;
          textError = "";
          update();
        }, 10);
      }
    } else if (event.key == "Backspace") {
    }
  } else if (textError == "") {
    if (keyLow[keyNames.indexOf(event.code.toLowerCase())] == text1[0]) {
      textCorrect += text1[0];
      text1 = text1.slice(1);
      update();
    } else {
      let temp = text1;
      textError = text1[0];
      text1 = text1.slice(1);
      update();
      setTimeout(() => {
        text1 = temp;
        textError = "";
        update();
      }, 10);
    }
  }

  if (text1 == "" && textError == "") {
    text1 = "";
    text1 = text2;
    text2 = getRandomWord();
    textCorrect = "";
    update();
  }
});

document.addEventListener("keyup", (event) => {
  active[keyNames.indexOf(event.code.toLowerCase())] = "";
  update();
});

function update() {
  const rootElement = document.getElementById("keyshow");
  rootElement.innerHTML = key();
  const TextElement = document.getElementById("Text");
  TextElement.innerHTML = Text();
}

document
  .getElementById("languageSelector")
  .addEventListener("change", function () {
    const selectedLanguage = this.value;
    if (selectedLanguage === "th") {
      language = "Thai";
      keyLow = thRowLower;
      keyUp = thRowUpper;
    } else if (selectedLanguage === "en") {
      language = "English";
      keyLow = engRowLower;
      keyUp = engRowUpper;
    }
    text1 = getRandomWord();
    text2 = getRandomWord();
    textCorrect = "";
    textError = "";
    changeTitle();
    update();
  });

document.addEventListener("DOMContentLoaded", update);
