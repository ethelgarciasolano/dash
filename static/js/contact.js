function cerrarV(){


  document.getElementById("sidebar").classList.toggle('active');
 document.getElementById("sidebarMenu").classList.toggle('modal');;


}

const load = () => {

 var w = window.innerWidth;
 if( w<991){
 cerrarV()}
 }