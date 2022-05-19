const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "$199.99" ? "$19.99" : "$199.99";
  professional.textContent =
    professional.textContent === "$249.99" ? "$24.99 " : "$249.99";
  master.textContent = master.textContent === "$399.99" ? "$39.99" : "$399.99";
});

const range = document.getElementById("range"),
  tooltip = document.getElementById("tooltip"),
  setValue = () => {
    const newValue = Number(
        ((range.value - range.min) * 100) / (range.max - range.min)
      ),
      newPosition = 16 - newValue * 0.32;
    tooltip.innerHTML = `<span>${range.value}</span>`;

    tooltip2.innerHTML = `<span>${range.value}</span>`;

    const result = range.value * 4.99;

    totalValue.innerHTML = `<span>$${result.toFixed(2)}</span>`;

    tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
    document.documentElement.style.setProperty(
      "--range-progress",
      `calc(${newValue}% + (${newPosition}px))`
    );
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener("input", setValue);
