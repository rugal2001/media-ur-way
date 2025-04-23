import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const FormationCard = ({
  title,
  description,
  imageSrc,
  phoneNumber,
}: {
  title: string;
  description: string;
  imageSrc: string;
  phoneNumber: string;
}) => {
  const sendMessageWa = () => {
    const encodedMessage = encodeURIComponent(
      `Je veux m'inscrire à la formation ${title}`
    );

    const phoneFormat = String(phoneNumber).slice(1);

    const whatsappLink = `https://wa.me/${phoneFormat}?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");
  };

  const callPhoneNumber = () => {
    const telLink = `tel:${phoneNumber}`;
    window.open(telLink, "_blank");
  };
  return (
    <div
      className="relative group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#568ed9] cursor-pointer"
      onClick={sendMessageWa}
    >
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
        <div className="flex items-center justify-end gap-2 pt-3 mt-4 border-t border-gray-100">
          <a
            onClick={callPhoneNumber}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#568ed9] transition-colors duration-300 border border-[#568ed9] rounded-full cursor-pointer hover:bg-[#568ed9] hover:text-white"
          >
            <FiPhone className="w-5 h-5 " />
          </a>
          <a
            onClick={sendMessageWa}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-400 transition-colors duration-300 border border-green-300 rounded-full cursor-pointer hover:bg-green-400 hover:text-white"
          >
            <FaWhatsapp className="w-5 h-5 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormationCard;
