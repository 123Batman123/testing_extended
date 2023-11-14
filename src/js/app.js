import ProccessingButton from "./ProcessingButtons";
import ProcessingForm from "./ProcessingForm";

function startSite(element) {
  new ProccessingButton(element);
  new ProcessingForm(element);
}

startSite(".main");
