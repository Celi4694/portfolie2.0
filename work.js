window.addEventListener("load", startRotation);

function startRotation() {
  console.log("startRotation");

  //Starter måne-animationen
  document.querySelector("#moon").classList.add("rotate");
}
