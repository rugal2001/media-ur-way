import FormationCard from "../components/formation-card";
import API from "@/router/index";
import { Loader } from "@mantine/core";
const Formations = ({ phoneNumber }: { phoneNumber: string }) => {
  const {
    data: Formations,
    isLoading,
    error,
  } = API.public.useFirstCommunityProject(
    "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjeYI2VcmNruL1EALkZURw5V1K6_IiwO6wz2GXihS66Z-X3ruyjHefm2Vs1S4kPfeAnJ2e_ya6gi7X0sjMENYMRijOeM7xE7UkWBkEAhGBOJVFphbkDXqQPJwroI7nsicZSSbhZzF_FM0LNDaEReR2tQr-1jyWyJuTG5pLtkQdqJsbzdR2WOTLr_i13Y7UeP69ZTDxInMRur5dZ8UFJZRtuV8tfBZqlhOHbNGCwpV32dsx0AUQ22azNZI5XubtzQT_O0699uVYQCJaIPONwrN59EPIPiBU99reVGeiC&lib=MMKeHRsldL1-NKjS2AjCtTk09UGRFoPmt"
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
    <>
      {Formations.length > 0 ? (
        <div className="relative py-16" id="formations">
          <div className="absolute top-0 right-0 w-64 h-64 -mt-20  bg-[#7daae6] rounded-full opacity-20 blur-3xl"></div>

          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#568ed9] bg-[#edf4fc] rounded-full shadow-sm">
                Nos Formations
              </span>
              <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
                Développez Vos Compétences Digitales
              </h2>
              <div className="w-20 h-1.5 mx-auto mb-8 bg-gradient-to-r from-[#7daae6] to-[#568ed9] rounded-full"></div>
              <p className="text-lg text-gray-600">
                Des formations professionnelles pour vous aider à maîtriser les
                outils et stratégies du marketing digital.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Formations?.map((formation, index) => (
                <FormationCard
                  key={index}
                  title={formation.title}
                  description={formation.description}
                  imageSrc={formation.image}
                  phoneNumber={phoneNumber}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Formations;
