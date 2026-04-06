import { useNavigate } from "react-router-dom";
import whiteArrow from "../assets/icons/white-arrow.png";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[calc(100vh-65px)] flex flex-col justify-center items-center text-2xl">
      <h3>Page Not Found!</h3>
      <button
        onClick={() => navigate("/")}
        className="bg-[#DB620A] text-white text-[16px] font-semibold px-4 py-2 rounded-[4px] flex items-center gap-2 hover:bg-[#DB620ACC] duration-200 cursor-pointer mt-3"
      >
        <span className="text-[18px]">
          <img src={whiteArrow} alt="arrow" width={13} />
        </span>
        Back to Home
      </button>
    </div>
  );
}
