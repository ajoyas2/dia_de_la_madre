/* ═══════════════════════════════════════════════════
   DÍA DE LA MADRE — script.js
═══════════════════════════════════════════════════ */

// ── DATOS DE CADA CHOCOLATE ───────────────────────
const CARDS = [
  {
    id: 0,
    title: "Mis lugares favorito",
    flowers: "🌸  🌺  🌸",
    msg: "Mi lugar favorito en el mundo siempre será un abrazo suyo. Gracias por su apoyo incondicinal.",
    illus: ilustracionAbrazo
  },
  {
    id: 1,
    title: "Mis ejemplos",
    flowers: "🌷  💐  🌷",
    msg: "Gracias por enseñarme con su ejemplo, su fuerza y su amor. Son las personas que más admiro en este mundo.",
    illus: ilustracionLectura
  },
  {
    id: 2,
    title: "Mis apoyos",
    flowers: "🌺  🌸  🌺",
    msg: "Gracias por estar siempre ahí, en cada momento, con su apoyo infinito. Nunca me han dejado caer solo.",
    illus: ilustracionApoyo
  },
  {
    id: 3,
    title: "Mi corazón",
    flowers: "🌹  💕  🌹",
    msg: "Son el latido más bonito de mi corazón. Las quiero con todo mi ser, hoy, mañana y siempre. ¡Feliz día, mamás!",
    illus: ilustracionCorazon
  }
];

// Estado
const opened  = [false, false, false, false];
let soundOn   = true;
let audioCtx  = null;

// ── ILUSTRACIONES SVG ─────────────────────────────
// Dibujos estilo cartoon warmth — mamá e hijo/a

function ilustracionAbrazo() {
  return `<img src="images/1.avif" style="width:100%;height:100%;object-fit:cover;border-radius:16px;"#fde8ef"/>
    <!-- flores decorativas esquinas -->
    <circle cx="14" cy="14" r="7" fill="#f4a0b8" opacity=".5"/>
    <circle cx="122" cy="14" r="7" fill="#f4a0b8" opacity=".5"/>
    <!-- mamá — cuerpo -->
    <ellipse cx="54" cy="100" rx="20" ry="26" fill="#e8a878"/>
    <ellipse cx="54" cy="70" rx="14" ry="14" fill="#f5c49c"/>
    <!-- pelo mamá -->
    <ellipse cx="54" cy="60" rx="15" ry="10" fill="#4a2800"/>
    <path d="M40 62 Q38 78 42 88" stroke="#4a2800" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M68 62 Q70 78 66 88" stroke="#4a2800" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- ojos mamá -->
    <circle cx="50" cy="70" r="2" fill="#4a2800"/>
    <circle cx="58" cy="70" r="2" fill="#4a2800"/>
    <!-- sonrisa mamá -->
    <path d="M49 75 Q54 79 59 75" stroke="#c06040" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- hijo/a — cuerpo -->
    <ellipse cx="84" cy="105" rx="14" ry="20" fill="#f0c080"/>
    <ellipse cx="84" cy="83" rx="10" ry="10" fill="#f5c49c"/>
    <!-- pelo hijo -->
    <ellipse cx="84" cy="76" rx="11" ry="7" fill="#7a4820"/>
    <!-- ojos hijo -->
    <circle cx="81" cy="83" r="1.6" fill="#4a2800"/>
    <circle cx="87" cy="83" r="1.6" fill="#4a2800"/>
    <!-- sonrisa hijo -->
    <path d="M80 87 Q84 90 88 87" stroke="#c06040" stroke-width="1.3" fill="none" stroke-linecap="round"/>
    <!-- brazo mamá abrazando -->
    <path d="M68 88 Q80 96 80 105" stroke="#e8a878" stroke-width="9" fill="none" stroke-linecap="round"/>
    <!-- corazones flotantes -->
    <text x="96" y="62" font-size="13" fill="#f472b6">❤</text>
    <text x="30" y="56" font-size="10" fill="#f9a8d4">❤</text>
    <text x="100" y="82" font-size="8"  fill="#fbc8d8">❤</text>
  </svg>`;
}

