import { useState } from 'react';
import { ArrowUpRight, Plus } from '@phosphor-icons/react';
import './App.css';
import { ScrollReveal } from './components/ScrollReveal';

const TG_LINK = 'https://t.me/+CzUHicyxoFowNmMy';

// Личка в Telegram для кнопки «Написать нам»
const CONTACT_TG = 'https://t.me/lenakubapsy18';

// Учитывает base из vite.config.js (GitHub Pages собирается в /project1.0/)
const asset = (name) => `${import.meta.env.BASE_URL}${name}`;

const content = {
  ru: {
    nav: {
      team: 'Кто мы',
      forWhom: 'Для кого',
      how: 'Как проходит',
      gallery: 'Галерея',
      tour: 'Тур',
      cta: 'Написать нам',
      share: 'Поделиться',
    },
    hero: {
      eyebrow: 'Осознанные путешествия · групповая терапия',
      title: 'Психо-Тревел',
      lead: 'Это осознанные путешествия, в которых групповая терапия вплетена в исследование нового места. Мы не просто едем смотреть достопримечательности — мы едем встречаться с собой. В живом контакте. Через других людей. Через незнакомую среду. Через всё, что поднимается внутри, когда привычные стены и роли остаются дома.',
      cta: 'Присоединиться к TG-каналу',
      imgAlt: 'Группа терапевтического тура в Грузии',
    },
    manifest: 'Каждый тур — это не отдых в привычном смысле. Это душевный труд, результатом которого становится не загар, а наполненность, чувство собственной ценности и новый способ быть с собой и с другими.',
    team: {
      eyebrow: '01 / команда',
      title: 'Кто мы',
      intro: 'Мы — команда практикующих психологов и гештальт-терапевтов.',
      members: [
        {
          name: 'Кубакова Елена',
          city: 'Ижевск',
          role: 'Психолог, гештальт-терапевт, групповой и телесно-ориентированный терапевт',
          bio: 'Специализируется на нарциссической травме и её последствиях: страх самопредъявления, страх оценки, трудности со сменой сферы и уходом из найма. Ведущая комьюнити «Неприлично Счастливые».',
        },
        {
          name: 'Юдина Татьяна',
          city: 'Тольятти',
          role: 'Психолог, гештальт-терапевт, специалист по зависимому поведению, групповая и семейная специализация',
          bio: 'Работает с зависимыми и созависимыми отношениями, границами, тревогой и кризисами. Более 10 лет ведёт группы для зависимых, программный руководитель реабилитационного центра.',
        },
        {
          name: 'Павлова Валерия',
          city: 'Тольятти',
          role: 'Клинический психолог, нейропсихолог, гештальт-терапевт, групповая и семейная специализация',
          bio: 'Работает с созависимостью, партнёрскими и детско-родительскими отношениями, кризисами, депрессией, утратой. Руководит собственным нейропсихологическим центром.',
        },
      ],
      outro: 'Мы работаем в ко-терапии, проходим супервизию и ведём туры только вместе. Мы нашли друг друга и теперь объединяем три профессиональных взгляда в одном пространстве.',
    },
    forWhom: {
      eyebrow: '02 / для кого',
      title: 'Для кого наши туры',
      p1: 'Наши туры — для тех, кто перестал откладывать себя на потом. Кто хочет легче, быстрее и эффективнее разобраться в себе. Кто устал быть удобным, справляться в одиночку и носить внутри то, что давно просится наружу.',
      p2: 'К нам приезжают люди без обязательной «супер-травмы». Кому-то интересно попробовать группу. Кому-то — понять, как быть с собой без привычных стен. Кому-то — просто сделать что-то не потому что «надо», а потому что захотелось. Мы не требуем драматического анамнеза. Диагноз не обязателен. Обязательно только желание не просрать этот кусок жизни в привычной тоске, а попробовать иначе.',
      cta: 'Почитать о прошлых турах в Грузию и ОАЭ',
    },
    how: {
      eyebrow: '03 / формат',
      title: 'Как проходит тур',
      p1: 'Каждый день мы собираемся в терапевтическую группу. Это пространство, где можно присоединиться к себе — без спешки, без «надо быть удобным», с поддержкой и честной обратной связью. Мы работаем в ко-терапии, подстраховывая друг друга и видя процесс с разных углов. Правила простые: конфиденциальность (истории остаются в кругу), никаких советов и никаких оскорблений. Злиться можно. Делиться чувствами и откликом — можно и нужно.',
      p2: 'После обеда — исследование города и страны. Мы не разделяем терапию и жизнь: то, что поднялось в кругу, продолжает дышать в прогулках по базару, в чайхане, в дороге. Вечером — живое общение. Никакой обязаловки. Можно гулять под звёздами, говорить о важном или молчать — и то, и другое ценно.',
      facts: [
        { value: '6–7', label: 'дней путешествия' },
        { value: '~20', label: 'часов групповой работы' },
        { value: 'размер группы', label: 'небольшая группа — чтобы всем хватило места и внимания' },
      ],
    },
    results: {
      eyebrow: '04 / результат',
      title: 'Что вы получите',
      items: [
        'Умение прояснять отношения без страха, отстаивать свою позицию и сближаться, когда нужна поддержка.',
        'Новые контакты — глубокие, почти дружеские, потому что столько друг про друга узнать за несколько дней невозможно в обычной жизни.',
        'Ощущение собственной ценности, нужности и наполненности.',
        'Способность не додумывать за других и не проглатывать обиды.',
        'Опыт, который остаётся с вами надолго: через месяц после тура звучит собственный голос — громче и увереннее, тело помнит, чего хочет, а пара контактов остаётся в жизни на годы.',
      ],
    },
    gallery: {
      eyebrow: '05 / атмосфера',
      title: 'Где мы были',
      photos: [
        { src: 'Tour_Georgia.webp', caption: 'Терапевтический тур в Грузию' },
        { src: 'UAE_tour2.webp', caption: 'Терапевтический тур в Дубае' },
      ],
    },
    tour: {
      eyebrow: '06 / следующий тур',
      title: 'Узбекистан',
      dates: '30.09.26 — 06.10.26',
      note: 'Следующий терапевтический тур — в Узбекистан. У нас есть 2 места для участия.',
      cta: 'Написать нам',
    },
    footer: {
      copy: '© 2026 Психо-Тревел',
      writeUs: 'Написать нам',
    },
  },
  en: {
    nav: {
      team: 'Who we are',
      forWhom: 'Who it’s for',
      how: 'How it works',
      gallery: 'Gallery',
      tour: 'Tour',
      cta: 'Write to us',
      share: 'Share',
    },
    hero: {
      eyebrow: 'Conscious travel · group therapy',
      title: 'Psycho-Travel',
      lead: 'Conscious journeys where group therapy is woven into exploring a new place. We don’t just go to see the sights — we go to meet ourselves. In live contact. Through other people. Through an unfamiliar environment. Through everything that rises inside when familiar walls and roles stay at home.',
      cta: 'Join the Telegram channel',
      imgAlt: 'Therapy tour group in Georgia',
    },
    manifest: 'Every tour is not a vacation in the usual sense. It is inner work whose result is not a tan, but a sense of fullness, self-worth and a new way of being with yourself and with others.',
    team: {
      eyebrow: '01 / team',
      title: 'Who we are',
      intro: 'We are a team of practicing psychologists and gestalt therapists.',
      members: [
        {
          name: 'Elena Kubakova',
          city: 'Izhevsk',
          role: 'Psychologist, gestalt therapist, group and body-oriented therapist',
          bio: 'Specializes in narcissistic trauma and its consequences: fear of self-presentation, fear of evaluation, difficulties with changing fields and leaving employment. Leader of the “Indecently Happy” community.',
        },
        {
          name: 'Tatyana Yudina',
          city: 'Tolyatti',
          role: 'Psychologist, gestalt therapist, addictive behavior specialist, group and family specialization',
          bio: 'Works with dependent and codependent relationships, boundaries, anxiety and crises. Has led groups for people with addictions for over 10 years; program director of a rehabilitation center.',
        },
        {
          name: 'Valeria Pavlova',
          city: 'Tolyatti',
          role: 'Clinical psychologist, neuropsychologist, gestalt therapist, group and family specialization',
          bio: 'Works with codependency, partner and parent-child relationships, crises, depression and loss. Runs her own neuropsychological center.',
        },
      ],
      outro: 'We work in co-therapy, undergo supervision and lead tours only together. We found each other and now combine three professional perspectives in one space.',
    },
    forWhom: {
      eyebrow: '02 / who it’s for',
      title: 'Who our tours are for',
      p1: 'Our tours are for those who have stopped putting themselves off until later. Who want to understand themselves more easily, faster and more effectively. Who are tired of being convenient, coping alone and carrying inside what has long been asking to come out.',
      p2: 'People come to us without an obligatory “super-trauma”. Some are curious to try a group. Some want to understand how to be with themselves without familiar walls. Some simply want to do something not because they “have to”, but because they want to. We don’t require a dramatic history. A diagnosis is not required. The only requirement is the desire not to waste this piece of life in habitual melancholy, but to try another way.',
      cta: 'Read about past tours to Georgia and the UAE',
    },
    how: {
      eyebrow: '03 / format',
      title: 'How a tour works',
      p1: 'Every day we gather in a therapy group. It is a space where you can reconnect with yourself — without hurry, without “having to be convenient”, with support and honest feedback. We work in co-therapy, backing each other up and seeing the process from different angles. The rules are simple: confidentiality (stories stay in the circle), no advice and no insults. Anger is allowed. Sharing feelings and responses is allowed and needed.',
      p2: 'After lunch — exploring the city and the country. We don’t separate therapy and life: what surfaced in the circle keeps breathing in walks through the bazaar, in the teahouse, on the road. In the evening — live conversation. No obligations. You can walk under the stars, talk about what matters or stay silent — both are valuable.',
      facts: [
        { value: '6–7', label: 'days of travel' },
        { value: '~20', label: 'hours of group work' },
        { value: 'mini', label: 'a small group — so everyone gets enough space and attention' },
      ],
    },
    results: {
      eyebrow: '04 / outcome',
      title: 'What you will take away',
      items: [
        'The ability to clarify relationships without fear, stand your ground and grow closer when you need support.',
        'New connections — deep, almost friendly, because learning so much about each other in a few days is impossible in ordinary life.',
        'A sense of your own value, being needed and being full.',
        'The ability not to mind-read for others and not to swallow grievances.',
        'An experience that stays with you for a long time: a month after the tour your own voice sounds louder and more confident, your body remembers what it wants, and a couple of contacts stay in your life for years.',
      ],
    },
    gallery: {
      eyebrow: '05 / atmosphere',
      title: "Where we've been",
      photos: [
        { src: 'Tour_Georgia.webp', caption: 'Therapy tour to Georgia' },
        { src: 'UAE_tour2.webp', caption: 'Therapy tour to Dubai' },
      ],
    },
    tour: {
      eyebrow: '06 / next tour',
      title: 'Uzbekistan',
      dates: 'Sep 30 — Oct 6, 2026',
      note: 'The next therapy tour heads to Uzbekistan. We have 2 spots left.',
      cta: 'Write to us',
    },
    footer: {
      copy: '© 2026 Psycho-Travel',
      writeUs: 'Write to us',
    },
  },
};

