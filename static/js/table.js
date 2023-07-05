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

  for (var i = 0; i < 3; i++) {
  var tableId = document.getElementsByClassName("tab align-middle text-truncate mb-0 table table-hover")[i]
  var tBody = tableId.getElementsByTagName('tbody')[0];
  var tableRow = tBody.getElementsByTagName('tr');
  var tablecabeza = tableId.getElementsByTagName('thead')[0];
  var tableHEAD = tablecabeza.getElementsByTagName('tr');
  for (var j = 0; j < tableRow.length; j++) {
    tableRow[j].style.display= 'none';
  }

  for (var k = 0; k < tableHEAD.length; k++) {
    tableHEAD[k].style.display= 'none';
  }

  }
  document.getElementById("hide1").style.display= 'none';
  document.getElementById("hide2").style.display= 'none';
  document.getElementById("hide3").style.display= 'none';
  document.getElementsByClassName('p-4 shadow bg-white rounded boxcontaineract col')[0].style.display= 'none';
  document.getElementById('fijar').style.display= 'none';

  var entro=0
  for (var i = 0; i < divs.length; i++) {

     var index = divs[i].innerText.toLowerCase().indexOf(pattern);
     if (index != 0 && index != -1) {
      entro=1
      console.log(index)
      targetId = divs[i].parentNode.id;
      console.log(divs[i].parentNode.parentNode.parentNode.parentNode)
      var tablesele=divs[i].parentNode.parentNode.parentNode.parentNode
      document.getElementsByClassName('p-4 shadow bg-white rounded boxcontaineract col')[0].style.display= 'block';
      document.getElementById('fijar').style.display= 'block';
      tablesele.previousElementSibling.style.display= 'block';
      tablesele.style.display= 'block';
      tablesele.style.visibility = "visible";
      tablesele.style.maxHeight= '500px';
      tablesele.style.height= 'auto';
      divs[i].parentNode.parentNode.parentNode.style.display= ''
      divs[i].parentNode.parentNode.parentNode.getElementsByTagName('thead')[0].getElementsByTagName('tr')[0].style.display= ''
      divs[i].parentNode.parentNode.style.display= ''
      divs[i].parentNode.style.display= ''
     
      
    
  }  

}

if (entro===0) {
document.getElementById('results').innerText = 'No existen registros'

}

}


function limpiar() {
  document.getElementById("table2").style.visibility = "hidden";
  document.getElementById("table2").style.height= '0px';
  document.getElementById("table1").style.visibility = "hidden";
  document.getElementById("table1").style.height= '0px';
  document.getElementById("table3").style.visibility = "hidden";
  document.getElementById("table3").style.height= '0px';
  document.getElementsByClassName('p-4 shadow bg-white rounded boxcontaineract col')[0].style.display= 'block';
  document.getElementById('fijar').style.display= 'block';
  for (var i = 0; i < 3; i++) {
    var tableId = document.getElementsByClassName("tab align-middle text-truncate mb-0 table table-hover")[i]
    var tBody = tableId.getElementsByTagName('tbody')[0];
    var tableRow = tBody.getElementsByTagName('tr');
    for (var j = 0; j < tableRow.length; j++) {
      tableRow[j].style.display= '';
    }
    }

  document.getElementById("hide1").style.display= 'block';
  document.getElementById("hide2").style.display= 'block';
  document.getElementById("hide3").style.display= 'block';

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

