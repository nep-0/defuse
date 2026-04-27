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

const propertyOrder = ["red", "blue", "star", "led"];
const rowContainer = document.querySelector("#wireRows");
const rowTemplate = document.querySelector("#wireRowTemplate");
const resetButton = document.querySelector("#resetButton");
const sequenceRowContainer = document.querySelector("#sequenceRows");
const sequenceRowTemplate = document.querySelector("#sequenceRowTemplate");
const sequenceResetButton = document.querySelector("#sequenceResetButton");

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

  label.textContent = `Wire ${wireNumber}`;

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
    resultOutput.value = occurrence > 9 ? "No table" : shouldCut ? "Cut" : "Do not cut";
    resultOutput.classList.add(shouldCut && occurrence <= 9 ? "cut" : "skip");
  });
}

function createSequenceRow(wireNumber) {
  const fragment = sequenceRowTemplate.content.cloneNode(true);
  const row = fragment.querySelector(".sequence-row");
  const label = fragment.querySelector(".wire-number");

  label.textContent = `Wire ${wireNumber}`;

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

for (let wireNumber = 1; wireNumber <= 6; wireNumber += 1) {
  rowContainer.append(createWireRow(wireNumber));
}

for (let wireNumber = 1; wireNumber <= 12; wireNumber += 1) {
  sequenceRowContainer.append(createSequenceRow(wireNumber));
}

updateSequenceResults();

resetButton.addEventListener("click", resetWires);
sequenceResetButton.addEventListener("click", resetSequences);