function ilustracionLectura() {
  return `<img src="images/2.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:16px;"#fef3e2"/>
    <!-- fondo cálido -->
    <ellipse cx="68" cy="120" rx="55" ry="14" fill="#fde8c0" opacity=".5"/>
    <!-- silla / asiento simple -->
    <rect x="30" y="90" width="76" height="8" rx="4" fill="#c8a070"/>
    <rect x="30" y="98" width="8" height="28" rx="4" fill="#b08050"/>
    <rect x="98" y="98" width="8" height="28" rx="4" fill="#b08050"/>
    <!-- libro -->
    <rect x="38" y="72" width="60" height="44" rx="5" fill="#e87840"/>
    <rect x="38" y="72" width="30" height="44" rx="5" fill="#d06030"/>
    <rect x="66" y="72" width="2" height="44" fill="#a04820"/>
    <line x1="44" y1="82" x2="64" y2="82" stroke="#fde8c0" stroke-width="2" stroke-linecap="round"/>
    <line x1="44" y1="88" x2="64" y2="88" stroke="#fde8c0" stroke-width="2" stroke-linecap="round"/>
    <line x1="44" y1="94" x2="64" y2="94" stroke="#fde8c0" stroke-width="2" stroke-linecap="round"/>
    <line x1="72" y1="82" x2="92" y2="82" stroke="#fde8c0" stroke-width="2" stroke-linecap="round"/>
    <line x1="72" y1="88" x2="92" y2="88" stroke="#fde8c0" stroke-width="2" stroke-linecap="round"/>
    <!-- mamá — cabeza -->
    <ellipse cx="54" cy="52" rx="16" ry="16" fill="#f5c49c"/>
    <ellipse cx="54" cy="42" rx="17" ry="10" fill="#3d2000"/>
    <path d="M38 48 Q36 60 40 70" stroke="#3d2000" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M70 48 Q72 60 68 70" stroke="#3d2000" stroke-width="6" fill="none" stroke-linecap="round"/>
    <circle cx="50" cy="52" r="2" fill="#3d2000"/>
    <circle cx="58" cy="52" r="2" fill="#3d2000"/>
    <path d="M49 57 Q54 61 59 57" stroke="#c06040" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- hijo — cabeza pequeña -->
    <ellipse cx="90" cy="62" rx="11" ry="11" fill="#f5c49c"/>
    <ellipse cx="90" cy="55" rx="12" ry="7" fill="#6a3810"/>
    <circle cx="87" cy="62" r="1.5" fill="#3d2000"/>
    <circle cx="93" cy="62" r="1.5" fill="#3d2000"/>
    <path d="M87 66 Q90 69 93 66" stroke="#c06040" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <!-- estrellas / magia -->
    <text x="18" y="38" font-size="12" fill="#f0c030">✦</text>
    <text x="106" y="44" font-size="10" fill="#f0c030">✦</text>
    <text x="110" y="28" font-size="8" fill="#fde090">✦</text>
  </svg>`;
}

function ilustracionApoyo() {
  return `<img src="images/3.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:16px;"#e8f5e9"/>
    <ellipse cx="68" cy="122" rx="52" ry="12" fill="#c8e6c9" opacity=".5"/>
    <!-- mamá — cuerpo verde cálido -->
    <ellipse cx="50" cy="104" rx="18" ry="22" fill="#78a878"/>
    <ellipse cx="50" cy="75" rx="14" ry="14" fill="#f5c49c"/>
    <!-- pelo mamá oscuro -->
    <ellipse cx="50" cy="65" rx="15" ry="9" fill="#2d1800"/>
    <path d="M36 68 Q34 82 38 92" stroke="#2d1800" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M64 68 Q66 82 62 92" stroke="#2d1800" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="46" cy="75" r="2" fill="#2d1800"/>
    <circle cx="54" cy="75" r="2" fill="#2d1800"/>
    <path d="M45 80 Q50 84 55 80" stroke="#c06040" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- hijo — cabeza -->
    <ellipse cx="88" cy="85" rx="12" ry="12" fill="#f5c49c"/>
    <ellipse cx="88" cy="77" rx="13" ry="8" fill="#7a4820"/>
    <!-- cuerpo hijo -->
    <ellipse cx="88" cy="108" rx="14" ry="18" fill="#a0c8a0"/>
    <circle cx="85" cy="85" r="1.7" fill="#2d1800"/>
    <circle cx="91" cy="85" r="1.7" fill="#2d1800"/>
    <path d="M84 89 Q88 93 92 89" stroke="#c06040" stroke-width="1.3" fill="none" stroke-linecap="round"/>
    <!-- brazo mamá en hombro hijo -->
    <path d="M64 88 Q76 88 80 92" stroke="#78a878" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- corazones -->
    <text x="100" y="68" font-size="12" fill="#ef9090">❤</text>
    <text x="22"  y="62" font-size="9"  fill="#f4b8c0">❤</text>
    <text x="105" y="90" font-size="8"  fill="#fbc8c8">❤</text>
  </svg>`;
}

