//<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
//<script type="text/javascript">
    $(function(){
        var scroller = $('#scroller div.innerScrollArea');
        var scrollerContent = scroller.children('ul');
        scrollerContent.children().clone().appendTo(scrollerContent);
        var curX = 0;
        scrollerContent.children().each(function(){
            var $this = $(this);
            $this.css('left', curX);
            curX += $this.outerWidth(true);
        });
        var fullW = curX / 2;
        var viewportW = scroller.width();

        // Scrolling speed management
        var controller = {curSpeed:0, fullSpeed:2};
        var $controller = $(controller);
        var tweenToNewSpeed = function(newSpeed, duration)
        {
            if (duration === undefined)
                duration = 600;
            $controller.stop(true).animate({curSpeed:newSpeed}, duration);
        };

        // Pause on hover
        scroller.hover(function(){
            tweenToNewSpeed(0);
        }, function(){
            tweenToNewSpeed(controller.fullSpeed);
        });

        // Scrolling management; start the automatical scrolling
        var doScroll = function()
        {
            var curX = scroller.scrollLeft();
            var newX = curX + controller.curSpeed;
            if (newX > fullW*2 - viewportW)
                newX -= fullW;
            scroller.scrollLeft(newX);
        };
        setInterval(doScroll, 25);
        tweenToNewSpeed(controller.fullSpeed);
    });
//</script>

//
//(function (window, document) {
//	
//	var spaceinterval = 100;
//    var timeinterval = 150; // `speed`
//    var max;
//    
//	var firstrun = true;
//     // Interval function:
//    
//	var gallery = function() {
//      var elem = document.getElementById("marquee-container");
//      if (elem && elem.clientWidth < elem.scrollWidth)  {
//       if (firstrun) {
//        max = elem.scrollWidth;
//        // Clone the children of the container until the
//        // scrollWidth is at least twice as large as max.
//        while (elem.scrollWidth < max * 2) {
//        
//		 var length = elem.children.length;
//         
//		 for (var i = 0; i < length; ++i) {
//         	 var child = elem.children[i].cloneNode(true);
//			 var childwithbadbehavior =  elem.children[i];
//			 child.setAttribute("id", "marquee-container");
//		
//			 childwithbadbehavior.style.paddingLeft = "0px";
//			 childwithbadbehavior.style.paddingRight = "0px";
//			 childwithbadbehavior.style.marginLeft = "0px";
//			 childwithbadbehavior.style.marginRight = "0px";
//			 
////			 var margleft = childwithbadbehavior.style.marginLeft;
////			 alert("Margin Left Image: " + i + " is " + margleft);
////			 
////			 var margright = childwithbadbehavior.style.marginRight;
////			 alert("Margin Right Image: " + i + " is " + margright);
////			 
////			 var paddleft  
////			 = childwithbadbehavior.style.paddingLeft;
////			 alert("Padding Left Image: " + i + " is " + paddleft);
////			 
////			 var paddright = childwithbadbehavior.style.paddingRight;
////			 alert("Padding Right Image: " + i + " is " + paddright);
//			 
//			 elem.appendChild(child);
//		 }
//			
//			
//         break;
//        
//		}
//        
//	   firstrun = false;
//       
//	   }
//       if (elem.scrollLeft >= max) {
//        elem.scrollLeft -= max;
//       } else {
//        elem.scrollLeft += spaceinterval;
//       }
//      }
//     };
//     window.setInterval(gallery, timeinterval);
//    })(window, document);
//
//function retNumVal(str2Num) {
//	var numberPattern = /\d+/g;
//	return str2Num.match(numberPattern);
//}
//
////function setImgSize () {
////
////var yourImg = document.getElementById('image1');
////
////if(yourImg && yourImg.style) {
////    yourImg.style.height = '200px';
////    yourImg.style.width = '200px';
////}


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

function getnumli() {
	return $("#navlist").children().length;
}

//$('li').css('width',function(){
//    var ulw = $('ul').width();
//    return (ulw / $('li').length) + 'px';
//});

