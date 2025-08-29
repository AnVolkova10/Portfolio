import '../Footer/FooterStyles.scss'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../../assets/img/logo.svg'
import { socialLinks } from '../../helpers/helpers'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <section className='background'>
      <footer className='footer'>
        <Container>
          <Row className='align-items-center '>
            <Col size={12} sm={12}>
              <img className='logo' src={logo} alt='Logo' />
              <div className='social-icon'>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={link.imgSrc} alt={link.alt} />
                  </a>
                ))}
              </div>
              <p>© {year} Ángela Curzi. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </section>
  )
}
