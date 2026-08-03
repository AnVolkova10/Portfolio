import '../SelfWritingTitle/SelfWritingTitleStyles.scss';
import { useEffect, useState } from 'react';

const TO_ROTATE = [
  'Frontend Developer!',
  'React.js Developer!',
  'Three.js Developer!',
  'Video Editor!',
  'Filmmaker!',
  'Gamer!!',
];
const PERIOD = 2000;
const INITIAL_DELTA = 300;

export const SelfWritingTitle = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(INITIAL_DELTA);

  useEffect(() => {
    const tick = () => {
      const index = loopNum % TO_ROTATE.length;
      const fullText = TO_ROTATE[index];
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
        setDelta(350 - Math.random() * 100);
      }
    };

    const ticker = window.setInterval(tick, delta);
    return () => {
      window.clearInterval(ticker);
    };
  }, [delta, isDeleting, loopNum, text]);

  return (
    <h1>
      {`Hi, I'm a `}
      <span className='wrap'>{text} </span>
    </h1>
  );
};
