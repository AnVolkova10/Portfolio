import '../SelfWritingTitle/SelfWritingTitleStyles.scss';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageProvider';

const PERIOD = 2000;
const INITIAL_DELTA = 220;

export const SelfWritingTitle = () => {
  const { messages } = useLanguage();
  const roles = messages.banner.roles;
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(INITIAL_DELTA);

  useEffect(() => {
    const tick = () => {
      const index = loopNum % roles.length;
      const fullText = roles[index];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
      setText(updatedText);

      if (isDeleting) {
        setDelta((previousDelta) => previousDelta / 1.8);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(PERIOD);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum((currentLoop) => currentLoop + 1);
        setDelta(INITIAL_DELTA - Math.random() * 60);
      }
    };

    const ticker = window.setInterval(tick, delta);
    return () => {
      window.clearInterval(ticker);
    };
  }, [delta, isDeleting, loopNum, roles, text]);

  return (
    <h1>
      {messages.banner.headingPrefix}
      <span className='wrap'>{text} </span>
    </h1>
  );
};
