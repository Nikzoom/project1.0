import { useEffect, useState } from 'react';

const STORAGE_KEY = 'psy-theme';

// Палитры из palitra.txt + исходная («Хвоя»)
const THEMES = [
  { id: 'forest', name: 'Хвоя', swatch: ['#f6f5ef', '#294c3c'] },
  { id: 'nordic', name: 'Nordic Blue', swatch: ['#F5F7F8', '#2E4E5A'] },
  { id: 'terracotta', name: 'Terracotta', swatch: ['#F8F4EE', '#C96F4A'] },
  { id: 'sand', name: 'Sand & Olive', swatch: ['#F5EFE5', '#C9A66B'] },
  { id: 'stone', name: 'Stone Minimal', swatch: ['#F2F2EE', '#364540'] },
];

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (THEMES.some((theme) => theme.id === saved)) return saved;
  } catch {
    // localStorage может быть недоступен — просто берём палитру по умолчанию
  }
  return 'forest';
};

export function ThemeSwitcher() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // игнорируем — тема просто не сохранится между сессиями
    }
  }, [theme]);

  return (
    <div className="theme-switcher" role="group" aria-label="Палитра сайта">
      {THEMES.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`theme-dot${item.id === theme ? ' active' : ''}`}
          onClick={() => setTheme(item.id)}
          aria-label={`Палитра: ${item.name}`}
          aria-pressed={item.id === theme}
        >
          <span
            className="swatch"
            style={{ background: `linear-gradient(135deg, ${item.swatch[0]} 50%, ${item.swatch[1]} 50%)` }}
            aria-hidden="true"
          />
          <span className="theme-name" aria-hidden="true">{item.name}</span>
        </button>
      ))}
    </div>
  );
}
