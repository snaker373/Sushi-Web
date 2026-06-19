// ── DATA ─────────────────────────────────────────────────────────────────────

const V      = "uploads/Make Authentic Japanese Sushi Like a Pro_-72644283.mp4";
const V_HERO = "uploads/Sushi Bar _ Salmon Nigiri (1).mp4";

const MENU = [
  // NIGIRI
  { id:1, num:'01', name:'Salmon Nigiri', jp:'鮭 にぎり', cat:'nigiri', price:19, badge:"Chef's Choice", ordered:true, desc:'Atlantic salmon, cured on kombu, hand-formed on warm vinegared rice. Subtle note of sea bass.', img:'uploads/pasted-1777582340525-0.png' },
  { id:2, num:'02', name:'Otoro', jp:'大トロ', cat:'nigiri', price:42, badge:'Premium', ordered:false, desc:'Fatty tuna belly of the highest grade. Sliced immediately before serving.', img:'uploads/pasted-1777583083889-0.png' },
  { id:3, num:'03', name:'Wagyu Nigiri', jp:'和牛 にぎり', cat:'premium', price:58, badge:'Limited', ordered:true, desc:'A5 Wagyu, lightly seared, on vinegared rice with ponzu gel and micro shiso.', img:'uploads/pasted-1777583212111-0.png' },
  { id:4, num:'04', name:'Unagi', jp:'鰻', cat:'nigiri', price:36, badge:'Seasonal', ordered:true, desc:'Freshwater eel grilled with sweet eel sauce and sesame. Smoky, caramelized flavor.', img:'uploads/pasted-1777583293307-0.png' },
  { id:5, num:'05', name:'Maguro', jp:'まぐろ', cat:'nigiri', price:22, badge:'', ordered:false, desc:'Lean bluefin tuna. Clean taste and firm texture.', img:'uploads/pasted-1777582340525-0.png' },
  { id:6, num:'06', name:'Hamachi', jp:'ハマチ', cat:'nigiri', price:24, badge:'New', ordered:true, desc:'Yellowtail, aged 48 hours. Buttery texture with citrus notes.', img:'uploads/pasted-1777583083889-0.png' },
  { id:7, num:'07', name:'Hirame', jp:'ひらめ', cat:'nigiri', price:21, badge:'', ordered:false, desc:'Flounder with yuzu kosho touch. Delicate, semi-transparent texture.', img:'uploads/pasted-1777583212111-0.png' },
  { id:8, num:'08', name:'Amaebi', jp:'甘海老', cat:'nigiri', price:18, badge:'', ordered:true, desc:'Sweet shrimp, boiled and chilled. Served with head for richer flavor.', img:'uploads/pasted-1777583293307-0.png' },
  { id:9, num:'09', name:'Ikura', jp:'イクラ', cat:'nigiri', price:26, badge:' Seasonal', ordered:true, desc:'Salmon roe marinated in soy and mirin. Bright oceanic burst in every egg.', img:'uploads/pasted-1777582340525-0.png' },
  { id:10, num:'10', name:'Tako', jp:'たこ', cat:'nigiri', price:17, badge:'', ordered:false, desc:'Octopus, simmered 4 hours. Tender with subtle ginger undertones.', img:'uploads/pasted-1777583083889-0.png' },

  // ROLLS
  { id:11, num:'11', name:'Dragon Roll', jp:'ドラゴンロール', cat:'rolls', price:39, badge:'Best Seller', ordered:true, desc:'Tuna, avocado, and shrimp wrapped in otoro, with pearls of aged balsamic.', img:'uploads/pasted-1777583745213-0.png' },
  { id:12, num:'12', name:'Salmon Rose Roll', jp:'サーモンロール', cat:'rolls', price:28, badge:'New', ordered:false, desc:'Salmon roll with shrimp, avocado, tobiko, truffle mayo, and ikura.', img:'uploads/pasted-1777583755999-0.png' },
  { id:13, num:'13', name:'Rainbow Roll', jp:'レインボーロール', cat:'rolls', price:34, badge:'Popular', ordered:true, desc:'California roll with five types of sashimi: tuna, salmon, hamachi, shrimp, and avocado.', img:'uploads/pasted-1777583745213-0.png' },
  { id:14, num:'14', name:'Spicy Tuna Roll', jp:'スパイシーマグロ', cat:'rolls', price:26, badge:'', ordered:false, desc:'Minced tuna with spicy mayo, cucumber, and sesame. Finished with habanero.', img:'uploads/pasted-1777583755999-0.png' },
  { id:15, num:'15', name:'Philadelphia Roll', jp:'フィラデルフィア', cat:'rolls', price:29, badge:'Classic', ordered:true, desc:'Smoked salmon, cream cheese, and cucumber. Modern classic with creamy richness.', img:'uploads/pasted-1777583745213-0.png' },
  { id:16, num:'16', name:'Firecracker Roll', jp:'ファイアクラッカー', cat:'rolls', price:32, badge:'Spicy', ordered:false, desc:'Spicy crab, cucumber, topped with spicy tuna and sriracha aioli.', img:'uploads/pasted-1777583755999-0.png' },
  { id:17, num:'17', name:'Alaska Roll', jp:'アラスカンロール', cat:'rolls', price:31, badge:'Seasonal', ordered:false, desc:'Smoked salmon, avocado, cucumber, topped with fresh salmon and masago.', img:'uploads/pasted-1777583745213-0.png' },
  { id:18, num:'18', name:'Caterpillar Roll', jp:'キャタピラー', cat:'rolls', price:33, badge:'', ordered:true, desc:'Eel and cucumber inside, topped with avocado slices and eel sauce.', img:'uploads/pasted-1777583755999-0.png' },
  { id:19, num:'19', name:'Spider Roll', jp:'スパイダーロール', cat:'rolls', price:35, badge:'Crispy', ordered:false, desc:'Tempura soft-shell crab, cucumber, avocado, and spicy mayo.', img:'uploads/pasted-1777583745213-0.png' },
  { id:20, num:'20', name:'Volcano Roll', jp:'ボルケーノロール', cat:'rolls', price:36, badge:'Hot', ordered:true, desc:'Spicy tuna, cucumber, baked scallops, and spicy mayo on top.', img:'uploads/pasted-1777583755999-0.png' },
  { id:21, num:'21', name:'Tiger Roll', jp:'タイガーロール', cat:'rolls', price:34, badge:'Premium', ordered:false, desc:'Tempura shrimp, cucumber, avocado, seared tuna on top, and unagi sauce.', img:'uploads/pasted-1777583745213-0.png' },
  { id:22, num:'22', name:'Lobster Roll', jp:'ロブスターロール', cat:'premium', price:48, badge:'Luxury', ordered:true, desc:'Lobster, avocado, cucumber, lobster salad, and ikura.', img:'uploads/pasted-1777583755999-0.png' },
  { id:31, num:'31', name:'Black Dragon Roll', jp:'ブラックドラゴン', cat:'rolls', price:37, badge:'New', ordered:true, desc:'Shrimp, salmon, tuna, and avocado finished with glossy unagi sauce and crispy pearls.', img:'uploads/pasted-1777583745213-0.png' },
  { id:32, num:'32', name:'Sakura Ebi Roll', jp:'桜海老ロール', cat:'rolls', price:30, badge:"Chef's Choice", ordered:false, desc:'Salmon-wrapped roll with shrimp, avocado, tobiko, and a soft yuzu cream finish.', img:'uploads/pasted-1777583755999-0.png' },
  { id:33, num:'33', name:'Tobiko California', jp:'とびこカリフォルニア', cat:'rolls', price:27, badge:'Popular', ordered:true, desc:'Crab, avocado, cucumber, and a bright tobiko coat inspired by classic California rolls.', img:'uploads/pasted-1777583755999-0.png' },
  { id:34, num:'34', name:'Creamy Volcano Roll', jp:'クリーミーボルケーノ', cat:'rolls', price:33, badge:'Hot', ordered:false, desc:'Spicy salmon, cream cheese, tobiko, and warm chili mayo glazed over each piece.', img:'uploads/pasted-1777583745213-0.png' },
  { id:35, num:'35', name:'Black Sesame Maki', jp:'黒ごま巻き', cat:'rolls', price:35, badge:'Premium', ordered:true, desc:'Tuna, shrimp, cream cheese, and red tobiko wrapped in toasted black sesame.', img:'uploads/pasted-1777583212111-0.png' },
  { id:36, num:'36', name:'Crispy Salmon Roll', jp:'クリスピーサーモン', cat:'rolls', price:31, badge:'Crispy', ordered:false, desc:'Salmon, cucumber, and cream cheese with a golden crunchy coating and soy dip.', img:'uploads/pasted-1777583083889-0.png' },
  { id:37, num:'37', name:'Rainbow Avocado Roll', jp:'レインボーアボカド', cat:'rolls', price:36, badge:'Seasonal', ordered:true, desc:'Avocado, tuna, salmon, egg, and shrimp layered with unagi sauce and sesame.', img:'uploads/pasted-1777583745213-0.png' },
  { id:38, num:'38', name:'Salmon Cream Roll', jp:'サーモンクリーム', cat:'rolls', price:29, badge:'Classic', ordered:false, desc:'Silky salmon around warm rice, cream cheese, avocado, and a clean finish.', img:'uploads/pasted-1777583755999-0.png' },

  // GUNKAN
  { id:23, num:'23', name:'Uni Gunkan', jp:'ウニ 軍艦', cat:'gunkan', price:38, badge:'Premium', ordered:true, desc:'Sea urchin, fresh daily. Creamy, sweet, with oceanic brine.', img:'uploads/pasted-1777583745213-0.png' },
  { id:24, num:'24', name:'Ikura Gunkan', jp:'イクラ 軍艦', cat:'gunkan', price:28, badge:'', ordered:false, desc:'Glossy salmon roe. Each egg bursts with ocean flavor.', img:'uploads/pasted-1777583755999-0.png' },
  { id:25, num:'25', name:'Negitoro Gunkan', jp:'ネギトロ', cat:'gunkan', price:32, badge:'Popular', ordered:true, desc:'Minced fatty tuna with green onion. Rich and fresh taste.', img:'uploads/pasted-1777583745213-0.png' },
  { id:26, num:'26', name:'Quail Egg Gunkan', jp:'うずら卵', cat:'gunkan', price:24, badge:'', ordered:true, desc:'Negitoro topped with raw quail egg. Velvety, rich serving.', img:'uploads/pasted-1777583755999-0.png' },

  // SASHIMI
  { id:27, num:'27', name:'Otoro Sashimi', jp:'大トロ 刺身', cat:'sashimi', price:52, badge:'Premium', ordered:false, desc:'Three pieces of premium fatty tuna. The pinnacle of sushi craftsmanship.', img:'uploads/pasted-1777583083889-0.png' },
  { id:28, num:'28', name:'Salmon Sashimi', jp:'鮭 刺身', cat:'sashimi', price:28, badge:'', ordered:true, desc:'Five pieces of Atlantic salmon. Served with ponzu and fresh wasabi.', img:'uploads/pasted-1777582340525-0.png' },
  { id:29, num:'29', name:'Mixed Sashimi', jp:'盛り合わせ', cat:'sashimi', price:45, badge:'Value', ordered:true, desc:"Chef's selection of seven seasonal fish. A journey through the ocean's finest flavors.", img:'uploads/pasted-1777583745213-0.png' },
  { id:30, num:'30', name:'Hamachi Sashimi', jp:'ハマチ 刺身', cat:'sashimi', price:32, badge:'New', ordered:false, desc:'Yellowtail, aged to perfect texture. Served with yuzu and habanero.', img:'uploads/pasted-1777583083889-0.png' },
];

