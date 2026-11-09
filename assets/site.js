(function(){
  var mp = document.getElementById('more-posts');
  if (mp){ mp.addEventListener('click', function(){ var g=document.querySelector('.posts'); var open=g.classList.toggle('all'); mp.setAttribute('aria-expanded', open); mp.textContent = open ? 'Minder blogs' : 'Meer blogs'; }); }
  var dlg = document.getElementById('bio');
  function openBio(el){
    if (!dlg || !dlg.showModal) return;
    var img = el.querySelector('img'), name = el.querySelector('.peer-txt b').textContent;
    var bi = document.getElementById('bio-img'); bi.src = img ? img.src : ''; bi.alt = name;
    document.getElementById('bio-name').textContent = name;
    var role = el.querySelector('.peer-txt span'); document.getElementById('bio-role').textContent = role ? role.textContent : '';
    document.getElementById('bio-body').innerHTML = el.querySelector('.peer-bio').innerHTML;
    dlg.showModal(); document.getElementById('bio-body').scrollTop = 0;
  }
  if (dlg){
    dlg.addEventListener('click', function(e){ if (e.target === dlg) dlg.close(); });
    document.getElementById('bio-close').addEventListener('click', function(){ dlg.close(); });
  }
  document.querySelectorAll('.has-bio').forEach(function(el){
    el.addEventListener('click', function(){ openBio(el); });
    el.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openBio(el); } });
  });
})();
