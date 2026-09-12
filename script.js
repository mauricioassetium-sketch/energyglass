// EnergyGlass — iconos SVG personalizados + animación de dibujo al scroll
// Nada se mueve solo: los iconos se dibujan y las cards aparecen al entrar en pantalla
(function(){
  'use strict';

  function svg(g){ return '<svg class="ico-svg" viewBox="0 0 48 48" fill="none" aria-hidden="true"><g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none">'+g+'</g></svg>'; }

  // Cada trazo es un <path class="d"> para que se dibuje al entrar en pantalla
  var INLINE = {
    // ---------- index ----------
    '🏢': svg('<path class="d" d="M6 18h36M16 18V8M32 18V8M6 18v22M42 18v22"/><path class="d" d="M10 26h8M10 32h8M20 26h8M20 32h8M30 26h8M30 32h8"/>'),
    '🌱': svg('<path class="d" d="M22 44V20M42 20v24M2 20v24M2 44h44"/><path class="d" d="M22 20c0-6 4-8 8-8M18 14c-4 2-6 6-6 8M26 14h4c5 0 9 3 9 8M30 16c4 1 8 4 8 8M38 18c3 2 4 4 4 6"/>'),
    '🛡️': svg('<path class="d" d="M24 3l15 7v14a15 15 0 0 1-30 0V10z"/><path class="d" d="M14 22v4M24 22v4M34 22v4M11 13h26"/>'),
    '🔬': svg('<path class="d" d="M24 2C16 8 16 20 16 30"/><path class="d" d="M16 30h16M32 30c0-10 0-22-8-28"/><path class="d" d="M28 30l10 6M28 30l-6 8M22 44l2-6"/><circle class="d" cx="38" cy="36" r="2.5"/>'),
    '🏭': svg('<path class="d" d="M5 42h38M9 42V14l6-6v34M15 8l12 6 12-6-16 8-8-8z"/><path class="d" d="M33 30h4M33 36h6"/>'),
    '📜': svg('<path class="d" d="M12 8h24v28a4 4 0 0 1-4 4H12zM36 36a4 4 0 0 0 4-4V8"/><path class="d" d="M18 14h12M18 20h12M18 26h8"/>'),

    // ---------- tecnologia ----------
    '💡': svg('<path class="d" d="M24 4v8M24 40v4M6 24h6M36 24h6"/><circle class="d" cx="24" cy="24" r="6"/><path class="d" d="M24 20a4 4 0 0 1 4 4"/>'),
    '↗️': svg('<path class="d" d="M12 36L36 12M22 12h14v14"/>'),
    '⚡': svg('<path class="d" d="M28 4L10 28h10l-2 16 20-26H26z"/>'),

    // ---------- aplicaciones ----------
    '🔋': svg('<path class="d" d="M8 16v16M10 20h20v8a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4v-8z"/><path class="d" d="M16 32v8h8v-8M34 22h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/>'),
    '🔌': svg('<path class="d" d="M10 10l10 10 8-8M10 10l-4 4M14 6l4 4M30 20l8 8M34 34l-4-4"/><path class="d" d="M10 10a4 4 0 0 0 4 4M22 22a4 4 0 0 0 4 4"/>'),
    '💠': svg('<path class="d" d="M24 4L44 24 24 44 4 24z"/><path class="d" d="M24 4v40M4 24h40"/>'),

    // ---------- fabricacion ----------
    '🪟': svg('<rect class="d" x="8" y="8" width="32" height="32" rx="2"/><path class="d" d="M24 8v32M8 24h32"/>'),
    '🧪': svg('<path class="d" d="M20 13h8M20 13v8l-5 10a3 3 0 0 0 2.8 4h12.4a3 3 0 0 0 2.8-4l-5-10v-8"/><path class="d" d="M15 32h18M19 38h10"/>'),
    '🧩': svg('<path class="d" d="M16 10V6a3 3 0 0 1 6 0v4h6v6a3 3 0 0 0 0 6v6h-6v4a3 3 0 0 1-6 0v-4h-6v-6a3 3 0 0 0 0-6v-6z"/><path class="d" d="M19 19l5 5 5-5"/>'),

    // ---------- defensa ----------
    '🌀': svg('<path class="d" d="M24 6a18 18 0 0 1 0 36 18 18 0 0 1 0-36zM24 14v20M14 24h20"/>'),
    '🎯': svg('<circle class="d" cx="24" cy="24" r="18"/><circle class="d" cx="24" cy="24" r="11"/><circle class="d" cx="24" cy="24" r="4"/>'),
    '💥': svg('<path class="d" d="M24 6l4 8 9-2-6 7 6 7-9-2-4 8-4-8-9 2 6-7-6-7 9 2z"/><path class="d" d="M24 18v12"/>'),
    '🔥': svg('<path class="d" d="M24 4c3 6 6 9 6 14a6 5 0 0 1-12 0c0-3 2-6 6-14z"/><path class="d" d="M24 44c7-2 10-6 10-11a7 6 0 0 0-14 0c0 3 2 6 5 8"/>'),
    '🚪': svg('<rect class="d" x="8" y="6" width="22" height="36" rx="2"/><rect class="d" x="34" y="6" width="6" height="36" rx="2"/><circle class="d" cx="26" cy="24" r="1.6"/>'),
    '🛰️': svg('<rect class="d" x="10" y="26" width="28" height="14" rx="3"/><path class="d" d="M14 26V14h20v12"/><path class="d" d="M18 8l6-6 6 6M24 14v-6"/><circle class="d" cx="18" cy="33" r="2"/><circle class="d" cx="30" cy="33" r="2"/>'),

    // ---------- ip ----------
    '🔗': svg('<path class="d" d="M20 28L28 20M16 24a4 4 0 0 1 0-6l4-4a4 4 0 0 1 6 0M24 32a4 4 0 0 0 6 0l4-4a4 4 0 0 0 0-6"/><path class="d" d="M28 28l-8 0"/>')
  };

  // 1) Reemplaza cada <span class="ico">emoji</span> por su SVG inline custom
  document.querySelectorAll('.ico').forEach(function(span){
    var key = (span.textContent || '').trim();
    var svgHtml = INLINE[key];
    if(!svgHtml) return;
    var tmp = document.createElement('div');
    tmp.innerHTML = svgHtml;
    var node = tmp.firstChild;
    node.classList.add('pending');   // trazo oculto hasta entrar en pantalla
    span.replaceWith(node);
  });

  // 2) Revela al scroll: dibuja los trazos de los SVG y desvanece las cards
  var revealables = document.querySelectorAll('.reveal, .ico-svg.pending');
  if(!('IntersectionObserver' in window)){
    revealables.forEach(function(el){ el.classList.add('in-view'); el.classList.remove('pending'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        e.target.classList.remove('pending');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealables.forEach(function(el){ io.observe(el); });
})();