const PHOTO_VARIANTS = {
  nigiri: [
    { img:'uploads/pasted-1777582340525-0.png', pos:'center' },
    { img:'uploads/pasted-1777583083889-0.png', pos:'center' },
    { img:'uploads/pasted-1777583212111-0.png', pos:'45% 52%' },
    { img:'uploads/pasted-1777583293307-0.png', pos:'52% 50%' },
  ],
  rolls: [
    { img:'uploads/pasted-1777583745213-0.png', pos:'center' },
    { img:'uploads/pasted-1777583755999-0.png', pos:'50% 48%' },
    { img:'uploads/pasted-1777583212111-0.png', pos:'45% 50%' },
    { img:'uploads/pasted-1777583293307-0.png', pos:'58% 50%' },
    { img:'uploads/pasted-1777583083889-0.png', pos:'50% 54%' },
  ],
  gunkan: [
    { img:'uploads/pasted-1777583745213-0.png', pos:'50% 44%' },
    { img:'uploads/pasted-1777583755999-0.png', pos:'50% 52%' },
    { img:'uploads/pasted-1777583212111-0.png', pos:'46% 50%' },
    { img:'uploads/pasted-1777583293307-0.png', pos:'54% 52%' },
  ],
  sashimi: [
    { img:'uploads/pasted-1777583083889-0.png', pos:'center' },
    { img:'uploads/pasted-1777582340525-0.png', pos:'center' },
    { img:'uploads/pasted-1777583212111-0.png', pos:'48% 50%' },
    { img:'uploads/pasted-1777583745213-0.png', pos:'50% 46%' },
  ],
  premium: [
    { img:'uploads/pasted-1777583212111-0.png', pos:'45% 50%' },
    { img:'uploads/pasted-1777583745213-0.png', pos:'50% 50%' },
    { img:'uploads/pasted-1777583083889-0.png', pos:'52% 52%' },
  ],
};

