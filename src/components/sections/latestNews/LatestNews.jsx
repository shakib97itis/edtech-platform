import React from "react";
import lnewsImg from "../../../assets/lnews.cbfeea1c.png";

const LatestNews = () => {
  return (
    <section className="py-[60px] md:py-[130px]">
      <div className="container mx-auto px-[16px] md:px-[40px]">
        <div className="mb-[50px]">
          <div className="mb-[50px]">
            <h3 className="mb-4 text-3xl font-bold">Latest News </h3>
            <div className="bg-accent-500 h-1 w-[100px]"></div>
          </div>
        </div>

        <div className="mb-6 flex flex-col md:mb-8 md:flex-row">
          <div className="w-full md:w-[45%]">
            <img
              alt="Latest News"
              loading="lazy"
              width="739"
              height="600"
              decoding="async"
              className="h-[400px] w-full rounded-t-3xl object-cover md:rounded-tr-none md:rounded-bl-3xl"
              style={{ color: "transparent" }}
              src={lnewsImg}
            />
          </div>
          <div className="flex h-[400px] w-full flex-col bg-slate-100 p-8 md:w-[55%]">
            <span className="mb-[20px] w-[150px] rounded-full border bg-slate-200 px-3 py-1 text-center text-sm font-semibold text-[#014365]">
              Current Events
            </span>

            <h3 className="font-ubuntu mb-[20px] text-xl font-medium">
              Judge upholds Donald Trump's conviction, sets sentencing for Jan.
              10 with no penalty Judge upholds Donald Trump's conviction, sets
              sentencing for Jan. 10 with no penalty Judge upholds Donald
            </h3>
            <p className="mb-[30px] text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>

            <a href="/news/" className="ms-auto">
              <button className="flex items-center justify-center gap-2 rounded-full border border-[#F15B2D] px-4 py-2 text-[#F15B2D] transition-all duration-300 hover:border-[#FFCCBC] hover:bg-[#FFCCBC]">
                Read More
                <span className="rounded-full bg-[#F15B2D] p-1 text-[13px] text-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                  </svg>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
