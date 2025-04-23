const TemoignageCard = ({ name, content }) => {
  return (
    <div className="border-[1px] border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col p-6 bg-white">
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center w-10 h-10 mr-3 font-bold text-blue-600 bg-blue-100 rounded-full">
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        </div>
      </div>
      <div className="mb-4">
        <p className="italic text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default TemoignageCard;
