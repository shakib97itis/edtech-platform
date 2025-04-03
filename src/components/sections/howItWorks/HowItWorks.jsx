import React from "react";
import TrainingCard from "./TrainingCard";

const steps = [
  {
    id: "01",
    title: "Training",
    description:
      "Our training programs, tailored to each subject matter and specialized courses, last at least 3 months and take place in our physical venues. Access to all course materials will be provided through the Bulipe App/repository, ensuring a comprehensive learning experience for all participants.",
    color: "bg-blue-600",
    border: "border-blue-600",
  },
  {
    id: "02",
    title: "Certification",
    description:
      "Our training programs, tailored to each subject matter and specialized courses, last at least 3 months and take place in our physical venues. Access to all course materials will be provided through the Bulipe App/repository, ensuring a comprehensive learning experience for all participants.",
    color: "bg-orange-500",
    border: "border-orange-500",
  },
  {
    id: "03",
    title: "Training",
    description:
      "Our training programs, tailored to each subject matter and specialized courses, last at least 3 months and take place in our physical venues. Access to all course materials will be provided through the Bulipe App/repository, ensuring a comprehensive learning experience for all participants.",
    color: "bg-teal-500",
    border: "border-teal-500",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-neutral-50 pt-[130px] pb-[200px]">
      <div className="container mx-auto px-[40px] text-center">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
          How does it Work?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
