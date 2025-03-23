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
document.title = "Typing Practice";


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


let activeU = [];
let activeL = [];

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
  <div class="key key-1 ${activeU[0]} ${activeL[0]}" data-key="backquote">
    <span class="key-upper ${activeU[0]}">${keyUp[0]}</span>
    <span class="key-lower ${activeL[0]}">${keyLow[0]}</span>
  </div>
  <div class="key key-1 ${activeU[1]} ${activeL[1]}" data-key="digit1">
    <span class="key-upper ${activeU[1]}">${keyUp[1]}</span>
    <span class="key-lower ${activeL[1]}">${keyLow[1]}</span>
  </div>
  <div class="key key-1 ${activeU[2]} ${activeL[2]}" data-key="digit2">
    <span class="key-upper ${activeU[2]}">${keyUp[2]}</span>
    <span class="key-lower ${activeL[2]}">${keyLow[2]}</span>
  </div>
  <div class="key key-1 ${activeU[3]} ${activeL[3]}" data-key="digit3">
    <span class="key-upper ${activeU[3]}">${keyUp[3]}</span>
    <span class="key-lower ${activeL[3]}">${keyLow[3]}</span>
  </div>
  <div class="key key-1 ${activeU[4]} ${activeL[4]}" data-key="digit4">
    <span class="key-upper ${activeU[4]}">${keyUp[4]}</span>
    <span class="key-lower ${activeL[4]}">${keyLow[4]}</span>
  </div>
  <div class="key key-1 ${activeU[5]} ${activeL[5]}" data-key="digit5">
    <span class="key-upper ${activeU[5]}">${keyUp[5]}</span>
    <span class="key-lower ${activeL[5]}">${keyLow[5]}</span>
  </div>
  <div class="key key-1 ${activeU[6]} ${activeL[6]}" data-key="digit6">
    <span class="key-upper ${activeU[6]}">${keyUp[6]}</span>
    <span class="key-lower ${activeL[6]}">${keyLow[6]}</span>
  </div>
  <div class="key key-1 ${activeU[7]} ${activeL[7]}" data-key="digit7">
    <span class="key-upper ${activeU[7]}"">${keyUp[7]}</span>
    <span class="key-lower ${activeL[7]}"">${keyLow[7]}</span>
  </div>
  <div class="key key-1 ${activeU[8]} ${activeL[8]}" data-key="digit8">
    <span class="key-upper ${activeU[8]}">${keyUp[8]}</span>
    <span class="key-lower ${activeL[8]}">${keyLow[8]}</span>
  </div>
  <div class="key key-1 ${activeU[9]} ${activeL[9]}" data-key="digit9">
    <span class="key-upper ${activeU[9]}">${keyUp[9]}</span>
    <span class="key-lower ${activeL[9]}">${keyLow[9]}</span>
  </div>
  <div class="key key-1 ${activeU[10]} ${activeL[10]}" data-key="digit0">
    <span class="key-upper ${activeU[10]}">${keyUp[10]}</span>
    <span class="key-lower ${activeL[10]}">${keyLow[10]}</span>
  </div>
  <div class="key key-1 ${activeU[11]} ${activeL[11]}" data-key="minus">
    <span class="key-upper ${activeU[11]}">${keyUp[11]}</span>
    <span class="key-lower ${activeL[11]}">${keyLow[11]}</span>
  </div>
  <div class="key key-1 ${activeU[12]}  ${activeL[12]}" data-key="equal">
    <span class="key-upper ${activeU[12]}">${keyUp[12]}</span>
    <span class="key-lower ${activeL[12]}">${keyLow[12]}</span>
  </div>
  <div class="key key-1-5 ${activeU[13]} ${activeL[13]}" data-key="backspace">
    <span class="function-key ${activeL[13]}">${keyUp[13]}</span>
  </div>
</div>

