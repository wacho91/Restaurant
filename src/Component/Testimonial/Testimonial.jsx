
import Slider from "react-slick";

const testimonialData = [
    {
      id: 1,
      name: "Samuel",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 1,
      name: "Smith",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
    },
];

const Testimonial = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

  return (
    <div>
        <div>
            <div>
                <p>
                    What our customers say
                </p>
                <h1>Testimonial</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perspiciatis delectus architecto error nesciunt,
                </p>
            </div>
            <div>
                <Slider {...settings}>
                    {testimonialData.map((data) => {
                        return (
                            <div key={data.id}>
                                <div>
                                    <img 
                                        src={data.img} 
                                        alt="image" 
                                    />
                                    <p>{data.text}</p>
                                    <h1>{data.name}</h1>
                                    <p>,,</p>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
