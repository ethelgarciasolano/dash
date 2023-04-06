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

var chart = c3.generate({
    data: {
        columns: [
            ['Luruaco', 10],
            ['Candelaria', 10],
            ['Ponedera', 10],
            ['Santo Tomás', 10],
            ['Sabanagrande', 10],
            ['Manatí', 10],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); },
        colors: {
            'Luruaco': 'var(--dark)',
            'Candelaria': 'var(--primary)',
            'Ponedera': 'var(--yellow)',
            'Santo Tomás': 'var(--red)',
            'Sabanagrande': 'var(--success)',
            'Manatí': 'var(--blue)',
            },
            color: function (color, d) {
                // d will be 'id' when called for legends
                return d.id && d.id === 'Manatí' ? d3.rgb(color).darker(d.value / 150) : color;
            }
    },
    donut: {
        title: "Beneficiarios"
    }
});


/* === CONTADOR === */ 

function animate(obj, initVal, lastVal, duration) {
  let startTime = null;

//get the current timestamp and assign it to the currentTime variable
let currentTime = Date.now();

//pass the current timestamp to the step function
const step = (currentTime ) => {

//if the start time is null, assign the current time to startTime
if (!startTime) {
  startTime = currentTime ;
}

//calculate the value to be used in calculating the number to be displayed
const progress = Math.min((currentTime - startTime)/ duration, 1);

//calculate what to be displayed using the value gotten above
obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

//checking to make sure the counter does not exceed the last value (lastVal)
if (progress < 1) {
  window.requestAnimationFrame(step);
} else {
     window.cancelAnimationFrame(window.requestAnimationFrame(step));
  }
};
//start animating
  window.requestAnimationFrame(step);
}
let timecont = 1000;
let text1 = document.getElementById('municipios');
let text2 = document.getElementById('familias');
let text3 = document.getElementById('hectareas');
let text4 = document.getElementById('pluruaco');
let text5 = document.getElementById('pcandelaria');
let text6 = document.getElementById('pponedera');
let text7 = document.getElementById('psantotomas');
let text8 = document.getElementById('psabanagrande');
let text9 = document.getElementById('pmanati');
let text10 = document.getElementById('duracion');


/* === Progress Bar === */ 

function animatebar(elem) {
  
  var i = 1;

    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }

}

let  elem1 = document.getElementById("Bar");
let  elem2 = document.getElementById("Bar2");
let  elem3 = document.getElementById("Bar3");
let  elem4 = document.getElementById("Bar4");
let  elem5 = document.getElementById("Bar5");
let  elem6 = document.getElementById("Bar6");



const load = () => {



  animate(text1, 0, 6, timecont);
  animate(text2, 0, 60, timecont);
  animate(text3, 0, 60, timecont);
  animate(text4, 0, 10, timecont);
  animate(text5, 0, 10, timecont);
  animate(text6, 0, 10, timecont);
  animate(text7, 0, 10, timecont);
  animate(text8, 0, 10, timecont);
  animate(text9, 0, 10, timecont);
  animate(text10, 0, 14, timecont);
  animatebar(elem2);
  animatebar(elem1);
  animatebar(elem3);
  animatebar(elem4);
  animatebar(elem5);
  animatebar(elem6);

}








// MAPPAAAA
var svg = d3.select("svg"),
  width = +svg.attr("width"),
  height = +svg.attr("height");

// Map and projection
var path = d3.geoPath();
var projection = d3.geoMercator()
  .scale(70)
  .center([0,20])
  .translate([width / 2, height / 2]);

// Data and color scale
var data = d3.map();
var colorScale = d3.scaleThreshold()
  .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
  .range(d3.schemeBlues[7]);

// Load external data and boot
d3.queue()
  .defer(d3.json,'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
  .defer(d3.csv, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv", function(d) { data.set(d.code, +d.pop); })
  .await(ready);

  console.log(d3)
function ready(error, topo) {

  let mouseOver = function(d) {
    d3.selectAll(".Country")
      .transition()
      .duration(200)
      .style("opacity", .5)
    d3.select(this)
      .transition()
      .duration(200)
      .style("opacity", 1)
      .style("stroke", "black")
  }

  let mouseLeave = function(d) {
    d3.selectAll(".Country")
      .transition()
      .duration(200)
      .style("opacity", .8)
    d3.select(this)
      .transition()
      .duration(200)
      .style("stroke", "transparent")
  }

  // Draw the map
  svg.append("g")
    .selectAll("path")
    .data(topo.features)
    .enter()
    .append("path")
      // draw each country <thead>
      .attr("d", d3.geoPath()
        .projection(projection)
      )
      // set the color of each country
      .attr("fill", function (d) {
        d.total = data.get(d.id) || 0;
        return colorScale(d.total);
      })
      .style("stroke", "transparent")
      .attr("class", function(d){ return "Country" } )
      .style("opacity", .8)
      .on("mouseover", mouseOver )
      .on("mouseleave", mouseLeave )
    }


