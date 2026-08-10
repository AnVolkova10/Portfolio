import '../ProjectsTabs/ProjectsTabsStyles.scss';
import { Nav, Row, Tab } from 'react-bootstrap';
import {
  getProjectsDev,
  getProjectsFilm,
  getProjectsOthers,
} from '../../data/projects';
import { ProjectsCard } from '../ProjectsCard/ProjectsCard';
import { useLanguage } from '../../i18n/LanguageProvider';

export const ProjectsTabs = () => {
  const { locale, messages } = useLanguage();
  const projectsDev = getProjectsDev(locale);
  const projectsFilm = getProjectsFilm(locale);
  const projectsOthers = getProjectsOthers(locale);

  return (
    <Tab.Container id='projects-tabs' defaultActiveKey='second'>
      <Nav
        variant='pills'
        className='nav-pills mb-5 justify-content-center align-items-center'
        id='pills'
      >
        <Nav.Item>
          <Nav.Link eventKey='first'>{messages.projects.tabs.film}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='second'>
            {messages.projects.tabs.development}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='third'>{messages.projects.tabs.others}</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey='first'>
          <Row>
            {projectsFilm.map((project) => (
              <ProjectsCard key={project.id} {...project} />
            ))}
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='second'>
          <Row>
            {projectsDev.map((project) => (
              <ProjectsCard key={project.id} {...project} />
            ))}
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='third'>
          <Row>
            {projectsOthers.map((project) => (
              <ProjectsCard key={project.id} {...project} />
            ))}
          </Row>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};
