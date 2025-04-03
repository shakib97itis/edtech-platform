const TestimonialCard = () => {
  return (
    <div className="flex flex-col items-center p-6">
      {/* Background Layers */}
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 left-0 h-full w-full rounded-2xl bg-gray-400 opacity-30"></div>
        <div className="absolute top-2 left-2 h-full w-full rounded-2xl bg-gray-500 opacity-40"></div>
        <div className="relative rounded-2xl bg-blue-900 p-6 text-white shadow-lg">
          <p className="text-lg italic">
            "I was skeptical about learning Website Development and SEO as a
            beginner, but Bulipe Tech made it so easy. The trainers are
            knowledgeable, and the materials are straightforward."
          </p>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/Home/imagetwo.jpg"
                alt="Daniel T Rogers"
                className="h-14 w-14 rounded-full border-2 border-white"
              />
              <div>
                <h3 className="text-lg font-semibold">Daniel T Rogers</h3>
                <p className="text-sm">SEO Specialist</p>
              </div>
            </div>

            {/* Quote Icon */}
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-50"
            >
              <path
                d="M3 3h5a3 3 0 013 3v2c0 6-2 10-7 10 4-4 3-6 3-6H3a3 3 0 01-3-3V3zm14 0h5a3 3 0 013 3v2c0 6-2 10-7 10 4-4 3-6 3-6h-4a3 3 0 01-3-3V3z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
