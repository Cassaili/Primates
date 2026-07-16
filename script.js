let currentCentralidad = 'todos';
let currentTema = 'todos';
let searchTerm = '';
let charts = {};

function tagClass(tipo){
  if(tipo === 'Central fuerte') return 'central';
  if(tipo === 'Central contextual') return 'context';
  return 'apoyo';
}

function renderKPIs(){
  document.getElementById('kpi-total').textContent = articles.length;
  document.getElementById('kpi-central').textContent = articles.filter(a=>a.centralidad==='Central fuerte').length;
  document.getElementById('kpi-contextual').textContent = articles.filter(a=>a.centralidad==='Central contextual').length;
  document.getElementById('kpi-apoyo').textContent = articles.filter(a=>a.centralidad.includes('Apoyo')).length;
  document.getElementById('kpi-temas').textContent = temas.length;
}

function renderTemaFilterButtons(){
  const container = document.getElementById('temaFilters');
  temas.forEach(t=>{
    const btn = document.createElement('button');
    btn.className = 'filter-btn tema-btn';
    btn.dataset.tema = t.id;
    btn.textContent = temaLabels[t.id] || t.nombre;
    container.appendChild(btn);
  });
  container.querySelectorAll('.tema-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      container.querySelectorAll('.tema-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      currentTema = btn.dataset.tema;
      renderArticles();
      renderCharts();
    });
  });
}

function articleMatches(a){
  const matchesCentralidad = currentCentralidad === 'todos' || a.centralidad === currentCentralidad;
  const matchesTema = currentTema === 'todos' || (a.temasSecundarios && a.temasSecundarios.includes(currentTema));
  const haystack = [
    a.referenciaCompleta, a.autores, a.anio, a.titulo, a.revista, a.doi, a.especie,
    a.sitioEstudio, a.centralidad, a.temaPrincipal, (a.temasSecundarios||[]).join(' '),
    a.objetivo, a.muestra, a.metodosPrincipales, a.variablesAnalizadas,
    (a.resultadosPrincipales||[]).join(' '), a.interpretacion, a.implicaciones, a.usoDivulgacion
  ].join(' ').toLowerCase();
  const matchesSearch = haystack.includes(searchTerm.toLowerCase());
  return matchesCentralidad && matchesTema && matchesSearch;
}

function renderArticles(){
  const list = document.getElementById('articleList');
  const filtered = articles.filter(articleMatches).sort((a,b)=>a.id-b.id);
  const countText = `${filtered.length} resultado${filtered.length===1?'':'s'}`;
  document.getElementById('resultCount').textContent = countText;
  document.getElementById('resultCount2').textContent = countText;

  list.innerHTML = filtered.map(a=>`
    <article class="article-card">
      <div class="article-top">
        <div>
          <h3>${a.id}. ${a.autores.split(',')[0]} et al. (${a.anio})</h3>
          <p class="subline">${a.titulo}</p>
        </div>
        <span class="tag ${tagClass(a.centralidad)}">${a.centralidad}</span>
      </div>
      <p class="meta"><strong>Revista:</strong> ${a.revista} · <strong>Especie:</strong> ${a.especie}</p>
      <span class="tema-tag">${a.temaPrincipal}</span>
      <details>
        <summary>Ver ficha completa</summary>
        <div class="detail-grid">
          <div class="detail-block"><h4>Sitio de estudio</h4><p>${a.sitioEstudio}</p></div>
          <div class="detail-block"><h4>Objetivo</h4><p>${a.objetivo}</p></div>
          <div class="detail-block"><h4>Muestra</h4><p>${a.muestra}</p></div>
          <div class="detail-block"><h4>Métodos principales</h4><p>${a.metodosPrincipales}</p></div>
          <div class="detail-block"><h4>Variables analizadas</h4><p>${a.variablesAnalizadas}</p></div>
          <div class="detail-block"><h4>Resultados principales</h4>
            <ul>${a.resultadosPrincipales.map(r=>`<li>${r}</li>`).join('')}</ul>
          </div>
          <div class="detail-block"><h4>Interpretación</h4><p>${a.interpretacion}</p></div>
          <div class="detail-block"><h4>Implicaciones para reproducción / maternidad / cuidado infantil</h4><p>${a.implicaciones}</p></div>
          <div class="detail-block"><h4>Uso sugerido para divulgación</h4><p>${a.usoDivulgacion}</p></div>
          <div class="detail-block">
            <h4>Referencia completa</h4>
            <p>${a.referenciaCompleta}</p>
            <p class="doi-line">DOI: ${a.doi}</p>
            <a class="pdf-link" href="${a.archivoPdf}" target="_blank" rel="noopener">📄 Ver PDF original</a>
          </div>
        </div>
      </details>
    </article>`).join('');
}

