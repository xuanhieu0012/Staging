import './ParralaxSection.css'

interface ParallaxSection{
    imageSrc: string;
    title: string;
}
const ParallaxSection = ({ imageSrc, title }: ParallaxSection)  => {
  return (
    <div className="parallax"  style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className="parallax-content">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default ParallaxSection;
