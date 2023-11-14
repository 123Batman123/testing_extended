import Processing from "./Processing";
import AllValidators from "./Validator";

export default class ProcessingForm extends Processing {
  constructor(element) {
    super(element);

    this.form = this.element.querySelector(".form");

    this.submitForm = this.submitForm.bind(this);

    this.form.addEventListener("submit", this.submitForm);
  }

  submitForm(e) {
    e.preventDefault();
    const inputValue = this.form.elements[0].value.replace(/ /g, "");
    const buttonReset = this.form.elements[2];
    const validator = new AllValidators(inputValue);
    const activeCard = this.cardContainer.querySelector(".active");

    // Напишем тут создание эллемента с полем
    const print = this.form.querySelector(".print");
    print.textContent = "";
    if (inputValue == "") {
      print.textContent = "Поле пустое";
      return;
    }
    if (!validator.validatorLuna()) {
      print.textContent = "Этот номер не подходит, как номер карты";
      buttonReset.click();
      return;
    }

    if (activeCard.classList.contains(validator.validatorCard())) {
      print.textContent = `Да это карт ${activeCard.id}`;
    } else {
      print.textContent = `Нет. Это не карта ${activeCard.id}`;
      buttonReset.click();
    }
  }
}
