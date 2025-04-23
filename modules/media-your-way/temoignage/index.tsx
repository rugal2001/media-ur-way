import TemoignageCard from "./components/temoignageCard";
import { Loader } from "@mantine/core";
import API from "@/router/index";

const Temoignages = () => {
  const testimonials = [
    {
      name: "Sophie Martin",
      content:
        "Media Ur Way a transformé notre présence en ligne. Leur équipe a su comprendre nos besoins et proposer des solutions adaptées.",
      company: "Entreprise ABC",
      position: "Directrice Marketing",
    },
    {
      name: "Thomas Dubois",
      content:
        "Grâce à leur expertise en marketing digital, nous avons vu notre trafic web augmenter de 150% en seulement 3 mois.",
      company: "Start-up XYZ",
      position: "CEO",
    },
    {
      name: "Marie Leroy",
      content:
        "Une équipe professionnelle et réactive. Je recommande vivement leurs services de formation en réseaux sociaux.",
      company: "Boutique en ligne",
      position: "Responsable Communication",
    },
  ];

  const {
    data: apiTestimonials,
    isLoading,
    error,
  } = API.public.useFirstCommunityProject(
    "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLiiYs9wgcEJ4mhB3b-y9n_iBjhutC24PTpqh4sO5Qj0LLACUakwr5nFHX16ZKODqZ2gvaqobNADO2kzhtYwUFRNrDyd5dCen5m6Jle9SmsO6SI5KY587YVcu-QFBiCP2QBiE2UCGus8XcF1UavzUg6_cMKYWyLOhcvCcwgJ749BITH22E12io4kgRfUPt81IuoyFlm_iLeSiSk4t-CZLuW9dvo1M2ISEUEMZ7wGcLCxLOMlnD_KVffIiBiKiJfwqBp222J3z9hmwhxjiJp2XVut-EpfKA&lib=MSvH1IzIgONQUtth0LXLJ1k09UGRFoPmt"
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full min-h-[200px]">
        <Loader color="gray" size="sm" />
      </div>
    );
  }

  console.log({ apiTestimonials });
  return (
    <>
      {apiTestimonials.length > 0 ? (
        <>
          <div className="relative py-16">
            <div className="absolute top-0 right-0 w-64 h-64 -mt-20 -mr-20 bg-[#7daae6] rounded-full opacity-20 blur-3xl"></div>

            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto mb-16 text-center">
                <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#568ed9] bg-[#edf4fc] rounded-full shadow-sm">
                  Témoignages
                </span>
                <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
                  Ce que nos clients disent de nous
                </h2>
                <div className="w-20 h-1.5 mx-auto mb-8 bg-gradient-to-r from-[#7daae6] to-[#568ed9] rounded-full"></div>
                <p className="text-lg text-gray-600">
                  Découvrez les expériences de nos clients qui ont fait
                  confiance à Media Ur Way
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {apiTestimonials.map((testimonial, index) => (
                  <TemoignageCard
                    key={index}
                    name={testimonial.name}
                    content={testimonial.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Temoignages;
