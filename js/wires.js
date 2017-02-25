window.addEventListener("load",function begin(event){
  window.removeEventListener("load", begin, false);
  tab_handler();
  if(window.width<700)
    sponsors_slidehow();
},false);

function tab_handler(){
  var tab_view = document.querySelector('.tab-view');
  var active_tab= document.querySelector('.active-tab');
  tab_view.addEventListener('click',function(e){
    // alert(tab_view.children.indexOf(e.target));
    var click_elem = e.target;
    if(click_elem.tagName=='IMG'||click_elem.tagName=='A')
      click_elem = click_elem.parentNode;
    if(active_tab!=click_elem && click_elem.children.length==2){
      var mod_string;
      mod_string = active_tab.children[0].src;
      mod_string = mod_string.replace('.png','(1).png');
      active_tab.classList.remove('active-tab');
      active_tab.children[0].src = mod_string;
      active_tab = click_elem;
      active_tab.classList.add('active-tab');
      mod_string = active_tab.children[0].src;
      mod_string = mod_string.replace('(1).png','.png');
      active_tab.children[0].src = mod_string;
    }
  });
}

function sponsors_slidehow(){
  var slides = document.querySelector('.sponsors-content').children;
  var iter = 0,iter_max = slides.length-1;
  var show = setInterval(function(){
      slides[iter].classList.remove('active-slide');
      if(iter == iter_max)
        iter = -1;
      slides[++iter].classList.add('active-slide');
  },1000);
}
