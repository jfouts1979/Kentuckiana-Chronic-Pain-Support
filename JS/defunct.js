(function (window, document, undefined) {
	var spaceinterval = 1;
    var timeinterval = 50; // `speed`
    var max;
    var firstrun = true;
     // Interval function:
    var gallery = function() {
      var elem = document.getElementById("marquee-container");
      if (elem && elem.clientWidth < elem.scrollWidth)  {
       if (firstrun) {
        max = elem.scrollWidth;
        // Clone the children of the container until the
        // scrollWidth is at least twice as large as max.
        while (elem.scrollWidth < max * 2) {
         var length = elem.children.length;
         for (var i = 0; i < length; ++i) {
          elem.appendChild(elem.children[i].cloneNode(true));
         }
         break;
        }
        firstrun = false;
       }
       if (elem.scrollLeft >= max) {
        elem.scrollLeft -= max;
       } else {
        elem.scrollLeft += spaceinterval;
       }
      }
     };
     window.setInterval(gallery, timeinterval);
    })(window, document);

function retNumVal(str2Num) {
	var numberPattern = /\d+/g;
	return str2Num.match(numberPattern);
}

//function setImgSize () {
//
//var yourImg = document.getElementById('image1');
//
//if(yourImg && yourImg.style) {
//    yourImg.style.height = '200px';
//    yourImg.style.width = '200px';
//}


function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

function getDate() {
	
var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

var m_names_long = new Array("January", "February", "March", "April", "May", "June", "July",
							 "August", "September", "October", "November", "December");

var d = new Date();

var curr_date = d.getDate();

var curr_month = d.getMonth();

var curr_year = d.getFullYear();
	

return (m_names_long[curr_month] + " - " + pad(curr_date) + " - " + curr_year);
}