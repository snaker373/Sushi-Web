// ── DATA ─────────────────────────────────────────────────────────────────────

const V      = "uploads/Make Authentic Japanese Sushi Like a Pro_-72644283.mp4";
const V_HERO = "uploads/Sushi Bar _ Salmon Nigiri (1).mp4";

const MENU = [
  { id:1, num:'01', name:'Sake Nigiri',  jp:'鮭 にぎり',      cat:'nigiri',  price:1900, badge:"Chef's Choice", desc:'Atlantic salmon aged on kombu, hand-pressed over body-temperature shari. A whisper of sudachi.', img:'uploads/pasted-1777582340525-0.png' },
  { id:2, num:'02', name:'Otoro',        jp:'大トロ',          cat:'nigiri',  price:4200, badge:'Premium',       desc:'Fatty tuna belly from Oma Prefecture. The highest grade, cut to order at each service.', img:'uploads/pasted-1777583083889-0.png' },
  { id:3, num:'03', name:'Wagyu Nigiri', jp:'和牛 にぎり',     cat:'premium', price:5800, badge:'Limited',       desc:'A5 Wagyu lightly seared, draped over shari with ponzu gel and micro chive.', img:'uploads/pasted-1777583212111-0.png' },
  { id:4, num:'04', name:'Unagi',        jp:'鰻',             cat:'nigiri',  price:3600, badge:'Seasonal',      desc:'Grilled freshwater eel glazed with tare, finished with sesame. Smoky and caramelised.', img:'uploads/pasted-1777583293307-0.png' },
  { id:5, num:'05', name:'Dragon Roll',  jp:'ドラゴンロール',  cat:'rolls',   price:3900, badge:'Best Seller',   desc:'Tuna, avocado and shrimp wrapped in otoro, finished with aged balsamic pearls.', img:'uploads/pasted-1777583745213-0.png' },
  { id:6, num:'06', name:'Salmon Rose',  jp:'サーモンロール',  cat:'rolls',   price:2800, badge:'New',           desc:'Salmon-wrapped roll with shrimp, avocado, tobiko, crowned with truffle mayo and ikura.', img:'uploads/pasted-1777583755999-0.png' },
];

const CATS = ['All', 'Nigiri', 'Rolls', 'Premium'];

const BADGE_CLR = {
  "Chef's Choice":'oklch(72% 0.08 75)',
  'Premium':      'oklch(78% 0.05 285)',
  'Limited':      'oklch(72% 0.08 22)',
  'Seasonal':     'oklch(72% 0.07 148)',
  'Best Seller':  'oklch(72% 0.08 75)',
  'New':          'oklch(74% 0.06 222)',
};

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DOW    = ['Su','Mo','Tu','We','Th','Fr','Sa'];
const SLOTS  = ['18:00','18:30','19:00','19:30','20:00','20:30'];
const ZONES  = [
  { id:'counter', label:'Counter',      sub:'4 seats · Watch the chef' },
  { id:'table',   label:'Table',        sub:'2–6 guests · Intimate' },
  { id:'private', label:'Private Room', sub:'8–12 guests · Exclusive' },
];

