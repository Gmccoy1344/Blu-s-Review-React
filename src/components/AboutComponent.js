import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const AboutCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = props.items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="d-block w-100" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="col-md text-center p-2">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={props.items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

function About(props){
  return(
    <div className="container">
      <div className="row">
        <div className="col">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>About Us</BreadcrumbItem>
            </Breadcrumb>
        </div>
      </div>
      <div className="row">
          <AboutCarousel items={props.items}/>
      </div>
      <div className="row">
        <div className="col-md text-center">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md text-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis ut diam. Sodales ut etiam sit amet nisl purus in. Risus ultricies tristique nulla aliquet enim tortor. Pellentesque massa placerat duis ultricies lacus. Turpis in eu mi bibendum neque egestas congue. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Commodo elit at imperdiet dui accumsan. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nulla facilisi nullam vehicula ipsum a arcu cursus. Massa tincidunt nunc pulvinar sapien. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Ut consequat semper viverra nam libero justo. Lorem donec massa sapien faucibus et molestie. Elementum facilisis leo vel fringilla est ullamcorper. Ultricies tristique nulla aliquet enim tortor at auctor.

Cras sed felis eget velit aliquet sagittis. Nec ullamcorper sit amet risus nullam eget felis eget. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Nec ultrices dui sapien eget mi. Amet consectetur adipiscing elit ut aliquam. Viverra aliquet eget sit amet tellus cras adipiscing enim. Nibh ipsum consequat nisl vel. Praesent tristique magna sit amet purus gravida quis blandit turpis. Ullamcorper dignissim cras tincidunt lobortis feugiat. Ultricies tristique nulla aliquet enim. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Eleifend quam adipiscing vitae proin. Laoreet sit amet cursus sit amet dictum sit. Massa enim nec dui nunc mattis. Integer malesuada nunc vel risus commodo viverra maecenas accumsan.</p>
        </div>
      </div>
    </div>
  );
}
  
  export default About;