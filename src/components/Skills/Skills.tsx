import { Container, Row, Col } from 'react-bootstrap';
import '../Skills/SkillsStyles.scss';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../../assets/img/color-sharp.png';

import { SkillsCarousel } from '../SkillsCarousel/SkillsCarousel';
import { useLanguage } from '../../i18n/LanguageProvider';

export const Skills = () => {
  const { messages } = useLanguage();

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              {' '}
              <h2>{messages.skills.title}</h2>
              <p className='skill-bx__description'>
                {messages.skills.description}
              </p>
              <SkillsCarousel />
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-left'
        alt={messages.skills.backgroundAlt}
        src={colorSharp}
      ></img>
    </section>
  );
};
