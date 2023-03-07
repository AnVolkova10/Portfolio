import '../ProjectsTabs/ProjectsTabsStyles.scss';
import { useEffect, useState } from 'react';
import { Nav, Navbar, Container, Row, Col, Tab } from 'react-bootstrap';
import { projectsDev } from '../../helpers/helpers';
import { projectsFilm } from '../../helpers/helpers';
import { projectsOthers } from '../../helpers/helpers';
import { ProjectsCard } from '../ProjectsCard/ProjectsCard';

export const ProjectsTabs = () => {
  return (
    <Tab.Container id='projects-tabs' defaultActiveKey='second'>
      <Nav
        variant='pills'
        className='nav-pills mb-5 justify-content-center align-items-center'
        id='pills'
      >
        <Nav.Item>
          <Nav.Link eventKey='first'>FILM</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='second'>DEV</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='third'>OTHERS</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey='first'>
          <Row>
            {projectsFilm.map((project, index) => {
              return [<ProjectsCard key={index} {...project} />];
            })}
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='second'>
          <Row>
            {projectsDev.map((project, index) => {
              return [<ProjectsCard key={index} {...project} />];
            })}
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='third'>
          <Row>
            {projectsOthers.map((project, index) => {
              return [<ProjectsCard key={index} {...project} />];
            })}
          </Row>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};
