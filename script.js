const A = document.getElementById('primero');
const B = document.getElementById('segundo');
const C = document.getElementById('tercero');
const D = document.getElementById('cuarto');
const E = document.getElementById('quinto');

const diapos = [A, B, C, D, E];

const ant = document.getElementById('anterior');
const sig = document.getElementById('siguiente');

let actual = 0;

ant.addEventListener('click', function () {
  actual --;
  habilitador(actual);
  cambiar(diapos[actual]);
});
sig.addEventListener('click', function () {
  actual ++;
  habilitador(actual);
  cambiar(diapos[actual]);
});


function cambiar(diapo) {
  A.hidden = true;
  B.hidden = true;
  C.hidden = true;
  D.hidden = true;
  E.hidden = true;
  diapo.hidden = false;
}

function habilitador (num) {
  if (num === 0) {
    ant.disabled = true;
  } else {
    ant.disabled = false;
  }
  if (num === diapos.length -1) {
    sig.disabled = true;
  } else {
    sig.disabled = false;
  }
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