const btnEntrada = document.getElementById('btn-entrada');
const sectionEntrada = document.getElementById('entrada');
let isExpanded = false;
const hiddenCards = document.querySelectorAll('.entrada:not(.visible)')
btnEntrada.addEventListener('click', () => {
  hiddenCards.forEach(card => {
    card.classList.toggle('visible');
  });
  if (isExpanded) {
    btnEntrada.innerText = 'Ver mais entradas +';
    sectionEntrada.scrollIntoView({ behavior: 'smooth' })
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

btnPratoP.addEventListener('click', () => {
  if (!isExpandedPP) {
    sectionPratoP.style.height = 'auto';
    const alturaTotalPP = sectionPratoP.scrollHeight;
    sectionPratoP.style.height = `${alturaTotalPP}px`;
    isExpandedPP = true;
    btnPratoP.innerText = 'Ver menos pratos principais -'
  } else {
    sectionPratoP.style.height = `${alturaOriginalPP}px`;
    isExpandedPP = false;
    btnPratoP.innerText = 'Ver mais pratos principais +'
    sectionPratoP.scrollIntoView({ behavior: 'smooth' })
  }
});
/* --------------- */
const btnAcomp = document.getElementById('btn-acompanhamento');
const sectionAcomp = document.getElementById('acompanhamento');
const alturaOriginalA = 580;
let isExpandedA = false;

btnAcomp.addEventListener('click', () => {
  if (!isExpandedA) {
    sectionAcomp.style.height = 'auto';
    const alturaTotalA = sectionAcomp.scrollHeight;
    sectionAcomp.style.height = `${alturaTotalA}px`;
    isExpandedA = true;
    btnAcomp.innerText = 'Ver menos acompanhamentos -'
  } else {
    sectionAcomp.style.height = `${alturaOriginalA}px`;
    isExpandedA = false;
    btnAcomp.innerText = 'Ver mais acompanhamentos +'
    sectionAcomp.scrollIntoView({ behavior: 'smooth' })
  }
});
/* --------------- */
const btnSobre = document.getElementById('btn-sobremesa');
const sectionSobre = document.getElementById('sobremesa');
const alturaOriginalS = 580;
let isExpandedS = false;

btnSobre.addEventListener('click', () => {
  if (!isExpandedS) {
    sectionSobre.style.height = 'auto';
    const alturaTotalS = sectionSobre.scrollHeight;
    sectionSobre.style.height = `${alturaTotalS}px`;
    isExpandedS = true;
    btnSobre.innerText = 'Ver menos sobremesas -'
  } else {
    sectionSobre.style.height = `${alturaOriginalS}px`;
    isExpandedS = false;
    btnSobre.innerText = 'Ver mais sobremesas +'
    sectionSobre.scrollIntoView({ behavior: 'smooth' })
  }
});
/* --------------- */
const btnBebida = document.getElementById('btn-bebida');
const sectionBebida = document.getElementById('bebida');
const alturaOriginalB = 580;
let isExpandedB = false;

btnBebida.addEventListener('click', () => {
  if (!isExpandedB) {
    sectionBebida.style.height = 'auto';
    const alturaTotalB = sectionBebida.scrollHeight;
    sectionBebida.style.height = `${alturaTotalB}px`;
    isExpandedB = true;
    btnBebida.innerText = 'Ver menos bebidas -'
  } else {
    sectionBebida.style.height = `${alturaOriginalB}px`;
    isExpandedB = false;
    btnBebida.innerText = 'Ver mais bebidas +'
    sectionBebida.scrollIntoView({ behavior: 'smooth' })
  }
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

