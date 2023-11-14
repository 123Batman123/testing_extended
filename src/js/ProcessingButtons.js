import Processing from "./Processing";

export default class ProccessingButtons extends Processing {
  constructor(element) {
    super(element);

    this.allCard = [...this.cardContainer.querySelectorAll(".card")];

    this.buttonsClick = this.buttonsClick.bind(this);

    this.cardContainer.addEventListener("click", this.buttonsClick);
  }

  buttonsClick(e) {
    if (e.target.classList.contains("card")) {
      if (e.target.classList.contains("active")) {
        return;
      }
      this.changePosition(this.allCard.indexOf(e.target));
    }
  }

  getActiveIndex() {
    return this.allCard.findIndex((el) => el.classList.contains("active"));
  }

  changePosition(position) {
    let indexActive = this.getActiveIndex();

    this.allCard[indexActive].classList.remove("active");

    this.allCard[position].classList.add("active");
  }
}
