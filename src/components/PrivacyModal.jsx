import { Modal } from './Modal';

export function PrivacyModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} wide>
      <span className="eyebrow">Согласие на обработку данных</span>
      <h3 style={{ fontSize: '1.35rem', margin: '14px 0 20px' }}>
        Политика обработки персональных данных
      </h3>

      <h4 style={{ fontFamily: "'Inter Tight Variable', 'Inter Tight', system-ui, sans-serif", fontWeight: 600, fontSize: '1.02rem', margin: '22px 0 6px' }}>
        1. Общие положения
      </h4>
      <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
        Настоящая Политика действует в отношении всей информации, которую сайт курса «Тело и вес: путешествие к себе» может получить о пользователе через форму записи на курс. Оператором персональных данных является Бренькова Юлия Юрьевна, плательщик налога на профессиональный доход (самозанятая), ИНН 662906412749, далее - «Оператор».
      </p>

      <h4 style={{ fontFamily: "'Inter Tight Variable', 'Inter Tight', system-ui, sans-serif", fontWeight: 600, fontSize: '1.02rem', margin: '22px 0 6px' }}>
        2. Какие данные собираются
      </h4>
      <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
        Имя; номер телефона; предпочтительный способ связи (Telegram, WhatsApp, Max, email); по желанию - сообщение о том, что откликнулось в курсе.
      </p>

      <h4 style={{ fontFamily: "'Inter Tight Variable', 'Inter Tight', system-ui, sans-serif", fontWeight: 600, fontSize: '1.02rem', margin: '22px 0 6px' }}>
        3. Цели обработки
      </h4>
      <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
        Данные используются исключительно для связи с пользователем по вопросам записи на курс и информирования об изменениях расписания или условий курса. Данные не передаются третьим лицам, за исключением случаев, необходимых для оказания услуги (например, использование мессенджера, который пользователь сам указал как способ связи).
      </p>

      <h4 style={{ fontFamily: "'Inter Tight Variable', 'Inter Tight', system-ui, sans-serif", fontWeight: 600, fontSize: '1.02rem', margin: '22px 0 6px' }}>
        4. Срок хранения
      </h4>
      <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
        Данные хранятся до отзыва согласия пользователем или до достижения целей обработки, но не дольше срока проведения курса и одного года после его завершения.
      </p>

      <h4 style={{ fontFamily: "'Inter Tight Variable', 'Inter Tight', system-ui, sans-serif", fontWeight: 600, fontSize: '1.02rem', margin: '22px 0 6px' }}>
        5. Согласие и его отзыв
      </h4>
      <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
        Отправляя форму, пользователь подтверждает согласие на обработку персональных данных на условиях настоящей Политики. Согласие может быть отозвано в любой момент - для этого нужно написать на{' '}
        <a href="mailto:psy@brenkova.ru" style={{ color: 'var(--accent)' }}>psy@brenkova.ru</a>{' '}
        с темой «Отзыв согласия на обработку персональных данных».
      </p>

      <h4 style={{ fontFamily: "'Inter Tight Variable', 'Inter Tight', system-ui, sans-serif", fontWeight: 600, fontSize: '1.02rem', margin: '22px 0 6px' }}>
        6. Права субъекта персональных данных
      </h4>
      <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
        Пользователь вправе запросить информацию о том, какие его данные обрабатываются, потребовать их исправления или удаления, направив запрос на{' '}
        <a href="mailto:psy@brenkova.ru" style={{ color: 'var(--accent)' }}>psy@brenkova.ru</a>. Ответ предоставляется в течение 10 рабочих дней.
      </p>

      <h4 style={{ fontFamily: "'Inter Tight Variable', 'Inter Tight', system-ui, sans-serif", fontWeight: 600, fontSize: '1.02rem', margin: '22px 0 6px' }}>
        7. Контакты
      </h4>
      <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
        По всем вопросам, связанным с обработкой персональных данных:{' '}
        <a href="mailto:psy@brenkova.ru" style={{ color: 'var(--accent)' }}>psy@brenkova.ru</a>
      </p>
    </Modal>
  );
}
