import '../Projects/ProjectsStyles.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectsTabs } from '../ProjectsTabs/ProjectsTabs';
import background from '../../assets/img/banner-bg-mob.png';

export const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              As a programmer and filmmaker, I am excited to showcase my diverse
              range of skills and projects in this section. From creating
              innovative software solutions to producing engaging films, I have
              had the opportunity to work on a variety of projects that
              demonstrate my creativity, technical expertise, and passion for
              storytelling. Browse through to see some of my latest work!
            </p>
            <ProjectsTabs />
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-right'
        alt='background color'
        src={background}
      ></img>
    </section>
  );
};
