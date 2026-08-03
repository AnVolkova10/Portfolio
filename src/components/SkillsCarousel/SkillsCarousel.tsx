import '../SkillsCarousel/SkillsCarouselStyles.scss';
import { responsive, skills } from '../../data/site';
import CarouselPackage from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// The package exposes its component under `default` at runtime when Vite
// consumes its CommonJS build. Keep compatibility with both module shapes.
const carouselModule = CarouselPackage as unknown as {
  default?: typeof CarouselPackage;
};
const Carousel = carouselModule.default ?? CarouselPackage;

export const SkillsCarousel = () => {
  return (
    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
      {skills.map((skill) => (
        <div key={skill.label} className='item'>
          <img src={skill.imgSrc} alt={skill.alt} />
          <h5>{skill.label}</h5>
        </div>
      ))}
    </Carousel>
  );
};
