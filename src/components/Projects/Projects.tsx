import '../Projects/ProjectsStyles.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectsTabs } from '../ProjectsTabs/ProjectsTabs';
import { useLanguage } from '../../i18n/LanguageProvider';

export const Projects = () => {
  const { messages } = useLanguage();

  return (
    <section className='projects' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>{messages.projects.title}</h2>
            <p>{messages.projects.description}</p>
            <ProjectsTabs />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
