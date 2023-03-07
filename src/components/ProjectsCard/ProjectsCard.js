import { useEffect, useState } from 'react';
import { Nav, Navbar, Container, Row, Col, Tab } from 'react-bootstrap';
import { projects } from '../../helpers/helpers';
import '../ProjectsCard/ProjectsCardStyles.scss';

export const ProjectsCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
