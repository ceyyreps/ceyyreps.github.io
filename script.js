// shared small scripts
document.getElementById('year')?.textContent = new Date().getFullYear();

// simple quick message handler on contact page
const quick = document.getElementById('quickMsg');
if(quick){
  quick.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = document.getElementById('fname').value.trim();
    const item = document.getElementById('item').value.trim();
    const out = document.getElementById('msgResult');
    out.textContent = `Thanks ${name}! We received your interest for "${item}". We'll contact you on WhatsApp.`;
    quick.reset();
  });
}

// simple add-to-cart demo (no backend)
document.addEventListener('click', e=>{
  if(e.target.matches('.btn.add')){
    const id = e.target.dataset.id;
    alert('Added item '+id+' to cart (demo). Contact via WhatsApp to complete the order.');
  }
});