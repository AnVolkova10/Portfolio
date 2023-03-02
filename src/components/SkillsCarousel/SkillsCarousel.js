import '../SkillsCarousel/SkillsCarouselStyles.scss';
import meter1 from '../../assets/img/meter1.svg';
import meter2 from '../../assets/img/meter2.svg';
import meter3 from '../../assets/img/meter3.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const SkillsCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
      <div className='item'>
        <img src={meter1} alt='example web dev' />
        <h5>Web Development</h5>
      </div>
      <div className='item'>
        <img src={meter2} alt='example mark-up dev' />
        <h5>Mark-up Development</h5>
      </div>
      <div className='item'>
        <img src={meter2} alt='example three.js dev' />
        <h5>Three.js Development</h5>
      </div>
      <div className='item'>
        <img src={meter3} alt='example filmmaking' />
        <h5>Filmmaking</h5>
      </div>
      <div className='item'>
        <img src={meter1} alt='example film editor' />
        <h5>Film Editor</h5>
      </div>
      <div className='item'>
        <img src={meter2} alt='example film production' />
        <h5>Film Production</h5>
      </div>
      <div className='item'>
        <img src={meter2} alt='example film scripting' />
        <h5>Film Scripting</h5>
      </div>
    </Carousel>
  );
};
