import '../SkillsCarousel/SkillsCarouselStyles.scss';
import { responsive, skills } from '../../helpers/helpers';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const SkillsCarousel = () => {
  return (
    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
      {skills.map((skill, index) => (
        <div key={index} className='item'>
          <img src={skill.imgSrc} alt={skill.alt} />
          <h5>{skill.label}</h5>
        </div>
      ))}
    </Carousel>
  );
};
