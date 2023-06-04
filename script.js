const A = document.getElementById('primero');
const B = document.getElementById('segundo');
const C = document.getElementById('tercero');
const D = document.getElementById('cuarto');
const E = document.getElementById('quinto');

const aB = document.getElementById('ab');
const bA = document.getElementById('ba');
const bC = document.getElementById('bc');
const cB = document.getElementById('cb');
const cD = document.getElementById('cd');
const dC = document.getElementById('dc');
const dE = document.getElementById('de');
const eD = document.getElementById('ed');

aB.addEventListener('click', function () {cambiar(B)});
bA.addEventListener('click', function () {cambiar(A)});
bC.addEventListener('click', function () {cambiar(C)});
cB.addEventListener('click', function () {cambiar(B)});
cD.addEventListener('click', function () {cambiar(D)});
dC.addEventListener('click', function () {cambiar(C)});
dE.addEventListener('click', function () {cambiar(E)});
eD.addEventListener('click', function () {cambiar(D)});

function cambiar(diapo) {
    A.hidden = true;
    B.hidden = true;
    C.hidden = true;
    D.hidden = true;
    E.hidden = true;
    diapo.hidden = false;
}


document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    cambiarSiguiente();
  } else if (event.key === 'ArrowLeft') {
    cambiarAnterior();
  }
});

function cambiarSiguiente() {
  if (!A.hidden) {
    cambiar(B);
  } else if (!B.hidden) {
    cambiar(C);
  } else if (!C.hidden) {
    cambiar(D);
  } else if (!D.hidden) {
    cambiar(E);
  } else if (!E.hidden) {
    // No realizar cambio, ya que E es el último elemento
  }
}

function cambiarAnterior() {
  if (!A.hidden) {
    // No realizar cambio, ya que A es el primer elemento
  } else if (!B.hidden) {
    cambiar(A);
  } else if (!C.hidden) {
    cambiar(B);
  } else if (!D.hidden) {
    cambiar(C);
  } else if (!E.hidden) {
    cambiar(D);
  }
}

function cambiar(diapo) {
  A.hidden = true;
  B.hidden = true;
  C.hidden = true;
  D.hidden = true;
  E.hidden = true;
  diapo.hidden = false;
}