<div class="keyboard-row">
  <div class="key key-1-5 ${activeU[14]} ${activeL[14]}" data-key="tab">
    <span class="function-key ${activeL[14]}">${keyUp[14]}</span>
  </div>
  <div class="key key-1 ${activeU[15]} ${activeL[15]}" data-key="keyq">
    <span class="key-upper ${activeU[15]}">${keyUp[15]}</span>
    <span class="key-lower ${activeL[15]}">${keyLow[15]}</span>
  </div>
  <div class="key key-1 ${activeU[16]} ${activeL[16]}" data-key="keyw">
    <span class="key-upper ${activeU[16]}">${keyUp[16]}</span>
    <span class="key-lower ${activeL[16]}">${keyLow[16]}</span>
  </div>
  <div class="key key-1 ${activeU[17]} ${activeL[17]}" data-key="keye">
    <span class="key-upper ${activeU[17]}">${keyUp[17]}</span>
    <span class="key-lower ${activeL[17]}">${keyLow[17]}</span>
  </div>
  <div class="key key-1 ${activeU[18]} ${activeL[18]}" data-key="keyr">
    <span class="key-upper ${activeU[18]}">${keyUp[18]}</span>
    <span class="key-lower ${activeL[18]}">${keyLow[18]}</span>
  </div>
  <div class="key key-1 ${activeU[19]} ${activeL[19]}" data-key="keyt">
    <span class="key-upper ${activeU[19]}">${keyUp[19]}</span>
    <span class="key-lower ${activeL[19]}">${keyLow[19]}</span>
  </div>
  <div class="key key-1 ${activeU[20]} ${activeL[20]}" data-key="keyy">
    <span class="key-upper ${activeU[20]}">${keyUp[20]}</span>
    <span class="key-lower ${activeL[20]}">${keyLow[20]}</span>
  </div>
  <div class="key key-1 ${activeU[21]} ${activeL[21]}" data-key="keyu">
    <span class="key-upper ${activeU[21]}">${keyUp[21]}</span>
    <span class="key-lower ${activeL[21]}">${keyLow[21]}</span>
  </div>
  <div class="key key-1  ${activeU[22]} ${activeL[22]}" data-key="keyi">
    <span class="key-upper ${activeU[22]}">${keyUp[22]}</span>
    <span class="key-lower ${activeL[22]}">${keyLow[22]}</span>
  </div>
  <div class="key key-1  ${activeU[23]} ${activeL[23]}" data-key="keyo">
    <span class="key-upper ${activeU[23]}">${keyUp[23]}</span>
    <span class="key-lower ${activeL[23]}">${keyLow[23]}</span>
  </div>
  <div class="key key-1  ${activeU[24]} ${activeL[24]} " data-key="keyp">
    <span class="key-upper ${activeU[24]} ">${keyUp[24]}</span>
    <span class="key-lower ${activeL[24]} ">${keyLow[24]}</span>
  </div>
  <div class="key key-1 ${activeU[25]} ${activeL[25]}" data-key="bracketleft">
    <span class="key-upper ${activeU[25]}">${keyUp[25]}</span>
    <span class="key-lower ${activeL[25]}">${keyLow[25]}</span>
  </div>
  <div class="key key-1 ${activeU[26]} ${activeL[26]}" data-key="bracketright">
    <span class="key-upper ${activeU[26]}">${keyUp[26]}</span>
    <span class="key-lower  ${activeL[26]}">${keyLow[26]}</span>
  </div>
  <div class="key key-1 ${activeU[27]} ${activeL[27]}" data-key="backslash">
    <span class="key-upper ${activeU[27]}">${keyUp[27]}</span>
    <span class="key-lower ${activeL[27]}">${keyLow[27]}</span>
  </div>
</div>

<div class="keyboard-row">
  <div class="key key-1-5  ${activeU[28]} ${activeL[28]}" data-key="capslock">
    <span class="function-key ${activeL[28]}">${keyUp[28]}</span>
  </div>
  <div class="key key-1  ${activeU[29]} ${activeL[29]}" data-key="keya">
    <span class="key-upper ${activeU[29]}">${keyUp[29]}</span>
    <span class="key-lower ${activeL[29]}">${keyLow[29]}</span>
  </div>
  <div class="key key-1 ${activeU[30]} ${activeL[30]}" data-key="keys">
    <span class="key-upper ${activeU[30]}">${keyUp[30]}</span>
    <span class="key-lower ${activeL[30]}">${keyLow[30]}</span>
  </div>
  <div class="key key-1 ${activeU[31]} ${activeL[31]}" data-key="keyd">
    <span class="key-upper ${activeU[31]}">${keyUp[31]}</span>
    <span class="key-lower ${activeL[31]}">${keyLow[31]}</span>
  </div>
  <div class="key key-1 ${activeU[32]} ${activeL[32]}" data-key="keyf">
    <span class="key-upper ${activeU[32]}">${keyUp[32]}</span>
    <span class="key-lower ${activeL[32]}">${keyLow[32]}</span>
  </div>
  <div class="key key-1 ${activeU[33]} ${activeL[33]}" data-key="keyg">
    <span class="key-upper ${activeU[33]}">${keyUp[33]}</span>
    <span class="key-lower ${activeL[33]}">${keyLow[33]}</span>
  </div>
  <div class="key key-1 ${activeU[34]} ${activeL[34]}" data-key="keyh">
    <span class="key-upper ${activeU[34]}">${keyUp[34]}</span>
    <span class="key-lower ${activeL[34]}">${keyLow[34]}</span>
  </div>
  <div class="key key-1 ${activeU[35]} ${activeL[35]}" data-key="keyj">
    <span class="key-upper ${activeU[35]}">${keyUp[35]}</span>
    <span class="key-lower ${activeL[35]}">${keyLow[35]}</span>
  </div>
  <div class="key key-1 ${activeU[36]} ${activeL[36]}" data-key="keyk">
    <span class="key-upper ${activeU[36]}">${keyUp[36]}</span>
    <span class="key-lower ${activeL[36]}">${keyLow[36]}</span>
  </div>
  <div class="key key-1 ${activeU[37]} ${activeL[37]}" data-key="keyl">
    <span class="key-upper ${activeU[37]}">${keyUp[37]}</span>
    <span class="key-lower ${activeL[37]}">${keyLow[37]}</span>
  </div>
  <div class="key key-1 ${activeU[38]} ${activeL[38]}" data-key="semicolon">
    <span class="key-upper ${activeU[38]}">${keyUp[38]}</span>
    <span class="key-lower ${activeL[38]}">${keyLow[38]}</span>
  </div>
  <div class="key key-1 ${activeU[39]} ${activeL[39]}" data-key="quote">
    <span class="key-upper ${activeU[39]}">${keyUp[39]}</span>
    <span class="key-lower ${activeL[39]}">${keyLow[39]}</span>
  </div>
  <div class="key key-1-5 ${activeU[40]} ${activeL[40]}" data-key="enter">
    <span class="function-key ${activeL[40]}">${keyUp[40]}</span>
  </div>
