import { useState } from "react";

type TierId = "good" | "better" | "best";

type Tier = {
  id: TierId;
  name: string;
  kicker: string;
  badge: string;
  price: number;
  note: string;
  short: string;
  bits: string[];
  lines: string[];
};

const TIERS: Tier[] = [
  {
    id: "good",
    name: "Good",
    kicker: "A low-risk trial",
    badge: "Trial",
    price: 14,
    note: "$7 each",
    short: "$7 each",
    bits: ["2 cleaners"],
    lines: ["2 Frosted Cranberry Every Day Cleaner"],
  },
  {
    id: "better",
    name: "Better",
    kicker: "Cleaner and soap",
    badge: "Both",
    price: 24,
    note: "Only $10 more than Good",
    short: "Only $10 more",
    bits: ["2 cleaners", "2 soaps"],
    lines: [
      "2 Frosted Cranberry Every Day Cleaner",
      "2 Frosted Cranberry Hand Soap",
    ],
  },
  {
    id: "best",
    name: "Best",
    kicker: "Best value · 6 free",
    badge: "6 free",
    price: 39,
    note: "$3.90 each versus $7 on Good",
    short: "$3.90 each",
    bits: ["10 products", "6 free"],
    lines: [
      "2 Frosted Cranberry Every Day Cleaner",
      "2 Frosted Cranberry Hand Soap",
      "3 Frosted Cranberry Every Day Cleaner, free",
      "3 Frosted Cranberry Hand Soap, free",
    ],
  },
];

const FAQ: [string, string][] = [
  [
    "Is this a subscription?",
    "No. This is a one-time limited offer, while supplies last.",
  ],
  [
    "Which surfaces can I use the cleaner on?",
    "Sealed floors, counters, and tile, plus the everyday surfaces on the label. Test a small spot first.",
  ],
  [
    "Does it leave residue?",
    "No. It is made to rinse clean, with no film left behind.",
  ],
  [
    "Is it cruelty-free and vegan?",
    "Yes. Truly Free Home products are vegan and Leaping Bunny certified cruelty-free.",
  ],
  [
    "Is it safe around kids and pets?",
    "The formula is gentle and non-toxic, made to be used around the people and pets in the house.",
  ],
  ["Where is it made?", "Williamsburg, Michigan."],
  [
    "When does it ship?",
    "Orders before 3 PM EST ship the same business day. After 3 PM, they ship the next business day.",
  ],
  [
    "How do I reach you?",
    "Call 231-944-1716, Monday through Friday, 9 a.m. to 9 p.m. EST, or email family@trulyfreehome.com.",
  ],
  [
    "What is the refund policy?",
    "30 days. If it is not for you, you get a full refund.",
  ],
];

export function meta() {
  return [{ title: "Frosted Cranberry Offer | Truly Free Home" }];
}

