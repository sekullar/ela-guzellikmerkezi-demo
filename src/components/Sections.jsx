import { useState } from 'react'
import Logo from './Logo'
import Art from './Art'
import Reveal from './Reveal'
import { site, services, gallery, principles } from '../data/site'

const links = [['Hizmetler', '#hizmetler'], ['Atölye', '#atolye'], ['Galeri', '#galeri']]

export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-sedef/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" aria-label={site.name}><Logo /></a>
        <nav className="hidden gap-8 text-sm md:flex" aria-label="Ana menü">
          {links.map(([t, h]) => <a key={h} href={h} className="transition hover:text-gul">{t}</a>)}
        </nav>
        <a href="#randevu" className="btn hidden md:inline-flex">Randevu al</a>
        <button className="grid h-10 w-10 place-items-center md:hidden" aria-expanded={open} aria-label="Menüyü aç" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M4 4L18 18M18 4L4 18" /> : <path d="M3 7H19M3 15H19" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-incir/10 px-5 py-5 md:hidden" aria-label="Mobil menü">
          {[...links, ['Randevu al', '#randevu']].map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="font-display text-2xl">{t}</a>)}
        </nav>
      )}
    </header>
  )
}

function EyeArt() {
  return (
    <svg viewBox="0 0 600 420" className="w-full" role="img" aria-label="Açılan göz biçiminde renkli bir illüstrasyon">
      <defs>
        <clipPath id="almond"><path d="M20 210Q300 -40 580 210Q300 460 20 210Z" /></clipPath>
        <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#C98FA0" /><stop offset=".55" stopColor="#E3B873" /><stop offset="1" stopColor="#B5C7A5" />
        </linearGradient>
        <radialGradient id="irisg" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#E3B873" /><stop offset=".6" stopColor="#C98FA0" /><stop offset="1" stopColor="#2B1830" />
        </radialGradient>
        <radialGradient id="glow" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#fff" stopOpacity=".7" /><stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g clipPath="url(#almond)">
        <g className="eye-open">
          <rect width="600" height="420" fill="url(#skin)" />
          <circle className="sheen" cx="140" cy="120" r="150" fill="url(#glow)" />
          <g className="iris">
            <circle cx="300" cy="210" r="118" fill="url(#irisg)" />
            <circle cx="300" cy="210" r="40" fill="#2B1830" />
            <circle cx="334" cy="176" r="16" fill="#F3EEF5" opacity=".9" />
          </g>
        </g>
      </g>
      {[[70, 70, 0], [530, 340, 1.5], [545, 70, 3]].map(([x, y, d], i) => (
        <path key={i} className="spark" style={{ animationDelay: `${d}s` }} d={`M${x} ${y - 14}Q${x} ${y} ${x + 14} ${y}Q${x} ${y} ${x} ${y + 14}Q${x} ${y} ${x - 14} ${y}Q${x} ${y} ${x} ${y - 14}Z`} fill="#E3B873" />
      ))}
    </svg>
  )
}

export function Hero() {
  const d = (s) => ({ animationDelay: `${s}s` })
  return (
    <section id="top" className="px-5 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="rise font-display text-5xl leading-[1.05] font-medium tracking-tight md:text-7xl" style={d(1)}>Aynaya bakarken gülümseyin.</h1>
          <p className="rise mt-6 max-w-md text-lg text-incir/75" style={d(1.2)}>Cilt bakımı, lazer, kaş ve kirpik, manikür. Size özel bir planla, acele etmeden.</p>
          <div className="rise mt-8 flex flex-wrap gap-3" style={d(1.4)}>
            <a href="#randevu" className="btn">Randevu al</a>
            <a href="#hizmetler" className="btn-ghost">Hizmetleri gör</a>
          </div>
        </div>
        <EyeArt />
      </div>
    </section>
  )
}

