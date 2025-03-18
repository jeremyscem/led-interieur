export default function StepsSection() {
  const steps = [
    {
      number: "01",
      title: "Informations",
      description: "Complétez votre formulaire simplifié (moins d'une minute).",
    },
    {
      number: "02",
      title: "Contrôle",
      description:
        "Un conseiller vous contactera pour controler votre éligibilité et remplir votre dossier.",
    },
    {
      number: "03",
      title: "Validation",
      description: "Nous validons votre dossier et préparons votre commande.",
    },
    {
      number: "04",
      title: "Livraison",
      description:
        "Recevez votre vélo cargo directement à l'adresse souhaitée.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center text-gray-700 mb-16 md:text-5xl">
          Qui sommes nous
        </h2>

        {/* Desktop timeline (hidden on mobile) */}
        <div className="hidden md:block max-w-6xl mx-auto relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-px border-l-2 border-dashed border-green-500 -translate-x-1/2"></div>

          {/* Steps container with increased spacing */}
          <div>
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex relative ${
                  index % 2 === 0 ? "" : "flex-row-reverse"
                }`}
                style={{
                  marginBottom: index < steps.length - 1 ? "160px" : "0",
                }}
              >
                {/* Content side */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0
                      ? "pr-16 text-right ms-8 me-16"
                      : "pl-16 text-left ms-16 me-8"
                  }`}
                >
                  <h3 className="text-3xl font-bold text-gray-700 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Number in center */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-green-500 rounded-full w-16 h-16 flex items-center justify-center z-10">
                  <span className="text-white text-xl font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Empty side */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile timeline (shown only on mobile) */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <div className="absolute left-6 top-0 h-full w-px border-l-2 border-dashed border-green-500"></div>

          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-8">
                <div className="relative">
                  <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center z-10 relative">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
