import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { Locale } from '../types/project';
import { messages, type SiteMessages } from './messages';

const STORAGE_KEY = 'portfolio-locale';

interface LanguageContextValue {
  locale: Locale;
  messages: SiteMessages;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const isLocale = (value: string | null): value is Locale =>
  value === 'es' || value === 'en';

const detectBrowserLocale = (): Locale => {
  if (typeof navigator === 'undefined') {
    return 'en';
  }

  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
};

const getInitialLocale = (): Locale => {
  try {
    const storedLocale = window.localStorage.getItem(STORAGE_KEY);

    if (isLocale(storedLocale)) {
      return storedLocale;
    }
  } catch {
    // Storage may be unavailable in privacy-restricted browser contexts.
  }

  return detectBrowserLocale();
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  const toggleLocale = useCallback(() => {
    setLocale((currentLocale) => (currentLocale === 'es' ? 'en' : 'es'));
  }, []);

  useEffect(() => {
    const activeMessages = messages[locale];

    document.documentElement.lang = locale;
    document.title = activeMessages.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', activeMessages.meta.description);

    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // The selected language still works for the current session.
    }
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      messages: messages[locale],
      setLocale,
      toggleLocale,
    }),
    [locale, toggleLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider.');
  }

  return context;
};
