var cube = document.querySelector('.cube');
var radioGroup = document.getElementById('rg1');
var radioGroup2 = document.getElementById('rg2');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );
radioGroup2.addEventListener( 'change', changeSide );
