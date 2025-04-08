import React from "react";
import ProgramCard from "./ProgramCard";
import HeadingSecondary from "../../common/headings/HeadingSecondaryCenter";

function OurPrograms() {
  // Dummy data for the program cards
  const programs = [
    {
      img: "/course1.png",
      title: "IT Support Specialist",
      price: 100,
      rating: 4,
      ratingCount: 50,
    },
    {
      img: "/course1.png",
      title: "Web Development",
      price: 200,
      rating: 5,
      ratingCount: 100,
    },
    {
      img: "/course1.png",
      title: "Data Science",
      price: 300,
      rating: 3,
      ratingCount: 30,
    },
    {
      img: "/course1.png",
      title: "Cyber Security",
      price: 400,
      rating: 4,
      ratingCount: 80,
    },
    {
      img: "/course1.png",
      title: "Digital Marketing",
      price: 500,
      rating: 5,
      ratingCount: 120,
    },
    {
      img: "/course1.png",
      title: "Graphic Design",
      price: 600,
      rating: 2,
      ratingCount: 20,
    },
  ];
  return (
    <section className="py-[130px]">
      <div className="container mx-auto px-[16px] md:px-[40px]">
        {/* SECTION TITLE */}
        <div className={`mb-[55px] text-center`}>
          <HeadingSecondary>Our Programs</HeadingSecondary>
        </div>
        <div className="grid gap-[10px] md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <div key={index} className="mb-[20px]">
              <ProgramCard
                img={program.img}
                title={program.title}
                price={program.price}
                rating={program.rating}
                ratingCount={program.ratingCount}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurPrograms;
