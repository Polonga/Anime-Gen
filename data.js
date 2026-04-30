// ═══════════════════════════════════════════════════════════════════════
//  DATA.JS — Fuente única de datos para index.html y rankings.html
//
//  ┌─ CÓMO AÑADIR UNA TEMPORADA NUEVA ──────────────────────────────────┐
//  │  1. Busca el anime por su title                                     │
//  │  2. Añade al final de su array seasons:                             │
//  │       { label: "T4", score: 8.75 }                                 │
//  │  3. Guarda. La media se recalcula sola en ambas páginas.            │
//  └────────────────────────────────────────────────────────────────────┘
//
//  CAMPOS DE CADA ANIME:
//    title   → nombre visible
//    year    → año de estreno (primera temporada)
//    seasons → array de { label, score }. Vacío [] = N/A
//    img     → URL del póster (MyAnimeList)
//    mal     → URL de la ficha en MAL
//    desc    → descripción breve
//    genres  → array de strings
// ═══════════════════════════════════════════════════════════════════════

// ── Utilidad: media de seasons ──────────────────────────────────────────
function calcAvg(seasons) {
  if (!seasons || seasons.length === 0) return null;
  const sum = seasons.reduce((acc, s) => acc + s.score, 0);
  return parseFloat((sum / seasons.length).toFixed(2));
}

// ── Utilidad: score como string para mostrar ────────────────────────────
function scoreStr(seasons) {
  const avg = calcAvg(seasons);
  return avg !== null ? avg.toFixed(2) : 'N/A';
}


