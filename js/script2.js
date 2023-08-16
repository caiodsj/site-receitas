/* --------------- */
const btnEntrada = document.getElementById('btn-entrada');
const sectionEntrada = document.getElementById('entrada');
let isExpanded = false;
const hiddenCards = document.querySelectorAll('.entrada:not(.visible)')
const positionEnt = sectionEntrada.getBoundingClientRect().top + window.scrollY;
btnEntrada.addEventListener('click', () => {
  hiddenCards.forEach(card => {
    card.classList.toggle('visible');
  });
  if (isExpanded) {
    btnEntrada.innerText = 'Ver mais entradas +';
    window.scrollTo({ top: positionEnt - 65, behavior: "smooth" });
  } else {
    btnEntrada.innerText = 'Ver menos entradas -';
  }
  isExpanded = !isExpanded;
});
/* --------------- */
const btnPratoP = document.getElementById('btn-pratoP');
const sectionPratoP = document.getElementById('pratoPrincipal');
const alturaOriginalPP = 580;
let isExpandedPP = false;
const hiddenCardsPP = document.querySelectorAll('.pratoPrincipal:not(.visible)')
const positionPP = sectionPratoP.getBoundingClientRect().top + window.scrollY;
btnPratoP.addEventListener('click', () => {
  hiddenCardsPP.forEach(card => {
    card.classList.toggle('visible');
  });
  if (isExpandedPP) {
    btnPratoP.innerText = 'Ver mais pratos principais +';
    window.scrollTo({ top: positionPP - 65, behavior: "smooth" });
  } else {
    btnPratoP.innerText = 'Ver menos pratos principais -';
  }
  isExpandedPP = !isExpandedPP;
});
/* --------------- */
const btnAcomp = document.getElementById('btn-acompanhamento');
const sectionAcomp = document.getElementById('acompanhamento');
const alturaOriginalA = 580;
let isExpandedA = false;
const hiddenCardsAcomp = document.querySelectorAll('.acompanhamento:not(.visible)')
const positionAcomp = sectionAcomp.getBoundingClientRect().top + window.scrollY;
btnAcomp.addEventListener('click', () => {
  hiddenCardsAcomp.forEach(card => {
    card.classList.toggle('visible');
  });
  if (isExpandedA) {
    btnAcomp.innerText = 'Ver mais acompanhamentos +';
    window.scrollTo({ top: positionAcomp - 65, behavior: "smooth" });
  } else {
    btnAcomp.innerText = 'Ver menos acompanhamentos -';
  }
  isExpandedA = !isExpandedA;
});
/* --------------- */
const btnSobre = document.getElementById('btn-sobremesa');
const sectionSobre = document.getElementById('sobremesa');
const alturaOriginalS = 580;
let isExpandedS = false;
const hiddenCardsSobre = document.querySelectorAll('.sobremesa:not(.visible)')
const positionSobre = sectionSobre.getBoundingClientRect().top + window.scrollY;
btnSobre.addEventListener('click', () => {
  hiddenCardsSobre.forEach(card => {
    card.classList.toggle('visible');
  });
  if (isExpandedS) {
    btnSobre.innerText = 'Ver mais sobremesas +';
    window.scrollTo({ top: positionSobre - 65, behavior: "smooth" });
  } else {
    btnSobre.innerText = 'Ver menos sobremesas -';
  }
  isExpandedS = !isExpandedS;
});
/* --------------- */
const btnBebida = document.getElementById('btn-bebida');
const sectionBebida = document.getElementById('bebida');
const alturaOriginalB = 580;
let isExpandedB = false;
const hiddenCardsBebida = document.querySelectorAll('.bebida:not(.visible)')
const positionBebida = sectionBebida.getBoundingClientRect().top + window.scrollY;
btnBebida.addEventListener('click', () => {
  hiddenCardsBebida.forEach(card => {
    card.classList.toggle('visible');
  });
  if (isExpandedB) {
    btnBebida.innerText = 'Ver mais bebidas +';
    window.scrollTo({ top: positionBebida - 65, behavior: "smooth" });
  } else {
    btnBebida.innerText = 'Ver menos bebidas -';
  }
  isExpandedB = !isExpandedB;
});

/* ----- */
window.addEventListener('scroll', function() {
  var button = document.getElementById('btn-top');
  if (window.scrollY > 100) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

document.getElementById('btn-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

