import Carousel from 'react-bootstrap/Carousel';
import running_img from "../assets/images/running_img.jpg";
import running_2 from "../assets/images/running_2.jpg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="why_not"
          src= {running_img}
          alt="First slide"
          style= {{height:'40%'}}
        />
        <Carousel.Caption>
          <h3> Run now for 30min</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel_1"
          src={running_2}
          alt="Second slide"
          style= {{height:'40%'}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item>
        <img
          className="carousel_2"
          src="https://prod-everyoneactive-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2020/03/19120257/home-workouts-1.jpg"
          alt= "third slide"
          style= {{height:'40%'}}
        />

        <Carousel.Caption>
          <h3>Exercise is benefitial for mental health!</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;