const photoCountByCat = {};
const MENU_ITEMS = MENU.map(item => {
  const pool = PHOTO_VARIANTS[item.cat] || PHOTO_VARIANTS.rolls;
  const current = photoCountByCat[item.cat] || 0;
  photoCountByCat[item.cat] = current + 1;
  const variant = pool[current % pool.length];
  return { ...item, img: variant.img, imgPos: variant.pos };
});

const CATS = [
  { label:'All', value:'all' },
  { label:'Nigiri', value:'nigiri' },
  { label:'Rolls', value:'rolls' },
  { label:'Premium', value:'premium' },
];

// Categories shown in the "All" view (rolls are collapsed into a "See all" tile)
const ALL_VIEW_CATS = ['nigiri', 'premium'];

const PREVIOUS_ORDER_ITEMS = MENU_ITEMS.filter(item => item.ordered).slice(0, 6);
const HERO_ORDER_PREVIEW = PREVIOUS_ORDER_ITEMS.slice(0, 3).map((item, i) => ({
  ...item,
  qty: i === 0 ? 2 : 1,
}));

const BADGE_CLR = {
  "Chef's Choice": 'oklch(72% 0.08 75)',
  'Premium':      'oklch(78% 0.05 285)',
  'Limited':      'oklch(72% 0.08 22)',
  'Seasonal':     'oklch(72% 0.07 148)',
  'Best Seller':  'oklch(72% 0.08 75)',
  'New':          'oklch(74% 0.06 222)',
  'Classic':      'oklch(72% 0.08 75)',
  'Spicy':        'oklch(72% 0.08 22)',
  'Hot':          'oklch(72% 0.08 22)',
  'Crispy':       'oklch(74% 0.06 160)',
  'Luxury':       'oklch(78% 0.05 285)',
  'Popular':      'oklch(74% 0.06 160)',
  'Value':        'oklch(72% 0.08 75)',
};

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DOW    = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const SLOTS  = ['18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30'];
const ZONES  = [
  { id:'counter', label:'Bar',      sub:'4 seats · Chef view' },
  { id:'table',   label:'Table',        sub:'2–6 guests · Cozy' },
  { id:'private', label:'Private Room', sub:'8–12 guests · Private' },
];

const fmt = p => `€${p.toLocaleString('de-DE')}`;

// ── HOOKS ─────────────────────────────────────────────────────────────────────

function useCart() {
  const [items, setItems] = React.useState([]);
  const addItem = React.useCallback(item => {
    setItems(prev => {
      const ex = prev.find(i => i.id === item.id);
      if (ex) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  }, []);
  const updateQty = React.useCallback((id, delta) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0));
  }, []);
  const clearCart = React.useCallback(() => {
    setItems([]);
  }, []);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return { items, addItem, updateQty, clearCart, total, count };
}

function useReveal() {
  React.useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ── NAVBAR ────────────────────────────────────────────────────────────────────

function Navbar({ count, onCartOpen, onResOpen }) {
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };
  return (
    <nav className="nav">
      <a className="nav-logo" href="#">Shiro</a>
      <ul className="nav-links">
        <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('sec-phil'); }}>Philosophy</a></li>
        <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('sec-menu'); }}>Menu</a></li>
        <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('sec-delivery'); }}>Delivery</a></li>
      </ul>
      <div className="nav-actions">
        <button className="nav-res-btn" onClick={onResOpen}>Reserve Table</button>
        <button className="nav-cart-btn" onClick={onCartOpen}>
          <span className="nav-cart-icon">
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          </span>
          <span className="nav-cart-label">Order</span>
          <span className="nav-cart-count" id="cart-badge">{count}</span>
        </button>
      </div>
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────

