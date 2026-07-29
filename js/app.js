async function load(page){
 const r=await fetch(`content/${page}/index.md`).catch(()=>null);
 document.getElementById('content').textContent=r?await r.text():'Contenu à venir...';
}
document.querySelectorAll('.tile').forEach(t=>t.onclick=e=>{e.preventDefault();load(t.dataset.page);});