export function Services({ onPick }) {
  const [open, setOpen] = useState(0)
  return (
    <section id="hizmetler" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl">Hizmetlerimiz</h2>
          <p className="mt-3 max-w-lg text-incir/70">Bir hizmete dokunun, ayrıntıları görün.</p>
        </Reveal>
        <Reveal as="ul" className="mt-10 divide-y divide-incir/15 border-y border-incir/15">
          {services.map((s, i) => (
            <li key={s.id}>
              <button className="flex w-full items-center justify-between gap-4 py-6 text-left" aria-expanded={open === i} aria-controls={`p-${s.id}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="font-display text-2xl md:text-4xl">{s.title}</span>
                <span aria-hidden="true" className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-incir/30 text-xl transition-all duration-500 ${open === i ? 'rotate-45 bg-incir text-sedef' : ''}`}>+</span>
              </button>
              <div id={`p-${s.id}`} inert={open !== i} className={`grid transition-[grid-template-rows] duration-500 ease-out ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-4 pb-6 md:flex-row md:items-end md:justify-between">
                    <p className="max-w-xl text-incir/75">{s.text}<span className="mt-2 block text-sm text-incir/60">{s.time}</span></p>
                    <a href="#randevu" onClick={() => onPick(s.title)} className="btn-ghost shrink-0">Bu hizmet için randevu al</a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="atolye" className="bg-incir px-5 py-16 text-sedef md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <Art variant="arch" colors={['#B5C7A5', '#C98FA0', '#2B1830']} label="Yaprak ve güneş illüstrasyonu" className="mx-auto aspect-[4/5] w-full max-w-sm rounded-t-full" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl">Bir güzellik merkezinden çok, bir atölye.</h2>
          <dl className="mt-8 space-y-6">
            {principles.map(([t, p]) => (
              <div key={t}>
                <dt className="font-display text-2xl text-bal">{t}</dt>
                <dd className="mt-1 max-w-md text-sedef/75">{p}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

export function Gallery() {
  return (
    <section id="galeri" className="py-16 md:py-24">
      <Reveal className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-4xl md:text-5xl">Renklerimiz</h2>
        <p className="mt-3 max-w-lg text-incir/70">Atölyenin dokusunu ve ruhunu anlatan küçük bir seçki.</p>
      </Reveal>
      <ul className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:px-[max(1.25rem,calc((100vw-72rem)/2))]">
        {gallery.map((g) => (
          <li key={g.title} className="w-[70vw] shrink-0 snap-start sm:w-72">
            <Art variant={g.variant} colors={g.colors} label={g.title} className="aspect-[4/5] w-full rounded-t-full" />
            <p className="mt-3 text-center font-display text-lg">{g.title}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Booking({ service, setService }) {
  const [sent, setSent] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const msg = `Merhaba, ${f.get('ad')} ben. ${f.get('hizmet')} için ${f.get('tarih') || 'uygun bir gün'} randevu almak istiyorum.${f.get('not') ? ' Not: ' + f.get('not') : ''}`
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
    setSent(true)
  }
  return (
    <section id="randevu" className="px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl">Randevu alın</h2>
          <p className="mt-3 max-w-md text-incir/70">Formu doldurun, mesajınız WhatsApp’ta hazır olarak açılır. Genellikle aynı gün dönüş yaparız.</p>
          <dl className="mt-8 space-y-2 text-incir/80">
            {site.hours.map(([g, s]) => <div key={g} className="flex max-w-xs justify-between gap-6"><dt>{g}</dt><dd>{s}</dd></div>)}
          </dl>
        </Reveal>
        <Reveal as="form" onSubmit={submit} className="space-y-4">
          <label className="block text-sm">Adınız<input name="ad" required autoComplete="name" className="field mt-1" /></label>
          <label className="block text-sm">Hizmet
            <select name="hizmet" value={service} onChange={(e) => setService(e.target.value)} className="field mt-1">
              {services.map((s) => <option key={s.id}>{s.title}</option>)}
            </select>
          </label>
          <label className="block text-sm">Tercih ettiğiniz gün<input name="tarih" type="date" className="field mt-1" /></label>
          <label className="block text-sm">Notunuz<textarea name="not" rows="3" className="field mt-1" /></label>
          <button className="btn w-full">WhatsApp ile gönder</button>
          {sent && <p role="status" className="text-sm text-incir/70">WhatsApp açıldı. Mesajı göndermeyi unutmayın.</p>}
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-incir px-5 py-12 text-sedef">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <Logo light />
          <p className="max-w-xs text-sm text-sedef/70">{site.address}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm md:items-end">
          <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-bal">{site.phone}</a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-bal">Instagram</a>
          <p className="mt-3 text-sedef/50">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  )
}