const fmt = p => `¥${p.toLocaleString()}`;

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
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return { items, addItem, updateQty, total, count };
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
        <button className="nav-res-btn" onClick={onResOpen}>Reserve a Table</button>
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
        <div className="hero-eyebrow">Tokyo Handcraft · Omakase · Since 1987</div>
        <h1 className="hero-title">Omakase<br /><em>at home.</em></h1>
        <p className="hero-sub">Chef Tanaka's creations packed in premium lacquer boxes, delivered within 45 minutes.</p>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={scrollToMenu}>
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            Order Delivery
          </button>
          <button className="btn-secondary" onClick={onResOpen}>Reserve a Table</button>
        </div>
      </div>

      <div className="hero-order-float">
        <div className="float-head">
          <span className="float-head-label">Your Order</span>
          <span className="float-head-sub">{count} item{count !== 1 ? 's' : ''}</span>
        </div>
        <div className="float-items">
          <div className="float-item"><span className="float-item-name">Sake Nigiri × 2</span><span className="float-item-price">¥3,800</span></div>
          <div className="float-item"><span className="float-item-name">Otoro × 1</span><span className="float-item-price">¥4,200</span></div>
          <div className="float-item"><span className="float-item-name">Uni Gunkan × 1</span><span className="float-item-price">¥3,200</span></div>
        </div>
        <div className="float-rule"></div>
        <div className="float-total">
          <span className="float-total-label">Subtotal</span>
          <span className="float-total-price">¥11,200</span>
        </div>
        <button className="float-btn" onClick={onCartOpen}>View Order →</button>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line"></div>
        <span className="hero-scroll-text">Explore</span>
      </div>
    </section>
  );
}

// ── DELIVERY BAND ─────────────────────────────────────────────────────────────

