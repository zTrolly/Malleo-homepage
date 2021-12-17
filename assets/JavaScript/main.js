var arrow = document.getElementById('arrow');
var teste = document.getElementById('teste');
var testingarrow = document.getElementById('testing-arrow');

arrow.addEventListener('click', ()=>{
  teste.classList.toggle('active');
  testingarrow.classList.toggle('active-arrow');
})
