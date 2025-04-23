import Image from "next/image";

interface ServicesCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ServicesCard = ({ title, description, imageSrc }: ServicesCardProps) => {
  return (
    <div className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:transform hover:-translate-y-1">
      <div className="relative w-full h-48">
        <img src={imageSrc} alt={title} className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
        <div className="w-12 h-1 mb-4 bg-gradient-to-r from-[#7daae6] to-[#568ed9] rounded-full"></div>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 text-sm font-medium text-[#568ed9] transition-colors duration-300 border border-[#568ed9] rounded-md hover:bg-[#568ed9] hover:text-white">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
