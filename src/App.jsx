import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Plus } from '@phosphor-icons/react';
import './App.css';
import { SignupModal } from './components/SignupModal';
import { PrivacyModal } from './components/PrivacyModal';
import { OfferModal } from './components/OfferModal';
import { ScrollReveal } from './components/ScrollReveal';

const ctaLabel = 'Записаться';

const journeyItems = [
  {
    num: '00',
    date: '3 сентября, 18:00-21:00 МСК',
    title: 'Карта пути',
    text: 'Вводная встреча. Создаём безопасное пространство и перенастраиваем фокус с «надо похудеть» на бережное исследование отношений с телом.',
  },
  {
    num: '01',
    date: '1 октября, 18:00-21:00 МСК',
    title: 'Границы тела',
    text: 'Возвращаем чувствительность к телесным сигналам. Учимся распознавать физический и эмоциональный голод.',
  },
  {
    num: '02',
    date: '15 октября, 18:00-21:00 МСК',
    title: 'Голос семьи',
    text: 'Находим семейные установки о теле и еде, которые до сих пор звучат внутри, и начинаем слышать собственный голос.',
  },
  {
    num: '03',
    date: '29 октября, 18:00-21:00 МСК',
    title: 'Удовольствие',
    text: 'Исследуем своё право на наслаждение. Расширяем «меню удовольствий» за пределы еды.',
  },
  {
    num: '04',
    date: '12 ноября, 18:00-21:00 МСК',
    title: 'Образ тела',
    text: 'Учимся различать, что мы чувствуем внутри и какой образ видим в зеркале. Тренируем доброе отношение к себе.',
  },
  {
    num: '05',
    date: '26 ноября, 18:00-21:00 МСК',
    title: 'Забота о теле',
    text: 'Видим свой стиль заботы: от игнорирования до избыточного контроля. Возвращаем внимание к сигналам тела.',
  },
  {
    num: '06',
    date: '10 декабря, 18:00-21:00 МСК',
    title: 'Уколы для похудения и РПП',
    text: 'Безоценочно исследуем идею фармакологической поддержки веса: мифы, мотивы, страхи, ожидания.',
  },
  {
    num: '07',
    date: '24 декабря, 18:00-21:00 МСК',
    title: 'Завершение',
    text: 'Собираем опыт, прощаемся со старыми установками и строим новые отношения с телом.',
  },
];

const forWhomItems = [
  'Вы запутались в отношениях со своим телом',
  'Устали от диет, срывов и чувства вины',
  'Хотите понять, как семейные установки влияют на пищевое поведение',
  'Интересует бережный психологический взгляд на вес без осуждения',
];

const whatAwaitsItems = [
  '8 живых встреч в Zoom с теорией и практикой',
  'Безопасное пространство без страха осуждения',
  'Домашние практики после каждой встречи',
  'Группа поддержки, где вы не одни',
];

const whatYouGetItems = [
  'Понимание своих отношений с телом',
  'Умение слышать сигналы голода и насыщения',
  'Освобождение от семейных «должна/должен»',
  'Личный способ заботиться о теле без насилия',
];

