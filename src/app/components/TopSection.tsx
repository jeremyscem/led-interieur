import Link from "next/link";

const TopSection = () => {
  return (
    <section className="p-12 w-full flex items-center justify-center">
      {" "}
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        {/* Previous hero content */}
        <h2 className="text-4xl font-bold tracking-tight text-gray-700 mb-6 md:text-5xl lg:text-6xl">
          GRATUIT
        </h2>
        <h1 className="text-4xl font-bold tracking-tight text-green-500 mb-12 md:text-5xl lg:text-6xl">
          Obtenez vos vélos cargo 100 % financés!
        </h1>
        <h3 className="text-3xl font-bold tracking-tight text-gray-700 mb-10 md:text-4xl">
          Pédalez sans frais, on s&apos;occupe de tout !
        </h3>
        <p className="mx-auto max-w-3xl text-gray-600 text-lg mb-12 md:text-xl">
          Profitez d&apos;une solution clé en main pour acquérir un vélo cargo
          pour chacun des collaborateurs de votre entreprise sans dépenser un
          centime.
        </p>
        <Link
          href="#"
          className="inline-flex h-14 items-center justify-center rounded-md bg-green-500 px-12 py-4 text-lg font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
        >
          Testez votre éligibilité ici
        </Link>
      </div>
    </section>
  );
};

export default TopSection;