// ═══════════════════════════════════════════════════════════════════════
//  CLÁSICOS  (1980s – 1990s)
// ═══════════════════════════════════════════════════════════════════════
const CLASICOS = [
  {
    title: "Urusei Yatsura", year: "1981",
    seasons: [
      { label: "T1",         score: 7.79 },
      { label: "Película 5", score: 7.54 },
    ],
    img: "https://myanimelist.net/images/anime/9/17573.jpg",
    mal: "https://myanimelist.net/anime/1293/Urusei_Yatsura",
    desc: "Ataru Moroboshi debe salvar la Tierra ganando un juego de persecución contra Lum, la princesa alienígena que termina instalándose en su casa tras confundir su victoria con una propuesta de matrimonio.",
    genres: ["Comedia", "Romance", "Sci-Fi"],
  },
  {
    title: "Fist of the North Star", year: "1984",
    seasons: [
      { label: "T1", score: 7.98 },
      { label: "T2", score: 7.62 },
      { label: "OVA", score: 6.95 },
      { label: "T3", score: 6.75 },
      { label: "T4", score: 5.67 },
      { label: "T5", score: 6.05 },
    ],
    img: "https://myanimelist.net/images/anime/8/18502l.jpg",
    mal: "https://myanimelist.net/anime/967/Hokuto_no_Ken",
    desc: "En un mundo post-apocalíptico, Kenshiro usa las artes marciales del Hokuto Shinken para proteger a los débiles.",
    genres: ["Acción", "Drama", "Sci-Fi"],
  },
  {
    title: "Dragon Ball", year: "1986",
    seasons: [
      { label: "T1", score: 7.98 },
    ],
    img: "https://myanimelist.net/images/anime/1887/92364.jpg",
    mal: "https://myanimelist.net/anime/223/Dragon_Ball",
    desc: "Las aventuras del joven Son Goku en busca de las esferas del dragón. El origen de una leyenda.",
    genres: ["Aventura", "Comedia"],
  },
  {
    title: "Saint Seiya", year: "1986",
    seasons: [
      { label: "T1", score: 7.78 },
      { label: "T2", score: 8.01 },
      { label: "T3", score: 8.12 },
      { label: "T4", score: 8.08 },
      { label: "T5", score: 7.79 },
      { label: "T6", score: 7.62 },
      { label: "Pelicula", score: 7.24 },
      { label: "T7", score: 6.32 },
    ],
    img: "https://myanimelist.net/images/anime/1180/133782.jpg",
    mal: "https://myanimelist.net/anime/1254/Saint_Seiya",
    desc: "Los Caballeros del Zodiaco luchan con sus armaduras divinas para proteger a Atenea y la paz del mundo.",
    genres: ["Acción", "Aventura", "Fantasía"],
  },
  {
    title: "Akira", year: "1988",
    seasons: [
      { label: "Película", score: 8.16 },
    ],
    img: "https://myanimelist.net/images/anime/1408/114012.jpg",
    mal: "https://myanimelist.net/anime/47/Akira",
    desc: "Neo-Tokyo 2019. Un experimento militar desata poderes psíquicos que amenazan con destruir la ciudad.",
    genres: ["Acción", "Horror", "Sci-Fi"],
  },
  {
    title: "Dragon Ball Z", year: "1989",
    seasons: [
      { label: "T1", score: 8.21 },
    ],
    img: "https://myanimelist.net/images/anime/1277/142022.jpg",
    mal: "https://myanimelist.net/anime/813/Dragon_Ball_Z",
    desc: "Goku adulto defiende la Tierra de los Saiyajins, Freezer y amenazas cósmicas. Definió una generación entera.",
    genres: ["Acción", "Aventura", "Comedia"],
  },
  {
    title: "Sailor Moon", year: "1992",
    seasons: [
      { label: "T1", score: 7.76 },
      { label: "T2", score: 7.75 },
      { label: "T3", score: 7.92 },
      { label: "T4", score: 7.65 },
      { label: "T5", score: 7.97 },
    ],
    img: "https://myanimelist.net/images/anime/1440/92258.jpg",
    mal: "https://myanimelist.net/anime/530/Bishoujo_Senshi_Sailor_Moon",
    desc: "Usagi Tsukino despierta su poder como la guerrera que lucha por el amor y la justicia, reuniendo a las Sailor Guardians para proteger a la Tierra y la Luna de las fuerzas del mal.",
    genres: ["Romance", "Acción", "Mahou Shoujo"],
  },
  {
    title: "Yu Yu Hakusho", year: "1992",
    seasons: [
      { label: "T1", score: 8.46 },
    ],
    img: "https://myanimelist.net/images/anime/1228/111372.jpg",
    mal: "https://myanimelist.net/anime/392/Yu_Yu_Hakusho",
    desc: "Yusuke Urameshi muere salvando a un niño y se convierte en detective del mundo espiritual.",
    genres: ["Acción", "Supernatural"],
  },
  {
    title: "Slam Dunk", year: "1993",
    seasons: [
      { label: "T1", score: 8.56 },
    ],
    img: "https://myanimelist.net/images/anime/12/86890.jpg",
    mal: "https://myanimelist.net/anime/170/Slam_Dunk",
    desc: "Hanamichi Sakuragi, un delincuente juvenil, descubre su pasión por el baloncesto. El anime deportivo definitivo.",
    genres: ["Deportes"],
  },
  {
    title: "Neon Genesis Evangelion", year: "1995",
    seasons: [
      { label: "T1",       score: 8.37 },
      { label: "Película", score: 8.57 },
    ],
    img: "https://myanimelist.net/images/anime/1314/108941.jpg",
    mal: "https://myanimelist.net/anime/30/Neon_Genesis_Evangelion",
    desc: "Shinji pilota un Eva gigante para combatir a los Ángeles. Una obra maestra del mecha y el análisis psicológico.",
    genres: ["Mecha", "Psychological"],
  },
  {
    title: "Ghost in the Shell", year: "1995",
    seasons: [
      { label: "Película", score: 8.27 },
    ],
    img: "https://myanimelist.net/images/anime/10/82594.jpg",
    mal: "https://myanimelist.net/anime/43/Ghost_in_the_Shell",
    desc: "La Mayor Kusanagi investiga al enigmático Puppet Master en un futuro donde la línea entre humano y máquina se difumina.",
    genres: ["Misterio", "Sci-Fi", "Suspense"],
  },
  {
    title: "Rurouni Kenshin", year: "1996",
    seasons: [
      { label: "T1", score: 8.28 },
      { label: "OVA1", score: 8.69 },
      { label: "OVA2", score: 7.97 },
    ],
    img: "https://myanimelist.net/images/anime/1346/119505.jpg",
    mal: "https://myanimelist.net/anime/45/Rurouni_Kenshin__Meiji_Kenkaku_Romantan",
    desc: "El legendario asesino Hitokiri Battousai vaga por el Japón de la era Meiji como Kenshin Himura, portando una espada de filo invertido para proteger a los inocentes.",
    genres: ["Acción", "Comedia", "Romance"],
  },
  {
    title: "Cowboy Bebop", year: "1998",
    seasons: [
      { label: "T1", score: 8.75 },
    ],
    img: "https://myanimelist.net/images/anime/4/19644.jpg",
    mal: "https://myanimelist.net/anime/1/Cowboy_Bebop",
    desc: "Spike Spiegel y su ecléctica tripulación de cazarrecompensas vagan por el espacio a bordo del Bebop al ritmo del jazz.",
    genres: ["Acción", "Sci-Fi"],
  },
  {
    title: "Trigun", year: "1998",
    seasons: [
      { label: "T1", score: 8.22 },
    ],
    img: "https://myanimelist.net/images/anime/1130/120002.jpg",
    mal: "https://myanimelist.net/anime/6/Trigun",
    desc: "Vash la Estampida cruza el desierto con una recompensa millonaria sobre su cabeza, predicando el Amor y Paz.",
    genres: ["Acción", "Aventura", "Sci-Fi"],
  },
  {
    title: "Serial Experiments Lain", year: "1998",
    seasons: [
      { label: "T1", score: 8.10 },
    ],
    img: "https://myanimelist.net/images/anime/1718/91550.jpg",
    mal: "https://myanimelist.net/anime/339/Serial_Experiments_Lain",
    desc: "Lain Iwakura se sumerge en la red virtual Wired, donde la frontera entre la realidad y el mundo digital se desvanece.",
    genres: ["Misterio", "Drama", "Sci-Fi", "Suspense"],
  },
];


