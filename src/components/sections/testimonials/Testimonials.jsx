import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./tStyles.css";
import HeadingSecondary from "../../common/headings/HeadingSecondaryCenter";

function Testimonials() {
  return (
    <section className="bg-gray-200 py-[130px]">
      <div className="container mx-auto px-[16px] md:px-[40px]">
        <HeadingSecondary className="mb-[50px]">Testimonial</HeadingSecondary>

        <Swiper
          grabCursor={true}
          modules={[Autoplay]}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={0}
          speed={1000}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="px-4 py-8">
              <TestimonialCard
                text={testimonial.text}
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

const testimonials = [
  {
    text: "I was skeptical about learning Website Development and SEO as a beginner, but Bulipe Tech made it so easy. The trainers are knowledgeable, and the materials are straightforward.",
    image: "/public/testimonialPerson/imageOne.jpg",
    name: "Daniel T Rogers",
    role: "SEO Specialist",
  },
  {
    text: "The training was exceptional! The support and guidance from Bulipe Tech made it possible for me to start a new career in digital marketing.",
    image: "/public/testimonialPerson/imageTwo.jpg",
    name: "Emma K Lee",
    role: "SEO Specialist",
  },
  {
    text: "I never thought I could master website development, but thanks to Bulipe Tech, I now work as a full-time developer.",
    image: "/public/testimonialPerson/imageFour.jpg",
    name: "Richard I Jones",
    role: "Web Developer",
  },
  {
    text: "Bulipe Tech's training transformed my career. The courses are well-structured and easy to follow.",
    image: "/public/testimonialPerson/imageThree.jpg",
    name: "Cecilia H King",
    role: "SEO Specialist",
  },
  {
    text: "The hands-on approach and real-world projects helped me gain confidence in my skills.",
    image: "/public/testimonialPerson/imageFour.jpg",
    name: "Michael A Smith",
    role: "Digital Marketer",
  },
];

export default Testimonials;
