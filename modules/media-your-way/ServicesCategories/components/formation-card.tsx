const FormationCard = ({ title, description, imageSrc }) => {
  return (
    <div className="relative group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#568ed9]">
      <div className="absolute top-0 right-0 z-10 p-2">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-[#568ed9] rounded-full">
          Formation
        </span>
      </div>
      <div className="relative h-52">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent"></div>
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-5">
        <div className="w-12 h-1 mb-4 bg-gradient-to-r from-[#7daae6] to-[#568ed9] rounded-full"></div>
        <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-[#568ed9] transition-colors">
          {title}
        </h3>
        <p className="mb-5 text-sm text-gray-600">{description}</p>
        <div className="flex items-center justify-between pt-3 mt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500">6 modules • 24h</span>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#568ed9] transition-colors duration-300 border border-[#568ed9] rounded-full hover:bg-[#568ed9] hover:text-white">
            <span>Découvrir</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormationCard;
