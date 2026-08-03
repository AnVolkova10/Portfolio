import '../Banner/BannerStyles.scss'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../../assets/img/header-img.png'
import myBaby from '../../assets/img/my-baby.png'
import { SelfWritingTitle } from '../SelfWritingTitle/SelfWritingTitle'
import { ConnectButton } from '../ConnectButton/ConnectButton'

export const Banner = () => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={8}>
            <span className='tagline'>Welcome to my humble portfolio</span>
            <SelfWritingTitle />{' '}
            <p>
              I’m <b>Ángela Curzi</b>—you might know me as <b>Volkova</b>. From
              Mar del Plata to La Plata, my path has been guided by a simple
              belief: <strong>knowledge sets us free</strong>.As a lifelong
              learner, I'm on a mission to soak up as much knowledge as possible
              before my time is up. I finally found a job I love: CODING! I
              enjoy spending time with my computer, I eat books for dinner and I
              play video games every time I can. I also play football with
              friends, because teamwork and joy matter as much off the screen as
              they do on it. I recently earned my degree in Audiovisual Arts,
              which sharpened how I think about story, image, and interface. My
              soulmate is a cat named <b>Ravenna</b>.
            </p>
            <ConnectButton children={"Let's connect"} icon />
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
  )
}