function ilustracionCorazon() {
  return `<img src="images/4.avif" style="width:100%;height:100%;object-fit:cover;border-radius:16px; />
    <!-- corazón grande fondo -->
    <path d="M68 110 C40 90 20 70 20 50 C20 36 30 26 44 26 C54 26 62 32 68 40 C74 32 82 26 92 26 C106 26 116 36 116 50 C116 70 96 90 68 110Z" fill="#f4c0cc" opacity=".5"/>
    <!-- mamá — cuerpo -->
    <ellipse cx="52" cy="100" rx="17" ry="22" fill="#e87888"/>
    <ellipse cx="52" cy="72" rx="14" ry="14" fill="#f5c49c"/>
    <ellipse cx="52" cy="62" rx="15" ry="9" fill="#1a0800"/>
    <path d="M38 65 Q36 78 40 88" stroke="#1a0800" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M66 65 Q68 78 64 88" stroke="#1a0800" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="48" cy="72" r="2" fill="#1a0800"/>
    <circle cx="56" cy="72" r="2" fill="#1a0800"/>
    <path d="M47 77 Q52 81 57 77" stroke="#c04050" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- hijo abrazando -->
    <ellipse cx="86" cy="82" rx="11" ry="11" fill="#f5c49c"/>
    <ellipse cx="86" cy="75" rx="12" ry="7" fill="#5a3010"/>
    <ellipse cx="86" cy="104" rx="13" ry="18" fill="#f08898"/>
    <circle cx="83" cy="82" r="1.6" fill="#1a0800"/>
    <circle cx="89" cy="82" r="1.6" fill="#1a0800"/>
    <path d="M82 87 Q86 91 90 87" stroke="#c04050" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <!-- brazos del hijo rodeando mamá -->
    <path d="M75 92 Q64 96 58 100" stroke="#f08898" stroke-width="7" fill="none" stroke-linecap="round"/>
    <!-- corazones flotantes -->
    <text x="100" y="56" font-size="16" fill="#f472b6">❤</text>
    <text x="18"  y="48" font-size="11" fill="#f9a8d4">❤</text>
    <text x="105" y="78" font-size="9"  fill="#fbc8d8">❤</text>
    <text x="24"  y="80" font-size="8"  fill="#fbc8d8">❤</text>
  </svg>`;
}

// ── CORAZONES FLOTANTES ───────────────────────────
const SYMBOLS = ['❤️','🩷','💗','💖','💕','🌸','✨','🌷','💝'];

function spawnHeart() {
  const el = document.createElement('div');
  el.className = 'hrt';
  el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
  el.style.left      = (Math.random() * 95) + '%';
  el.style.fontSize  = (13 + Math.random() * 15) + 'px';
  const dur          = 8 + Math.random() * 7;
  el.style.animationDuration = dur + 's';
  el.style.animationDelay   = (Math.random() * 3) + 's';
  document.getElementById('heartsBg').appendChild(el);
  setTimeout(() => el.remove(), (dur + 4) * 1000);
}

// Lanzar corazones iniciales + periódicamente
for (let i = 0; i < 10; i++) setTimeout(spawnHeart, i * 350);
setInterval(spawnHeart, 1000);

// ── AUDIO ─────────────────────────────────────────
function getCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playNote(freq, start, dur, vol = 0.14, type = 'sine') {
  if (!soundOn) return;
  try {
    const ctx  = getCtx();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, ctx.currentTime + start);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + dur);
    osc.start(ctx.currentTime + start);
    osc.stop(ctx.currentTime + start + dur + 0.05);
  } catch (_) {}
}

