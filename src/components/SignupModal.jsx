import { useState } from 'react';
import { TelegramLogo } from '@phosphor-icons/react';
import { Modal } from './Modal';

export function SignupModal({ isOpen, onClose, onOpenPrivacy, onOpenOffer }) {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: '',
    contact: '',
    message: '',
    consent: false,
    offer: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.consent || !form.offer) return;

    const subject = encodeURIComponent('Запись на курс «Тело не враг»');
    const body = encodeURIComponent(
      `Имя: ${form.name}\nТелефон: ${form.contact}\n\nПредпочтительный способ связи:\n${form.message}\n\nСогласие на обработку персональных данных: да\nСогласие с публичной офертой: да`
    );
    window.location.href = `mailto:psy@brenkova.ru?subject=${subject}&body=${body}`;
    setDone(true);
  };

  const handleClose = () => {
    setDone(false);
    setForm({ name: '', contact: '', message: '', consent: false, offer: false });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {!done ? (
        <div>
          <span className="eyebrow">Запись на курс</span>
          <h3>«Тело не враг»</h3>
          <p className="modal-sub">
            Выберите, как удобнее - написать сразу в Telegram или оставить заявку на почту.
          </p>

          <a
            href="https://t.me/Brenkova_psy"
            target="_blank"
            rel="noopener"
            className="btn-telegram"
          >
            <TelegramLogo weight="fill" size={20} />
            Написать в Telegram @Brenkova_psy →
          </a>

          <div className="modal-divider">
            <span>или оставьте заявку на почту</span>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <label>
              Имя
              <input
                type="text"
                name="name"
                required
                placeholder="Как вас зовут"
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Номер телефона
              <input
                type="tel"
                name="contact"
                required
                placeholder="+7 ..."
                value={form.contact}
                onChange={handleChange}
              />
            </label>
            <label>
              Предпочтительный способ связи{' '}
              <span className="opt">(телеграм, макс, ватсап, email)</span>
              <textarea
                name="message"
                rows="2"
                placeholder="Например: Telegram, @username"
                value={form.message}
                onChange={handleChange}
              />
            </label>
            <label className="consent-label">
              <input
                type="checkbox"
                name="consent"
                required
                checked={form.consent}
                onChange={handleChange}
              />
              <span>
                Даю согласие на{' '}
                <a onClick={onOpenPrivacy} role="button" tabIndex={0}>
                  обработку персональных данных
                </a>
              </span>
            </label>
            <label className="consent-label">
              <input
                type="checkbox"
                name="offer"
                required
                checked={form.offer}
                onChange={handleChange}
              />
              <span>
                Согласен(на) с условиями{' '}
                <a onClick={onOpenOffer} role="button" tabIndex={0}>
                  публичной оферты
                </a>
              </span>
            </label>
            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center', marginTop: '6px' }}
            >
              Отправить
            </button>
            <p className="modal-note">
              Заявка откроется в виде письма на psy@brenkova.ru
            </p>
          </form>
        </div>
      ) : (
        <div>
          <span className="eyebrow">Почти готово</span>
          <h3>Письмо открыто в вашей почте</h3>
          <p className="modal-sub">
            Проверьте почтовое приложение или вкладку - там уже заполнено письмо на
            psy@brenkova.ru. Просто нажмите «Отправить», и мы свяжемся с вами.
          </p>
          <button
            type="button"
            className="btn-primary"
            onClick={handleClose}
            style={{ width: '100%', textAlign: 'center' }}
          >
            Понятно
          </button>
        </div>
      )}
    </Modal>
  );
}