</div>

<div class="keyboard-row">
  <div class="key key-2 ${activeU[41]} ${activeL[41]}" data-key="shiftleft">
    <span class="function-key ${activeL[41]}">${keyUp[41]}</span>
  </div>
  <div class="key key-1 ${activeU[42]} ${activeL[42]}" data-key="keyz">
    <span class="key-upper ${activeU[42]}">${keyUp[42]}</span>
    <span class="key-lower ${activeL[42]}">${keyLow[42]}</span>
  </div>
  <div class="key key-1 ${activeU[43]} ${activeL[43]}" data-key="keyx">
    <span class="key-upper ${activeU[43]}">${keyUp[43]}</span>
    <span class="key-lower ${activeL[43]}">${keyLow[43]}</span>
  </div>
  <div class="key key-1 ${activeU[44]} ${activeL[44]}" data-key="keyc">
    <span class="key-upper ${activeU[44]}">${keyUp[44]}</span>
    <span class="key-lower ${activeL[44]}">${keyLow[44]}</span>
  </div>
  <div class="key key-1 ${activeU[45]} ${activeL[45]}" data-key="keyv">
    <span class="key-upper ${activeU[45]}">${keyUp[45]}</span>
    <span class="key-lower ${activeL[45]}">${keyLow[45]}</span>
  </div>
  <div class="key key-1 ${activeU[46]} ${activeL[46]}" data-key="keyb">
    <span class="key-upper ${activeU[46]}">${keyUp[46]}</span>
    <span class="key-lower ${activeL[46]}">${keyLow[46]}</span>
  </div>
  <div class="key key-1 ${activeU[47]} ${activeL[47]}" data-key="keyn">
    <span class="key-upper ${activeU[47]}">${keyUp[47]}</span>
    <span class="key-lower ${activeL[47]}">${keyLow[47]}</span>
  </div>
  <div class="key key-1 ${activeU[48]} ${activeL[48]}" data-key="keym">
    <span class="key-upper ${activeU[48]}">${keyUp[48]}</span>
    <span class="key-lower ${activeL[48]}">${keyLow[48]}</span>
  </div>
  <div class="key key-1 ${activeU[49]} ${activeL[49]}" data-key="comma">
    <span class="key-upper ${activeU[49]} ">${keyUp[49]}</span>
    <span class="key-lower ${activeL[49]} ">${keyLow[49]}</span>
  </div>
  <div class="key key-1 ${activeU[50]} ${activeL[50]}" data-key="period">
    <span class="key-upper ${activeU[50]}">${keyUp[50]}</span>
    <span class="key-lower ${activeL[50]}">${keyLow[50]}</span>
  </div>
  <div class="key key-1 ${activeU[51]} ${activeL[51]}" data-key="slash">
    <span class="key-upper ${activeU[51]}">${keyUp[51]}</span>
    <span class="key-lower ${activeL[51]}">${keyLow[51]}</span>
  </div>

  <div class="key key-2 ${activeU[52]} ${activeL[52]}" data-key="shiftright">
    <span class="function-key ${activeL[52]}">${keyUp[52]}</span>
  </div>
</div>

<div class="keyboard-row">
  <div class="key key-spacebar ${activeU[53]} ${activeL[53]}" data-key="space">
    <span class="function-key ${activeL[53]}">${keyUp[53]}</span>
  </div>
</div>

          `;
};

function changeTitle() {
  if (language == "Thai") {
    document.title = "โปรแกรมฝึกการพิมพ์";
    document.querySelector("h1").textContent = "โปรแกรมฝึกการพิมพ์";
  }
  if (language == "English") {
    document.title = "Typing Practice";
    document.querySelector("h1").textContent = "Typing Practice";
  }
}

document.getElementById("languageSelector").value = "en";

document.addEventListener("keydown", (event) => {
  if (event.shiftKey) {
    activeL[41] = "active";
    activeL[52] = "active";
    activeU[keyNames.indexOf(event.code.toLowerCase())] = "active";
  }
  else {
    activeL[keyNames.indexOf(event.code.toLowerCase())] = "active";
  }
  
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
  activeU[keyNames.indexOf(event.code.toLowerCase())] = "";
  activeL[keyNames.indexOf(event.code.toLowerCase())] = "";
  activeL[41] = "";
  activeL[52] = "";
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
