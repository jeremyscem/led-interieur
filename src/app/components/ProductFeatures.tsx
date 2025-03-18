import { Bike, Building, Check, Leaf, Wallet } from "lucide-react";

export default function ProductFeatures() {
  const features = [
    {
      icon: Bike,
      title: "Vélos cargo de qualité",
      description:
        "Des vélos cargo robustes et confortables, adaptés à tous types de trajets et de chargements.",
    },
    {
      icon: Wallet,
      title: "100% financés",
      description:
        "Aucun coût pour votre entreprise grâce à notre programme de financement spécial.",
    },
    {
      icon: Leaf,
      title: "Écologique",
      description:
        "Réduisez l'empreinte carbone de votre entreprise tout en améliorant la mobilité de vos collaborateurs.",
    },
    {
      icon: Building,
      title: "Pour toutes les entreprises",
      description:
        "Que vous soyez une TPE, PME ou grande entreprise, notre solution s'adapte à vos besoins.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24  bg-gray-50">
      <div className="px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-4 md:text-4xl">
              La solution de mobilité idéale pour votre entreprise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos vélos cargo offrent une alternative écologique et économique
              pour les déplacements professionnels et personnels de vos
              collaborateurs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Pourquoi choisir nos vélos cargo ?
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Autonomie jusqu&apos;à 80km avec assistance électrique
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Capacité de charge jusqu&apos;à 100kg</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Entretien et réparations inclus</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Assurance vol et dommages comprise</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Formation à la prise en main offerte</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Personnalisation aux couleurs de votre entreprise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