function HeroSection({ count, onCartOpen, onResOpen }) {
  const vidRef = React.useRef(null);
  const previewSubtotal = HERO_ORDER_PREVIEW.reduce((sum, item) => sum + item.price * item.qty, 0);
  React.useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    const init = () => { v.playbackRate = 0.38; v.classList.add('loaded'); };
    v.addEventListener('loadedmetadata', init);
    if (v.readyState >= 1) init();
    return () => v.removeEventListener('loadedmetadata', init);
  }, []);
  const scrollToMenu = () => {
    const el = document.getElementById('sec-menu');
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };
  return (
    <section className="hero">
      <video ref={vidRef} className="hero-video vid-grade" autoPlay muted playsInline loop preload="auto"
        style={{ filter: 'brightness(0.65) contrast(1.12) saturate(0.75) sepia(0.18)' }}>
        <source src={V_HERO} type="video/mp4" />
      </video>
      <div className="hero-vignette"></div>
      <div className="hero-left-fade"></div>
      <div className="hero-bottom-fade"></div>

      <div className="hero-content">
        <div className="hero-eyebrow">Saarbruecken · Omakase · since 1987</div>
        <h1 className="hero-title">Omakase<br /><em>at home.</em></h1>
        <p className="hero-sub">Artisanal sushi in premium boxes, delivered to your door within 45 minutes.</p>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={scrollToMenu}>
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            Order Delivery
          </button>
          <button className="btn-secondary" onClick={onResOpen}>Reserve Table</button>
        </div>
      </div>

      <div className="hero-order-float">
        <div className="float-head">
          <span className="float-head-label">Ordered Before</span>
          <span className="float-head-sub">{PREVIOUS_ORDER_ITEMS.length} picks</span>
        </div>
        <div className="float-items">
          {HERO_ORDER_PREVIEW.map(item => (
            <div className="float-item" key={item.id}>
              <span className="float-item-name">{item.name} × {item.qty}</span>
              <span className="float-item-price">{fmt(item.price * item.qty)}</span>
            </div>
          ))}
        </div>
        <div className="float-rule"></div>
        <div className="float-total">
          <span className="float-total-label">Preview</span>
          <span className="float-total-price">{fmt(previewSubtotal)}</span>
        </div>
        <button className="float-btn" onClick={scrollToMenu}>Order Again →</button>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line"></div>
        <span className="hero-scroll-text">Scroll</span>
      </div>
    </section>
  );
}

// ── DELIVERY BAND ─────────────────────────────────────────────────────────────

