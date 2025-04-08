import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

function NavButton({ direction = "left" }) {
  return (
    <button className="text-primary-700 border-primary-700 hover:bg-secondary-300 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 transition-colors">
      {direction === "left" ? (
        <LuChevronLeft className="text-inherit" />
      ) : (
        <LuChevronRight className="text-inherit" />
      )}
    </button>
  );
}

export default NavButton;
