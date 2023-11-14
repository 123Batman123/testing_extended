export default class Processing {
  constructor(element) {
    if (typeof element === "string") {
      this.element = document.querySelector(element);
    }
    this.cardContainer = this.element.querySelector(".cards-img");
  }
}
