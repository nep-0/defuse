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
const memoryRowContainer = document.querySelector("#memoryRows");
const memoryRowTemplate = document.querySelector("#memoryRowTemplate");
const memoryResetButton = document.querySelector("#memoryResetButton");
const moduleTabs = document.querySelectorAll("[data-module-tab]");
const modulePanels = document.querySelectorAll("[data-module-panel]");

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
      result.value = "Check labels";
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

  label.textContent = `Stage ${stageNumber}`;

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

updateSequenceResults();
updateMemoryResults();

resetButton.addEventListener("click", resetWires);
sequenceResetButton.addEventListener("click", resetSequences);
memoryResetButton.addEventListener("click", resetMemory);

moduleTabs.forEach((tab) => {
  tab.addEventListener("click", () => showModule(tab.dataset.moduleTab));
});
