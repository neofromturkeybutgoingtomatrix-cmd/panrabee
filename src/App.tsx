import { useEffect, useRef } from 'react'
import { HeroScene } from './components/HeroScene'

function App() {
  return (
    <div className="panra-page">
      {/* Hero — 3D jar + text */}
      <section style={{
        position: 'relative', height: '100vh', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <HeroScene />
        {/* Text overlay */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '2rem' }}>
          <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'rgba(232,213,163,0.5)', marginBottom: '1rem' }}>
            Limited Harvest · Artvin, Türkiye
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 400, lineHeight: 1.1, maxWidth: '700px' }}>
            Raw Chestnut Honey<br/>
            from the Mountains<br/>
            of Artvin.
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(232,213,163,0.6)', marginTop: '1.5rem', maxWidth: '500px', margin: '1.5rem auto 0', lineHeight: 1.7 }}>
            Bold, complex, and naturally rich. Crafted in limited batches from Turkey's pristine chestnut forests.
          </p>
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#story" style={{
              padding: '0.875rem 2rem', fontFamily: 'Georgia', fontSize: '0.9375rem',
              background: 'rgba(196,127,23,0.15)', border: '1px solid rgba(196,127,23,0.3)',
              color: '#c47f17', textDecoration: 'none', textTransform: 'uppercase',
              letterSpacing: '0.1em', transition: 'all 0.3s',
            }}>Discover Our Story</a>
            <a href="#shop" style={{
              padding: '0.875rem 2rem', fontFamily: 'Georgia', fontSize: '0.9375rem',
              background: '#c47f17', border: 'none', color: '#0d0a06',
              textDecoration: 'none', textTransform: 'uppercase',
              letterSpacing: '0.1em', fontWeight: 600,
            }}>Shop Honey — $48</a>
          </div>
        </div>
        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: '2rem', zIndex: 10, textAlign: 'center', width: '100%' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(232,213,163,0.3)', textTransform: 'uppercase' }}>Scroll to explore</p>
          <div style={{ width: '1px', height: '40px', background: 'rgba(232,213,163,0.2)', margin: '0.5rem auto 0' }} />
        </div>
      </section>

      {/* Origin Story */}
      <section id="story" className="panra-section" style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <div className="fade-line" style={{ marginBottom: '3rem' }} />
        <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(232,213,163,0.4)', marginBottom: '2rem' }}>The Origin</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.2, marginBottom: '2rem' }}>
          From a valley the world forgot.
        </h2>
        <p style={{ fontSize: '1.0625rem', color: 'rgba(232,213,163,0.5)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
          In the northeastern corner of Türkiye, where the Black Sea climbs into the Caucasus, lies Borçka — a district of Artvin defined by mist, granite, and centuries-old chestnut trees.
        </p>
        <p style={{ fontSize: '1.0625rem', color: 'rgba(232,213,163,0.5)', lineHeight: 1.9 }}>
          For generations, our beekeepers have walked these slopes carrying nothing but wooden hives and patience. Each summer, when the chestnut blossoms open for a few short weeks, the bees do their quiet work. We never heat. We never blend. We bottle only what the season gives.
        </p>
        <div className="fade-line" style={{ marginTop: '3rem' }} />
      </section>

      {/* Gallery */}
      <section style={{ padding: '4rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <img src="https://panrabee.com/__l5e/assets-v1/6078c084-3411-47c8-9805-93851cf1a5da/hives-vista.png" alt="Beehives" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '2px' }} />
        <img src="https://panrabee.com/__l5e/assets-v1/5137a565-1866-48b7-b3ff-ece47d1803ce/uzungol.jpeg" alt="Uzungöl" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '2px' }} />
        <img src="https://panrabee.com/__l5e/assets-v1/225d82ed-efd2-490b-947b-ac149e29f5d1/bees-poppy.png" alt="Bees on poppy" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '2px' }} />
      </section>

      {/* Product */}
      <section id="shop" className="panra-section" style={{ padding: '8rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div className="fade-line" style={{ marginBottom: '3rem' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <img src="https://panrabee.com/__l5e/assets-v1/2c9d36dc-9878-4e1d-b1e9-67efc80cce08/panra-box.png" alt="Panra Bee Box" style={{ width: '100%', borderRadius: '2px' }} />
          </div>
          <div>
            <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(232,213,163,0.4)', marginBottom: '1rem' }}>The Jar</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Raw Chestnut Honey · 300g
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(232,213,163,0.5)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Single origin. Hand-bottled in heavy glass with a turned wooden lid. A spoonful tastes of malt, toasted nut, and the long dark wood of the forest floor.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem', fontSize: '0.8125rem', color: 'rgba(232,213,163,0.4)' }}>
              <div><span style={{ color: 'rgba(232,213,163,0.6)' }}>Origin</span><br/>Borçka, Artvin · TR</div>
              <div><span style={{ color: 'rgba(232,213,163,0.6)' }}>Net Weight</span><br/>300g · 10.6 oz</div>
              <div><span style={{ color: 'rgba(232,213,163,0.6)' }}>Harvest</span><br/>Single-batch, seasonal</div>
              <div><span style={{ color: 'rgba(232,213,163,0.6)' }}>Processing</span><br/>Raw · Unfiltered</div>
            </div>
            <p style={{ fontSize: '2rem', color: '#c47f17', marginBottom: '1.5rem', fontFamily: 'Georgia' }}>$48<span style={{ fontSize: '0.875rem', color: 'rgba(232,213,163,0.4)' }}> USD · ships from EU</span></p>
            <button style={{
              padding: '0.875rem 2.5rem', fontFamily: 'Georgia', fontSize: '0.9375rem',
              background: '#c47f17', border: 'none', color: '#0d0a06',
              cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600,
            }}>Add to Cart</button>
          </div>
        </div>
        <div className="fade-line" style={{ marginTop: '3rem' }} />
      </section>

      {/* Why */}
      <section className="panra-section" style={{ padding: '6rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '3rem', textAlign: 'center' }}>
          Four quiet reasons this jar is different.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          {[
            { title: 'Raw & Unprocessed', desc: 'Never heated, never filtered. Every enzyme intact.' },
            { title: 'Limited Seasonal Harvest', desc: 'Bottled once a year, only when the bloom permits.' },
            { title: "Artvin's Chestnut Forests", desc: 'Single origin from one of the last wild apiaries.' },
            { title: 'Rich in Antioxidants', desc: 'Dark honey, dense with minerals and polyphenols.' },
          ].map((item, i) => (
            <div key={i} className="glass-card" style={{ padding: '2rem' }}>
              <p style={{ fontSize: '0.7rem', color: '#c47f17', marginBottom: '0.75rem', fontFamily: 'Georgia' }}>0{i+1}</p>
              <h3 style={{ fontSize: '1.25rem', color: '#f5e6c8', marginBottom: '0.5rem', fontWeight: 400 }}>{item.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(232,213,163,0.5)', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="panra-section" style={{ padding: '6rem 2rem', maxWidth: '700px', margin: '0 auto' }}>
        <div className="fade-line" style={{ marginBottom: '3rem' }} />
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '3rem', textAlign: 'center' }}>
          Questions, considered.
        </h2>
        {[
          { q: 'What makes chestnut honey different?', a: 'Chestnut honey is dark, robust, and less sweet than common floral honeys. Rich in tannins, with malty notes and a long, woody finish — closer to an aged spirit than a dessert.' },
          { q: 'Is Panra Bee raw honey?', a: 'Yes. We never heat or pasteurize. All natural enzymes, pollen, and aromatics remain intact.' },
          { q: 'Where is the honey harvested?', a: 'From the chestnut forests of Borçka, Artvin — a remote valley between the Black Sea and the Caucasus mountains.' },
          { q: 'Does honey crystallize naturally?', a: 'Yes — crystallization is a sign of pure, unprocessed honey. Chestnut honey crystallizes slowly. Place the jar in warm water to return it to liquid.' },
        ].map((faq, i) => (
          <div key={i} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(232,213,163,0.06)' }}>
            <h3 style={{ fontSize: '1.125rem', color: '#f5e6c8', marginBottom: '0.5rem', fontWeight: 400 }}>{faq.q}</h3>
            <p style={{ fontSize: '0.9375rem', color: 'rgba(232,213,163,0.5)', lineHeight: 1.7 }}>{faq.a}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ padding: '8rem 2rem', textAlign: 'center', background: 'linear-gradient(to top, rgba(196,127,23,0.05), transparent)' }}>
        <img src="https://panrabee.com/__l5e/assets-v1/2c7c6a9b-b5b5-40eb-bac5-6247e1bb8a3f/final-cta-hives.png" alt="Hives at sunrise" style={{ width: '100%', maxWidth: '800px', borderRadius: '2px', marginBottom: '3rem' }} />
        <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(232,213,163,0.4)', marginBottom: '1rem' }}>Less Sweet · More Character</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '2rem' }}>
          Experience the character<br/>of true chestnut honey.
        </h2>
        <a href="#shop" style={{
          padding: '0.875rem 2.5rem', fontFamily: 'Georgia', fontSize: '0.9375rem',
          background: '#c47f17', border: 'none', color: '#0d0a06',
          textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600,
          display: 'inline-block',
        }}>Shop Panra Bee — $48</a>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(232,213,163,0.06)' }}>
        <p style={{ fontFamily: 'Georgia', fontSize: '1.5rem', color: '#c47f17', marginBottom: '0.5rem' }}>Panra Bee</p>
        <p style={{ fontSize: '0.75rem', color: 'rgba(232,213,163,0.3)' }}>
          Raw Chestnut Honey from Artvin, Türkiye
        </p>
        <p style={{ fontSize: '0.7rem', color: 'rgba(232,213,163,0.2)', marginTop: '1rem' }}>
          © 2026 Panra Bee
        </p>
      </footer>
    </div>
  )
}

export default App