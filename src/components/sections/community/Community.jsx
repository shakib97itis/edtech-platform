import HeadingSecondaryLeft from "../../common/headings/HeadingSecondaryLeft";
import CommunityCard from "./CommunityCard";

const CommunitySection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-[130px] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/communityImages/office-photo.jpg')",
          opacity: 0.2,
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-[24px] md:px-[40px]">
        <div className="mb-[50px]">
          <HeadingSecondaryLeft className="mb-[50px]">
            Our Community
          </HeadingSecondaryLeft>

          <p className="text-neutral-350 max-w-2xl">
            Bulipe Tech aims to train unemployed individuals in Bangladesh,
            equipping them with essential digital skills and linking them to job
            opportunities across 23 countries worldwide.
          </p>
        </div>

        <div className="grid gap-3 shadow md:grid-cols-3 md:gap-0">
          <CommunityCard number="23+" text="Countries and adding" />
          <CommunityCard number="300+" text="Local training partners" />
          <CommunityCard number="200+" text="Job opportunities" />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
