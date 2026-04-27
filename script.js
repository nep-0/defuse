const complicatedWiresLookup = {
  "0000": "C",
  "1000": "S",
  "0100": "S",
  "1100": "S",
  "0010": "C",
  "1010": "C",
  "0110": "D",
  "1110": "P",
  "0001": "D",
  "1001": "B",
  "0101": "P",
  "1101": "S",
  "0011": "B",
  "1011": "B",
  "0111": "P",
  "1111": "D",
};

const wireSequenceLookup = {
  red: ["C", "B", "A", "AC", "B", "AC", "ABC", "AB", "B"],
  blue: ["B", "AC", "B", "A", "B", "BC", "C", "AC", "A"],
  black: ["ABC", "AC", "B", "AC", "B", "BC", "AB", "C", "C"],
};

const passwordWords = [
  "about",
  "after",
  "again",
  "below",
  "could",
  "every",
  "first",
  "found",
  "great",
  "house",
  "large",
  "learn",
  "never",
  "other",
  "place",
  "plant",
  "point",
  "right",
  "small",
  "sound",
  "spell",
  "still",
  "study",
  "their",
  "there",
  "these",
  "thing",
  "think",
  "three",
  "water",
  "where",
  "which",
  "world",
  "would",
  "write",
];

const morseAlphabet = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

const morseWords = [
  { word: "shell", frequency: "3.505 MHz" },
  { word: "halls", frequency: "3.515 MHz" },
  { word: "slick", frequency: "3.522 MHz" },
  { word: "trick", frequency: "3.532 MHz" },
  { word: "boxes", frequency: "3.535 MHz" },
  { word: "leaks", frequency: "3.542 MHz" },
  { word: "strobe", frequency: "3.545 MHz" },
  { word: "bistro", frequency: "3.552 MHz" },
  { word: "flick", frequency: "3.555 MHz" },
  { word: "bombs", frequency: "3.565 MHz" },
  { word: "break", frequency: "3.572 MHz" },
  { word: "brick", frequency: "3.575 MHz" },
  { word: "steak", frequency: "3.582 MHz" },
  { word: "sting", frequency: "3.592 MHz" },
  { word: "vector", frequency: "3.595 MHz" },
  { word: "beats", frequency: "3.600 MHz" },
];

const translations = {
  en: {
    "app.title": "Module Helper",
    "legend.cut": "Cut",
    "legend.dontCut": "Do not cut",
    "legend.serial": "Cut if serial number is even",
    "legend.parallel": "Cut if parallel port exists",
    "legend.batteries": "Cut if 2+ batteries",
    "module.complicatedWires": "Complicated Wires",
    "module.wireSequences": "Wire Sequences",
    "module.memory": "Memory",
    "module.passwords": "Passwords",
    "module.morseCode": "Morse Code",
    "action.reset": "Reset",
    "table.wire": "Wire",
    "table.result": "Result",
    "table.color": "Color",
    "table.to": "To",
    "table.occurrence": "Occurrence",
    "color.red": "Red",
    "color.blue": "Blue",
    "color.black": "Black",
    "wire.star": "Star",
    "wire.led": "LED",
    "sequence.none": "None",
    "sequence.cut": "Cut",
    "sequence.dontCut": "Do not cut",
    "sequence.noTable": "No table",
    "memory.stage": "Stage",
    "memory.display": "Display",
    "memory.buttonLabels": "Button Labels",
    "memory.press": "Press",
    "memory.checkLabels": "Check labels",
    "password.position1": "Position 1",
    "password.position2": "Position 2",
    "password.position3": "Position 3",
    "password.position4": "Position 4",
    "password.position5": "Position 5",
    "password.available": "{count} available",
    "password.noMatches": "No matching passwords",
    "morse.substring": "Signal substring",
    "morse.alphabet": "Morse Alphabet",
    "morse.matches": "{count} matches",
    "morse.noMatches": "No matching words",
    "generated.wire": "Wire {number}",
    "generated.stage": "Stage {number}",
  },
  zh: {
    "app.title": "模块助手",
    "legend.cut": "剪断",
    "legend.dontCut": "不要剪",
    "legend.serial": "序列号为偶数则剪断",
    "legend.parallel": "有并口则剪断",
    "legend.batteries": "电池不少于 2 个则剪断",
    "module.complicatedWires": "复杂线路",
    "module.wireSequences": "线路序列",
    "module.memory": "记忆",
    "module.passwords": "密码",
    "module.morseCode": "摩尔斯电码",
    "action.reset": "重置",
    "table.wire": "线路",
    "table.result": "结果",
    "table.color": "颜色",
    "table.to": "连到",
    "table.occurrence": "次数",
    "color.red": "红",
    "color.blue": "蓝",
    "color.black": "黑",
    "wire.star": "星星",
    "wire.led": "LED",
    "sequence.none": "无",
    "sequence.cut": "剪断",
    "sequence.dontCut": "不要剪",
    "sequence.noTable": "无表项",
    "memory.stage": "阶段",
    "memory.display": "显示",
    "memory.buttonLabels": "按钮标签",
    "memory.press": "按下",
    "memory.checkLabels": "检查标签",
    "password.position1": "第 1 位",
    "password.position2": "第 2 位",
    "password.position3": "第 3 位",
    "password.position4": "第 4 位",
    "password.position5": "第 5 位",
    "password.available": "可用 {count} 个",
    "password.noMatches": "没有匹配的密码",
    "morse.substring": "信号片段",
    "morse.alphabet": "摩尔斯字母表",
    "morse.matches": "匹配 {count} 个",
    "morse.noMatches": "没有匹配的单词",
    "generated.wire": "线路 {number}",
    "generated.stage": "阶段 {number}",
  },
};

