const projectsContainer = document.getElementById('grid-container');
const loadMoreBtn = document.getElementById('load-more-btn');

// Ejemplo de proyectos
const projects = [
  
    { "imageUrl": "/imagenes de sitios/aabstylesite.com_ (1).png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-1", "name": "AAB Style Site", "date": "2024" },
    { "imageUrl": "/imagenes de sitios/saboracolombia.co_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-2", "name": "Sabor a Colombia", "date": "2024" },
    { "imageUrl": "/imagenes de sitios/colibrimoda.com_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-4", "name": "Colibri Moda", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/stextensions.com_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-5", "name": "ST Extensions", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/aeluxury.co_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-6", "name": "AE Luxury", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/mildemonios.co_demonios-reviven_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-27", "name": "Mildemonios", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/rebelmedia.brandsholdingcompany.com_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-7", "name": "Rebel Media", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/525mobiliario.com_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-8", "name": "525 Mobiliario", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/gammacuriosity.com_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress | SEO", "url": "url-del-proyecto-3", "name": "Gamma Curiosity", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/somosmarketinggroup.com_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-9", "name": "Somos Marketing Group", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/thecraftissue.com_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-10", "name": "The Craft Issue", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/monadconstruccion.com_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-11", "name": "Monad Construccion", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/www.cesarval.me_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-12", "name": "Cesar Val", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/mellowandbanana.co_ (1).png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-13", "name": "Mellow and Banana", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/elfilme.com_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress | SEO", "url": "url-del-proyecto-14", "name": "El Filme", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/allinmde.com_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-15", "name": "All In MDE", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/puntoverde.com.ec_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-16", "name": "Punto Verde", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/ampaca.com_ (1).png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-17", "name": "Ampaca", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/hopesportswear.com.co_ (1).png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-18", "name": "Hope Sportswear", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/www.parquelosheroes.cl_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-19", "name": "Parque Los Heroes", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/cafemariscal.com.co_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-20", "name": "Cafe Mariscal", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/mitanlegal.com_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-21", "name": "Mitan Legal", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/licoamerica.com_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-22", "name": "Lico America", "date": "2023" },
    { "imageUrl": "/imagenes de sitios/www.americasbps.com.co_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-23", "name": "Americas BPS", "date": "2022" },
    { "imageUrl": "/imagenes de sitios/ortodonciacamilaborda.com_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-24", "name": "Ortodoncia Camila Borda", "date": "2022" },
    { "imageUrl": "/imagenes de sitios/canalesdesarrolladores.com_.png", "description": "HTML | CSS | JavaScript | PHP | Wordpress", "url": "url-del-proyecto-25", "name": "Canales Desarrolladores", "date": "2022" },
    { "imageUrl": "/imagenes de sitios/h20capital.com_.png", "description": "HTML | CSS | JavaScript | Php | Wordpress | SEO", "url": "url-del-proyecto-26", "name": "H2O Capital", "date": "2022" },
    { "imageUrl": "/imagenes de sitios/adeiwa.com.co_ (1).png", "description": "HTML | CSS | JavaScript | Php | Wordpress", "url": "url-del-proyecto-28", "name": "Adeiwa", "date": "2022" },
    { "imageUrl": "/imagenes de sitios/www.templa.app_ (1).png", "description": "HTML | CSS | JavaScript | Php | Wordpress", "url": "url-del-proyecto-29", "name": "Templa", "date": "2022" },
    { "imageUrl": "/imagenes de sitios/sie.png", "description": "Html | Css | Js | Php | Wordpress", "url": "url-del-proyecto-30", "name": "SIE", "date": "2022" },
    { "imageUrl": "/imagenes de sitios/laurabenavidesdlrv.github.io_WeatherApp_ (1).png", "description": "HTML | CSS | JavaScript | Bootstrap | React.js | JSON", "url": "url-del-proyecto-31", "name": "Weather App", "date": "2022" },
    { "imageUrl": "/imagenes de sitios/Landing.png", "description": "HTML | CSS | JavaScript | Bootstrap ", "url": "url-del-proyecto-32", "name": "Landing", "date": "2021" },
    { "imageUrl": "/imagenes de sitios/Tributo a Feynman.png", "description": "HTML | CSS | JavaScript", "url": "url-del-proyecto-33", "name": "Tributo a Feynman", "date": "2021" },
    { "imageUrl": "/imagenes de sitios/Bitcoin.png", "description": "HTML | CSS | JavaScript | Bootstrap | VUE", "url": "url-del-proyecto-34", "name": "Bitcoin", "date": "2021" }

];



let projectsDisplayed = 12;

// Función para cargar proyectos
function loadProjects(start, end) {
  let colorIndex = 0;
  for (let i = start; i < end; i++) {
    if (i >= projects.length) {
      loadMoreBtn.style.display = 'none';
      break;
    }
    const project = projects[i];
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    const link = document.createElement('a');
    link.href = project.url;
    const img = document.createElement('img');
    img.src = project.imageUrl;
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <p id="date-project">${project.date}</p>
    `;
    link.appendChild(img);
    gridItem.appendChild(link);
    gridItem.appendChild(overlay);
    projectsContainer.appendChild(gridItem);

  }
}

// Cargar proyectos iniciales
loadProjects(0, projectsDisplayed);

// Evento de clic para cargar más proyectos
loadMoreBtn.addEventListener('click', () => {
  projectsDisplayed += 8;
  loadProjects(projectsDisplayed - 8, projectsDisplayed);
});