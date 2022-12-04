import '../Banner/BannerStyles.scss';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/header-img.png';
import myBaby from '../../assets/img/my-baby.png';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    'Frontend Developer!',
    'Three.js Developer!',
    'Video Editor!',
    'Filmmaker!',
    'Gamer!!',
  ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(350 - Math.random() * 100);
  const period = 2000;

  const [isHovering, setIsHovering] = useState(false);

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
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={8}>
            <span className='tagline'>Welcome to my first portfolio</span>
            <h1>
              {`Hi, I'm a `}
              <span className='wrap'>{text} </span>
            </h1>
            <p>
              My name is Ángela Curzi, also known as Volkova. I was born in Mar
              del Plata but now I'm living in City Bell, Argentina. My purpose
              in life is to learn everything I can before I die. <br />
              <b>Knowledge sets me free.</b>
              <br />I finally found a job I love, CODING! I enjoy spending time
              with my computer, I eat books for dinner and I play videogames
              everytime I can. This year I'll finish my thesis and graduate in
              Audiovisual Arts. My soulmate is a cat named <b>Ravenna</b>.
            </p>
            <button onClick={() => console.log('connect')}>
              {' '}
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <div
              className='images'
              onMouseOver={() => setIsHovering(true)}
              onMouseOut={() => setIsHovering(false)}
            >
              <img src={headerImg} alt='Header Image' className='cat' />
              <img
                className={isHovering ? 'my-baby' : 'gone'}
                src={myBaby}
                alt={'text says: My baby'}
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
