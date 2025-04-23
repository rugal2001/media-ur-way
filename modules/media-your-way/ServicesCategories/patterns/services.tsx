import ServicesCard from "../components/services-card";
import API from "@/router/index";
import { Loader } from "@mantine/core";
const Services = ({ phoneNumber }: { phoneNumber: string }) => {
  const {
    data: Servicess,
    isLoading,
    error,
  } = API.public.useFirstCommunityProject(
    "https://script.google.com/macros/s/AKfycbw0DquF_nmoGz31uuO8fXGzRW1os7IkO7Q3o81NgNGaz5F-vm1TOrRa3TACvPZI-rUx-g/exec"
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <Loader color="gray" size="sm" />
      </div>
    );
  }
  return (
    <div className="">
      {Servicess.length > 0 ? (
        <div className="px-4 md:container md:mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#568ed9] bg-[#edf4fc] rounded-full shadow-sm">
              Nos Services
            </span>
            <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
              Solutions Digitales Adaptées à Vos Besoins
            </h2>
            <div className="w-20 h-1.5 mx-auto mb-8 bg-gradient-to-r from-[#7daae6] to-[#568ed9] rounded-full"></div>
            <p className="text-lg text-gray-600">
              Découvrez notre gamme complète de services digitaux conçus pour
              propulser votre entreprise vers de nouveaux sommets.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Servicess?.map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                description={service.description}
                imageSrc={service.image}
                phoneNumber={phoneNumber}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Services;