function DeliveryBand() {
  const items = [
    { svg: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label:'Delivery time', val:'Under 45 minutes' },
    { svg: <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 4v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>, label:'Coverage zone', val:'Central Tokyo only' },
    { svg: <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label:'Packaging', val:'Premium lacquer box' },
    { svg: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label:'Quality seal', val:'Temperature controlled' },
  ];
  return (
    <div className="delivery-band">
      <div className="dband-inner">
        {items.map((it, i) => (
          <div className="dbi" key={i}>
            {it.svg}
            <div>
              <div className="dbi-label">{it.label}</div>
              <div className="dbi-value">{it.val}</div>
            </div>
          </div>
        ))}
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
            <div className="kicker">The Craft</div>
            <h2 className="display-heading reveal">Forty years<br />distilled into<br /><em>a single box.</em></h2>
          </div>
          <div className="reveal">
            <div className="phil-body">
              <p>Whether you sit at our counter or open a box at home, the ritual is the same. Chef Tanaka slices every piece to order. The rice is formed at body temperature. Nothing is prepared in advance.</p>
              <p>Our delivery radius is small by design. Freshness is not a compromise.</p>
            </div>
            <div className="stat-row">
              <div><div className="stat-num">12</div><div className="stat-label">Courses omakase</div></div>
              <div><div className="stat-num">45'</div><div className="stat-label">Delivery promise</div></div>
              <div><div className="stat-num">40+</div><div className="stat-label">Years mastery</div></div>
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
        <div className="cin-text">Prepared with intention.</div>
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
        <img src={item.img} alt={item.name} loading="lazy" />
        <div className="card-img-fade"></div>
        <div className="card-badge" style={{ color: clr, borderColor: clr, background: clr.replace(')', ' / 0.12)').replace('oklch', 'oklch') }}>
          {item.badge}
        </div>
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
  const [cat, setCat] = React.useState('All');
  const filtered = cat === 'All' ? MENU : MENU.filter(i => i.cat === cat.toLowerCase());
  return (
    <section className="sec-menu" id="sec-menu">
      <div className="sw">
        <div className="sec-header">
          <span className="sec-title">Order À La Carte</span>
          <span className="sec-counter">Spring selection — May 2026</span>
        </div>
        <div className="cat-filters">
          {CATS.map(c => (
            <button key={c} className={`cat-btn${cat === c ? ' active' : ''}`} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="menu-grid">
          {filtered.map(item => <MenuCard key={item.id} item={item} onAdd={onAdd} />)}
        </div>
      </div>
    </section>
  );
}

// ── PACKAGING ─────────────────────────────────────────────────────────────────

function PackagingBlock() {
  const feats = [
    { svg: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title:'Premium lacquer finish', desc:'Hand-lacquered matte black exterior with satin-lined interior.' },
    { svg: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title:'Temperature controlled', desc:'Gel packs maintain 1–4°C throughout the 45-minute journey.' },
    { svg: <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>, title:'Assembled to order', desc:'Every box is packed fresh at dispatch. No pre-packing, no waiting trays.' },
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
            <div className="box-caption">Premium Lacquer Delivery Box</div>
          </div>
          <div className="reveal">
            <div className="kicker">Packaging</div>
            <h2 className="display-heading" style={{ marginBottom: 30 }}>The box is part<br />of <em>the experience.</em></h2>
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
    { svg: <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>, title:'Order placed', desc:'Select your pieces. Your order reaches the chef immediately.' },
    { svg: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18"/><path d="M3 9h18M9 21V9"/></svg>, title:'Packed in lacquer box', desc:'Each piece is individually placed in our temperature-controlled box.' },
    { svg: <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>, title:'Delivered in 45 min', desc:'Our courier delivers directly. No third parties, no delays.' },
  ];
  return (
    <section className="sec-hiw" id="sec-delivery">
      <div className="sw">
        <div className="kicker reveal">How delivery works</div>
        <div className="hiw-steps">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div className="hiw-step reveal">
                <div className="hiw-num">0{i + 1}</div>
                <div className="hiw-icon">{s.svg}</div>
                <div className="hiw-title">{s.title}</div>
                <div className="hiw-desc">{s.desc}</div>
              </div>
              {i < steps.length - 1 && <div className="hiw-connector"></div>}
            </React.Fragment>
          ))}
        </div>
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
          6-chōme-4-1 Roppongi, Minato City · Tokyo 106-0032, Japan<br />
          Delivery: Mon – Sat 17:00 – 22:00 · Orders close 21:15
        </div>
        <div className="foot-copy">© 2026 Shiro</div>
      </div>
    </footer>
  );
}

// ── CART SIDEBAR ──────────────────────────────────────────────────────────────

function CartSidebar({ isOpen, onClose, items, total, onQtyUpdate }) {
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
              <div className="cart-empty-text">Your order is empty</div>
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
            <button className="cart-checkout">Proceed to Checkout →</button>
            <div className="cart-note">Free delivery within Central Tokyo</div>
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

  const stepLabels = ['Date', 'Time & Zone', 'Details'];

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
                <div className="form-label" style={{ marginBottom: 10 }}>Select time</div>
                <div className="time-grid">
                  {SLOTS.map(s => (
                    <div key={s} className={`time-slot${selTime === s ? ' sel' : ''}`} onClick={() => setSelTime(s)}>{s}</div>
                  ))}
                </div>
              </div>
              <div>
                <div className="form-label" style={{ marginBottom: 10 }}>Seating zone</div>
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
                    <input className="form-input" placeholder="Hiroshi Tanaka" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input className="form-input" placeholder="+81 3 0000 0000" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" placeholder="email@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Number of guests</label>
                    <select className="form-select" value={form.guests} onChange={e => setForm(f => ({ ...f, guests: e.target.value }))}>
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Dietary notes</label>
                    <input className="form-input" placeholder="Allergies, preferences…" value={form.comment} onChange={e => setForm(f => ({ ...f, comment: e.target.value }))} />
                  </div>
                </div>
                {selDate && (
                  <div className="booking-summary">
                    {MONTHS[selDate.m]} {selDate.d}, {selDate.y} · {selTime} · {ZONES.find(z => z.id === selZone)?.label} · {form.guests} guest{form.guests > 1 ? 's' : ''}
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
                A confirmation has been sent to {form.email || 'your email'}.
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

// ── ROOT APP ──────────────────────────────────────────────────────────────────

function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [resOpen,  setResOpen]  = React.useState(false);
  const { items, addItem, updateQty, total, count } = useCart();
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
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} items={items} total={total} onQtyUpdate={updateQty} />
      <ReservationModal isOpen={resOpen} onClose={() => setResOpen(false)} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app-root')).render(<App />);
