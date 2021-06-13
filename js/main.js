function getEID(id) {
  return document.getElementById(id);
}

//hàm show disclosures content
var lastView = true;
getEID("disclosures__click").addEventListener("click", function () {
  if (lastView == false) {
    $("#disclosures__text1").attr("style", "transition: all 0.25s");
    getEID("disclosures__text1").style.display = "none";
    getEID("disclosures__icon").className = "fa fa-chevron-down";
    lastView = true;
  } else if (lastView) {   
    $("#disclosures__text1").attr("style", "transition: all 0.25s");
    $("#disclosures__text1").attr("style", "display: block");
    getEID("disclosures__icon").className = "fa fa-chevron-down open";
    lastView = false;
  }
});


(function(){
  // Back to Top - by CodyHouse.co
var backTop = document.getElementsByClassName('js-cd-top')[0],
  offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
  offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  scrollDuration = 700,
  scrolling = false;

if( backTop ) {
  //update back to top visibility on scrolling
  window.addEventListener("scroll", function(event) {
    if( !scrolling ) {
      scrolling = true;
      (!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
    }
  });

  //smooth scroll to top
  backTop.addEventListener('click', function(event) {
    event.preventDefault();
    (!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
  });
}

function checkBackToTop() {
  var windowTop = window.scrollY || document.documentElement.scrollTop;
  ( windowTop > offset ) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
  ( windowTop > offsetOpacity ) && Util.addClass(backTop, 'cd-top--fade-out');
  scrolling = false;
}
})();