import { Col } from 'react-bootstrap';
import '../ProjectsCard/ProjectsCardStyles.scss';

interface ProjectsCardProps {
  title: string;
  description: string;
  featured?: boolean;
  aiAssisted?: boolean;
  aiAssistedLabel?: string;
  aiUsage?: string;
  imgUrl: string;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
  languages?: string;
  liveUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  link?: string;
  date?: string;
}

export const ProjectsCard = ({
  title,
  description,
  featured = false,
  aiAssisted = false,
  aiAssistedLabel = 'AI Assisted',
  aiUsage,
  imgUrl,
  imgAlt,
  imgWidth,
  imgHeight,
  languages,
  liveUrl,
  demoUrl,
  caseStudyUrl,
  link,
  date,
}: ProjectsCardProps) => {
  const destination = liveUrl ?? demoUrl ?? caseStudyUrl ?? link;
  const cardContent = (
    <div
      className={`proj-imgbx${featured ? ' proj-imgbx--featured' : ''}`}
    >
      <img
        alt={imgAlt ?? title}
        height={imgHeight}
        src={imgUrl}
        width={imgWidth}
      />
      {aiAssisted && (
        <span className='ai-assisted-badge'>{aiAssistedLabel}</span>
      )}
      <div className='proj-txtx'>
        <h4>{title}</h4>
        <span>
          <b>{description}</b>
        </span>
        <br />
        <span>{languages}</span>
        {aiUsage && <span className='ai-usage'>{aiUsage}</span>}
        <p>{date}</p>
      </div>
    </div>
  );

  return (
    <Col sm={6} md={4}>
      {destination ? (
        <a
          aria-label={`Open ${title}${demoUrl && !liveUrl ? ' demo' : caseStudyUrl && !liveUrl ? ' case study' : ''}`}
          href={destination}
          rel='noreferrer'
          target='_blank'
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </Col>
  );
};
