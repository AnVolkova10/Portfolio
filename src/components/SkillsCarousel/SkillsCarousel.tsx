import '../SkillsCarousel/SkillsCarouselStyles.scss';
import {
  Broadcast,
  Boxes,
  CameraReels,
  ChevronLeft,
  ChevronRight,
  CloudArrowUp,
  Film,
  Robot,
} from 'react-bootstrap-icons';
import {
  skillGroups,
  skillsResponsive,
  type SkillConceptIcon,
} from '../../data/skills';
import CarouselPackage from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useLanguage } from '../../i18n/LanguageProvider';

// The package exposes its component under `default` at runtime when Vite
// consumes its CommonJS build. Keep compatibility with both module shapes.
const carouselModule = CarouselPackage as unknown as {
  default?: typeof CarouselPackage;
};
const Carousel = carouselModule.default ?? CarouselPackage;

interface ConceptIconProps {
  name: SkillConceptIcon;
}

const ConceptIcon = ({ name }: ConceptIconProps) => {
  const commonProps = {
    'aria-hidden': true,
    focusable: false,
    size: 34,
  };

  switch (name) {
    case 'architecture':
      return <Boxes {...commonProps} />;
    case 'artificial-intelligence':
      return <Robot {...commonProps} />;
    case 'cloud':
      return <CloudArrowUp {...commonProps} />;
    case 'filmmaking':
      return <CameraReels {...commonProps} />;
    case 'postproduction':
      return <Film {...commonProps} />;
    case 'realtime':
      return <Broadcast {...commonProps} />;
  }
};

interface SkillArrowProps {
  direction: 'left' | 'right';
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const SkillArrow = ({
  direction,
  label,
  onClick,
  disabled,
}: SkillArrowProps) => (
  <button
    aria-label={label}
    className={`skill-carousel__arrow skill-carousel__arrow--${direction}`}
    disabled={disabled}
    onClick={onClick}
    type='button'
  >
    {direction === 'left' ? (
      <ChevronLeft aria-hidden='true' />
    ) : (
      <ChevronRight aria-hidden='true' />
    )}
  </button>
);

interface SkillNavigationProps {
  previousLabel: string;
  nextLabel: string;
  previous?: () => void;
  next?: () => void;
}

const SkillNavigation = ({
  previousLabel,
  nextLabel,
  previous,
  next,
}: SkillNavigationProps) => (
  <div className='skill-carousel__navigation'>
    <SkillArrow
      direction='left'
      label={previousLabel}
      onClick={previous}
    />
    <SkillArrow direction='right' label={nextLabel} onClick={next} />
  </div>
);

export const SkillsCarousel = () => {
  const { locale } = useLanguage();
  const previousLabel =
    locale === 'es'
      ? 'Mostrar el grupo anterior de habilidades'
      : 'Show previous skills group';
  const nextLabel =
    locale === 'es'
      ? 'Mostrar el siguiente grupo de habilidades'
      : 'Show next skills group';

  return (
    <div className='skills-carousel'>
      <Carousel
        responsive={skillsResponsive}
        infinite={true}
        arrows={false}
        keyBoardControl={true}
        customTransition='transform 600ms ease-in-out'
        transitionDuration={600}
        className='skill-slider'
        itemClass='skill-slider__slide'
        renderButtonGroupOutside={true}
        customButtonGroup={
          <SkillNavigation
            previousLabel={previousLabel}
            nextLabel={nextLabel}
          />
        }
      >
        {skillGroups.map((skill) => (
          <article key={skill.id} className='skill-card'>
            <div className='skill-card__logos' aria-hidden='true'>
              {skill.logos.map(({ icon, displayColor }) => (
                <svg
                  key={icon.slug}
                  className='skill-card__brand-logo'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  focusable='false'
                  style={{ color: displayColor ?? `#${icon.hex}` }}
                >
                  <path d={icon.path} />
                </svg>
              ))}
              {skill.conceptIcon && (
                <span className='skill-card__concept-logo'>
                  <ConceptIcon name={skill.conceptIcon} />
                </span>
              )}
            </div>
            <h3>{skill.label[locale]}</h3>
            <p>{skill.technologies[locale].join(' · ')}</p>
          </article>
        ))}
      </Carousel>
    </div>
  );
};