let currentLanguage = "en";

const propertyOrder = ["red", "blue", "star", "led"];
const rowContainer = document.querySelector("#wireRows");
const rowTemplate = document.querySelector("#wireRowTemplate");
const resetButton = document.querySelector("#resetButton");
const sequenceRowContainer = document.querySelector("#sequenceRows");
const sequenceRowTemplate = document.querySelector("#sequenceRowTemplate");
const sequenceResetButton = document.querySelector("#sequenceResetButton");
const memoryRowContainer = document.querySelector("#memoryRows");
const memoryRowTemplate = document.querySelector("#memoryRowTemplate");
const memoryResetButton = document.querySelector("#memoryResetButton");
const passwordInputs = document.querySelectorAll("[data-password-position]");
const passwordList = document.querySelector("#passwordList");
const passwordCount = document.querySelector("#passwordCount");
const passwordResetButton = document.querySelector("#passwordResetButton");
const morseInput = document.querySelector("#morseInput");
const morseList = document.querySelector("#morseList");
const morseCount = document.querySelector("#morseCount");
const morseAlphabetContainer = document.querySelector("#morseAlphabet");
const morseResetButton = document.querySelector("#morseResetButton");
const moduleTabs = document.querySelectorAll("[data-module-tab]");
const modulePanels = document.querySelectorAll("[data-module-panel]");
const languageButtons = document.querySelectorAll("[data-language]");

function t(key, replacements = {}) {
  const template = translations[currentLanguage][key] || translations.en[key] || key;
  return Object.entries(replacements).reduce(
    (text, [name, value]) => text.replace(`{${name}}`, value),
    template
  );
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.title = `KTANE ${t("app.title")}`;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.language === currentLanguage);
  });
}

function getLookupKey(row) {
  return propertyOrder
    .map((property) => {
      const checkbox = row.querySelector(`[data-prop="${property}"]`);
      return checkbox.checked ? "1" : "0";
    })
    .join("");
}

function updateWireResult(row) {
  const result = row.querySelector(".result");
  result.value = complicatedWiresLookup[getLookupKey(row)];
}

function createWireRow(wireNumber) {
  const fragment = rowTemplate.content.cloneNode(true);
  const row = fragment.querySelector(".wire-row");
  const label = fragment.querySelector(".wire-number");

  label.dataset.generatedLabel = "wire";
  label.dataset.number = wireNumber;
  label.textContent = t("generated.wire", { number: wireNumber });

  row.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.name = `wire-${wireNumber}-${checkbox.dataset.prop}`;
    checkbox.addEventListener("change", () => updateWireResult(row));
  });

  updateWireResult(row);
  return fragment;
}

