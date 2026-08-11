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
    const sectionLinks = ['#home', '#skills', '#projects'];

    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      let visibleSection = '#home';

      sectionLinks.forEach((sectionLink) => {
        const section = document.querySelector<HTMLElement>(sectionLink);

        if (section && section.getBoundingClientRect().top <= 120) {
          visibleSection = sectionLink;
        }
      });

      setActiveLink(visibleSection);
    };

    const animationFrame = window.requestAnimationFrame(onScroll);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pageshow', onScroll);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pageshow', onScroll);
    };
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
                className={`navbar-link${
                  activeLink === link.href ? ' active-navbar-link' : ''
                }`}
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