export default function OfferPage() {
  const [selected, setSelected] = useState<TierId>("best");
  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);
  const tier = (TIERS.find((item) => item.id === selected) ?? TIERS[2]) as Tier;

  return (
    <main className="fc">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,520;9..144,620&family=Outfit:wght@400;500;600&display=swap"
      />
      <style>{css}</style>

      <header className="fc-bar">
        <div className="fc-bar-in">
          <a className="fc-mark" href="#top">
            <img src="/products/logo.png" alt="Truly Free Home" />
          </a>
          <p className="fc-trust">
            <span className="fc-long">Ships today before 3 PM EST</span>
            <span className="fc-short">Ships today</span>
            <span className="fc-phone-pill">231-944-1716</span>
            <span className="fc-long">30-day money-back guarantee</span>
            <span className="fc-short">30-day guarantee</span>
          </p>
        </div>
      </header>

      <section className="fc-hero" id="top">
        <div className="fc-hero-grid">
          <div className="fc-hero-copy">
            <p className="fc-kicker">Limited edition · Frosted Cranberry</p>
            <h1>
              The whole house,
              <br />
              frosted in cranberry.
            </h1>
            <p className="fc-support">Without the harsh chemicals.</p>
            <p className="fc-lede">
              Tart cranberry, ripe raspberry, and warm davana. A plant-powered
              cleaner for sealed floors, counters, and tile, and a hand soap that
              stays at the sink. One limited run. One-time offer.
            </p>
            <div className="fc-deal">
              <div>
                <span>Best value</span>
                <strong>$39</strong>
              </div>
              <p>10 products, 6 free. $3.90 each instead of $7.</p>
            </div>
            <div className="fc-hero-actions">
              <button
                className="fc-cta fc-cta-lg"
                type="button"
                onClick={() => {
                  setSelected("best");
                  setOpen(true);
                }}
              >
                Get Best for $39
              </button>
              <a className="fc-textlink" href="#offer">
                Compare $14, $24, and $39
              </a>
            </div>
            <ul className="fc-perks">
              <li>Buy 4, get 6 free</li>
              <li>Ships today</li>
              <li>30-day guarantee</li>
            </ul>
          </div>
          <figure className="fc-hero-photo">
            <img
              src="/products/hero-duo.jpg"
              alt="Frosted Cranberry Everyday Cleaner and refillable Aloe Hand Soap on the kitchen counter"
            />
            <div className="fc-badge">
              <em>Best value</em>
              <strong>6 free</strong>
              <span>Buy 4, get 6</span>
            </div>
          </figure>
        </div>
      </section>

      <section className="fc-offer" id="offer">
        <p className="fc-kicker">Choose your bundle</p>
        <h2>One-time offer. Pick the amount of cranberry you want.</h2>
        <p className="fc-sub">
          Best is 10 products at $3.90 each. Good is 2 products at $7 each.
          Buy 4, get 6 free on Best.
        </p>
        <div className="fc-grid">
          {TIERS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === selected ? "is-on" : ""}
              data-tier={item.id}
              onClick={() => setSelected(item.id)}
            >
              <em className="fc-desk">{item.kicker}</em>
              <em className="fc-phone">{item.badge}</em>
              <strong>{item.name}</strong>
              <b>
                <small>$</small>
                {item.price}
              </b>
              <span className="fc-note">{item.note}</span>
              <span className="fc-note fc-note-s">{item.short}</span>
              <ul className="fc-lines">
                {item.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <ul className="fc-bits">
                {item.bits.map((bit) => (
                  <li key={bit}>{bit}</li>
                ))}
              </ul>
              <i>{item.id === selected ? "Selected" : "Choose"}</i>
            </button>
          ))}
        </div>
        <aside className="fc-summary">
          <div>
            <p>
              {tier.name}
              {" · "}
              {tier.id === "best" ? "10 products, 6 free" : tier.lines.join(" · ")}
            </p>
            <b>${tier.price}</b>
          </div>
          <button className="fc-cta" type="button" onClick={() => setOpen(true)}>
            Get this offer
          </button>
        </aside>
      </section>

      <section className="fc-why">
        <div>
          <p className="fc-kicker">Why you will love it</p>
          <h2>A seasonal scent that rinses clean.</h2>
          <p>
            Wiping the counter and washing up should not smell like nothing, and
            it should not smell like a chemical that disappears the moment you
            leave the room. Frosted Cranberry keeps the tart edge of cranberry,
            the roundness of raspberry, and the warmth of davana.
          </p>
          <p>
            The cleaner takes sealed floors, counters, and tile. The soap stays
            at the sink, with aloe that softens hands the more you wash. Same
            limited scent. Two everyday jobs. Proudly made in Michigan.
          </p>
        </div>
        <img
          src="/products/hero-sink.jpg"
          alt="Refillable Aloe Hand Soap and Frosted Cranberry refill pouches at the bathroom sink"
        />
      </section>

      <section className="fc-use">
        <div className="fc-use-copy">
          <p className="fc-kicker">See it in action</p>
          <h2>Cleaner for the surfaces. Soap for the sink.</h2>
        </div>
        <div className="fc-pair">
          <figure>
            <img
              src="/products/cleaner-before.jpg"
              alt="Paint on a wooden table before Frosted Cranberry Every Day Cleaner"
            />
            <figcaption>
              <b>Before</b>
              <span>Everyday cleaner</span>
            </figcaption>
          </figure>
          <figure>
            <img
              src="/products/cleaner-after.jpg"
              alt="The same wooden table wiped clean, with the Everyday Cleaner"
            />
            <figcaption>
              <b>After</b>
              <span>Everyday cleaner</span>
            </figcaption>
          </figure>
        </div>
        <div className="fc-pair">
          <figure>
            <img
              src="/products/soap-before.jpg"
              alt="Paint on a child's fingers before washing"
            />
            <figcaption>
              <b>Before</b>
              <span>Hand soap</span>
            </figcaption>
          </figure>
          <figure>
            <img
              src="/products/soap-after.jpg"
              alt="Clean hands at the sink beside the Aloe Hand Soap"
            />
            <figcaption>
              <b>After</b>
              <span>Hand soap</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="fc-products">
        <article>
          <img
            src="/products/hero-cleaner.jpg"
            alt="Frosted Cranberry Everyday Cleaner, the hero bottle"
          />
          <div>
            <p className="fc-kicker">Every Day Cleaner</p>
            <h3>For the counters, the tile, and the sealed floors.</h3>
            <p>A 16 fl oz spray. Deep clean on everyday surfaces. No residue.</p>
          </div>
        </article>
        <article>
          <img
            src="/products/hero-soap.jpg"
            alt="Frosted Cranberry Aloe Hand Soap, the hero bottle"
          />
          <div>
            <p className="fc-kicker">Hand soap</p>
            <h3>For the sink, with aloe that softens as you wash.</h3>
            <p>The bottle on the label reads Aloe Hand Soap. The scent is Frosted Cranberry.</p>
          </div>
        </article>
      </section>

      <section className="fc-scent">
        <img
          src="/products/duo-water.webp"
          alt="Frosted Cranberry cleaner and hand soap in cranberry water"
        />
        <div>
          <p className="fc-kicker">The scent</p>
          <h2>Cranberry on the counter. Cranberry at the sink.</h2>
          <p>
            One festive scent across the two products you actually reach for.
            Plant-derived surfactants. Biodegradable ingredients. Mineral-based
            agents. Refillable bottles you keep.
          </p>
        </div>
      </section>

      <figure className="fc-bleed">
        <img
          src="/products/duo-callout.webp"
          alt="Everyday cleaning, thoughtfully formulated: softer hands, 10x concentrated aloe, ammonia-free and chlorine-free"
        />
      </figure>

      <figure className="fc-bleed">
        <img
          src="/products/duo-without.webp"
          alt="Made without dyes, glycol ethers, thickeners, formaldehyde, fillers, parabens, and the other ingredients listed on the graphic"
        />
      </figure>

      <section className="fc-refill">
        <div className="fc-refill-copy">
          <p className="fc-kicker">Keep the bottle</p>
          <h2>Refillable by design. This checkout is one time.</h2>
          <p>
            The cleaner and the soap come in bottles you keep. This offer is not
            a subscription, and it does not add a free bottle or a shipping fee.
            You choose the amount once.
          </p>
        </div>
        <img
          src="/products/refill-cleaner.jpg"
          alt="Frosted Cranberry Everyday Cleaner, made to be refilled"
        />
        <img
          src="/products/refill-soap.jpg"
          alt="Refillable Aloe Hand Soap in the Frosted Cranberry scent"
        />
      </section>

      <section className="fc-guarantee">
        <div className="fc-promise">
          <p className="fc-kicker">30-day guarantee</p>
          <h2>Try it for 30 days. If it is not for you, you get a full refund.</h2>
          <button className="fc-cta fc-cta-lg" type="button" onClick={() => setOpen(true)}>
            Get {tier.name} for ${tier.price}
          </button>
          <div className="fc-reach">
            <a href="mailto:family@trulyfreehome.com">family@trulyfreehome.com</a>
            <a href="tel:+12319441716">231-944-1716</a>
          </div>
          <p className="fc-hours">Monday through Friday, 9 a.m. to 9 p.m. EST.</p>
        </div>
      </section>

      <section className="fc-faq">
        <h2>Questions</h2>
        {FAQ.map(([question, answer], index) => (
          <div key={question}>
            <button type="button" onClick={() => setFaq(faq === index ? null : index)}>
              {question}
              <span>{faq === index ? "–" : "+"}</span>
            </button>
            {faq === index ? <p>{answer}</p> : null}
          </div>
        ))}
      </section>

      <footer className="fc-foot">
        <img src="/products/logo.png" alt="" />
        <p>Plant-derived. Refillable. Made in Williamsburg, Michigan.</p>
        <div className="fc-chips">
          <span>Cruelty-free</span>
          <span>Vegan</span>
          <span>Non-toxic</span>
          <span>Safe around kids and pets</span>
          <span>30-day guarantee</span>
        </div>
        <address>
          Truly Free Home, Inc
          <br />
          6261 US Highway 31 N
          <br />
          Williamsburg, MI 49690
        </address>
        <p className="fc-pills">
          <a className="fc-pill" href="mailto:family@trulyfreehome.com">
            family@trulyfreehome.com
          </a>
          <a className="fc-pill" href="tel:+12319441716">
            231-944-1716
          </a>
        </p>
        <small>
          Orders before 3 PM EST ship the same business day. After 3 PM, the next
          business day. 30-day money-back guarantee. One-time offer, not a
          subscription. Customer support is Monday through Friday, 9 a.m. to 9 p.m. EST.
        </small>
      </footer>

      <div className="fc-dock">
        <div>
          <strong>{tier.name}</strong>
          <b>${tier.price}</b>
        </div>
        <button className="fc-cta" type="button" onClick={() => setOpen(true)}>
          Get this offer
        </button>
      </div>

      {open ? (
        <div className="fc-modal" role="dialog" aria-modal="true" aria-labelledby="order-title">
          <button className="fc-scrim" type="button" aria-label="Close" onClick={() => setOpen(false)} />
          <div>
            <p className="fc-kicker" id="order-title">
              Your order
            </p>
            <h2>
              {tier.name} · ${tier.price}
            </h2>
            <ul>
              {tier.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p>Ships today before 3 PM EST. 30-day money-back guarantee. One-time offer.</p>
            <button className="fc-close" type="button" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}

const css = `
.fc{--leaf:#78BE41;--deep:#245c16;--forest:#163226;--mist:#f3f7ee;--paper:#f7f6f2;--ink:#17211a;--line:#d7e4cf;--muted:#3d5344;color:var(--ink);background:var(--paper);font-family:Outfit,sans-serif;line-height:1.5;overflow-x:clip}
.fc *{box-sizing:border-box}
.fc h1,.fc h2,.fc h3{font-family:Fraunces,serif;font-weight:560;letter-spacing:-.035em;line-height:1.02;margin:0;text-wrap:balance}
.fc h1{font-size:clamp(44px,4.6vw,68px)}
.fc h2{font-size:clamp(30px,3.2vw,46px)}
.fc h3{font-size:26px;line-height:1.15}
.fc p{margin:0}
.fc img{max-width:100%;display:block}
.fc a{color:inherit;text-decoration:none}
.fc a.fc-cta,.fc button.fc-cta,.fc a.fc-pill{color:#fff;-webkit-text-fill-color:#fff}
.fc a.fc-textlink{color:var(--deep);font-weight:600;border-bottom:1px solid rgba(36,92,22,.35);padding-bottom:2px}
.fc-kicker{color:var(--deep);font-size:12px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;margin:0 0 12px}
.fc-bar{position:sticky;top:0;z-index:20;background:rgba(247,246,242,.92);backdrop-filter:blur(16px);border-bottom:1px solid rgba(22,50,38,.08)}
.fc-bar-in,.fc-hero-grid{width:min(1120px,calc(100% - 48px));margin-left:auto;margin-right:auto}
.fc-offer,.fc-why,.fc-use,.fc-products,.fc-scent,.fc-refill,.fc-faq,.fc-bleed,.fc-guarantee{width:100%;margin:0;padding:84px max(24px,calc((100% - 1120px) / 2))}
.fc-bar-in{min-height:72px;display:flex;align-items:center;justify-content:space-between;gap:20px}
.fc-mark{display:flex;align-items:center;line-height:0;flex:none}
.fc-mark img{height:32px;width:auto}
.fc-trust{display:flex;align-items:center;gap:8px;margin:0}
.fc-trust span{display:inline-flex;align-items:center;height:34px;padding:0 12px;border-radius:999px;background:#fff;border:1px solid var(--line);font-size:13px;font-weight:500;color:#294033;white-space:nowrap}
.fc-trust span.fc-short{display:none}
.fc-hero{padding:40px 0 84px;background:#f7f6f2}
.fc-hero-grid{display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:48px;align-items:center}
.fc-support{margin-top:14px;font-family:Fraunces,serif;font-size:clamp(22px,2vw,28px);letter-spacing:-.03em;color:var(--deep)}
.fc-lede{margin-top:14px;font-size:17px;line-height:1.55;color:var(--muted);max-width:46ch}
.fc-deal{margin-top:22px;display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:22px;padding:14px 16px;box-shadow:0 16px 40px -28px rgba(22,50,38,.55)}
.fc-deal span{display:block;font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--deep)}
.fc-deal strong{font-family:Fraunces,serif;font-size:44px;font-weight:560;line-height:.9;letter-spacing:-.04em}
.fc-deal p{color:var(--muted);font-size:15px;max-width:24ch}
.fc-hero-actions{display:flex;align-items:center;gap:18px;margin-top:16px}
.fc-cta{border:0;cursor:pointer;border-radius:999px;padding:14px 22px;font:600 16px Outfit,sans-serif;color:#fff;background:linear-gradient(180deg,#6aaf3e,#2f6a18);box-shadow:inset 0 1px 0 rgba(255,255,255,.4),0 12px 24px -12px rgba(47,106,24,.7);position:relative;overflow:hidden}
.fc-cta-lg{padding:16px 26px;font-size:17px}
.fc-cta::after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.38),transparent 70%);transform:translateX(-120%);animation:fc-sheen 3.6s ease-in-out infinite}
.fc-cta:hover{transform:translateY(-1px)}
.fc-cta:focus-visible,.fc-grid button:focus-visible,.fc-textlink:focus-visible{outline:2px solid var(--leaf);outline-offset:3px}
@keyframes fc-sheen{to{transform:translateX(120%)}}
.fc-perks{display:flex;flex-wrap:wrap;gap:8px;margin:16px 0 0;padding:0;list-style:none}
.fc-perks li{background:#fff;border:1px solid var(--line);border-radius:999px;padding:7px 12px;font-size:13px;font-weight:600;color:var(--deep)}
.fc-hero-photo{position:relative;margin:0}
.fc-hero-photo::before{content:"";position:absolute;z-index:0;left:28px;right:-14px;top:22px;bottom:-18px;border-radius:32px;background:linear-gradient(160deg,#d7efc0,#edf6e4)}
.fc-hero-photo img{position:relative;z-index:1;width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border-radius:28px;box-shadow:0 24px 50px -28px rgba(22,50,38,.55)}
.fc-badge{position:absolute;z-index:2;left:16px;top:16px;display:flex;flex-direction:column;gap:2px;min-width:108px;padding:12px 14px 13px;border-radius:18px;background:#fff;box-shadow:0 16px 34px rgba(22,50,38,.18)}
.fc-badge em{font-style:normal;font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--deep)}
.fc-badge strong{font-family:Fraunces,serif;font-size:34px;font-weight:560;line-height:.9;letter-spacing:-.04em;color:#2f6a18}
.fc-badge span{font-size:13px;font-weight:600;color:var(--ink)}
.fc-offer{background:#fff;scroll-margin-top:88px}
.fc-sub{max-width:54ch;margin:12px 0 20px;color:var(--muted)}
.fc-grid{display:grid;grid-template-columns:1fr 1fr 1.12fr;gap:14px}
.fc-grid button{text-align:left;border:1px solid var(--line);background:#fff;border-radius:24px;padding:18px;cursor:pointer;font:inherit;color:inherit;display:flex;flex-direction:column;gap:6px;min-width:0;box-shadow:0 16px 36px -30px rgba(22,50,38,.6)}
.fc-grid em{font-style:normal;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--deep)}
.fc-grid em.fc-phone{display:none}
.fc-grid strong{font-family:Fraunces,serif;font-size:28px;font-weight:560}
.fc-grid b{font-family:Fraunces,serif;font-size:52px;line-height:.9;font-weight:560;letter-spacing:-.04em}
.fc-grid b small{font-size:.46em}
.fc-grid ul{margin:8px 0 0;padding-left:16px;color:var(--muted);font-size:14px}
.fc-bits{display:none}
.fc-grid i{margin-top:auto;align-self:flex-start;font-style:normal;border-radius:999px;padding:6px 12px;background:var(--mist);color:var(--deep);font-size:13px;font-weight:600}
.fc-grid button.is-on{background:var(--forest);color:#fff;border-color:var(--forest);box-shadow:0 22px 40px -24px rgba(22,50,38,.8)}
.fc-grid button.is-on em,.fc-grid button.is-on ul,.fc-grid button.is-on i{color:#d7efc4}
.fc-grid button.is-on i{background:rgba(255,255,255,.12)}
.fc-summary{margin-top:14px;display:flex;align-items:center;justify-content:space-between;gap:16px;background:#fff;border:1px solid var(--line);border-radius:24px;padding:16px 18px}
.fc-summary p{color:var(--muted)}
.fc-summary b{font-family:Fraunces,serif;font-size:40px;letter-spacing:-.04em}
.fc-why{background:#eef6e6;display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
.fc-scent{background:#fbf3f1;display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
.fc-why img,.fc-scent img,.fc-products img,.fc-refill img{width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border-radius:24px}
.fc-why p+p,.fc-scent p,.fc-products p,.fc-refill p{margin-top:12px;color:var(--muted)}
.fc-use{background:#fffaf6}
.fc-pair{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px}
.fc-pair figure{margin:0}
.fc-pair img{width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border-radius:20px}
.fc-pair figcaption{display:flex;gap:8px;align-items:baseline;margin-top:8px}
.fc-pair b{font-family:Fraunces,serif;font-size:22px;font-weight:560}
.fc-pair span{color:#5d6b60}
.fc-products{background:#f4f7f2;display:grid;grid-template-columns:1fr 1fr;gap:16px}
.fc-products article{background:#fff;border-radius:24px;overflow:hidden;border:1px solid var(--line)}
.fc-products div{padding:18px 18px 22px}
.fc-bleed{background:#f7f4ef}
.fc-bleed img{width:100%;border-radius:24px}
.fc-refill{background:#f3f8ee;display:grid;grid-template-columns:1.1fr .9fr .9fr;gap:14px;align-items:center}
.fc-guarantee{background:#d4eeb8;color:var(--ink);text-align:center}
.fc-promise{max-width:760px;margin:0 auto;background:#fff;border:1px solid #c5e4a8;border-radius:32px;padding:52px 44px 40px;box-shadow:0 30px 60px -36px rgba(36,92,22,.5)}
.fc-promise h2{max-width:18ch;margin-left:auto;margin-right:auto}
.fc-promise .fc-cta{margin-top:26px;padding:18px 32px;font-size:18px;box-shadow:inset 0 1px 0 rgba(255,255,255,.45),0 16px 28px -12px rgba(47,106,24,.75)}
.fc-reach{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:22px}
.fc-guarantee .fc-reach a{display:inline-flex;align-items:center;margin:0;padding:10px 14px;border:1px solid var(--line);border-bottom:1px solid var(--line);border-radius:999px;background:#f3f7ee;color:var(--deep);font-weight:600}
.fc-promise .fc-hours{margin-top:16px;color:var(--muted)}
.fc-faq{background:#fff}
.fc-faq h2{margin-bottom:8px}
.fc-faq button{width:100%;text-align:left;background:none;border:0;border-top:1px solid var(--line);padding:16px 0;font:600 17px Outfit,sans-serif;display:flex;justify-content:space-between;gap:16px;cursor:pointer;color:inherit}
.fc-faq p{padding:0 0 16px;color:var(--muted);max-width:62ch}
.fc-foot{background:#b7dc96;color:var(--ink);padding:84px 22px 150px;text-align:center}
.fc-foot img{height:36px;margin:0 auto 14px}
.fc-chips{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:16px 0}
.fc-chips span{border:1px solid var(--line);background:#fff;color:var(--deep);border-radius:999px;padding:6px 12px;font-size:13px}
.fc-foot address{font-style:normal;margin:12px 0;line-height:1.6;color:#1e3a22}
.fc-pills{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin:14px 0}
.fc-pill{border-radius:999px;padding:10px 14px;background:linear-gradient(180deg,#6aaf3e,#2f6a18);text-decoration:none}
.fc-foot small{display:block;max-width:62ch;margin:12px auto 0;color:#1e3a22}
.fc-dock{display:none}
.fc-modal{position:fixed;inset:0;z-index:40;display:grid;place-items:end center}
.fc-scrim{position:absolute;inset:0;background:rgba(22,50,38,.5);border:0;cursor:pointer}
.fc-modal>div{position:relative;width:min(520px,calc(100% - 24px));margin-bottom:16px;background:#fff;border-radius:28px;padding:28px}
.fc-modal ul{margin:12px 0;padding-left:18px;color:var(--muted)}
.fc-modal>div>p:last-of-type{color:var(--muted)}
.fc-close{margin-top:16px;border:0;border-radius:999px;padding:10px 16px;background:var(--mist);color:var(--forest);font:600 15px Outfit,sans-serif;cursor:pointer}
@media (max-width:899px){
  .fc-bar-in,.fc-hero-grid{width:min(1120px,calc(100% - 32px))}
  .fc-offer,.fc-why,.fc-use,.fc-products,.fc-scent,.fc-refill,.fc-faq,.fc-bleed,.fc-guarantee{padding:56px 16px}
  .fc-bar-in{min-height:56px;padding:10px 0;align-items:center;flex-wrap:nowrap;justify-content:space-between;gap:8px}
  .fc-mark img{height:28px}
  .fc-trust{width:auto;flex:none;flex-wrap:nowrap;gap:6px}
  .fc-trust span{height:30px;padding:0 10px;font-size:12px}
  .fc-trust span.fc-phone-pill,.fc-trust span.fc-long{display:none}
  .fc-trust span.fc-short{display:inline-flex}
  .fc-hero{padding:20px 0 56px}
  .fc-hero-grid{grid-template-columns:1fr;gap:22px}
  .fc-hero-photo{order:-1}
  .fc-hero-photo::before{left:12px;right:12px;top:12px;bottom:-10px}
  .fc-badge{left:12px;top:12px;padding:14px 16px 15px}
  .fc-badge strong{font-size:40px}
  .fc h1{font-size:36px}
  .fc-lede{font-size:15px;line-height:1.45}
  .fc-hero-photo img{height:auto;aspect-ratio:16/9;object-fit:cover;object-position:center}
  .fc-promise{padding:32px 18px 28px;border-radius:24px}
  .fc-promise .fc-cta{width:100%}
  .fc-hero-actions{align-items:flex-start;flex-wrap:wrap}
  .fc-why,.fc-scent,.fc-products,.fc-refill{grid-template-columns:1fr;gap:18px}
  .fc-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
  .fc-grid button{padding:10px 8px;border-radius:16px;text-align:center;align-items:center}
  .fc-grid em.fc-desk,.fc-grid .fc-note,.fc-grid .fc-lines{display:none}
  .fc-grid em.fc-phone{display:block}
  .fc-grid .fc-note-s,.fc-bits{display:block}
  .fc-bits{list-style:none;padding:0;margin:0;font-size:11px}
  .fc-grid strong{font-size:16px}
  .fc-grid b{font-size:28px}
  .fc-summary{display:none}
  .fc-guarantee{padding:56px 16px}
  .fc-foot{padding-bottom:120px}
  .fc-dock{display:flex;position:fixed;left:10px;right:10px;bottom:10px;z-index:30;align-items:center;justify-content:space-between;gap:10px;background:#fff;border-radius:20px;padding:10px 10px 10px 16px;box-shadow:0 12px 40px rgba(22,50,38,.22)}
  .fc-dock strong{margin-right:8px}
  .fc-dock b{font-family:Fraunces,serif;font-size:22px}
}
@media (prefers-reduced-motion:reduce){
  .fc-cta::after{animation:none}
  .fc-cta:hover{transform:none}
}
`;
