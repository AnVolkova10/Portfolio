import '../NavBar/NavBarStyles.scss';
import { useEffect, useState } from 'react';
import { socialLinks } from '../../data/site';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../../assets/img/logo.svg';
import downloadIcon from '../../assets/img/download.svg';
import { ConnectButton } from '../ConnectButton/ConnectButton';
import { LanguageSwitch } from '../LanguageSwitch/LanguageSwitch';
import { useLanguage } from '../../i18n/LanguageProvider';
import { resolvePublicAsset } from '../../utils/resolvePublicAsset';

export const NavBar = () => {
  const { locale, messages } = useLanguage();
  const [activeLink, setActiveLink] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const cvFile =
    locale === 'es' ? 'cv-es-angela-curzi.pdf' : 'cv-en-angela-curzi.pdf';
  const navLinks = [
    { href: '#home', label: messages.nav.home },
    { href: '#skills', label: messages.nav.skills },
    { href: '#projects', label: messages.nav.projects },
    {
      href: resolvePublicAsset(`cvs/${cvFile}`),
      label: messages.nav.resume,
      download: cvFile,
      icon: downloadIcon,
    },
  ];

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={logo} alt={messages.nav.logoAlt} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          aria-label={messages.nav.toggleMenu}
        >
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {navLinks.map((link) => (
              <Nav.Link
                key={link.href}
                href={link.href}
                download={link.download}
                className={
                  activeLink === link.href
                    ? 'active-navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink(link.href)}
              >
                {link.icon ? <span>{link.label}</span> : link.label}
                {link.icon ? <img alt='' src={link.icon} /> : null}
              </Nav.Link>
            ))}
          </Nav>
          <span className='navbar-text'>
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
            <ConnectButton>{messages.nav.connect}</ConnectButton>
          </span>
        </Navbar.Collapse>
      </Container>
      <LanguageSwitch />
    </Navbar>
  );
};
