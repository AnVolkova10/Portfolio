import { Container, Row, Col } from 'react-bootstrap';
import '../Skills/SkillsStyles.scss';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../../assets/img/color-sharp.png';

import { SkillsCarousel } from '../SkillsCarousel/SkillsCarousel';

export const Skills = () => {
  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              {' '}
              <h2>Skills</h2>
              <p>
                Welcome to my skills section! Here I showcase my qualifications
                and experience in various areas, with a focus on technology and
                software development. I am passionate about problem solving and
                continually learning new technologies to stay at the forefront
                of my field.
              </p>
              <SkillsCarousel />
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-left'
        alt='background color'
        src={colorSharp}
      ></img>
    </section>
  );
};
