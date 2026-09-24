const projects = [
  {
    category:"mural", type:"WALL MURALS", title:"Welcome to Club Roso",
    image:"assets/images/mural-club-roso.webp",
    description:"This mural unfolds like a cinematic hallucination—fragmented memories, neon nostalgia, and pop-cultural icons collide in a single immersive frame. Cars, faces, symbols, and signage overlap to recreate the chaos and thrill of urban nightlife.",
    meta:[["Location","Club Roso, C-Scheme, Jaipur"],["Size","16.5 × 8.5 FT"],["Duration","40 DAYS"]]
  },
  {
    category:"mural", type:"WALL MURALS", title:"Fragments of Her",
    image:"assets/images/mural-fragments.webp",
    description:"A powerful female visage emerges from fractured planes of color and geometry, symbolizing the layered nature of identity. Bold diagonals and contrasting hues disrupt the portrait, suggesting emotional depth, resilience, and inner conflict.",
    meta:[["Location","Rupayan Textile, Sitapura, Jaipur"],["Size","23 × 16.5 FT"],["Duration","20 DAYS"]]
  },
  {
    category:"mural", type:"WALL MURALS", title:"Pickleball Panorama",
    image:"assets/images/mural-panorama.webp",
    description:"An immersive, large-scale mural that transports the viewer to a whimsical, stylized London, reimagining the urban landscape as a vibrant backdrop for the sport of pickleball.",
    meta:[["Location","Pickadily Pickleball Club, Vaishali Nagar, Jaipur"],["Size","44 × 14-6 FT"],["Duration","20 DAYS"]]
  },
  {
    category:"mural", type:"WALL MURALS", title:"Pickleball Circus",
    image:"assets/images/mural-circus.webp",
    description:"This vibrant mural playfully reimagines London’s Piccadilly Circus as a high-energy pickleball arena. Hot air balloons, festive bunting and two jesters bring carnival movement to the court.",
    meta:[["Location","Pickadily Pickleball Club, Vaishali Nagar, Jaipur"],["Size","22 × 20 FT"],["Duration","15 DAYS"]]
  },
  {
    category:"mural", type:"WALL MURALS", title:"Jaipur Horizons",
    image:"assets/images/mural-jaipur.webp",
    description:"A sophisticated wall graphic that pays homage to the architectural heritage of Jaipur, layering intricate line art of the city's iconic monuments against a serene, circular skyscape.",
    meta:[["Location","AIM Architects, C-Scheme, Jaipur"],["Size","6 × 5 FT"],["Duration","10 DAYS"]]
  },
  {
    category:"mural", type:"WALL MURALS", title:"Realms of Reverie",
    image:"assets/images/mural-realms-4.webp",
    description:"A surrealist narrative that invites the viewer into a dreamlike continuum where logic dissolves, featuring melting clocks, floating architectural elements and symbolic motifs.",
    meta:[["Location","Wunderland, Ajmer Rd, Jaipur"],["Size","60 × 14 FT"],["Duration","45 DAYS"]]
  },
  {
    category:"painting", type:"PAINTINGS", title:"Verdant Spirit",
    image:"assets/images/painting-verdant-1.webp",
    description:"This portrait explores the symbiotic relationship between humanity and nature, depicting a face emerging from—and consuming—a lush canopy of foliage.",
    meta:[["Size","6 × 4 FT"],["Duration","20 DAYS"]]
  },
  {
    category:"painting", type:"PAINTINGS", title:"Sacred Shores",
    image:"assets/images/painting-sacred.webp",
    description:"A sweeping landscape painting that captures the spiritual stillness and architectural grandeur of the ancient ghats. A warm, golden palette evokes the glow of sunrise or sunset upon the stone steps and temples.",
    meta:[["Size","7 × 4.5 FT"],["Duration","45 DAYS"]]
  },
  {
    category:"painting", type:"PAINTINGS", title:"The Royal Grove",
    image:"assets/images/painting-royal.webp",
    description:"Inspired by traditional Indian Pichwai art, this mural brings a touch of regal serenity to the interior space, featuring stylized cows and majestic palm trees rendered with precise, traditional motifs.",
    meta:[["Size","6 × 4 FT"],["Duration","30 DAYS"]]
  },
  {
    category:"painting", type:"PAINTINGS", title:"Gilded Reflections",
    image:"assets/images/painting-gilded.webp",
    description:"An abstract cityscape using heavy texture and a palette of teal, gold and slate to suggest a skyline reflected in water. Metallic accents catch the light, adding depth and movement.",
    meta:[["Size","6 × 5 FT"],["Duration","30 DAYS"]]
  },
  {
    category:"painting", type:"PAINTINGS", title:"The Azure Guardian",
    image:"assets/images/painting-azure.webp",
    description:"Drawing inspiration from traditional folk narratives, this vertical panel features a stylized, celestial-blue feline resting beneath a solitary palm. Repetitive patterns blend indigenous art forms with modern graphic sensibilities.",
    meta:[["Size","5 × 1.5 FT"],["Duration","15 DAYS"]]
  },
  {
    category:"painting", type:"TEXTURED / RELIEF ART", title:"Concrete Brutalism",
    image:"assets/images/relief-concrete.webp",
    description:"This relief work explores the raw beauty of cement and light, utilizing geometric cutouts and raised surfaces to create a play of shadow. The monochromatic, tactile surface emphasizes form over color.",
    meta:[["Size","6 × 5 FT"],["Duration","20 DAYS"]]
  },
  {
    category:"painting", type:"PAINTINGS", title:"Ancestral Legacy",
    image:"assets/images/painting-ancestral.webp",
    description:"A classical oil-style portrait that commands respect and evokes history, capturing the dignity of a royal subject. Rich, deep background tones contrast with intricate jewelry and attire.",
    meta:[["Size","4 × 2 FT"],["Duration","50 DAYS"]]
  },
  {
    category:"painting", type:"PAINTINGS", title:"Emerald Strata",
    image:"assets/images/painting-emerald-3.webp",
    description:"A massive, fluid-art installation that mimics the organic, banded beauty of malachite stone or aerial landscapes. Swirling greens and whites are broken by veins of gold.",
    meta:[["Size","20 × 15 FT"],["Duration","90 DAYS"]]
  },
  {
    category:"painting", type:"RELIEF / MIXED MEDIA", title:"Velvet Illusion",
    image:"assets/images/relief-velvet.webp",
    description:"A mixed-media 3D relief diptych that mimics the flow of heavy, draped fabric frozen in time, punctuated by floating golden spheres. A study in tension, texture and the deception of the eye.",
    meta:[["Size","4 × 4 FT (EACH)"],["Duration","15 DAYS"]]
  },
  {
    category:"painting", type:"PAINTINGS", title:"Gilded Terrain",
    image:"assets/images/painting-gilded-terrain.webp",
    description:"An abstract composition exploring material contrast, where rugged, splattered textures meet the refined elegance of metallic gold foiling. Organic shapes evoke an earthy topography.",
    meta:[["Size","6 × 4 FT"],["Duration","20 DAYS"]]
  },
  {
    category:"object", type:"INSTALLATION", title:"Monolithic Rock Wall",
    image:"assets/images/rock-wall.webp",
    description:"This installation transforms a café interior with a rugged, hand-sculpted rock wall that mimics natural basalt formations. The heavy textured stone facade wraps around the counter and walls.",
    meta:[["Location","Saint Expresso, C-Scheme, Jaipur"],["Duration","20 DAYS"]]
  },
  {
    category:"object", type:"CUSTOM FURNITURE", title:"The Graffiti Throne",
    image:"assets/images/graffiti-chair-3.webp",
    description:"A rebellious fusion of classical furniture design and street culture, featuring Louis XVI-style chairs vandalized with vibrant graffiti tags. The project reclaims 'precious' antiques with urban energy and neon sprays.",
    meta:[["Type","CUSTOM FURNITURE"],["Duration","3 DAYS"]]
  },
  {
    category:"object", type:"SCULPTURE DESIGN", title:"Visionary Horizon",
    image:"assets/images/sculpture-horizon.webp",
    description:"This monumental sculpture serves as a futuristic gateway, embodying the symbiotic balance between urban expansion and natural tranquility. A fluid, metallic form cradles a miniature skyline and lush greenery.",
    meta:[["Type","SCULPTURE DESIGN"],["Size","12 × 11 FT"]]
  }
];

