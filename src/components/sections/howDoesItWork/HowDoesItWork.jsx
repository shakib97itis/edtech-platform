import React from "react";
import HeadingSecondary from "../../common/headings/HeadingSecondary";
import img1 from "../../../assets/number1.png"
function HowDoesItWork() {
  const cardData = [
    {
      title: "Training",
      description:
        "Our training programs, tailored to each subject matter and specialized courses, last at least 3 months and take place in our physical venues. Access to all course materials will be provided through the Bulipe App/repository, ensuring a comprehensive learning experience for all participants.",
      image: img1,
      hoverColor: "[#014463]",
    },
    {
      title: "Certification",
      description:
        "Our training programs, tailored to each subject matter and specialized courses, last at least 3 months and take place in our physical venues. Access to all course materials will be provided through the Bulipe App/repository, ensuring a comprehensive learning experience for all participants.",
      image: img1,
      hoverColor: "[#F15B2D]",
    },
    {
      title: "Training",
      description:
        "Our training programs, tailored to each subject matter and specialized courses, last at least 3 months and take place in our physical venues. Access to all course materials will be provided through the Bulipe App/repository, ensuring a comprehensive learning experience for all participants.",
      image: img1,
      hoverColor: "[#29BDBF]",
    },
  ];

  return (
    <section className="bg-gray-100 pt-[130px]">
      <div className="container pb-0">
        <HeadingSecondary className="mb-[55px]">How Does It Works</HeadingSecondary>
        <div>
          <div className="mx-auto px-6 sm:px-4 md:px-6 lg:px-8">
            <div className="items-center justify-center gap-5 md:gap-20 lg:flex lg:gap-36">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className={`relative -ml-60 h-[702px] w-[594px] md:-ml-72`}
                  style={{
                    backgroundImage: `url(/workcardhadow.svg)`,
                    zIndex: cardData.length - index,
                  }}
                >
                  <div className="group cursor-pointer">
                    <div
                      className={`absolute left-[254px] h-[520px] w-full max-w-[340px] rounded-[30px] border-transparent bg-white transition-all duration-500 group-hover:border-${card.hoverColor}`}
                    ></div>
                    <div className="absolute left-[250px] inline-flex h-[520px] flex-col items-center justify-center px-10">
                      <div>
                        <div className="pt-24 pb-5 text-center text-[24px] font-medium">
                          {card.title}
                        </div>
                        <div className="text-center text-[18px] leading-7 text-[#848484]">
                          {card.description}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-[346px] h-[163.71px] w-[158.23px]">
                    <img
                      alt="Icon"
                      loading="lazy"
                      width="158"
                      height="165"
                      decoding="async"
                      className="mx-auto -mt-8 object-center"
                      src={card.image}
                    />
                  </div>
                  <div
                    className={`absolute top-[73.5%] left-[384px] h-[11px] w-[81px] bg-${card.hoverColor} rounded-[30px]`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowDoesItWork;