function playOpenSound() {
  // Acorde ascendente tipo caja musical
  [[523, 0], [659, .09], [784, .18], [1047, .27], [1319, .36]].forEach(([f, t]) =>
    playNote(f, t, 0.25)
  );
}

function playCardSound() {
  // Tono dulce al abrir tarjeta
  [[784, 0], [988, .08], [1175, .16], [1568, .24]].forEach(([f, t]) =>
    playNote(f, t, 0.2)
  );
}

function playCompleteSound() {
  // Fanfare pequeño al completar todos
  [[523, 0], [659, .08], [784, .16], [1047, .24], [784, .40], [1047, .48], [1319, .56]].forEach(([f, t]) =>
    playNote(f, t, 0.28, 0.13)
  );
}

function toggleSound() {
  soundOn = !soundOn;
  document.getElementById('iconOn').style.display  = soundOn ? 'block' : 'none';
  document.getElementById('iconOff').style.display = soundOn ? 'none'  : 'block';
}

// ── CONFETTI ─────────────────────────────────────
const CONF_COLORS = ['#f9c8d4','#c0392b','#d4a056','#fde8ef','#ff6b9d','#ffb3c6','#f472b6','#fbc8d8'];

function launchConfetti(count = 28) {
  for (let i = 0; i < count; i++) {
    const p   = document.createElement('div');
    p.className = 'conf';
    const size = 6 + Math.random() * 8;
    p.style.cssText = `
      left:${15 + Math.random() * 70}%;
      top:-12px;
      width:${size}px;
      height:${size}px;
      background:${CONF_COLORS[Math.floor(Math.random() * CONF_COLORS.length)]};
      border-radius:${Math.random() > .5 ? '50%' : '2px'};
      animation-duration:${1.8 + Math.random() * 2.4}s;
      animation-delay:${Math.random() * .7}s;
    `;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 5000);
  }
}

// ── ABRIR CAJA DE REGALO ─────────────────────────
function openBox() {
  playOpenSound();
  launchConfetti(22);

  const s1 = document.getElementById('screenGift');
  const s2 = document.getElementById('screenChoc');

  s1.style.transition = 'opacity .45s ease, transform .45s ease';
  s1.style.opacity    = '0';
  s1.style.transform  = 'translateY(-16px) scale(.96)';

  setTimeout(() => {
    s1.classList.remove('active');
    s1.style.display = 'none';
    s2.classList.add('active');
  }, 440);
}

// Accesibilidad: abrir con Enter/Space
document.addEventListener('DOMContentLoaded', () => {
  const giftScene = document.getElementById('giftScene');
  if (giftScene) {
    giftScene.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openBox(); }
    });
  }
  document.querySelectorAll('.choc-cell').forEach((cell, i) => {
    cell.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openChoc(i); }
    });
  });
});

// ── ABRIR CHOCOLATE ───────────────────────────────
function openChoc(idx) {
  if (opened[idx]) return;
  playCardSound();
  launchConfetti(14);

  const card = CARDS[idx];

  // Rellenar modal
  document.getElementById('modalFlowers').textContent = card.flowers;
  document.getElementById('modalTitle').textContent   = card.title;
  document.getElementById('modalMsg').textContent     = card.msg;
  document.getElementById('modalIllus').innerHTML     = card.illus();

  // Mostrar modal
  const bg = document.getElementById('modalBg');
  bg.classList.add('open');
  bg.setAttribute('aria-modal', 'true');

  // Marcar como comido
  document.getElementById('cell' + idx).classList.add('eaten');
  opened[idx] = true;

  checkCompletion();
}

// ── CERRAR MODAL ─────────────────────────────────
function closeModal() {
  document.getElementById('modalBg').classList.remove('open');
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modalBg')) closeModal();
}

// Cerrar con Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── MENSAJE FINAL ─────────────────────────────────
function checkCompletion() {
  if (!opened.every(Boolean)) return;
  setTimeout(() => {
    document.getElementById('completion').classList.add('show');
    launchConfetti(55);
    playCompleteSound();
  }, 500);
}