// По ТЗ: языковая версия определяется по геопозиции (Россия и СНГ — русский,
// остальные — английский), пользователь может сменить её вручную.
// В прототипе геопозиция аппроксимируется языком браузера.
const detectLang = () => {
  const lang = (navigator.language || 'ru').toLowerCase();
  return lang.startsWith('ru') || lang.startsWith('be') || lang.startsWith('uk') || lang.startsWith('kk') ? 'ru' : 'en';
};

const shareTelegram = (url) => `https://t.me/share/url?url=${encodeURIComponent(url)}`;

function App() {
  const [lang, setLang] = useState(detectLang);
  const t = content[lang];

  const openShare = () => {
    window.open(shareTelegram(window.location.href), '_blank', 'noopener,width=640,height=520');
  };

  return (
    <>
      <header>
        <div className="nav">
          <a className="brand" href="#top">Психо-Тревел</a>
          <nav className="nav-links" aria-label="Основная навигация">
            <a href="#team">{t.nav.team}</a>
            <a href="#for-whom">{t.nav.forWhom}</a>
            <a href="#how">{t.nav.how}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#tour">{t.nav.tour}</a>
          </nav>
          <div className="nav-tools">
            <button type="button" className="share-tg" onClick={openShare} aria-label={t.nav.share}>
              TG
            </button>
            <button
              type="button"
              className="lang-toggle"
              onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
              aria-label="Switch language"
            >
              {lang === 'ru' ? 'EN' : 'RU'}
            </button>
            <a className="nav-cta" href={CONTACT_TG} target="_blank" rel="noopener">
              <span>{t.nav.cta}</span><ArrowUpRight size={18} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div className="hero-content">
              <span className="eyebrow">{t.hero.eyebrow}</span>
              <h1 className="display-xl">{t.hero.title}</h1>
              <p className="body-lg">{t.hero.lead}</p>
              <a className="btn-primary" href={TG_LINK} target="_blank" rel="noopener">
                <span>{t.hero.cta}</span><ArrowUpRight size={18} weight="bold" aria-hidden="true" />
              </a>
            </div>
            <ScrollReveal direction="right" className="hero-visual">
              <img src={asset('hero_photo.webp')} alt={t.hero.imgAlt} loading="eager" />
            </ScrollReveal>
          </div>
        </section>

        <section className="manifest">
          <div className="wrap">
            <ScrollReveal>
              <p className="display-md manifest-text">{t.manifest}</p>
            </ScrollReveal>
          </div>
        </section>

        <section id="team">
          <div className="wrap">
            <ScrollReveal>
              <div className="section-head">
                <span className="eyebrow">{t.team.eyebrow}</span>
                <div>
                  <h2 className="display-lg">{t.team.title}</h2>
                  <p className="body-md team-intro">{t.team.intro}</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="facils-grid">
              {t.team.members.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 0.12}>
                  <div className="facil-card">
                    <h3>{member.name}</h3>
                    <span className="facil-city">{member.city}</span>
                    <span className="facil-role">{member.role}</span>
                    <p>{member.bio}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <p className="body-md team-outro">{t.team.outro}</p>
            </ScrollReveal>
          </div>
        </section>

        <section id="for-whom" className="promise-section">
          <div className="wrap">
            <ScrollReveal>
              <div className="section-head">
                <span className="eyebrow">{t.forWhom.eyebrow}</span>
                <h2 className="display-lg">{t.forWhom.title}</h2>
              </div>
            </ScrollReveal>
            <div className="promise-grid">
              <ScrollReveal>
                <div className="promise-column">
                  <p className="promise-text">{t.forWhom.p1}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="promise-column">
                  <p className="promise-text">{t.forWhom.p2}</p>
                  <a className="btn-secondary" href={TG_LINK} target="_blank" rel="noopener">
                    <span>{t.forWhom.cta}</span><ArrowUpRight size={18} weight="bold" aria-hidden="true" />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="how">
          <div className="wrap">
            <ScrollReveal>
              <div className="section-head">
                <span className="eyebrow">{t.how.eyebrow}</span>
                <h2 className="display-lg">{t.how.title}</h2>
              </div>
            </ScrollReveal>
            <div className="how-grid">
              <ScrollReveal>
                <p className="body-md">{t.how.p1}</p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="body-md">{t.how.p2}</p>
              </ScrollReveal>
            </div>
            <div className="facts-row">
              {t.how.facts.map((fact, i) => (
                <ScrollReveal key={fact.label} delay={i * 0.08}>
                  <div className="fact">
                    <span className="fact-value">{fact.value}</span>
                    <span className="fact-label">{fact.label}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="results">
          <div className="wrap">
            <ScrollReveal>
              <div className="section-head">
                <span className="eyebrow">{t.results.eyebrow}</span>
                <h2 className="display-lg">{t.results.title}</h2>
              </div>
            </ScrollReveal>
            <ul className="journey-list">
              {t.results.items.map((item, i) => (
                <ScrollReveal key={item.slice(0, 24)} delay={i * 0.05}>
                  <li className="journey-item">
                    <span className="num">{String(i + 1).padStart(2, '0')}</span>
                    <p>{item}</p>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        <section id="gallery">
          <div className="wrap">
            <ScrollReveal>
              <div className="section-head">
                <span className="eyebrow">{t.gallery.eyebrow}</span>
                <h2 className="display-lg">{t.gallery.title}</h2>
              </div>
            </ScrollReveal>
            <div className="gallery-grid">
              {t.gallery.photos.map((photo, i) => (
                <ScrollReveal key={photo.src} delay={i * 0.1}>
                  <figure className="gallery-item">
                    <img src={asset(photo.src)} alt={photo.caption} loading="lazy" />
                    <figcaption>{photo.caption}</figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="tour" className="price-section">
          <div className="wrap">
            <div className="price-grid">
              <ScrollReveal>
                <div className="price-main">
                  <span className="eyebrow">{t.tour.eyebrow}</span>
                  <div className="display-lg">{t.tour.title}</div>
                  <p className="price-note">{t.tour.dates}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="price-details">
                  <p>{t.tour.note}</p>
                  <a className="btn-primary" href={CONTACT_TG} target="_blank" rel="noopener">
                    <span>{t.tour.cta}</span><ArrowUpRight size={18} weight="bold" aria-hidden="true" />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <span>{t.footer.copy}</span>
          <a href={CONTACT_TG} target="_blank" rel="noopener">
            {t.footer.writeUs}
          </a>
        </div>
      </footer>

      <div className="mobile-sticky-cta">
        <div>
          <span className="p">{t.tour.title}</span>
          <span className="l">{t.tour.dates}</span>
        </div>
        <a className="btn-primary" href={CONTACT_TG} target="_blank" rel="noopener">
          <span>{t.tour.cta}</span><Plus size={16} weight="bold" aria-hidden="true" />
        </a>
      </div>
    </>
  );
}

export default App;
