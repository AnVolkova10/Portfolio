import '../NavBar/NavBarStyles.scss';
import { useEffect, useState } from 'react';
import { navLinks, socialLinks } from '../../helpers/helpers';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../../assets/img/logo.svg';
import { ConnectButton } from '../ConnectButton/ConnectButton';
// Prueba del Contexnt
import { useContext } from 'react';
import { AppContext } from '../../context/appContext';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  // Prueba del Context
  const { appState, settingState } = useContext(AppContext);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);

    // Prueba del Context
    console.log(appState);
  };

  //Prueba del Context
  useEffect(() => {
    settingState();
  }, [activeLink]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {navLinks.map((link) => (
              <Nav.Link
                key={link.label}
                href={link.href}
                className={
                  activeLink === link.label
                    ? 'active-navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink(link.label)}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <span className='navbar-text'>
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
            <ConnectButton children={"Let's Connect"} />
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