function resetWires() {
  rowContainer.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.checked = false;
  });

  rowContainer.querySelectorAll(".wire-row").forEach(updateWireResult);
}

function getSequenceRows() {
  return [...sequenceRowContainer.querySelectorAll(".sequence-row")];
}

function updateSequenceResults() {
  const colorCounts = {
    red: 0,
    blue: 0,
    black: 0,
  };

  getSequenceRows().forEach((row) => {
    const colorButton = row.querySelector("[data-sequence-color].is-selected");
    const targetButton = row.querySelector("[data-sequence-target].is-selected");
    const occurrenceOutput = row.querySelector(".occurrence");
    const resultOutput = row.querySelector(".sequence-result");
    const color = colorButton.dataset.sequenceColor;
    const target = targetButton.dataset.sequenceTarget;

    resultOutput.classList.remove("cut", "skip", "empty");

    if (!color) {
      occurrenceOutput.value = "-";
      resultOutput.value = "-";
      resultOutput.classList.add("empty");
      return;
    }

    colorCounts[color] += 1;

    const occurrence = colorCounts[color];
    const cutTargets = wireSequenceLookup[color][occurrence - 1] || "";
    const shouldCut = cutTargets.includes(target);

    occurrenceOutput.value = occurrence > 9 ? "10+" : `${occurrence}`;
    resultOutput.value =
      occurrence > 9
        ? t("sequence.noTable")
        : shouldCut
          ? t("sequence.cut")
          : t("sequence.dontCut");
    resultOutput.classList.add(shouldCut && occurrence <= 9 ? "cut" : "skip");
  });
}

function createSequenceRow(wireNumber) {
  const fragment = sequenceRowTemplate.content.cloneNode(true);
  const row = fragment.querySelector(".sequence-row");
  const label = fragment.querySelector(".wire-number");

  label.dataset.generatedLabel = "wire";
  label.dataset.number = wireNumber;
  label.textContent = t("generated.wire", { number: wireNumber });

  row.querySelector('[data-sequence-color=""]').classList.add("is-selected");
  row.querySelector('[data-sequence-target="A"]').classList.add("is-selected");

  row.querySelectorAll("[data-sequence-color]").forEach((button) => {
    button.addEventListener("click", () => {
      row.querySelectorAll("[data-sequence-color]").forEach((choice) => {
        choice.classList.toggle("is-selected", choice === button);
      });

      updateSequenceResults();
    });
  });

  row.querySelectorAll("[data-sequence-target]").forEach((button) => {
    button.addEventListener("click", () => {
      row.querySelectorAll("[data-sequence-target]").forEach((choice) => {
        choice.classList.toggle("is-selected", choice === button);
      });

      updateSequenceResults();
    });
  });

  return fragment;
}

function resetSequences() {
  getSequenceRows().forEach((row) => {
    row.querySelectorAll("[data-sequence-color]").forEach((button) => {
      button.classList.toggle("is-selected", button.dataset.sequenceColor === "");
    });

    row.querySelectorAll("[data-sequence-target]").forEach((button) => {
      button.classList.toggle("is-selected", button.dataset.sequenceTarget === "A");
    });
  });

  updateSequenceResults();
}

function getMemoryRows() {
  return [...memoryRowContainer.querySelectorAll(".memory-row")];
}

function getMemoryStageInput(row) {
  const displayButton = row.querySelector("[data-memory-display].is-selected");
  const labels = [...row.querySelectorAll("[data-memory-label-button]")].map((button) =>
    Number(button.textContent)
  );

  return {
    display: displayButton ? Number(displayButton.dataset.memoryDisplay) : null,
    labels,
  };
}

function findMemoryPositionByLabel(labels, label) {
  return labels.findIndex((candidate) => candidate === label) + 1;
}

