const search=document.querySelector('#search-species');
if(search){
 const normalize=value=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const cards=[...document.querySelectorAll('[data-species]')];
 search.addEventListener('input',()=>{const term=normalize(search.value);let total=0;for(const card of cards){card.hidden=!normalize(card.dataset.species).includes(term);if(!card.hidden)total++;}document.querySelector('#result-count').textContent=`${total} ${total===1?'entrada':'entradas'}`;document.querySelector('#no-results').hidden=total>0;});
}
const viewer=document.querySelector('#photo-viewer');
if(viewer){let trigger=null;document.querySelectorAll('[data-photo]').forEach(button=>button.addEventListener('click',()=>{trigger=button;viewer.querySelector('img').src=button.dataset.photo;viewer.querySelector('img').alt=button.dataset.alt;viewer.querySelector('p').textContent=button.dataset.caption;viewer.showModal();}));viewer.querySelector('.viewer-close').addEventListener('click',()=>viewer.close());viewer.addEventListener('click',event=>{if(event.target===viewer){const box=viewer.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)viewer.close();}});viewer.addEventListener('close',()=>trigger?.focus());}
document.querySelectorAll('[data-print]').forEach(button=>button.addEventListener('click',()=>window.print()));
