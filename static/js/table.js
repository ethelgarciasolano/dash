$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;
  
      trigger.click(function () {
        hamburger_cross();      
      });
  
      function hamburger_cross() {
  
        if (isClosed == true) {          
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {   
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }
    
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });  
  });


  /* === POPUP === */ 

  var span = document.querySelectorAll('.NameHighlights');
  for (var i = span.length; i--;) {
      (function () {
          var t;
          span[i].onmouseover = function () {
              hideAll();
              clearTimeout(t);
              this.className = 'NameHighlightsHover';
          };
          span[i].onmouseout = function () {
              var self = this;
              t = setTimeout(function () {
                  self.className = 'NameHighlights';
              }, 300);
          };
      })();
  }

  function hideAll() {
      for (var i = span.length; i--;) {
          span[i].className = 'NameHighlights'; 
      }
  };

/* === GRAFICO === */ 






const btn = document.getElementById('hide1');

btn.addEventListener('click', () => {

  if (document.getElementById("table1").style.visibility === "visible") {
      document.getElementById("table1").style.visibility = "hidden";
      document.getElementById("table1").style.height= '0px';
  } else {
    document.getElementById("table1").style.visibility = "visible";
    document.getElementById("table1").style.maxHeight= '500px';
    document.getElementById("table1").style.height= 'auto';
  }

});


const btn2 = document.getElementById('hide2');

btn2.addEventListener('click', () => {

  if (document.getElementById("table2").style.visibility === "visible") {
      document.getElementById("table2").style.visibility = "hidden";
      document.getElementById("table2").style.height= '0px';
  } else {
    document.getElementById("table2").style.visibility = "visible";
    document.getElementById("table2").style.maxHeight= '500px';
    document.getElementById("table2").style.height= 'auto';
  }

});


const btn3 = document.getElementById('hide3');

btn3.addEventListener('click', () => {

  if (document.getElementById("table3").style.visibility === "visible") {
      document.getElementById("table3").style.visibility = "hidden";
      document.getElementById("table3").style.height= '0px';
  } else {
    document.getElementById("table3").style.visibility = "visible";
    document.getElementById("table3").style.maxHeight= '500px';
    document.getElementById("table3").style.height= 'auto';
  }

});


function search() {

  document.getElementById('results').innerText = ''
 
  var name = document.getElementById("searchForm").elements["searchItem"].value;

  var pattern = name.toLowerCase();
  var targetId = "";

  var divs = document.getElementsByClassName("text-left");
  
  document.getElementById("table1").style.visibility = "visible";
  document.getElementById("table1").style.maxHeight= '500px';
  document.getElementById("table1").style.height= 'auto';
  document.getElementById("table2").style.visibility = "visible";
  document.getElementById("table2").style.maxHeight= '500px';
  document.getElementById("table2").style.height= 'auto';
  document.getElementById("table3").style.visibility = "visible";
  document.getElementById("table3").style.maxHeight= '500px';
  document.getElementById("table3").style.height= 'auto';
 


  for (var i = 0; i < divs.length; i++) {
     var index = divs[i].innerText.toLowerCase().indexOf(pattern);
     if (index != -1) {
      targetId = divs[i].parentNode.id;
      if( document.getElementById(targetId).style.backgroundColor  !== "rgb(201, 245, 255)"){
        document.getElementById(targetId).scrollIntoView({block: "center"});
        document.getElementById(targetId).style.backgroundColor = "#C9F5FF";
      break;
    }
  }  

}

if (divs.length == i) {
document.getElementById('results').innerText = 'No existen registros'

}

}


function limpiar() {
  document.getElementById('results').innerText = ''
  const tableRows = document.getElementsByTagName('tr');

  for (let curr = 1; curr < tableRows.length; curr++) {
    tableRows[curr].style.backgroundColor = '';

}


}



function load(){



}


function row() {
  var table =document.getElementsByClassName("tab");
  var checkBox = document.getElementById("cbox1");
 

  if (checkBox.checked == true ){

    for (let curr = 0; curr < table.length; curr++) {
      table[curr].classList.add('div1');
  }
   
  } else  {
    for (let curr = 0; curr < table.length; curr++) {
      table[curr].classList.remove('div1');
  }
  }
}


function col() {
  var table =document.getElementsByClassName("tab");
  var checkBox = document.getElementById("cbox2");
 

  if (checkBox.checked == true ){

    for (let curr = 0; curr < table.length; curr++) {
      table[curr].classList.add('div2');
  }
   
  } else  {
    for (let curr = 0; curr < table.length; curr++) {
      table[curr].classList.remove('div2');
  }
  }
}