// ═══════════════════════════════════════════════════════════════════════
//  BIG THREE  (2000s)
// ═══════════════════════════════════════════════════════════════════════
const BIGTREE = [
  {
    title: "One Piece", year: "1999",
    seasons: [
      { label: "T1", score: 8.73 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    mal: "https://myanimelist.net/anime/21/One_Piece",
    desc: "Monkey D. Luffy y su tripulación navegan por el Grand Line en busca del One Piece. La aventura más épica del anime.",
    genres: ["Acción", "Aventura", "Fantasía"],
  },
  {
    title: "Naruto", year: "2002",
    seasons: [
      { label: "T1", score: 8.02 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
    mal: "https://myanimelist.net/anime/20/Naruto",
    desc: "Un joven ninja con el zorro de nueve colas sellado en él lucha por convertirse en el Hokage de su aldea.",
    genres: ["Acción", "Aventura", "Fantasía"],
  },
  {
    title: "Samurai Champloo", year: "2004",
    seasons: [
      { label: "T1", score: 8.52 },
    ],
    img: "https://myanimelist.net/images/anime/1370/135212.jpg",
    mal: "https://myanimelist.net/anime/205/Samurai_Champloo",
    desc: "Mugen, Jin y Fuu atraviesan el Japón feudal en un viaje frenético y lleno de hip-hop para encontrar al samurái que huele a girasoles.",
    genres: ["Acción", "Aventura", "Comedia"],
  },
  {
    title: "Monster", year: "2004",
    seasons: [
      { label: "T1", score: 8.89 },
    ],
    img: "https://myanimelist.net/images/anime/10/18793.jpg",
    mal: "https://myanimelist.net/anime/19/Monster",
    desc: "El brillante cirujano Kenzo Tenma salva la vida de un niño desencadenando el despertar de un monstruo humano.",
    genres: ["Drama", "Misterio", "Suspense"],
  },
  {
    title: "Bleach", year: "2004",
    seasons: [
      { label: "T1", score: 7.99 },
      { label: "T2", score: 8.98 },
      { label: "T3", score: 8.70 },
      { label: "T4", score: 8.67 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
    mal: "https://myanimelist.net/anime/269/Bleach",
    desc: "Ichigo Kurosaki se convierte en Shinigami y protege al mundo de los espíritus malignos llamados Hollows.",
    genres: ["Acción", "Aventura", "Supernatural"],
  },
  {
    title: "Gintama", year: "2005",
    seasons: [
      { label: "T1",            score: 8.93 },
      { label: "T2",            score: 9.02 },
      { label: "T3",            score: 9.02 },
      { label: "T4",            score: 9.05 },
      { label: "T5",            score: 8.98 },
      { label: "T6",            score: 8.51 },
      { label: "T7",            score: 8.81 },
      { label: "T8",            score: 8.88 },
      { label: "T9",            score: 8.46 },
      { label: "Película final", score: 9.05 },
    ],
    img: "https://myanimelist.net/images/anime/10/73274.jpg",
    mal: "https://myanimelist.net/anime/918/Gintama",
    desc: "Gintoki Sakata y los miembros de la Yorozuya sobreviven en un Edo invadido por alienígenas entre locura, comedia y drama.",
    genres: ["Acción", "Comedia", "Sci-Fi"],
  },
  {
    title: "Fate/Stay Night", year: "2006",
    seasons: [
      { label: "T1", score: 7.27 },
    ],
    img: "https://myanimelist.net/images/anime/4/30327.jpg",
    mal: "https://myanimelist.net/anime/356/Fate_stay_night",
    desc: "Shirou Emiya se convierte accidentalmente en el séptimo Maestro de la Guerra del Santo Grial, invocando a Saber.",
    genres: ["Acción", "Fantasía", "Romance"],
  },
  {
    title: "Black Lagoon", year: "2006",
    seasons: [
      { label: "T1", score: 8.04 },
      { label: "T2", score: 8.18 },
      { label: "T3", score: 8.03 },
    ],
    img: "https://myanimelist.net/images/anime/1906/121592.jpg",
    mal: "https://myanimelist.net/anime/889/Black_Lagoon",
    desc: "Rock abandona su vida corporativa para sumergirse en el inframundo criminal de Roanapur junto a la letal Revy Two Hands.",
    genres: ["Acción", "Thriller"],
  },
  {
    title: "Death Note", year: "2006",
    seasons: [
      { label: "T1", score: 8.62 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
    mal: "https://myanimelist.net/anime/1535/Death_Note",
    desc: "Light Yagami encuentra un cuaderno que mata a quien su nombre escribes. Un thriller psicológico sin igual.",
    genres: ["Supernatural", "Suspense"],
  },
  {
    title: "Code Geass", year: "2006",
    seasons: [
      { label: "T1", score: 8.71 },
      { label: "T2", score: 8.92 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/5/50331.jpg",
    mal: "https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch",
    desc: "El príncipe exiliado Lelouch obtiene el poder del Geass y lidera la revolución contra el Imperio Britannian.",
    genres: ["Mecha", "Drama", "Sci-Fi"],
  },
  {
    title: "Naruto: Shippuden", year: "2007",
    seasons: [
      { label: "T1", score: 8.29 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/1565/111305.jpg",
    mal: "https://myanimelist.net/anime/1735/Naruto__Shippuuden",
    desc: "Naruto regresa más fuerte. La Akatsuki amenaza el mundo ninja. La saga se oscurece y madura.",
    genres: ["Acción", "Aventura", "Fantasía"],
  },
  {
    title: "Tengen Toppa Gurren Lagann", year: "2007",
    seasons: [
      { label: "T1", score: 8.64 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/4/5123.jpg",
    mal: "https://myanimelist.net/anime/2001/Tengen_Toppa_Gurren_Lagann",
    desc: "Simon y Kamina perforan los cielos con su mecha Gurren Lagann. ¡Quién el infierno crees que soy!",
    genres: ["Mecha", "Acción", "Sci-Fi"],
  },
  {
    title: "Toradora!", year: "2008",
    seasons: [
      { label: "T1", score: 8.04 },
    ],
    img: "https://myanimelist.net/images/anime/13/22128.jpg",
    mal: "https://myanimelist.net/anime/4224/Toradora",
    desc: "Ryuuji y Taiga forman una alianza inesperada para ayudarse mutuamente a confesar su amor a sus mejores amigos.",
    genres: ["Drama", "Romance"],
  },
  {
    title: "K-On!", year: "2009",
    seasons: [
      { label: "T1",       score: 7.87 },
      { label: "T2",       score: 8.18 },
      { label: "Película", score: 8.36 },
    ],
    img: "https://myanimelist.net/images/anime/10/76120.jpg",
    mal: "https://myanimelist.net/anime/5680/K-On",
    desc: "Yui y sus amigas salvan al club de música ligera, pasando sus días entre té, pasteles y sesiones de práctica.",
    genres: ["Comedia", "Slice of Life"],
  },
  {
    title: "Fullmetal Alchemist: Brotherhood", year: "2009",
    seasons: [
      { label: "T1", score: 9.11 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    mal: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
    desc: "Los hermanos Elric buscan la Piedra Filosofal para recuperar sus cuerpos. Considerado por muchos el mejor anime de todos los tiempos.",
    genres: ["Acción", "Aventura", "Drama", "Fantasía"],
  },
];


// ═══════════════════════════════════════════════════════════════════════
//  EXPANSIÓN  (2010s)
// ═══════════════════════════════════════════════════════════════════════
const EXPANSION = [
  {
    title: "Steins;Gate", year: "2011",
    seasons: [
      { label: "T1", score: 9.07 },
      { label: "OVA", score: 8.29 },
      { label: "Pelicula", score: 8.45 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/5/73199.jpg",
    mal: "https://myanimelist.net/anime/9253/Steins_Gate",
    desc: "Rintaro Okabe descubre cómo enviar mensajes al pasado. Un thriller de viajes en el tiempo con una narrativa magistral.",
    genres: ["Sci-Fi", "Thriller", "Psychological"],
  },
  {
    title: "Hunter x Hunter (2011)", year: "2011",
    seasons: [
      { label: "T1", score: 9.03 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/11/33657.jpg",
    mal: "https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011_",
    desc: "Gon busca a su padre convirtiéndose en Hunter. El sistema Nen y el arco de Chimera Ant elevan el shonen a otro nivel.",
    genres: ["Acción", "Aventura"],
  },
  {
    title: "Mirai Nikki", year: "2011",
    seasons: [
      { label: "T1", score: 7.38 },
      { label: "OVA", score: 7.28 },
    ],
    img: "https://myanimelist.net/images/anime/13/33465.jpg",
    mal: "https://myanimelist.net/anime/10620/Mirai_Nikki_TV",
    desc: "Yukiteru Amano es arrastrado a un juego mortal donde deberá usar su Diario del Futuro y confiar en la obsesiva Yuno Gasai.",
    genres: ["Acción", "Supernatural", "Suspense"],
  },
  {
    title: "Sword Art Online", year: "2012",
    seasons: [
      { label: "T1",       score: 7.22 },
      { label: "OVA",       score: 6.55 },
      { label: "T2",       score: 6.72 },
      { label: "Película", score: 7.56 },
      { label: "T3",       score: 7.58 },
      { label: "T4",       score: 7.59 },
      { label: "T5",       score: 7.51 },
    ],
    img: "https://myanimelist.net/images/anime/11/39717.jpg",
    mal: "https://myanimelist.net/anime/11757/Sword_Art_Online",
    desc: "Kirito queda atrapado en un juego donde morir en el juego significa morir en la realidad.",
    genres: ["Acción", "Aventura", "Fantasía", "Romance"],
  },
  {
    title: "Love, Chunibyo & Other Delusions!", year: "2012",
    seasons: [
      { label: "T1",       score: 7.70 },
      { label: "OVA",       score: 7.49 },
      { label: "T2",       score: 7.55 },
      { label: "OVA2",       score: 7.45 },
      { label: "Película", score: 8.10 },
    ],
    img: "https://myanimelist.net/images/anime/1905/142840.jpg",
    mal: "https://myanimelist.net/anime/14741/Chuunibyou_demo_Koi_ga_Shitai",
    desc: "Yuta Togashi intenta enterrar su vergonzoso pasado como Dark Flame Master cuando conoce a Rikka Takanashi.",
    genres: ["Comedia", "Romance"],
  },
  {
    title: "JoJo's Bizarre Adventure", year: "2012",
    seasons: [
      { label: "Parte 1/2",  score: 7.87 },
      { label: "Parte 3 T1", score: 8.11 },
      { label: "Parte 3 T2", score: 8.44 },
      { label: "Parte 4",    score: 8.51 },
      { label: "Parte 5",    score: 8.58 },
      { label: "Parte 6 T1", score: 8.06 },
      { label: "Parte 6 T2", score: 8.04 },
      { label: "Parte 6 T3", score: 8.51 },
      { label: "Parte 7",    score: 9.15 },
    ],
    img: "https://myanimelist.net/images/anime/3/40409.jpg",
    mal: "https://myanimelist.net/anime/14719/JoJo_no_Kimyou_na_Bouken_TV",
    desc: "Jonathan Joestar lucha contra Dio Brando en una saga que marcará el destino de su linaje por generaciones.",
    genres: ["Acción", "Aventura", "Supernatural"],
  },
  {
    title: "Attack on Titan", year: "2013",
    seasons: [
      { label: "T1",    score: 8.57 },
      { label: "T2",    score: 8.54 },
      { label: "T3 P1", score: 8.64 },
      { label: "T3 P2", score: 9.05 },
      { label: "T4 P1", score: 8.79 },
      { label: "T4 P2", score: 8.77 },
      { label: "T4 P3", score: 8.86 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    mal: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin",
    desc: "La humanidad sobrevive dentro de enormes murallas protegiéndose de los Titanes. Uno de los anime más impactantes del siglo.",
    genres: ["Acción", "Drama", "Horror"],
  },
  {
    title: "Tokyo Ghoul", year: "2014",
    seasons: [
      { label: "T1", score: 7.79 },
      { label: "T2", score: 7.03 },
      { label: "T3", score: 6.37 },
      { label: "T4", score: 6.47 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/5/64449.jpg",
    mal: "https://myanimelist.net/anime/22319/Tokyo_Ghoul",
    desc: "Ken Kaneki se convierte a medias en ghoul tras un encuentro fatal. Terror urbano y dilemas de identidad.",
    genres: ["Horror", "Acción", "Psychological"],
  },
  {
    title: "The Seven Deadly Sins", year: "2014",
    seasons: [
      { label: "T1", score: 7.60 },
      { label: "OVA", score: 6.94 },
      { label: "T2", score: 7.53 },
      { label: "T3", score: 6.47 },
      { label: "T4", score: 6.57 },
    ],
    img: "https://myanimelist.net/images/anime/8/65409.jpg",
    mal: "https://myanimelist.net/anime/23755/Nanatsu_no_Taizai",
    desc: "Elizabeth Liones busca a los Siete Pecados Capitales liderados por Meliodas para salvar al reino.",
    genres: ["Acción", "Aventura", "Fantasía"],
  },
  {
    title: "Your Lie in April", year: "2014",
    seasons: [
      { label: "T1", score: 8.64 },
      { label: "OVA", score: 7.69 },
    ],
    img: "https://myanimelist.net/images/anime/1405/143284.jpg",
    mal: "https://myanimelist.net/anime/23273/Shigatsu_wa_Kimi_no_Uso",
    desc: "Kousei Arima recupera el color de su mundo gracias a la excéntrica violinista Kaori Miyazono.",
    genres: ["Drama", "Romance"],
  },
  {
    title: "One Punch Man", year: "2015",
    seasons: [
      { label: "T1", score: 8.48 },
      { label: "T2", score: 7.53 },
      { label: "T3", score: 4.75 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
    mal: "https://myanimelist.net/anime/30276/One_Punch_Man",
    desc: "Saitama puede vencer a cualquier enemigo con un solo golpe. Parodia y acción de altísimo nivel.",
    genres: ["Acción", "Comedia", "Superhéroes"],
  },
  {
    title: "My Hero Academia", year: "2016",
    seasons: [
      { label: "T1", score: 7.83 },
      { label: "T2", score: 8.05 },
      { label: "T3", score: 7.98 },
      { label: "T4", score: 7.86 },
      { label: "T5", score: 7.35 },
      { label: "T6", score: 8.22 },
      { label: "T7", score: 8.13 },
      { label: "T8", score: 8.71 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    mal: "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia",
    desc: "En un mundo de superhéroes, Izuku Midoriya nace sin poderes pero hereda el One For All.",
    genres: ["Acción", "Superhéroes"],
  },
  {
    title: "Re:Zero", year: "2016",
    seasons: [
      { label: "Pelicula",    score: 7.58 },
      { label: "T1",    score: 8.25 },
      { label: "T2 P1", score: 8.33 },
      { label: "T2 P2", score: 8.42 },
      { label: "T3",    score: 8.43 },
      { label: "T4",    score: 8.91 },
    ],
    img: "https://myanimelist.net/images/anime/1522/128039.jpg",
    mal: "https://myanimelist.net/anime/31240/Re_Zero_kara_Hajimeru_Isekai_Seikatsu",
    desc: "Subaru es transportado a un mundo de fantasía con la única habilidad de revivir tras morir. Isekai oscuro y brutal.",
    genres: ["Isekai", "Fantasía", "Psychological"],
  },
  {
    title: "Demon Slayer", year: "2019",
    seasons: [
      { label: "T1",        score: 8.41 },
      { label: "Película 1", score: 8.54 },
      { label: "T2",        score: 8.69 },
      { label: "T3",        score: 8.15 },
      { label: "T4",        score: 8.02 },
      { label: "Película 2", score: 8.67 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    mal: "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba",
    desc: "Tanjiro busca cura para su hermana convertida en demonio. La animación de Ufotable redefinió los estándares visuales.",
    genres: ["Acción", "Sobrenatural"],
  },
  {
    title: "Vinland Saga", year: "2019",
    seasons: [
      { label: "T1", score: 8.78 },
      { label: "T2", score: 8.82 },
    ],
    img: "https://myanimelist.net/images/anime/1500/103005.jpg",
    mal: "https://myanimelist.net/anime/37521/Vinland_Saga",
    desc: "Thorfinn busca venganza sumergiéndose en un campo de batalla sangriento para encontrar la verdadera paz en Vinland.",
    genres: ["Acción", "Aventura", "Drama"],
  },
];


// ═══════════════════════════════════════════════════════════════════════
//  NEW GEN  (2020s)
// ═══════════════════════════════════════════════════════════════════════
const NEWGEN = [
  {
    title: "Rent-a-Girlfriend", year: "2020",
    seasons: [
      { label: "T1", score: 6.84 },
      { label: "T2", score: 6.69 },
      { label: "T3", score: 6.93 },
      { label: "T4", score: 6.16 },
      { label: "T5", score: 5.95 },
    ],
    img: "https://myanimelist.net/images/anime/1902/128382.jpg",
    mal: "https://myanimelist.net/anime/40839/Kanojo_Okarishimasu",
    desc: "Kazuya Kinoshita alquila a la perfecta Chizuru Mizuhara desencadenando una red de mentiras y malentendidos.",
    genres: ["Comedia", "Romance"],
  },
  {
    title: "Jujutsu Kaisen", year: "2020",
    seasons: [
      { label: "T1",       score: 8.51 },
      { label: "Película", score: 8.37 },
      { label: "T2",       score: 8.70 },
      { label: "T3",       score: 8.64 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    mal: "https://myanimelist.net/anime/40748/Jujutsu_Kaisen",
    desc: "Yuji Itadori ingiere el dedo de un demonio maldito y se convierte en anfitrión de Sukuna. El shonen más salvaje de los 2020.",
    genres: ["Acción", "Sobrenatural"],
  },
  {
    title: "Mushoku Tensei", year: "2021",
    seasons: [
      { label: "T1 P1", score: 8.33 },
      { label: "T1 P2", score: 8.61 },
      { label: "OVA", score: 7.54 },
      { label: "T2 P1", score: 8.20 },
      { label: "T2 P2", score: 8.39 },
    ],
    img: "https://myanimelist.net/images/anime/1530/117776.jpg",
    mal: "https://myanimelist.net/anime/39535/Mushoku_Tensei__Isekai_Ittara_Honki_Dasu",
    desc: "Un desempleado fracasado reencarna en un mundo de fantasía como Rudeus Greyrat.",
    genres: ["Acción", "Drama", "Fantasía", "Ecchi"],
  },
  {
    title: "Tokyo Revengers", year: "2021",
    seasons: [
      { label: "T1", score: 7.82 },
      { label: "T2", score: 7.62 },
      { label: "T3", score: 7.82 },
    ],
    img: "https://myanimelist.net/images/anime/1839/122012.jpg",
    mal: "https://myanimelist.net/anime/42249/Tokyo_Revengers",
    desc: "Takemichi Hanagaki viaja doce años al pasado para cambiar el destino y evitar la muerte de su única novia.",
    genres: ["Acción", "Drama"],
  },
  {
    title: "My Dress-Up Darling", year: "2022",
    seasons: [
      { label: "T1", score: 8.13 },
      { label: "T2", score: 8.18 },
    ],
    img: "https://myanimelist.net/images/anime/1179/119897.jpg",
    mal: "https://myanimelist.net/anime/48736/Sono_Bisque_Doll_wa_Koi_wo_Suru",
    desc: "Wakana Gojo ve su vida transformada cuando Marin Kitagawa lo convence para que fabrique sus sueños de cosplay.",
    genres: ["Romance"],
  },
  {
    title: "Spy x Family", year: "2022",
    seasons: [
      { label: "T1 P1", score: 8.42 },
      { label: "T1 P2", score: 8.20 },
      { label: "T2",    score: 8.06 },
      { label: "T3",    score: 8.21 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg",
    mal: "https://myanimelist.net/anime/50265/Spy_x_Family",
    desc: "Un espía, una asesina y una niña telépata forman una familia falsa para una misión. Humor y ternura en estado puro.",
    genres: ["Acción", "Comedia", "Slice of Life"],
  },
  {
    title: "Chainsaw Man", year: "2022",
    seasons: [
      { label: "T1",       score: 8.43 },
      { label: "Película", score: 9.08 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
    mal: "https://myanimelist.net/anime/44511/Chainsaw_Man",
    desc: "Denji fusiona su cuerpo con un devil perro motosierra. MAPPA produce el anime más violento y honesto de la época.",
    genres: ["Acción", "Sobrenatural", "Gore"],
  },
  {
    title: "Oshi no Ko", year: "2023",
    seasons: [
      { label: "T1", score: 8.53 },
      { label: "T2", score: 8.51 },
      { label: "T3", score: 8.71 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/1812/134736.jpg",
    mal: "https://myanimelist.net/anime/52034/Oshi_no_Ko",
    desc: "Reencarnado como el hijo de su ídolo, AI Hoshino. Una crítica despiadada a la industria del entretenimiento japonés.",
    genres: ["Drama", "Supernatural"],
  },
  {
    title: "Frieren: Beyond Journey's End", year: "2023",
    seasons: [
      { label: "T1", score: 9.27 },
      { label: "T2", score: 8.91 },
    ],
    img: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
    mal: "https://myanimelist.net/anime/52991/Sousou_no_Frieren",
    desc: "Una maga élfica reflexiona sobre el paso del tiempo y los lazos humanos tras la muerte de sus compañeros.",
    genres: ["Aventura", "Fantasía", "Drama"],
  },
  {
    title: "The Apothecary Diaries", year: "2023",
    seasons: [
      { label: "T1", score: 8.85 },
      { label: "T2", score: 8.91 },
    ],
    img: "https://myanimelist.net/images/anime/1708/138033.jpg",
    mal: "https://myanimelist.net/anime/54492/Kusuriya_no_Hitorigoto",
    desc: "Maomao, una joven boticaria vendida al Palacio Imperial, resuelve los misterios que acechan en el Pabellón Interior.",
    genres: ["Drama", "Misterio"],
  },
  {
    title: "Solo Leveling", year: "2024",
    seasons: [
      { label: "T1", score: 8.16 },
      { label: "T2", score: 8.54 },
    ],
    img: "https://myanimelist.net/images/anime/1801/142390l.jpg",
    mal: "https://myanimelist.net/anime/52299/Ore_dake_Level_Up_na_Ken",
    desc: "Sung Jinwoo, el cazador más débil, obtiene un sistema único que le permite subir de nivel sin límite.",
    genres: ["Acción", "Fantasía"],
  },
  {
    title: "Dandadan", year: "2024",
    seasons: [
      { label: "T1", score: 8.42 },
      { label: "T2", score: 8.41 },
    ],
    img: "https://myanimelist.net/images/anime/1584/143719.jpg",
    mal: "https://myanimelist.net/anime/57334/Dandadan",
    desc: "Momo y Okarun intercambian apuestas que terminan en una maldición sobrenatural entre fantasmas y alienígenas.",
    genres: ["Acción", "Comedia", "Supernatural"],
  },
  {
    title: "Sakamoto Days", year: "2025",
    seasons: [
      { label: "T1 P1", score: 7.59 },
      { label: "T1 P2", score: 7.91 },
    ],
    img: "https://myanimelist.net/images/anime/1026/146459.jpg",
    mal: "https://myanimelist.net/anime/58939/Sakamoto_Days",
    desc: "El asesino número uno del mundo ahora regenta una tienda y protege a su familia. Comedia de acción brutal y carismática.",
    genres: ["Acción", "Comedia"],
  },
  {
    title: "Gachiakuta", year: "2025",
    seasons: [
      { label: "T1", score: 8.22 },
    ],
    img: "https://myanimelist.net/images/anime/1682/150432.jpg",
    mal: "https://myanimelist.net/anime/59062/Gachiakuta",
    desc: "Rudo es arrojado al Abismo por un crimen que no cometió, donde transforma la basura en armas para cobrar venganza.",
    genres: ["Acción", "Fantasía"],
  },
  {
    title: "Kagurabachi", year: "2027",
    seasons: [], // Sin nota aún — muestra N/A automáticamente
    img: "https://myanimelist.net/images/anime/1653/157089.jpg",
    mal: "https://myanimelist.net/anime/64058/Kagurabachi",
    desc: "Chihiro Rokuhira empuña la katana mágica de su padre para cazar a los hechiceros que masacraron a su familia.",
    genres: ["Acción", "Fantasía"],
  },
];

// ═══════════════════════════════════════════════════════════════════════
//  LISTA COMPLETA (para rankings.html)
// ═══════════════════════════════════════════════════════════════════════
const ALL_ANIMES = [
  ...CLASICOS.map(a  => ({ ...a, gen: 'clasicos',  score: scoreStr(a.seasons) })),
  ...BIGTREE.map(a   => ({ ...a, gen: 'bigtree',   score: scoreStr(a.seasons) })),
  ...EXPANSION.map(a => ({ ...a, gen: 'expansion', score: scoreStr(a.seasons) })),
  ...NEWGEN.map(a    => ({ ...a, gen: 'newgen',     score: scoreStr(a.seasons) })),
];

const GEN_LABELS = {
  clasicos:  'Clásicos',
  bigtree:   'Big Three',
  expansion: 'Expansión',
  newgen:    'New Gen',
};