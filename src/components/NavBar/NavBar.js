import '../NavBar/NavBarStyles.scss';
import { useEffect, useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../../assets/img/logo.svg';
import navIcon from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
  ];

  const onUpdateActiveLink = (value) => {
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
              <a
                href='https://www.linkedin.com/in/%C3%A1ngela-curzi-572372ba/'
                target='_blank1'
              >
                <img src={navIcon} alt='LinkedIn Icon' />
              </a>
              <a href='https://github.com/AnVolkova10' target='_blank2'>
                <img src={navIcon2} alt='Github Icon' />
              </a>
              <a href='https://youtube.com/@anvolkova10' target='_blank3'>
                <img src={navIcon3} alt='Youtube Icon' />
              </a>
            </div>
            <button onClick={() => console.log('connect')}>
              Let's Connect
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
