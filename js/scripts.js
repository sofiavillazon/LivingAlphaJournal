var BODY = $('body');

window.Global = {
    init: function(){
        this.bindEvents(); 
    },
    bindEvents: function(){
    	BODY.off('click','#btnMenu');
    	BODY.on('click','#btnMenu',function(event){
    		event.preventDefault();
			openMenu();
		});
		BODY.off('click','#btnClose');
    	BODY.on('click','#btnClose',function(event){
    		event.preventDefault();
			closeMenu();
		});
    }
}
window.Global.init();

function openMenu(){
	$('#menu').addClass("openMenu");
	$('#menu').removeClass("closeMenu");
	$('#cntOpen').toggle();
	$('#menu').removeClass("potout");
	$('#menu').addClass("pot");
}
function closeMenu(){
	$('#menu').addClass("closeMenu");
	$('#menu').removeClass("openMenu");
	$('#cntOpen').toggle();			
	$('#menu').addClass("potout");
	$('#menu').removeClass("pot");
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


$(window).on("scroll",endPage)

function endPage(){
 if($(document).height() - $(window).scrollTop() - $(window).height() < 20) {
  	$('#footer').addClass("showfooter");
  	$('#footer').removeClass("hiddenfooter");
 }
 
 if ($(document).height() - $(window).scrollTop() - $(window).height() > 20) {
 	$('#footer').addClass("hiddenfooter");
  	$('#footer').removeClass("showfooter");
	}
 }

function upfooter() {
    var x = document.getElementById("footer").style.bottom;
    var y = document.getElementById("footer");

    if (x === "-147px") {
        y.style.bottom = "-3px";
    } else {
        y.style.bottom = "-147px";
    }
}


function goto(element) {
	closeMenu();
	$('#' + element).animatescroll({scrollSpeed:1000,easing:'easeOutSine'});
}

