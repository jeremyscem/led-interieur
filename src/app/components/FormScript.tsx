import TypeformEmbed from "./TypeformEmbed";

const FormScript = () => {
  return (
    <div id="form" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-10">
          Testez votre éligibilité
        </h2>
        <TypeformEmbed />
      </div>
    </div>
  );
};

export default FormScript;