function resolveMemoryPress(stageNumber, display, labels, history) {
  if (!display) {
    return null;
  }

  if (stageNumber === 1) {
    const positions = [null, 2, 2, 3, 4];
    const position = positions[display];
    return { position, label: labels[position - 1] };
  }

  if (stageNumber === 2) {
    if (display === 1) {
      const position = findMemoryPositionByLabel(labels, 4);
      return { position, label: 4 };
    }

    if (display === 2 || display === 4) {
      const position = history[0].position;
      return { position, label: labels[position - 1] };
    }

    return { position: 1, label: labels[0] };
  }

  if (stageNumber === 3) {
    if (display === 1) {
      const label = history[1].label;
      const position = findMemoryPositionByLabel(labels, label);
      return { position, label };
    }

    if (display === 2) {
      const label = history[0].label;
      const position = findMemoryPositionByLabel(labels, label);
      return { position, label };
    }

    if (display === 3) {
      return { position: 3, label: labels[2] };
    }

    const position = findMemoryPositionByLabel(labels, 4);
    return { position, label: 4 };
  }

  if (stageNumber === 4) {
    if (display === 1) {
      const position = history[0].position;
      return { position, label: labels[position - 1] };
    }

    if (display === 2) {
      return { position: 1, label: labels[0] };
    }

    const position = history[1].position;
    return { position, label: labels[position - 1] };
  }

  const labelByDisplay = {
    1: history[0].label,
    2: history[1].label,
    3: history[3].label,
    4: history[2].label,
  };
  const label = labelByDisplay[display];
  const position = findMemoryPositionByLabel(labels, label);
  return { position, label };
}

function updateMemoryResults() {
  const history = [];

  getMemoryRows().forEach((row, index) => {
    const stageNumber = index + 1;
    const result = row.querySelector(".memory-result");
    const labelButtons = [...row.querySelectorAll("[data-memory-label-button]")];
    const { display, labels } = getMemoryStageInput(row);

    labelButtons.forEach((button) => button.classList.remove("is-press"));
    result.classList.remove("empty");

    if (!display || history.length < index) {
      result.value = "-";
      result.classList.add("empty");
      return;
    }

    const press = resolveMemoryPress(stageNumber, display, labels, history);

    if (!press || !press.position) {
      result.value = t("memory.checkLabels");
      result.classList.add("empty");
      return;
    }

    labelButtons[press.position - 1].classList.add("is-press");
    result.value = `P${press.position} / ${press.label}`;
    history.push(press);
  });
}

function createMemoryRow(stageNumber) {
  const fragment = memoryRowTemplate.content.cloneNode(true);
  const row = fragment.querySelector(".memory-row");
  const label = fragment.querySelector(".wire-number");

  label.dataset.generatedLabel = "stage";
  label.dataset.number = stageNumber;
  label.textContent = t("generated.stage", { number: stageNumber });

  row.querySelectorAll("[data-memory-display]").forEach((button) => {
    button.addEventListener("click", () => {
      row.querySelectorAll("[data-memory-display]").forEach((choice) => {
        choice.classList.toggle("is-selected", choice === button);
      });

      updateMemoryResults();
    });
  });

  row.querySelectorAll("[data-memory-label-button]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLabel = (Number(button.textContent) % 4) + 1;
      button.textContent = `${nextLabel}`;
      updateMemoryResults();
    });
  });

  return fragment;
}

function resetMemory() {
  getMemoryRows().forEach((row) => {
    row.querySelectorAll("[data-memory-display]").forEach((button) => {
      button.classList.remove("is-selected");
    });

    row.querySelectorAll("[data-memory-label-button]").forEach((button, index) => {
      button.textContent = `${index + 1}`;
    });
  });

  updateMemoryResults();
}

function normalizePasswordLetters(value) {
  return [...new Set(value.toLowerCase().replace(/[^a-z]/g, ""))].join("");
}

function getPasswordOptions() {
  return [...passwordInputs].map((input) => normalizePasswordLetters(input.value));
}

function updatePasswordResults() {
  const options = getPasswordOptions();
  const matches = passwordWords.filter((word) =>
    options.every((letters, index) => !letters || letters.includes(word[index]))
  );

  passwordCount.textContent = t("password.available", { count: matches.length });
  passwordList.replaceChildren();

  if (!matches.length) {
    const empty = document.createElement("div");
    empty.className = "password-empty";
    empty.textContent = t("password.noMatches");
    passwordList.append(empty);
    return;
  }

  matches.forEach((word) => {
    const item = document.createElement("div");
    item.className = "password-word";
    item.textContent = word.toUpperCase();
    passwordList.append(item);
  });
}

