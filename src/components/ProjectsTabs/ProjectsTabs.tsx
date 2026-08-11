import '../ProjectsTabs/ProjectsTabsStyles.scss';
import { Nav, Row, Tab } from 'react-bootstrap';
import { getProjectsByCategory } from '../../data/projects';
import type { ProjectCategory } from '../../types/project';
import { ProjectsCard } from '../ProjectsCard/ProjectsCard';
import { useLanguage } from '../../i18n/LanguageProvider';

export const ProjectsTabs = () => {
  const { locale, messages } = useLanguage();
  const tabs: Array<{
    category: ProjectCategory;
    label: string;
  }> = [
    {
      category: 'professional',
      label: messages.projects.tabs.professional,
    },
    { category: 'own', label: messages.projects.tabs.own },
    { category: 'lab', label: messages.projects.tabs.lab },
    {
      category: 'audiovisual',
      label: messages.projects.tabs.audiovisual,
    },
    {
      category: 'beyond-code',
      label: messages.projects.tabs.beyondCode,
    },
  ];

  return (
    <Tab.Container id='projects-tabs' defaultActiveKey='professional'>
      <Nav
        variant='pills'
        className='nav-pills mb-5 align-items-stretch'
        id='pills'
      >
        {tabs.map((tab) => (
          <Nav.Item key={tab.category}>
            <Nav.Link eventKey={tab.category}>{tab.label}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Tab.Content>
        {tabs.map((tab) => (
          <Tab.Pane key={tab.category} eventKey={tab.category}>
            <Row>
              {getProjectsByCategory(tab.category, locale).map((project) => (
                <ProjectsCard key={project.id} {...project} />
              ))}
            </Row>
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  );
};
