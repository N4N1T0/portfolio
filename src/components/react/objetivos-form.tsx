// Form Imports
import { objetivos } from "@/constants/form";

// Assets Imports
import { FormImage3 } from "@/assets";

/**
+ * Renders a form for setting objectives for a website.
+ *
+ * @param {Object} props - The component props.
+ * @param {boolean} props.sending - Indicates if the form is currently being sent.
+ * @return {JSX.Element} The rendered form.
+ */
const ObjetivosForm = ({ sending }: { sending: boolean }): JSX.Element => {
  return (
    // Main fieldset for the form
    <fieldset
      disabled={sending}
      className="space-y-7"
      id="fieldsetForm"
      data-image={FormImage3.src}
    >
      {/* Title for the form section */}
      <legend className="text-3xl">1. Objetivos del Sitio</legend>

      {/* Fieldset for the "Purpose" section */}
      <fieldset className="space-y-3">
        <legend className="text-lg">1.1 Proposito</legend>
        {/* Render checkboxes for "Purpose" items */}
        {objetivos.item.map((item) => (
          <label className="flex items-center gap-1" key={item.name}>
            <input
              type="checkbox"
              id={item.name}
              name={item.name}
              value={item.name}
            />
            {item.info}
          </label>
        ))}
      </fieldset>

      {/* Fieldset for the "Target Audience" section */}
      <fieldset className="space-y-3">
        <legend className="text-lg">1.2 Publico Objetivo</legend>
        {/* Render checkboxes for "Target Audience" items */}
        {objetivos.objetivo.map((item) => (
          <label className="flex items-center gap-1" key={item.name}>
            <input
              type="checkbox"
              id={item.name}
              name={item.name}
              value={item.name}
            />
            {item.info}
          </label>
        ))}
      </fieldset>

      {/* Fieldset for the "Competitors" section */}
      <fieldset className="space-y-3">
        <legend className="text-lg">1.3 Competencias</legend>
        {/* Input field for "Competitors" */}
        <label className="block">
          Competidores Principales
          <input
            type="text"
            name="competidores"
            className="block bg-transparent border-b border-gray-800 outline-none w-full"
          />
        </label>
        {/* Input field for "Strengths and Weaknesses" */}
        <label className="block">
          Fortalezas y debilidades percibidas
          <input
            type="text"
            name="Fortalezas/debilidades"
            className="block bg-transparent border-b border-gray-800 outline-none w-full"
          />
        </label>
      </fieldset>
    </fieldset>
  );
};

export default ObjetivosForm;
