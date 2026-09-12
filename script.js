/* SAF-GLAS EnergyGlass — scroll reveal + animaciones bajo demanda */
(function(){
  if(!('IntersectionObserver' in window)){
    document.querySelectorAll('.reveal,.stagger,.anim-svg').forEach(function(el){ el.classList.add('in-view'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.18, rootMargin:'0px 0px -40px 0px'});

  document.querySelectorAll('.reveal,.stagger,.anim-svg').forEach(function(el){
    io.observe(el);
  });
})();
