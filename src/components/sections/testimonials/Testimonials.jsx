import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const testimonials = [
  {
    text: "I was skeptical about learning Website Development and SEO as a beginner, but Bulipe Tech made it so easy. The trainers are knowledgeable, and the materials are straightforward.",
    image: "/Home/imagetwo.jpg",
    name: "Daniel T Rogers",
    role: "SEO Specialist",
  },
  {
    text: "The training was exceptional! The support and guidance from Bulipe Tech made it possible for me to start a new career in digital marketing.",
    image: "/Home/imageOne.jpg",
    name: "Emma K Lee",
    role: "SEO Specialist",
  },
  {
    text: "I never thought I could master website development, but thanks to Bulipe Tech, I now work as a full-time developer.",
    image: "/Home/imagefour.jpg",
    name: "Richard I Jones",
    role: "Web Developer",
  },
  {
    text: "Bulipe Tech's training transformed my career. The courses are well-structured and easy to follow.",
    image: "/Home/imagethree.jpg",
    name: "Cecilia H King",
    role: "SEO Specialist",
  },
];

function Testimonials() {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold">Testimonials</h3>
        <div className="mx-auto my-4 w-16 border-b-4 border-blue-700"></div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper mt-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="mx-auto max-w-lg rounded-xl bg-blue-900 p-6 text-white"
            >
              <p className="italic">"{testimonial.text}"</p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full border-2 border-white"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-50"
                >
                  <path d="M3 3h5a3 3 0 013 3v2c0 6-2 10-7 10 4-4 3-6 3-6H3a3 3 0 01-3-3V3zm14 0h5a3 3 0 013 3v2c0 6-2 10-7 10 4-4 3-6 3-6h-4a3 3 0 01-3-3V3z" />
                </svg>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
