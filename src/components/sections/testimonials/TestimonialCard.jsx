import { FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ text, image, name, role }) => {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="relative">
        {/* Background Layers */}
        <div className="bg-primary-500 absolute -top-[30px] left-[50%] h-full w-[80%] -translate-x-1/2 rounded-2xl opacity-20"></div>
        <div className="bg-primary-500 absolute -top-[15px] left-[50%] h-full w-[90%] -translate-x-1/2 rounded-2xl opacity-50"></div>

        {/* Main Content */}
        <div className="bg-primary-500 relative rounded-2xl p-6 text-white shadow-lg min-h-[250px] flex flex-col justify-between">
          <p className="text-lg italic">{text}</p>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Person Image */}
              <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-white">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Person Name and Role */}
              <div>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm">{role}</p>
              </div>
            </div>

            {/* Quote Icon */}
            <svg
              width="60"
              height="60"
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
