const projects = [
  {
    category:"mural", type:"WALL MURALS", title:"Welcome to Club Roso",
    image:"mural-club-roso.webp",
    description:"This mural unfolds like a cinematic hallucination—fragmented memories, neon nostalgia, and pop-cultural icons collide in a single immersive frame. Cars, faces, symbols, and signage overlap to recreate the chaos and thrill of urban nightlife.",
    meta:[["Location","Club Roso, C-Scheme, Jaipur"],["Size","16.5 × 8.5 FT"],["Duration","40 DAYS"]]
  },
  {
    category:"mural", type:"WALL MURALS", title:"Fragments of Her",
    image:"mural-fragments.webp",
    description:"A powerful female visage emerges from fractured planes of color and geometry, symbolizing the layered nature of identity. Bold diagonals and contrasting hues disrupt the portrait, suggesting emotional depth, resilience, and inner conflict.",
    meta:[["Location","Rupayan Textile, Sitapura, Jaipur"],["Size","23 × 16.5 FT"],["Duration","20 DAYS"]]
  },
  {
    category:"mural", type:"WALL MURALS", title:"Pickleball Panorama",
    image:"mural-panorama.webp",
    description:"An immersive, large-scale mural that transports the viewer to a whimsical, stylized London, reimagining the urban landscape as a vibrant backdrop for the sport of pickleball.",
    meta:[["Location","Pickadily Pickleball Club, Vaishali Nagar, Jaipur"],["Size","44 × 14-6 FT"],["Duration","20 DAYS"]]
  },
  {
    category:"mural", type:"WALL MURALS", title:"Pickleball Circus",
    image:"mural-circus.webp",
    description:"This vibrant mural playfully reimagines London’s Piccadilly Circus as a high-energy pickleball arena. Hot air balloons, festive bunting and two jesters bring carnival movement to the court.",
    meta:[["Location","Pickadily Pickleball Club, Vaishali Nagar, Jaipur"],["Size","22 × 20 FT"],["Duration","15 DAYS"]]
  },
  {
    category:"mural", type:"WALL MURALS", title:"Jaipur Horizons",
    image:"mural-jaipur.webp",
    description:"A sophisticated wall graphic that pays homage to the architectural heritage of Jaipur, layering intricate line art of the city's iconic monuments against a serene, circular skyscape.",
    meta:[["Location","AIM Architects, C-Scheme, Jaipur"],["Size","6 × 5 FT"],["Duration","10 DAYS"]]
  },
  {
    category:"mural", type:"WALL MURALS", title:"Realms of Reverie",
    image:"mural-realms-4.webp",
    images:[
      "mural-realms-4.webp",
      "mural-realms-1.webp",
      "mural-realms-2.webp",
      "mural-realms-3.webp",
      "mural-realms-5.webp",
      "mural-realms-6.webp",
      "mural-realms-7.webp",
      "mural-realms-8.webp",
      "mural-realms-9.webp"
    ],
    description:"A surrealist narrative that invites the viewer into a dreamlike continuum where logic dissolves, featuring melting clocks, floating architectural elements and symbolic motifs.",
    meta:[["Location","Wunderland, Ajmer Rd, Jaipur"],["Size","60 × 14 FT"],["Duration","45 DAYS"]]
  },
  {
    category:"mural", type:"WALL MURALS", title:"Practice in Perspective",
    image:"mural-practice.webp",
    images:[
      "mural-practice.webp",
      "mural-practice-process-detail.webp",
      "mural-practice-process-study.webp",
      "mural-practice-process-wall.webp"
    ],
    description:"An architectural portrait of Viaan Architects, envisioned as a collective landscape of ideas brought to life. The mural weaves together the firm's diverse projects into one continuous composition, celebrating the relationship between design, place, and the built environment. Fine linework captures the individual character of each structure, while the rising sun symbolises vision, growth, and the possibilities of architecture.",
    meta:[["Size","7 × 5 FT"],["Duration","6 DAYS"]]
  },
  {
    category:"object", type:"INSTALLATION", title:"Beyond the Blueprint",
    image:"mural-blueprint.webp",
    description:"A bespoke architectural installation created for Viaan Architects, bringing their portfolio to life through a layered composition of architectural linework and coloured visualisations. The artwork captures the evolution of a project from drawing to built form, creating a striking transition between concept and reality. Anchoring the composition is a hand-sculpted rock-textured band, crafted to introduce a raw, organic counterpoint to the precision of architectural design. Integrated lighting enhances its texture, transforming the wall into a dimensional, site-specific art installation.",
    meta:[["Location","Viaan Designs, Jaipur"],["Size","7 × 5 FT"],["Duration","10 DAYS"]]
  },
  {
    category:"object", type:"RELIEF / SCULPTURAL ART", title:"Infinite Calm",
    image:"relief-infinite-calm.webp",
    images:[
      "relief-infinite-calm.webp",
      "relief-infinite-calm-detail-1.webp",
      "relief-infinite-calm-detail-2.webp"
    ],
    description:"A sculptural wall artwork that interprets Shiva through the language of movement, stillness, and nature. Flowing contours trace water, wind, mountains, and foliage around a serene central figure, creating a composition that feels both ancient and contemporary. Subtle gold detailing across the crescent, ornaments, and Nandi introduces moments of warmth against the restrained stone-like surface, transforming mythology into a refined architectural statement.",
    meta:[["Size","6 × 4 FT"],["Duration","6 DAYS"]]
  },
  {
    category:"object", type:"RELIEF / SCULPTURAL ART", title:"Divine Harmony",
    image:"relief-divine-harmony-room.webp",
    images:[
      "relief-divine-harmony-room.webp",
      "relief-divine-harmony.webp",
      "relief-divine-harmony-detail-1.webp",
      "relief-divine-harmony-detail-2.webp"
    ],
    description:"Designed as a statement artwork within an intimate architectural setting, this relief mural reinterprets the timeless imagery of Shiva and Parvati through a refined interplay of sculptural depth and decorative detail. A dark, understated ground accentuates the figures, while the floral halo, carved hair, and gold embellishments introduce warmth and visual richness. The result is an artwork that balances cultural symbolism with contemporary material expression, creating a focal point of quiet grandeur.",
    meta:[["Size","8 × 4.5 FT"],["Duration","6 DAYS"]]
  },
  {
    category:"object", type:"INSTALLATION", title:"Living Column",
    image:"installation-living-column.webp",
    images:[
      "installation-living-column.webp",
      "installation-living-column-before.webp",
      "installation-living-column-detail.webp"
    ],
    description:"An exploration of organic form and sculptural storytelling, this installation transforms a conventional column into a monumental tree-inspired feature. Handcrafted textures recreate the rugged character of bark, while moss-like accents and an overhead canopy add depth, movement, and natural character. Designed for Gaurang Environmentalist Group, the installation introduces a biophilic dimension to the interior, demonstrating how art can soften architectural spaces and create a more evocative relationship between people and nature.",
    meta:[["Location","Gaurang Environmentalist Group"],["Size","10 × 3 FT"],["Duration","8 DAYS"]]
  },
  {
    category:"painting", type:"PAINTINGS", title:"Verdant Spirit",
    image:"painting-verdant-1.webp",
    images:["painting-verdant-1.webp","painting-verdant-2.webp"],
    description:"This portrait explores the symbiotic relationship between humanity and nature, depicting a face emerging from—and consuming—a lush canopy of foliage.",
    meta:[["Size","6 × 4 FT"],["Duration","20 DAYS"]]
  },
  {
    category:"painting", type:"PAINTINGS", title:"Sacred Shores",
    image:"painting-sacred-room.webp",
    images:["painting-sacred-room.webp","painting-sacred.webp"],
    description:"A sweeping landscape painting that captures the spiritual stillness and architectural grandeur of the ancient ghats. A warm, golden palette evokes the glow of sunrise or sunset upon the stone steps and temples.",
    meta:[["Size","7 × 4.5 FT"],["Duration","45 DAYS"]]
  },
  {
    category:"painting", type:"PAINTINGS", title:"The Royal Grove",
    image:"painting-royal-room.webp",
    images:["painting-royal-room.webp","painting-royal.webp"],
    description:"Inspired by traditional Indian Pichwai art, this mural brings a touch of regal serenity to the interior space, featuring stylized cows and majestic palm trees rendered with precise, traditional motifs.",
    meta:[["Size","6 × 4 FT"],["Duration","30 DAYS"]]
  },
  {
    category:"painting", type:"PAINTINGS", title:"Gilded Reflections",
    image:"painting-gilded-room.webp",
    images:["painting-gilded-room.webp","painting-gilded-detail.webp","painting-gilded.webp"],
    description:"An abstract cityscape using heavy texture and a palette of teal, gold and slate to suggest a skyline reflected in water. Metallic accents catch the light, adding depth and movement.",
    meta:[["Size","6 × 5 FT"],["Duration","30 DAYS"]]
  },
  {
    category:"painting", type:"PAINTINGS", title:"The Azure Guardian",
    image:"painting-azure.webp",
    images:["painting-azure.webp","painting-azure-room.webp"],
    description:"Drawing inspiration from traditional folk narratives, this vertical panel features a stylized, celestial-blue feline resting beneath a solitary palm. Repetitive patterns blend indigenous art forms with modern graphic sensibilities.",
    meta:[["Size","5 × 1.5 FT"],["Duration","15 DAYS"]]
  },
  {
    category:"painting", type:"TEXTURED / RELIEF ART", title:"Concrete Brutalism",
    image:"relief-concrete.webp",
    images:["relief-concrete.webp","relief-concrete-detail.webp"],
    description:"This relief work explores the raw beauty of cement and light, utilizing geometric cutouts and raised surfaces to create a play of shadow. The monochromatic, tactile surface emphasizes form over color.",
    meta:[["Size","6 × 5 FT"],["Duration","20 DAYS"]]
  },
  {
    category:"painting", type:"PAINTINGS", title:"Ancestral Legacy",
    image:"painting-ancestral-room.webp",
    images:["painting-ancestral-room.webp","painting-ancestral.webp"],
    description:"A classical oil-style portrait that commands respect and evokes history, capturing the dignity of a royal subject. Rich, deep background tones contrast with intricate jewelry and attire.",
    meta:[["Size","4 × 2 FT"],["Duration","50 DAYS"]]
  },
  {
    category:"painting", type:"PAINTINGS", title:"Emerald Strata",
    image:"painting-emerald-3.webp",
    images:[
      "painting-emerald-3.webp",
      "painting-emerald-1.webp",
      "painting-emerald-2.webp"
    ],
    description:"A massive, fluid-art installation that mimics the organic, banded beauty of malachite stone or aerial landscapes. Swirling greens and whites are broken by veins of gold.",
    meta:[["Size","20 × 15 FT"],["Duration","90 DAYS"]]
  },
  {
    category:"painting", type:"RELIEF / MIXED MEDIA", title:"Velvet Illusion",
    image:"relief-velvet.webp",
    description:"A mixed-media 3D relief diptych that mimics the flow of heavy, draped fabric frozen in time, punctuated by floating golden spheres. A study in tension, texture and the deception of the eye.",
    meta:[["Size","4 × 4 FT (EACH)"],["Duration","15 DAYS"]]
  },
  {
    category:"painting", type:"PAINTINGS", title:"Gilded Terrain",
    image:"painting-gilded-terrain-room.webp",
    images:["painting-gilded-terrain-room.webp","painting-gilded-terrain.webp"],
    description:"An abstract composition exploring material contrast, where rugged, splattered textures meet the refined elegance of metallic gold foiling. Organic shapes evoke an earthy topography.",
    meta:[["Size","6 × 4 FT"],["Duration","20 DAYS"]]
  },
  {
    category:"object", type:"INSTALLATION", title:"Monolithic Rock Wall",
    image:"rock-wall.webp",
    images:[
      "rock-wall.webp",
      "rock-wall-detail-1.webp",
      "rock-wall-detail-2.webp",
      "rock-wall-detail-3.webp",
      "rock-wall-detail-4.webp",
      "rock-wall-detail-5.webp"
    ],
    description:"This installation transforms a café interior with a rugged, hand-sculpted rock wall that mimics natural basalt formations. The heavy textured stone facade wraps around the counter and walls.",
    meta:[["Location","Saint Expresso, C-Scheme, Jaipur"],["Duration","20 DAYS"]]
  },
  {
    category:"object", type:"CUSTOM FURNITURE", title:"The Graffiti Throne",
    image:"graffiti-chair-3.webp",
    images:[
      "graffiti-chair-3.webp",
      "graffiti-chair-1.webp",
      "graffiti-chair-2.webp",
      "graffiti-chair-4.webp",
      "graffiti-chair-5.webp"
    ],
    description:"A rebellious fusion of classical furniture design and street culture, featuring Louis XVI-style chairs vandalized with vibrant graffiti tags. The project reclaims 'precious' antiques with urban energy and neon sprays.",
    meta:[["Type","CUSTOM FURNITURE"],["Duration","3 DAYS"]]
  },
  {
    category:"object", type:"SCULPTURE DESIGN", title:"Visionary Horizon",
    image:"sculpture-horizon.webp",
    description:"This monumental sculpture serves as a futuristic gateway, embodying the symbiotic balance between urban expansion and natural tranquility. A fluid, metallic form cradles a miniature skyline and lush greenery.",
    meta:[["Type","SCULPTURE DESIGN"],["Size","12 × 11 FT"]]
  }
];

