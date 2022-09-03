function init() {
  const btn = document.getElementById("runJS");
  btn.addEventListener("click", runScript);

  function runScript() {
    var planet = document.getElementById("greenplanet");
    planet.innerHTML = "WARNING! Berserker Probes";
    planet.setAttribute("class", "redtext");
  }
  document.que;

  let logMessage = function () {
    console.log("This message displays after 2 seconds");
  };

  setTimeout(logMessage, 2000);
}

window.onload = init;