const container = document.getElementById('projects');
const filters = [...document.querySelectorAll('.filter')];

function cardTemplate(p, index){
  return `<article class="project" data-category="${p.category}" data-index="${index}" style="animation-delay:${Math.min(index*45,450)}ms">
    <img src="${p.image}" alt="${p.title}" loading="lazy">
    <div class="project-info">
      <div class="meta"><span>${p.type}</span><span>(${String(index+1).padStart(2,'0')})</span></div>
      <h3>${p.title}</h3>
      <p>${p.description.slice(0, 120)}${p.description.length>120?'…':''}</p>
    </div>
  </article>`;
}
container.innerHTML = projects.map(cardTemplate).join('');

filters.forEach(btn=>{
  btn.addEventListener('click',()=>{
    filters.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const value = btn.dataset.filter;
    document.querySelectorAll('.project').forEach(card=>{
      card.classList.toggle('hidden', value !== 'all' && card.dataset.category !== value);
    });
  });
});

const lightbox = document.getElementById('lightbox');
const lbImage = document.getElementById('lightboxImage');
const lbCategory = document.getElementById('lightboxCategory');
const lbTitle = document.getElementById('lightboxTitle');
const lbDescription = document.getElementById('lightboxDescription');
const lbMeta = document.getElementById('lightboxMeta');

function openLightbox(p){
  lbImage.src = p.image;
  lbImage.alt = p.title;
  lbCategory.textContent = p.type;
  lbTitle.textContent = p.title;
  lbDescription.textContent = p.description;
  lbMeta.innerHTML = p.meta.map(([k,v])=>`<div><span>${k}</span><strong>${v}</strong></div>`).join('');
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
}
function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  document.body.classList.remove('no-scroll');
}
container.addEventListener('click', e=>{
  const card=e.target.closest('.project');
  if(!card) return;
  openLightbox(projects[Number(card.dataset.index)]);
});
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e=>{ if(e.target===lightbox) closeLightbox(); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeLightbox(); });

document.getElementById('year').textContent = new Date().getFullYear();

const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
  });
},{threshold:.1});
document.querySelectorAll('.section').forEach(s=>io.observe(s));

/* ─── Hamburger / Mobile Nav ─── */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileNav');

if(hamburgerBtn && mobileNav){
  hamburgerBtn.addEventListener('click', ()=>{
    const isOpen = mobileNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
    mobileNav.setAttribute('aria-hidden', !isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
  });

  mobileNav.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click', ()=>{
      mobileNav.classList.remove('open');
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
    });
  });
}
