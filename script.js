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

const propertyOrder = ["red", "blue", "star", "led"];
const rowContainer = document.querySelector("#wireRows");
const rowTemplate = document.querySelector("#wireRowTemplate");
const resetButton = document.querySelector("#resetButton");

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

for (let wireNumber = 1; wireNumber <= 6; wireNumber += 1) {
  rowContainer.append(createWireRow(wireNumber));
}

resetButton.addEventListener("click", resetWires);
