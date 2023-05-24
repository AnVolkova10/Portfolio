import '../SelfWritingTitle/SelfWritingTitleStyles.scss';
import { useEffect, useState } from 'react';

export const SelfWritingTitle = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    'Frontend Developer!',
    'React.js Developer!',
    'Three.js Developer!',
    'Video Editor!',
    'Filmmaker!',
    'Gamer!!',
  ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(350 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.8);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(350 - Math.random() * 100);
    }
  };

  return (
    <h1>
      {`Hi, I'm a `}
      <span className='wrap'>{text} </span>
    </h1>
  );
};
