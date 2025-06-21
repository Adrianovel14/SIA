document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const form = new FormData(this);

  fetch("backend/registrar.php", {
    method: "POST",
    body: form
  })
  .then(res => res.text())
  .then(msg => {
    document.getElementById("mensaje").innerText = msg;
    this.reset();
  });
});
