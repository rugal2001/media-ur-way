const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-12 overflow-hidden sm:px-8 md:px-12 md:py-24">
      <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 -mt-10 -mr-10 md:-mt-20 md:-mr-20 bg-[#7daae6] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 -mb-10 -ml-10 md:-mb-20 md:-ml-20 bg-[#7daae6] rounded-full opacity-20 blur-3xl"></div>

      <div className="absolute w-full h-full max-w-5xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div
          className="absolute top-1/4 right-1/4 w-24 h-24 md:w-32 md:h-32 bg-[#568ed9] rounded-full opacity-10 blur-2xl animate-pulse"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-28 h-28 md:w-40 md:h-40 bg-[#3a7bce] rounded-full opacity-10 blur-2xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#568ed9] bg-[#edf4fc] rounded-full shadow-sm">
          Agence Marketing Digital
        </span>

        <h1 className="px-2 mb-5 text-3xl font-extrabold leading-tight text-gray-800 sm:mb-6 md:text-5xl lg:text-6xl">
          Media Ur Way{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#568ed9] to-[#3a7bce]">
            Votre Partenaire Stratégique
          </span>{" "}
          <span className="inline">
            pour des Solutions Digitales Sur Mesure
          </span>
        </h1>

        <div className="w-20 sm:w-24 h-1.5 mx-auto mb-6 sm:mb-8 bg-gradient-to-r from-[#7daae6] to-[#568ed9] rounded-full"></div>

        <p className="max-w-3xl px-2 mx-auto mb-8 text-base leading-relaxed text-gray-600 sm:mb-10 sm:text-lg md:text-xl">
          Media Ur Way est une agence de marketing digital spécialisée dans la
          création de solutions sur mesure pour les entreprises et
          entrepreneurs. Nous nous distinguons par notre approche axée sur les
          résultats concrets et notre expertise dans l'acquisition de clients,
          la création de contenu impactant, et le développement digital.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-[#568ed9] to-[#3a7bce] rounded-lg shadow-lg hover:shadow-[#a7c5ed]/50 hover:translate-y-[-2px] transform active:translate-y-[1px]">
            Nos Services
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 font-semibold text-[#568ed9] transition-all duration-300 bg-white border-2 border-[#568ed9] rounded-lg shadow-md hover:shadow-[#edf4fc]/50 hover:bg-[#f5f9fe] hover:translate-y-[-2px] transform active:translate-y-[1px]">
            En Savoir Plus
          </button>
        </div>

        {/* <div className="flex justify-center gap-5 mt-10 sm:gap-8 sm:mt-12">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-[#568ed9]">
              100+
            </span>
            <span className="text-xs text-gray-500 sm:text-sm">
              Clients Satisfaits
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-[#568ed9]">
              95%
            </span>
            <span className="text-xs text-gray-500 sm:text-sm">
              Taux de Satisfaction
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-[#568ed9]">
              5+
            </span>
            <span className="text-xs text-gray-500 sm:text-sm">
              Années d'Expérience
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
