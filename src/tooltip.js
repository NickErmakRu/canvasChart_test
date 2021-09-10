import { css } from "./utils";

const template = (data) => `
  <div class="tooltip-title">${data.title}</div>
  <ul class="tooltip-list">
    ${data.items.map((item) => {
      return (
        `<li class="tooltip-list-item">
          <div class="value" style="color: ${item.color}">
            ${item.value}
          </div>
          <div class="name" style="color: ${item.color}">
            ${item.name}
          </div>
        </li>
        `
      )
    })
    .join("\n")}
  </ul>
`

export function tooltip(elem) {
  const clear = () => elem.innerHTML = "";
  return {
    show({ left, top }, data) {
      const { height, width } = elem.getBoundingClientRect();
      clear()
      css(elem, {
        display: "block",
        top: top - height + "px",
        left: left + width / 2 + "px",
      })
      elem.insertAdjacentHTML("afterbegin", template(data));
    },
    hide() {
      css(elem, { display: "none" });
    },
  }
}