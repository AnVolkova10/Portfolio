import { Col } from 'react-bootstrap';
import '../ProjectsCard/ProjectsCardStyles.scss';

interface ProjectsCardProps {
  title: string;
  description: string;
  imgUrl: string;
  languages?: string;
  link?: string;
  date?: string;
}

export const ProjectsCard = ({
  title,
  description,
  imgUrl,
  languages,
  link,
  date,
}: ProjectsCardProps) => {
  return (
    <Col sm={6} md={4}>
      <a href={link} rel='noreferrer' target='_blank'>
        <div className='proj-imgbx'>
          <img alt={title} src={imgUrl} />
          <div className='proj-txtx'>
            <h4>{title}</h4>
            <span>
              <b>{description}</b>
            </span>
            <br />
            <span>{languages}</span>
            <p>{date}</p>
          </div>
        </div>
      </a>
    </Col>
  );
};
