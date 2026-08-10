import './LanguageSwitchStyles.scss';
import { useLanguage } from '../../i18n/LanguageProvider';

export const LanguageSwitch = () => {
  const { locale, messages, setLocale } = useLanguage();
  const languageOptions = [
    { code: 'ES', label: messages.language.spanish, value: 'es' },
    { code: 'EN', label: messages.language.english, value: 'en' },
  ] as const;

  return (
    <div
      aria-label={messages.language.label}
      className='language-switch'
      role='group'
    >
      {languageOptions.map((option) => {
        const isSelected = locale === option.value;

        return (
          <button
            aria-label={option.label}
            aria-pressed={isSelected}
            className={
              isSelected
                ? 'language-switch__tab language-switch__tab--selected'
                : 'language-switch__tab'
            }
            key={option.value}
            onClick={() => setLocale(option.value)}
            title={option.label}
            type='button'
          >
            {option.code}
          </button>
        );
      })}
    </div>
  );
};