const imageKitBaseUrl = 'https://ik.imagekit.io/chiragartcdn/studiomatsya';
const imageUrl = filename => `${imageKitBaseUrl}/${filename}?tr=f-auto,q-auto`;

const container = document.getElementById('projects');
const filters = [...document.querySelectorAll('.filter')];

function cardTemplate(p, index){
  const coverImage = p.images?.[0] || p.image;
  return `<article class="project" data-category="${p.category}" data-index="${index}" style="animation-delay:${Math.min(index*45,450)}ms">
    <div class="project-media">
      <img src="${imageUrl(coverImage)}" alt="${p.title} — ${p.type.toLowerCase()} by Studio Matsya" loading="lazy" crossorigin="anonymous">
    </div>
    <div class="project-info">
      <div class="meta"><span>${p.type}</span><span>(${String(index+1).padStart(2,'0')})</span></div>
      <h3>${p.title}</h3>
      <p>${p.description.slice(0, 120)}${p.description.length>120?'…':''}</p>
    </div>
  </article>`;
}
container.innerHTML = projects.map(cardTemplate).join('');

container.querySelectorAll('.project img').forEach(image=>{
  const setFrameRatio = ()=>{
    const ratio = image.naturalWidth / image.naturalHeight;
    image.closest('.project').style.setProperty('--project-ratio', ratio);
  };
  if(image.complete && image.naturalWidth){
    setFrameRatio();
  }else{
    image.addEventListener('load', setFrameRatio, {once:true});
  }
});

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
const lbGallery = document.getElementById('lightboxGallery');
const lbPagination = document.getElementById('lightboxPagination');
const lbPrev = document.getElementById('lightboxPrev');
const lbNext = document.getElementById('lightboxNext');
let activeProject = null;
let activeImageIndex = 0;

