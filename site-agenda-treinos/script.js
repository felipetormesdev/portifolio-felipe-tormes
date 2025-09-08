const form = document.getElementById('treinoForm');
const lista = document.getElementById('listaTreinos');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = document.getElementById('data').value;
  const tipo = document.getElementById('tipo').value;
  const km = document.getElementById('km').value;
  lista.innerHTML += `<li>${data}: ${tipo} - ${km}km</li>`;
  form.reset();
});
