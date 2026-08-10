import '../Footer/FooterStyles.scss'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../../assets/img/logo.svg'
import { socialLinks } from '../../data/site'
import { useLanguage } from '../../i18n/LanguageProvider'

export const Footer = () => {
  const { messages } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <section className='background'>
      <footer className='footer'>
        <Container>
          <Row className='align-items-center '>
            <Col size={12} sm={12}>
              <img className='logo' src={logo} alt={messages.footer.logoAlt} />
              <div className='social-icon'>
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target='_blank'
                    rel='noreferrer'
                    aria-label={link.label}
                  >
                    <img src={link.imgSrc} alt='' />
                  </a>
                ))}
              </div>
              <p>
                © {year} Ángela Curzi. {messages.footer.rights}
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </section>
  )
}
