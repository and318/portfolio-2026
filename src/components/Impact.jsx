import React from 'react';

const Impact = () => {
  return (
    <section className="py-32 bg-brand-dark text-brand-light" data-purpose="profile-section" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2 aspect-[4/5] bg-brand-gray/20 overflow-hidden" data-purpose="profile-image-container">
            <img
              alt="Senior UX/UI Engineer Portrait"
              className="w-full h-full object-cover grayscale opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5pZaiurDr4LtJK4B1CSdClsLjDrQSODw-jATqkBhF4CCsxnMBRpSdmvQ_VEjBeAOoQOdW46iPNf-dz7DB5GIs9ZTvpMmtB-Opv_S_6apMvxqxTGPkc5dipuzF-rX5YPp61o_PVvf9l_eRxcMuyQ6bPdxAkaTpo5TvLQcl-j3Xgr0YGSK3QRUZGwACz_6G2l-fE4xtt6WdHpKOKFwuYxZUFmFk3xRaiCdCToNuUyVCviNDkB6c7HVpkTmKtB89d3LPZ-w2kHEwQ-Ah"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gray mb-4 block">About the professional</span>
            <h2 className="text-4xl md:text-6xl font-display italic mb-8">Estrategia, Diseño y Código en un solo lugar.</h2>
            <p className="text-lg text-brand-gray leading-relaxed mb-6 font-light">
              A lo largo de una década, he colaborado con corporaciones líderes y startups dinámicas en Chile y el extranjero. Mi misión es cerrar la brecha entre la intención del diseño y la viabilidad técnica.
            </p>
            <p className="text-lg text-brand-gray leading-relaxed mb-12 font-light">
              Me especializo en liderar equipos técnicos y creativos hacia la entrega de productos que no solo se ven excepcionales, sino que funcionan perfectamente bajo carga y escala.
            </p>

            <div className="border-t border-brand-light/10 pt-8 flex gap-8">
              <div>
                <span className="block text-2xl font-bold italic">10+</span>
                <span className="text-xs uppercase tracking-widest text-brand-gray">Years exp.</span>
              </div>
              <div>
                <span className="block text-2xl font-bold italic">50+</span>
                <span className="text-xs uppercase tracking-widest text-brand-gray">Projects delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