function App() {
  const [signupOpen, setSignupOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);

  const openSignup = () => setSignupOpen(true);
  const openPrivacy = () => setPrivacyOpen(true);
  const openOffer = () => setOfferOpen(true);

  return (
    <>
      <header>
        <div className="nav">
          <div className="brand">Тело не враг</div>
          <nav className="nav-links" aria-label="Основная навигация">
            <a href="#veduschie">Авторы</a>
            <a href="#dlya-kogo">О курсе</a>
            <a href="#marshrut">Программа</a>
          </nav>
          <button className="nav-cta" onClick={openSignup}>
            <span>{ctaLabel}</span><ArrowUpRight size={18} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-content">
            <span className="eyebrow">Онлайн-курс · 8 встреч в Zoom</span>
            <h1 className="display-xl">Тело не враг</h1>
            <p className="body-lg">
              Восьминедельный курс о бережных отношениях с телом, едой и собой.
              Без диет, без насилия, без обещаний волшебного похудения.
            </p>
            <button className="btn-primary" onClick={openSignup}>
              <span>{ctaLabel}</span><ArrowUpRight size={18} weight="bold" aria-hidden="true" />
            </button>
          </div>
          <ScrollReveal direction="right" className="hero-visual">
            <img src="/art.jpg" alt="" loading="eager" />
          </ScrollReveal>
        </div>
      </section>

      <section id="veduschie">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">01 / команда</span>`n              <h2 className="display-lg">Авторы курса</h2>
            </div>
          </ScrollReveal>
          <div className="facils-grid">
            <ScrollReveal>
              <div className="facil-card">
                <div className="facil-photo">
                  <img src="/maria.jpg" alt="Соколова Мария" loading="lazy" />
                </div>
                <h3>Соколова Мария</h3>
                <span className="facil-role">Гештальт-терапевт, телесный терапевт</span>
                <p>Помогает услышать, чем говорит ваше тело, и вернуть себе право быть собой.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div className="facil-card">
                <div className="facil-photo">
                  <img src="/yulia.jpg" alt="Бренькова Юлия" loading="lazy" />
                </div>
                <h3>Бренькова Юлия</h3>
                <span className="facil-role">Гештальт-терапевт, семейный терапевт</span>
                <p>Создаёт пространство, где можно выдохнуть, разобраться в семейных сценариях и найти свой путь.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="dlya-kogo" className="promise-section">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">О курсе</span>
              <span className="eyebrow">01 / команда</span>`n              <h2 className="display-lg">Бережное исследование</h2>
            </div>
          </ScrollReveal>
          <div className="promise-grid">
            <ScrollReveal>
              <div className="promise-column">
                <div className="promise-block">
                  <h3>Для кого</h3>
                  <ul>
                    {forWhomItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="promise-column">
                <div className="promise-block">
                  <h3>Что вас ждёт</h3>
                  <ul>
                    {whatAwaitsItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="promise-block">
                  <h3>Что получите</h3>
                  <ul>
                    {whatYouGetItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="art-break">
        <figure>
          <img src="/art.jpg" alt="" loading="lazy" />
        </figure>
      </div>

      <section id="marshrut">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">01 / команда</span>`n              <h2 className="display-lg">8 встреч на пути к себе</h2>
            </div>
          </ScrollReveal>
          <ul className="journey-list">
            {journeyItems.map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 0.05}>
                <li className="journey-item">
                  <span className="num">{item.num}</span>
                  <span className="dur">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ArrowDownRight className="journey-arrow" size={20} weight="light" aria-hidden="true" />
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="cta" className="price-section">
        <div className="wrap">
          <div className="price-grid">
            <ScrollReveal>
              <div className="price-main">
                <div className="display-lg">4 000 ₽</div>
                <p className="price-note">за одну встречу · 32 000 ₽ за весь курс</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="price-details">
                <p>
                  8 онлайн-встреч в Zoom, всего 24 часа. Оплата полностью,
                  двумя или тремя равными платежами - как удобнее.
                </p>
                <button className="btn-primary" onClick={openSignup}>
                  <span>{ctaLabel}</span><ArrowUpRight size={18} weight="bold" aria-hidden="true" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <span>Тело не враг</span>
          <span>
            <a href="mailto:psy@brenkova.ru">psy@brenkova.ru</a> ·{' '}
            <a href="https://t.me/Brenkova_psy" target="_blank" rel="noopener">
              @Brenkova_psy
            </a>
          </span>
        </div>
      </footer>

      <div className="mobile-sticky-cta">
        <div>
          <span className="p">4 000 ₽</span>
          <span className="l">за встречу</span>
        </div>
        <button className="btn-primary" onClick={openSignup}>
          <span>{ctaLabel}</span><Plus size={16} weight="bold" aria-hidden="true" />
        </button>
      </div>

      <SignupModal
        isOpen={signupOpen}
        onClose={() => setSignupOpen(false)}
        onOpenPrivacy={() => {
          setSignupOpen(false);
          setPrivacyOpen(true);
        }}
        onOpenOffer={() => {
          setSignupOpen(false);
          setOfferOpen(true);
        }}
      />
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <OfferModal isOpen={offerOpen} onClose={() => setOfferOpen(false)} />
    </>
  );
}

export default App;
