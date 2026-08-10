import '../SkillsCarousel/SkillsCarouselStyles.scss';
import { responsive, skills } from '../../data/site';
import CarouselPackage from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useLanguage } from '../../i18n/LanguageProvider';

// The package exposes its component under `default` at runtime when Vite
// consumes its CommonJS build. Keep compatibility with both module shapes.
const carouselModule = CarouselPackage as unknown as {
  default?: typeof CarouselPackage;
};
const Carousel = carouselModule.default ?? CarouselPackage;

export const SkillsCarousel = () => {
  const { locale } = useLanguage();

  return (
    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
      {skills.map((skill) => (
        <div key={skill.id} className='item'>
          <img src={skill.imgSrc} alt='' />
          <h5>{skill.label[locale]}</h5>
        </div>
      ))}
    </Carousel>
  );
};