function DeliveryBand() {
  const items = [
    { label:'Average delivery', val:'35–45 min' },
    { label:'Delivery radius', val:'2.4 km' },
    { label:'Kitchen closes', val:'21:15' },
  ];
  return (
    <div className="delivery-band">
      <div className="dband-inner">
        <div className="dband-copy">
          <div className="kicker">Premium Delivery</div>
          <h2 className="dband-title">Fresh sushi, packed for the ride.</h2>
          <p className="dband-text">Every order leaves the bar in a chilled black box with separate sauce, ginger, wasabi, and a final quality check before dispatch.</p>
          <div className="dband-stats">
            {items.map((it, i) => (
              <div className="dbi" key={i}>
                <div className="dbi-value">{it.val}</div>
                <div className="dbi-label">{it.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="dband-visual" aria-label="Delivery route preview">
          <div className="route-board">
            <div className="route-board-head">
              <span>Route</span>
              <strong>Bahnhofstrasse 110</strong>
            </div>
            <div className="route-line">
              <span className="route-dot active"></span>
              <span className="route-track"></span>
              <span className="route-dot"></span>
            </div>
            <div className="route-board-meta">
              <span>Kitchen</span>
              <span>Your door</span>
            </div>
            <div className="route-board-note">Compact Saarbruecken delivery zone for warm rice, cold toppings, and clean presentation.</div>
          </div>
          <div className="dband-card">
            <span>Next courier</span>
            <strong>18:30</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── PHILOSOPHY ────────────────────────────────────────────────────────────────

function PhilosophySection() {
  return (
    <section id="sec-phil" style={{ paddingTop: 0 }}>
      <div className="sw sec-phil">
        <div className="phil-grid">
          <div>
            <div className="kicker">Craftsmanship</div>
            <h2 className="display-heading reveal">Forty years<br />in every<br /><em>premium box.</em></h2>
          </div>
          <div className="reveal">
            <div className="phil-body">
              <p>At the restaurant or at home, the ritual remains the same: each piece is prepared after ordering, the rice is formed warm, and the flavor captures the moment.</p>
              <p>We work with a compact delivery zone around Saarbruecken to ensure freshness is never compromised.</p>
            </div>
            <div className="stat-row">
              <div><div className="stat-num">12</div><div className="stat-label">omakase courses</div></div>
              <div><div className="stat-num">45'</div><div className="stat-label">delivery promise</div></div>
              <div><div className="stat-num">40+</div><div className="stat-label">years of experience</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CINEMATIC BLOCK ───────────────────────────────────────────────────────────

function CinematicBlock({ onOrder }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.addEventListener('loadedmetadata', () => { v.playbackRate = 0.45; });
  }, []);
  return (
    <div className="cinematic">
      <video ref={ref} className="vid-grade" autoPlay muted playsInline loop
        style={{ filter: 'brightness(0.48) contrast(1.16) saturate(0.65) sepia(0.22)' }}>
        <source src={V} type="video/mp4" />
      </video>
      <div className="cinematic-overlay">
        <div className="cin-line"></div>
        <div className="cin-text">Prepared with attention.</div>
        <div className="cin-sub">Delivered with care.</div>
        <div className="cin-line"></div>
        <div style={{ marginTop: 28 }}>
          <button className="btn-primary" onClick={onOrder} style={{ animation: 'none', opacity: 1, transform: 'none' }}>
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

// ── MENU SECTION ──────────────────────────────────────────────────────────────

function MenuCard({ item, onAdd }) {
  const clr = BADGE_CLR[item.badge] || 'oklch(72% 0.08 75)';
  return (
    <div className="menu-card">
      <div className="card-img">
        <img src={item.img} alt={item.name} loading="lazy" style={{ objectPosition: item.imgPos || 'center' }} />
        <div className="card-img-fade"></div>
        {item.badge && (
          <div className="card-badge" style={{ color: clr, borderColor: clr, background: clr.replace(')', ' / 0.12)').replace('oklch', 'oklch') }}>
            {item.badge}
          </div>
        )}
      </div>
      <div className="card-body">
        <div className="card-num">{item.num}</div>
        <div className="card-name">{item.name}</div>
        <div className="card-jp">{item.jp}</div>
        <div className="card-desc">{item.desc}</div>
        <div className="card-footer">
          <span className="card-price">{fmt(item.price)}</span>
          <button className="card-add" onClick={() => onAdd(item)}>+</button>
        </div>
      </div>
    </div>
  );
}

function MenuSection({ onAdd }) {
  const [cat, setCat] = React.useState('all');
  // In the "All" view, rolls are hidden behind a "See all" tile; other views show the category itself.
  const filtered = cat === 'all'
    ? MENU_ITEMS.filter(i => ALL_VIEW_CATS.includes(i.cat))
    : MENU_ITEMS.filter(i => i.cat === cat);
  return (
    <section className="sec-menu" id="sec-menu">
      <div className="sw">
        <div className="sec-header">
          <span className="sec-title">À La Carte Menu</span>
          <span className="sec-counter">Spring selection — May 2026</span>
        </div>
        <div className="cat-filters">
          {CATS.map(c => (
            <button key={c.value} className={`cat-btn${cat === c.value ? ' active' : ''}`} onClick={() => setCat(c.value)}>{c.label}</button>
          ))}
        </div>
        <div className="menu-grid">
          {filtered.map(item => <MenuCard key={item.id} item={item} onAdd={onAdd} />)}
          {cat === 'all' && (
            <button className="menu-see-all" onClick={() => setCat('rolls')}>
              <span className="see-all-kicker">Rolls</span>
              <span className="see-all-title">See all</span>
              <span className="see-all-sub">Explore the full selection of signature rolls.</span>
              <span className="see-all-arrow">View rolls →</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

// ── PACKAGING ─────────────────────────────────────────────────────────────────

function PackagingBlock() {
  const feats = [
    { svg: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title:'Premium lacquered packaging', desc:'A matte black box with a clean insulated interior.' },
    { svg: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title:'Temperature control', desc:'Cooling elements keep the box at 1–4°C during delivery.' },
    { svg: <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>, title:'Packed after ordering', desc:'Every box is assembled fresh right before dispatch.' },
  ];
  return (
    <section className="sec-pack" id="sec-packaging">
      <div className="sw">
        <div className="pack-grid">
          <div className="pack-visual reveal">
            <div className="box-wrap">
              <div className="box-lid-el"></div>
              <div className="box-body-el"></div>
              <div className="box-seal"><div className="box-seal-dot"></div></div>
              <div className="box-brandmark">Shiro</div>
            </div>
            <div className="box-caption">Premium delivery box</div>
          </div>
          <div className="reveal">
            <div className="kicker">Packaging</div>
            <h2 className="display-heading" style={{ marginBottom: 30 }}>The box is part<br />of the <em>experience.</em></h2>
            <div className="pack-features">
              {feats.map((f, i) => (
                <div className="pack-feat" key={i}>
                  <div className="pack-feat-icon">{f.svg}</div>
                  <div>
                    <div className="pack-feat-title">{f.title}</div>
                    <div className="pack-feat-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── HOW IT WORKS ──────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    { num:'01', title:'Order lands in the kitchen', desc:'The chef sees your selected rolls immediately and starts rice, fish, garnish, and sauces fresh.' },
    { num:'02', title:'Cold-packed by course', desc:'Nigiri, rolls, sauce, ginger, and wasabi are separated so textures stay clean in transit.' },
    { num:'03', title:'Short city route', desc:'A courier leaves from Bahnhofstrasse 110 and keeps the box flat until handoff.' },
  ];
  return (
    <section className="sec-hiw delivery-flow" id="sec-delivery">
      <div className="sw delivery-flow-grid">
        <div className="delivery-flow-copy reveal">
          <div className="kicker">How delivery works</div>
          <h2 className="display-heading">From sushi bar<br />to your door,<br /><em>still chilled.</em></h2>
          <p className="delivery-flow-lead">We keep the delivery zone compact so rice stays soft, toppings stay cool, and each roll arrives looking like it left the counter minutes ago.</p>
          <div className="delivery-route">
            {steps.map(step => (
              <div className="route-step" key={step.num}>
                <div className="route-num">{step.num}</div>
                <div>
                  <div className="route-title">{step.title}</div>
                  <div className="route-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="delivery-flow-panel reveal">
          <div className="delivery-panel-body">
            <div className="delivery-panel-kicker">Delivery window</div>
            <div className="delivery-panel-time">17:00–22:00</div>
            <div className="delivery-panel-note">Orders accepted until 21:15, Monday to Saturday.</div>
            <div className="delivery-panel-divider"></div>
            <div className="delivery-checks">
              <span>Chilled black box</span>
              <span>Separate sauces</span>
              <span>Flat courier carry</span>
            </div>
          </div>
        </aside>
        </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────

function FooterSection({ onResOpen }) {
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-logo">Shiro</div>
        <div className="foot-addr">
          Saarbruecken, Bahnhofstrasse 110<br />
          Delivery: Mon – Sat 17:00 – 22:00 · Orders until 21:15
        </div>
        <div className="foot-right">
          <div className="foot-links">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">AGB</a>
          </div>
          <div className="foot-copy">© 2026 Shiro</div>
        </div>
      </div>
    </footer>
  );
}

// ── CART SIDEBAR ──────────────────────────────────────────────────────────────

function CartSidebar({ isOpen, onClose, items, total, onQtyUpdate, onCheckoutClick }) {
  return (
    <>
      <div className={`cart-overlay${isOpen ? ' open' : ''}`} onClick={onClose} />
      <div className={`cart-sidebar${isOpen ? ' open' : ''}`}>
        <div className="cart-head">
          <span className="cart-head-title">Your Order</span>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
              <div className="cart-empty-text">Your cart is empty</div>
              <div className="cart-empty-sub">Add items from the menu below</div>
            </div>
          ) : (
            <div className="cart-items">
              {items.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="ci-info">
                    <div className="ci-name">{item.name}</div>
                    <div className="ci-jp">{item.jp}</div>
                    <div className="ci-price">{fmt(item.price * item.qty)}</div>
                  </div>
                  <div className="ci-qty">
                    <button className="qty-btn" onClick={() => onQtyUpdate(item.id, -1)}>−</button>
                    <div className="qty-val">{item.qty}</div>
                    <button className="qty-btn" onClick={() => onQtyUpdate(item.id, 1)}>+</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="cart-foot">
            <div className="cart-subtotal">
              <span className="cart-sub-label">Subtotal</span>
              <span className="cart-sub-price">{fmt(total)}</span>
            </div>
            <button className="cart-checkout" onClick={onCheckoutClick}>Checkout →</button>
            <div className="cart-note">Delivery within Saarbruecken</div>
          </div>
        )}
      </div>
    </>
  );
}

// ── RESERVATION MODAL ─────────────────────────────────────────────────────────

function CalendarView({ selDate, onSelect }) {
  const now = new Date();
  const [year, setYear] = React.useState(now.getFullYear());
  const [month, setMonth] = React.useState(now.getMonth());
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const minDate = new Date(today.getTime() + 86400000);

  const days = [];
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  const isPast = d => d && new Date(year, month, d) < minDate;
  const isSel  = d => d && selDate && selDate.y === year && selDate.m === month && selDate.d === d;
  const isToday = d => d && new Date(year, month, d).getTime() === today.getTime();

  const prev = () => month === 0 ? (setYear(y => y - 1), setMonth(11)) : setMonth(m => m - 1);
  const next = () => month === 11 ? (setYear(y => y + 1), setMonth(0)) : setMonth(m => m + 1);

  return (
    <div>
      <div className="cal-head">
        <button className="cal-nav" onClick={prev}>‹</button>
        <div className="cal-month">{MONTHS[month]} {year}</div>
        <button className="cal-nav" onClick={next}>›</button>
      </div>
      <div className="cal-dow">{DOW.map(d => <div className="cal-dn" key={d}>{d}</div>)}</div>
      <div className="cal-grid">
        {days.map((d, i) => (
          <div key={i}
            className={`cal-day${!d ? ' empty' : ''}${isPast(d) ? ' dis' : ''}${isSel(d) ? ' sel' : ''}${isToday(d) ? ' today' : ''}`}
            onClick={() => d && !isPast(d) && onSelect({ y: year, m: month, d })}>
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReservationModal({ isOpen, onClose }) {
  const [step, setStep]       = React.useState(0);
  const [selDate, setSelDate] = React.useState(null);
  const [selTime, setSelTime] = React.useState('');
  const [selZone, setSelZone] = React.useState('');
  const [form, setForm]       = React.useState({ name:'', phone:'', email:'', guests:'2', comment:'' });
  const [ref]                 = React.useState(() => 'SH-' + Math.random().toString(36).slice(2,8).toUpperCase());

  React.useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setStep(0); setSelDate(null); setSelTime(''); setSelZone('');
        setForm({ name:'', phone:'', email:'', guests:'2', comment:'' });
      }, 500);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const canNext0 = !!selDate;
  const canNext1 = selTime && selZone;
  const canNext2 = form.name && form.email && form.phone;

  const stepLabels = ['Date', 'Time & Area', 'Details'];

  return (
    <div className={`modal-overlay${isOpen ? ' open' : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-head">
          <span className="modal-title">Reserve a Table</span>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        {step < 3 && (
          <div className="modal-steps">
            {stepLabels.map((l, i) => (
              <div key={l} className={`modal-step-tab${step === i ? ' active' : ''}`}>{l}</div>
            ))}
          </div>
        )}
        <div className="modal-body">

          {step === 0 && (
            <>
              <CalendarView selDate={selDate} onSelect={setSelDate} />
              <div className="modal-actions">
                <button className="modal-btn-p" onClick={() => setStep(1)} disabled={!canNext0}>Continue →</button>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div style={{ marginBottom: 26 }}>
                <div className="form-label" style={{ marginBottom: 10 }}>Choose a time</div>
                <div className="time-grid">
                  {SLOTS.map(s => (
                    <div key={s} className={`time-slot${selTime === s ? ' sel' : ''}`} onClick={() => setSelTime(s)}>{s}</div>
                  ))}
                </div>
              </div>
              <div>
                <div className="form-label" style={{ marginBottom: 10 }}>Seating area</div>
                <div className="zone-grid">
                  {ZONES.map(z => (
                    <div key={z.id} className={`zone-card${selZone === z.id ? ' sel' : ''}`} onClick={() => setSelZone(z.id)}>
                      <div className="zone-label">{z.label}</div>
                      <div className="zone-sub">{z.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-actions">
                <button className="modal-btn-s" onClick={() => setStep(0)}>← Back</button>
                <button className="modal-btn-p" onClick={() => setStep(2)} disabled={!canNext1}>Continue →</button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="res-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full name</label>
                    <input className="form-input" placeholder="Emma Weber" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input className="form-input" placeholder="+49 681 000000" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" placeholder="email@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Guests</label>
                    <select className="form-select" value={form.guests} onChange={e => setForm(f => ({ ...f, guests: e.target.value }))}>
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Dining notes</label>
                    <input className="form-input" placeholder="Allergies, preferences..." value={form.comment} onChange={e => setForm(f => ({ ...f, comment: e.target.value }))} />
                  </div>
                </div>
                {selDate && (
                  <div className="booking-summary">
                    {selDate.d} {MONTHS[selDate.m]} {selDate.y} · {selTime} · {ZONES.find(z => z.id === selZone)?.label} · {form.guests} guest{Number(form.guests) > 1 ? 's' : ''}
                  </div>
                )}
              </div>
              <div className="modal-actions">
                <button className="modal-btn-s" onClick={() => setStep(1)}>← Back</button>
                <button className="modal-btn-p" onClick={() => setStep(3)} disabled={!canNext2}>Confirm Reservation</button>
              </div>
            </>
          )}

          {step === 3 && (
            <div className="confirm">
              <div className="confirm-circle">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="confirm-title">Reservation confirmed.</div>
              <div className="confirm-sub">
                We look forward to welcoming you{form.name ? `, ${form.name}` : ''}.<br />
                Confirmation has been sent to {form.email || 'your email'}.
              </div>
              <div className="confirm-ref">{ref}</div>
              <div className="modal-actions" style={{ justifyContent: 'center', marginTop: 24 }}>
                <button className="modal-btn-s" onClick={onClose}>Close</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// ── CHECKOUT MODAL ─────────────────────────────────────────────────────────────

function CheckoutModal({ isOpen, onClose, items, total, onConfirmOrder }) {
  const [form, setForm] = React.useState({
    fullName: '',
    phone: '',
    address: '',
    deliveryTime: 'asap',
    specificTime: '',
    paymentMethod: 'cash',
    comment: ''
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setForm({
          fullName: '',
          phone: '',
          address: '',
          deliveryTime: 'asap',
          specificTime: '',
          paymentMethod: 'cash',
          comment: ''
        });
        setErrors({});
        setIsSubmitting(false);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Enter your full name';
    if (!form.phone.trim()) newErrors.phone = 'Enter your phone number';
    if (!form.address.trim()) newErrors.address = 'Enter your delivery address';
    if (form.deliveryTime === 'specific' && !form.specificTime.trim()) {
      newErrors.specificTime = 'Choose a delivery time';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const orderData = {
      orderId: `ORD-${Date.now()}`,
      items: items.map(i => ({ id: i.id, name: i.name, qty: i.qty, price: i.price })),
      total,
      customer: {
        fullName: form.fullName,
        phone: form.phone,
        address: form.address
      },
      delivery: {
        type: form.deliveryTime,
        time: form.deliveryTime === 'asap' ? 'As soon as possible' : form.specificTime
      },
      paymentMethod: form.paymentMethod,
      comment: form.comment,
      createdAt: new Date().toISOString()
    };

    onConfirmOrder(orderData);
  };

  const deliveryTimeOptions = [
    { value: 'asap', label: 'As soon as possible', sub: 'Prepared now and delivered within 45 minutes.' },
    { value: 'specific', label: 'Schedule a time', sub: 'Choose a preferred delivery window for today.' }
  ];

  const paymentMethods = [
    { value: 'cash', label: 'Cash on delivery', sub: 'Pay the courier when your order arrives.' },
    { value: 'card', label: 'Card on delivery', sub: 'Pay by card at the door.' },
    { value: 'online', label: 'Online payment', sub: 'Reserved for connected payment setup.' }
  ];

  return (
    <div className={`modal-overlay${isOpen ? ' open' : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal checkout-modal">
        <div className="modal-head">
          <span className="modal-title">Checkout</span>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body checkout-body">
          <form onSubmit={handleSubmit}>
            <div className="checkout-grid">
              <div className="checkout-form">
                <div className="checkout-section-title">Delivery Details</div>
                <div className="form-group">
                  <label className="form-label">Full name *</label>
                  <input
                    className={`form-input${errors.fullName ? ' error' : ''}`}
                    placeholder="Emma Weber"
                    value={form.fullName}
                    onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
                  />
                  {errors.fullName && <div className="form-error">{errors.fullName}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Phone number *</label>
                  <input
                    className={`form-input${errors.phone ? ' error' : ''}`}
                    placeholder="+49 681 000000"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  />
                  {errors.phone && <div className="form-error">{errors.phone}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Delivery address *</label>
                  <input
                    className={`form-input${errors.address ? ' error' : ''}`}
                    placeholder="Saarbruecken, Bahnhofstrasse 110"
                    value={form.address}
                    onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                  />
                  {errors.address && <div className="form-error">{errors.address}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Delivery time</label>
                  <div className="radio-group">
                    {deliveryTimeOptions.map(opt => (
                      <label key={opt.value} className={`radio-option${form.deliveryTime === opt.value ? ' selected' : ''}`}>
                        <input
                          type="radio"
                          name="deliveryTime"
                          value={opt.value}
                          checked={form.deliveryTime === opt.value}
                          onChange={e => setForm(f => ({ ...f, deliveryTime: e.target.value }))}
                        />
                        <span className="radio-copy">
                          <span className="radio-title">{opt.label}</span>
                          <span className="radio-sub">{opt.sub}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                  {form.deliveryTime === 'specific' && (
                    <input
                      className={`form-input${errors.specificTime ? ' error' : ''}`}
                      style={{ marginTop: 10 }}
                      type="time"
                      value={form.specificTime}
                      onChange={e => setForm(f => ({ ...f, specificTime: e.target.value }))}
                    />
                  )}
                  {errors.specificTime && <div className="form-error">{errors.specificTime}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Payment method</label>
                  <div className="radio-group">
                    {paymentMethods.map(method => (
                      <label key={method.value} className={`radio-option${form.paymentMethod === method.value ? ' selected' : ''}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.value}
                          checked={form.paymentMethod === method.value}
                          onChange={e => setForm(f => ({ ...f, paymentMethod: e.target.value }))}
                        />
                        <span className="radio-copy">
                          <span className="radio-title">{method.label}</span>
                          <span className="radio-sub">{method.sub}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Note for courier / restaurant</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Special requests, allergies, entrance notes..."
                    value={form.comment}
                    onChange={e => setForm(f => ({ ...f, comment: e.target.value }))}
                  />
                </div>
              </div>

              <div className="checkout-summary">
                <div className="checkout-summary-title">Order Summary</div>
                <div className="checkout-items">
                  {items.map(item => (
                    <div className="checkout-item" key={item.id}>
                      <div className="checkout-item-info">
                        <div className="checkout-item-name">{item.name}</div>
                        <div className="checkout-item-qty">× {item.qty}</div>
                      </div>
                      <div className="checkout-item-price">{fmt(item.price * item.qty)}</div>
                    </div>
                  ))}
                </div>
                <div className="checkout-total">
                  <span className="checkout-total-label">Total</span>
                  <span className="checkout-total-price">{fmt(total)}</span>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button type="button" className="modal-btn-s" onClick={onClose}>← Back</button>
              <button type="submit" className="modal-btn-p" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Confirm Order'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ── SUCCESS MODAL ───────────────────────────────────────────────────────────────

function SuccessModal({ isOpen, onClose, orderId }) {
  return (
    <div className={`modal-overlay${isOpen ? ' open' : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal success-modal">
        <div className="modal-body" style={{ padding: '48px 36px', textAlign: 'center' }}>
          <div className="success-icon">
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div className="success-title">Thank you!</div>
          <div className="success-sub">
            Your order has been placed successfully.<br />
            Order number:
          </div>
          <div className="success-order-id">{orderId}</div>
          <div className="modal-actions" style={{ justifyContent: 'center', marginTop: 32 }}>
            <button className="modal-btn-p" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── ROOT APP ──────────────────────────────────────────────────────────────────

function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [resOpen,  setResOpen]  = React.useState(false);
  const [checkoutOpen, setCheckoutOpen] = React.useState(false);
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [lastOrderId, setLastOrderId] = React.useState('');
  const { items, addItem, updateQty, clearCart, total, count } = useCart();
  useReveal();

  const addWithPulse = React.useCallback(item => {
    addItem(item);
    const badge = document.getElementById('cart-badge');
    if (badge) {
      badge.classList.remove('pulse');
      void badge.offsetWidth;
      badge.classList.add('pulse');
      setTimeout(() => badge.classList.remove('pulse'), 380);
    }
  }, [addItem]);

  const handleCheckoutClick = React.useCallback(() => {
    if (items.length === 0) {
      alert('Your cart is empty');
      return;
    }
    setCartOpen(false);
    setCheckoutOpen(true);
  }, [items.length]);

  const handleConfirmOrder = React.useCallback((orderData) => {
    const orders = JSON.parse(localStorage.getItem('shiro_orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('shiro_orders', JSON.stringify(orders));

    setLastOrderId(orderData.orderId);
    clearCart();
    setCheckoutOpen(false);
    setSuccessOpen(true);
  }, [clearCart]);

  const handleCloseSuccess = React.useCallback(() => {
    setSuccessOpen(false);
    setLastOrderId('');
  }, []);

  return (
    <>
      <Navbar count={count} onCartOpen={() => setCartOpen(true)} onResOpen={() => setResOpen(true)} />
      <HeroSection count={count} onCartOpen={() => setCartOpen(true)} onResOpen={() => setResOpen(true)} />
      <DeliveryBand />
      <PhilosophySection />
      <CinematicBlock onOrder={() => setCartOpen(true)} />
      <MenuSection onAdd={addWithPulse} />
      <PackagingBlock />
      <HowItWorks />
      <FooterSection onResOpen={() => setResOpen(true)} />
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        total={total}
        onQtyUpdate={updateQty}
        onCheckoutClick={handleCheckoutClick}
      />
      <ReservationModal isOpen={resOpen} onClose={() => setResOpen(false)} />
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={items}
        total={total}
        onConfirmOrder={handleConfirmOrder}
      />
      <SuccessModal
        isOpen={successOpen}
        onClose={handleCloseSuccess}
        orderId={lastOrderId}
      />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app-root')).render(<App />);
