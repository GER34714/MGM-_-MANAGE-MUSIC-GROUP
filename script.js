fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    const cont = document.getElementById('artistasContainer');
    data.forEach(art => {
      const card = document.createElement('div');
      card.className = 'artista';
      card.innerHTML = `
        <img src="${art.img}" alt="${art.nombre}">
        <h3>${art.nombre}</h3>
        <button onclick="openModal('${art.nombre.replace(/\s+/g,'')}')">Ver Presentación</button>
      `;
      cont.appendChild(card);

      // Crear modal oculto
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.id = art.nombre.replace(/\s+/g,'');
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close" onclick="closeModal('${modal.id}')">&times;</span>
          <h3>${art.nombre}</h3>
          <p>${art.descripcion}</p>
          <iframe src="${art.video}" allowfullscreen></iframe>
          <a href="https://wa.me/5491157343551" target="_blank">📲 Contratar Ahora</a>
        </div>`;
      document.body.appendChild(modal);
    });
  });

function openModal(id){document.getElementById(id).style.display='block';}
function closeModal(id){document.getElementById(id).style.display='none';}
window.onclick=function(e){
  document.querySelectorAll('.modal').forEach(m=>{
    if(e.target==m){m.style.display='none';}
  });
}
