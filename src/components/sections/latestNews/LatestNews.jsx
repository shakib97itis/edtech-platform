import React from "react";
import lnewsImg from "../../../assets/lnews.cbfeea1c.png";
import HeadingSecondaryLeft from "../../common/headings/HeadingSecondaryLeft";
import Button from "../../common/button/Button";
import { FaArrowCircleRight } from "react-icons/fa";

const LatestNews = () => {
  return (
    <section className="pt-[60px] md:pt-[130px]">
      <div className="container mx-auto px-[16px] md:px-[40px]">
        <div className="mb-[50px]">
          <HeadingSecondaryLeft>Latest News</HeadingSecondaryLeft>
        </div>

        <div className="mb-6 flex flex-col lg:flex-row">
          <div className="h-[400px] w-full overflow-hidden rounded-t-3xl lg:h-auto lg:w-[45%] lg:rounded-tr-none lg:rounded-bl-3xl">
            <img
              alt="Latest News"
              loading="lazy"
              width="739"
              height="600"
              decoding="async"
              className="h-full w-full object-cover"
              style={{ color: "transparent" }}
              src={lnewsImg}
            />
          </div>

          <div className="flex w-full flex-col bg-slate-100 p-8 lg:w-[55%]">
            <span className="text-primary-700 mb-[20px] w-[150px] rounded-full border bg-slate-200 px-3 py-1 text-center text-sm font-semibold">
              Current Events
            </span>

            <h3 className="font-ubuntu mb-[20px] text-[24px] font-medium">
              Judge upholds Donald Trump's conviction, sets sentencing for Jan.
              10 with no penalty Judge upholds Donald Trump's conviction, sets
              sentencing for Jan. 10 with no penalty Judge upholds Donald
            </h3>
            <p className="mb-[30px] text-[20px] leading-[1.5] text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>

            <a href="/news/" className="ms-auto">
              <Button
                text={"Read More"}
                variant={"btnTwo"}
                className="mb-1 px-[20px] py-[10px]"
              >
                <FaArrowCircleRight className="text-[22px]" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
