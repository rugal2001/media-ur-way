import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

interface ServicesCardProps {
  title: string;
  description: string;
  imageSrc: string;
  phoneNumber: string;
}

const ServicesCard = ({
  title,
  description,
  imageSrc,
  phoneNumber,
}: ServicesCardProps) => {
  const sendMessageWa = () => {
    const encodedMessage = encodeURIComponent(
      `Je suis intéressé par le service ${title}`
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
    <div className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:transform hover:-translate-y-1 ">
      <div className="relative w-full h-48">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
        <div className="w-12 h-1 mb-4 bg-gradient-to-r from-[#7daae6] to-[#568ed9] rounded-full"></div>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-end gap-2 mt-4">
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

export default ServicesCard;
