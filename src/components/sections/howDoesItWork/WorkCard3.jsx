const WorkCard = () => {
  return (
    // BACKGROUND SHADWO
    <div
      className={`relative -ml-60 h-[702px] w-[590px] md:-ml-72`}
      style={{
        backgroundImage: `url(/howDoesItWorksImages/workcard-shadow.svg)`,
        zIndex: 10,
      }}
    >
      <div className="group relative cursor-pointer">
        <div
          className={`group-hover:border-secondary-400 absolute left-[250px] h-[520px] w-full max-w-[340px] rounded-[30px] border border-transparent bg-white transition-all duration-500`}
        ></div>
        <div className="absolute left-[250px] inline-flex h-[520px] flex-col items-center justify-center px-10">
          <div>
            <div className="pt-24 pb-5 text-center text-[24px] font-medium">
              Training
            </div>
            <div className="text-neutral-650 text-center text-base leading-7">
              Our training programs, tailored to each subject matter and
              specialized courses, last at least 3 months and take place in our
              physical venues. Access to all course materials will be provided
              through the Bulipe App/repository, ensuring a comprehensive
              learning experience for all participants.
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
         src="/public/howDoesItWorksImages/number3.png"
        />
      </div>
      <div
        className={`bg-secondary-400 absolute top-[73.5%] left-[384px] h-[11px] w-[81px] rounded-[30px]`}
      ></div>
    </div>
  );
};

export default WorkCard;