function projectImages(p){
  return p.images || [p.image];
}
function showLightboxImage(direction = 'next'){
  const images = projectImages(activeProject);
  const imageIndex = activeImageIndex;
  lbImage.classList.remove('slide-from-left','slide-from-right');
  void lbImage.offsetWidth;
  lbImage.crossOrigin = 'anonymous';
  lbImage.src = imageUrl(images[imageIndex]);
  lbImage.alt = `${activeProject.title} — image ${imageIndex + 1}`;
  lbImage.classList.add(direction === 'next' ? 'slide-from-right' : 'slide-from-left');
  lbGallery.classList.toggle('has-multiple', images.length > 1);
  lbPagination.innerHTML = images.length > 1
    ? `<span class="lightbox-count" aria-live="polite">${imageIndex + 1} / ${images.length}</span>
      <div class="lightbox-dots">${images.map((_, index) =>
        `<button type="button" class="lightbox-dot${index === imageIndex ? ' active' : ''}" data-image-index="${index}" aria-label="Show image ${index + 1} of ${images.length}" aria-pressed="${index === imageIndex}"></button>`
      ).join('')}</div>`
    : '';
}
function openLightbox(p){
  activeProject = p;
  activeImageIndex = 0;
  showLightboxImage();
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
  activeProject = null;
}
function moveLightboxImage(direction){
  if(!activeProject) return;
  const images = projectImages(activeProject);
  activeImageIndex = (activeImageIndex + direction + images.length) % images.length;
  showLightboxImage(direction > 0 ? 'next' : 'previous');
}
container.addEventListener('click', e=>{
  const card=e.target.closest('.project');
  if(!card) return;
  openLightbox(projects[Number(card.dataset.index)]);
});
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', ()=>moveLightboxImage(-1));
lbNext.addEventListener('click', ()=>moveLightboxImage(1));
lbPagination.addEventListener('click', e=>{
  const dot = e.target.closest('[data-image-index]');
  if(!dot || !activeProject) return;
  const nextIndex = Number(dot.dataset.imageIndex);
  const direction = nextIndex >= activeImageIndex ? 'next' : 'previous';
  activeImageIndex = nextIndex;
  showLightboxImage(direction);
});
lightbox.addEventListener('click', e=>{ if(e.target===lightbox) closeLightbox(); });
document.addEventListener('keydown', e=>{
  if(e.key==='Escape') closeLightbox();
  if(!lightbox.classList.contains('open') || !activeProject) return;
  if(e.key==='ArrowRight') moveLightboxImage(1);
  if(e.key==='ArrowLeft') moveLightboxImage(-1);
});

document.getElementById('year').textContent = new Date().getFullYear();

/* ─── Hamburger / Mobile Nav ─── */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileNav');

if(hamburgerBtn && mobileNav){
  hamburgerBtn.addEventListener('click', ()=>{
    const isOpen = mobileNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
    mobileNav.setAttribute('aria-hidden', !isOpen);
    mobileNav.inert = !isOpen;
    document.body.classList.toggle('no-scroll', isOpen);
  });

  mobileNav.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click', ()=>{
      mobileNav.classList.remove('open');
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      mobileNav.inert = true;
      document.body.classList.remove('no-scroll');
    });
  });
}
