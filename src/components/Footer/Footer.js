import '../Footer/FooterStyles.scss';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import { socialLinks } from '../../helpers/helpers';

export const Footer = () => {
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
              <p>Copyright 2023. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </section>
  );
};
