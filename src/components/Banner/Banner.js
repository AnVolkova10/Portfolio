import '../Banner/BannerStyles.scss';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/header-img.png';
import myBaby from '../../assets/img/my-baby.png';
import { SelfWritingTitle } from '../SelfWritingTitle/SelfWritingTitle';

export const Banner = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={8}>
            <span className='tagline'>Welcome to my first portfolio</span>
            <SelfWritingTitle />{' '}
            <p>
              My name is Ángela Curzi, also known as <b>Volkova</b>. I was born
              in Mar del Plata but now I'm living in City Bell, Argentina. As a
              lifelong learner, I'm on a mission to soak up as much knowledge as
              possible before my time is up.{' '}
              <b>I believe that knowledge has the power to set us free.</b>
              <br />I finally found a job I love, CODING! I enjoy spending time
              with my computer, I eat books for dinner and I play videogames
              everytime I can. I'm on track to graduate with a degree in
              Audiovisual Arts this year - the culmination of years of hard work
              and dedication. My soulmate is a cat named <b>Ravenna</b>.
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
              <img src={headerImg} alt='Header' className='cat' />
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