function countBy(arr, key){
  return arr.reduce((acc,item)=>{acc[item[key]]=(acc[item[key]]||0)+1;return acc;},{});
}

function countByTema(arr){
  const acc = {};
  arr.forEach(a=>{
    (a.temasSecundarios||[]).forEach(tid=>{
      const label = temaLabels[tid] || tid;
      acc[label] = (acc[label]||0)+1;
    });
  });
  return acc;
}

function destroyChart(key){
  if(charts[key]){ charts[key].destroy(); }
}

function renderCharts(){
  const filtered = articles.filter(a => currentCentralidad === 'todos' || a.centralidad === currentCentralidad);

  const temasCount = countByTema(filtered);
  destroyChart('temas');
  charts.temas = new Chart(document.getElementById('chartTemas'), {
    type: 'bar',
    data: { labels: Object.keys(temasCount), datasets: [{ label:'Publicaciones', data: Object.values(temasCount), backgroundColor:'#dfece3', borderColor:'#2f6b4f', borderWidth:1.5, borderRadius:8 }] },
    options: { responsive:true, indexAxis:'y', plugins:{legend:{display:false}}, scales:{x:{beginAtZero:true,ticks:{precision:0}}} }
  });

  const centralidadCount = countBy(articles, 'centralidad');
  destroyChart('centralidad');
  charts.centralidad = new Chart(document.getElementById('chartCentralidad'), {
    type:'doughnut',
    data:{ labels:Object.keys(centralidadCount), datasets:[{ data:Object.values(centralidadCount), backgroundColor:['#2f6b4f','#c18c2d','#6c5741'], borderColor:'#fff', borderWidth:3 }] },
    options:{ responsive:true, plugins:{legend:{position:'bottom'}} }
  });

  const anioCount = countBy(articles, 'anio');
  const sortedYears = Object.keys(anioCount).sort();
  destroyChart('anio');
  charts.anio = new Chart(document.getElementById('chartAnio'), {
    type:'bar',
    data:{ labels: sortedYears, datasets:[{ label:'Publicaciones', data: sortedYears.map(y=>anioCount[y]), backgroundColor:'#eef6f0', borderColor:'#c18c2d', borderWidth:1.5, borderRadius:8 }] },
    options:{ responsive:true, plugins:{legend:{display:false}}, scales:{y:{beginAtZero:true,ticks:{precision:0}}} }
  });

  const revistaCount = countBy(articles, 'revista');
  destroyChart('revista');
  charts.revista = new Chart(document.getElementById('chartRevista'), {
    type:'doughnut',
    data:{ labels:Object.keys(revistaCount), datasets:[{ data:Object.values(revistaCount), backgroundColor:['#2f6b4f','#c18c2d','#6c5741','#88a77e','#a3c4b1','#e3c67a'], borderColor:'#fff', borderWidth:3 }] },
    options:{ responsive:true, plugins:{legend:{position:'bottom', labels:{boxWidth:11, font:{size:10.5}}}} }
  });
}

function renderTopics(){
  const buttons = document.getElementById('topicButtons');
  buttons.innerHTML = temas.map((t,i)=>`<button class="topic-btn ${i===0?'active':''}" data-topic="${i}">${t.nombre}</button>`).join('');
  buttons.querySelectorAll('.topic-btn').forEach(btn=>btn.addEventListener('click',()=>{
    buttons.querySelectorAll('.topic-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderTopicDetail(Number(btn.dataset.topic));
  }));
  renderTopicDetail(0);
}

function renderTopicDetail(idx){
  const t = temas[idx];
  const pubs = t.pubs.map(id => articles.find(a=>a.id===id)).filter(Boolean);
  document.getElementById('topicDetail').innerHTML = `
    <h3>${t.nombre}</h3>
    <h4>Publicaciones que lo sustentan</h4>
    <ul>${pubs.map(p=>`<li>${p.autores.split(',')[0]} et al. (${p.anio}) — ${p.titulo}</li>`).join('')}</ul>
    <h4>Hallazgos principales</h4>
    <ul>${t.hallazgos.map(h=>`<li>${h}</li>`).join('')}</ul>
    <h4>Interpretación breve</h4>
    <p>${t.interpretacionBreve}</p>
    <h4>Posible uso para el reporte / artículo de divulgación</h4>
    <p>${t.usoDivulgacion}</p>`;
}

function init(){
  renderKPIs();
  renderTemaFilterButtons();
  renderArticles();
  renderCharts();
  renderTopics();

  document.querySelectorAll('#centralidadFilters .filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('#centralidadFilters .filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentCentralidad = btn.dataset.filter;
    renderArticles();
    renderCharts();
  }));

  document.getElementById('searchInput').addEventListener('input', e=>{
    searchTerm = e.target.value;
    renderArticles();
  });
}

init();