function resetPasswords() {
  passwordInputs.forEach((input) => {
    input.value = "";
  });

  updatePasswordResults();
}

function wordToMorse(word) {
  return [...word].map((letter) => morseAlphabet[letter]).join(" ");
}

function normalizeMorseInput(value) {
  return value.toLowerCase().replace(/[^a-z]/g, "");
}

function updateMorseResults() {
  const substring = normalizeMorseInput(morseInput.value);
  const matches = morseWords.filter(({ word }) => !substring || word.includes(substring));

  morseCount.textContent = t("morse.matches", { count: matches.length });
  morseList.replaceChildren();

  if (!matches.length) {
    const empty = document.createElement("div");
    empty.className = "password-empty";
    empty.textContent = t("morse.noMatches");
    morseList.append(empty);
    return;
  }

  matches.forEach(({ word, frequency }) => {
    const item = document.createElement("div");
    const wordLabel = document.createElement("strong");
    const frequencyLabel = document.createElement("span");
    const code = document.createElement("div");

    item.className = "morse-word";
    wordLabel.textContent = word.toUpperCase();
    frequencyLabel.textContent = frequency;
    code.className = "morse-code";
    code.textContent = wordToMorse(word);

    item.append(wordLabel, frequencyLabel, code);
    morseList.append(item);
  });
}

function renderMorseAlphabet() {
  morseAlphabetContainer.replaceChildren();

  Object.entries(morseAlphabet).forEach(([letter, code]) => {
    const item = document.createElement("button");
    const letterLabel = document.createElement("strong");
    const codeLabel = document.createElement("span");

    item.type = "button";
    item.className = "morse-letter";
    letterLabel.textContent = letter.toUpperCase();
    codeLabel.textContent = code;
    item.addEventListener("click", () => {
      morseInput.value += letter.toUpperCase();
      updateMorseResults();
      morseInput.focus();
    });

    item.append(letterLabel, codeLabel);
    morseAlphabetContainer.append(item);
  });
}

function resetMorse() {
  morseInput.value = "";
  updateMorseResults();
}

function refreshGeneratedLabels() {
  document.querySelectorAll("[data-generated-label]").forEach((element) => {
    const key =
      element.dataset.generatedLabel === "stage" ? "generated.stage" : "generated.wire";
    element.textContent = t(key, { number: element.dataset.number });
  });
}

function setLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  applyTranslations();
  refreshGeneratedLabels();
  updateSequenceResults();
  updateMemoryResults();
  updatePasswordResults();
  updateMorseResults();
}

function showModule(moduleId) {
  moduleTabs.forEach((tab) => {
    tab.classList.toggle("is-selected", tab.dataset.moduleTab === moduleId);
  });

  modulePanels.forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.id !== moduleId);
  });
}

for (let wireNumber = 1; wireNumber <= 6; wireNumber += 1) {
  rowContainer.append(createWireRow(wireNumber));
}

for (let wireNumber = 1; wireNumber <= 12; wireNumber += 1) {
  sequenceRowContainer.append(createSequenceRow(wireNumber));
}

for (let stageNumber = 1; stageNumber <= 5; stageNumber += 1) {
  memoryRowContainer.append(createMemoryRow(stageNumber));
}

applyTranslations();
updateSequenceResults();
updateMemoryResults();
updatePasswordResults();
renderMorseAlphabet();
updateMorseResults();

resetButton.addEventListener("click", resetWires);
sequenceResetButton.addEventListener("click", resetSequences);
memoryResetButton.addEventListener("click", resetMemory);
passwordResetButton.addEventListener("click", resetPasswords);
morseResetButton.addEventListener("click", resetMorse);

passwordInputs.forEach((input) => {
  input.addEventListener("input", () => {
    const normalized = normalizePasswordLetters(input.value);
    input.value = normalized.toUpperCase();
    updatePasswordResults();
  });
});

morseInput.addEventListener("input", () => {
  morseInput.value = normalizeMorseInput(morseInput.value).toUpperCase();
  updateMorseResults();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

moduleTabs.forEach((tab) => {
  tab.addEventListener("click", () => showModule(tab.dataset.moduleTab));
});
