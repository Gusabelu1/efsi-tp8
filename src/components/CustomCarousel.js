import { Container, Carousel } from 'react-bootstrap';

function CustomCarousel() {
  return (
    <Container className="mb-3">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://claroblog.com.ni/wp-content/uploads/2020/03/Portada.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://www.dcc.uchile.cl/media/diplomas/header_139.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/10/19145833/iphone-XR.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CustomCarousel;