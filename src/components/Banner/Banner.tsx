import '../Banner/BannerStyles.scss'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../../assets/img/header-img.png'
import myBaby from '../../assets/img/my-baby.png'
import { SelfWritingTitle } from '../SelfWritingTitle/SelfWritingTitle'
import { ConnectButton } from '../ConnectButton/ConnectButton'
import { useLanguage } from '../../i18n/LanguageProvider'

export const Banner = () => {
  const { locale, messages } = useLanguage()
  const [isHovering, setIsHovering] = useState(false)
  const { bio } = messages.banner

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={8}>
            <span className='tagline'>{messages.banner.tagline}</span>
            <SelfWritingTitle key={locale} />{' '}
            <p>
              {bio.namePrefix}
              <b>Ángela Curzi</b>
              {bio.knownAsPrefix}
              <b>Volkova</b>
              {bio.journey}
              <strong>{bio.belief}</strong>
              {bio.learning}
              <strong>{bio.coding}</strong>
              {bio.life}
              {bio.ravennaPrefix}
              <b>Ravenna</b>.
            </p>
            <ConnectButton icon>{messages.banner.connect}</ConnectButton>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <div
              className='images'
              onMouseOver={() => setIsHovering(true)}
              onMouseOut={() => setIsHovering(false)}
            >
              <img
                src={headerImg}
                alt={messages.banner.catAlt}
                className='cat'
              />
              <img
                className={isHovering ? 'my-baby' : 'gone'}
                src={myBaby}
                alt={messages.banner.babyAlt}
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
