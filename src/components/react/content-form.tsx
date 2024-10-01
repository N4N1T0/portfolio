// Form Imports
import { content } from "@/constants/form";

// Assets Imports
import { FormImage } from "@/assets";

/**
+ * Renders a form for content input.
+ *
+ * @param {Object} props - The properties for the component.
+ * @param {boolean} props.sending - Indicates if the form is being sent.
+ * @return {JSX.Element} The rendered form.
+ */
const ContentForm = ({ sending }: { sending: boolean }): JSX.Element => {
  return (
    <fieldset
      disabled={sending}
      className="space-y-7"
      id="fieldsetForm"
      data-image={FormImage.src}
    >
      <legend className="text-3xl">4. Contenidos</legend>
      {/* Section 4.1: ¿Quién los proporciona? */}
      <fieldset className="space-y-3">
        <legend className="text-lg">4.1 ¿Quién los proporciona?</legend>
        {content.quien.map((item) => (
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
      {/* Section 4.3: Productos y/o servicios */}
      <fieldset className="space-y-3">
        <legend className="text-lg">4.3 Productos y/o servicios</legend>
        <label className="block">
          <span className="text-sm">
            Escribe una pequeña descripción de los productos y/o servicios que
            quiere ofrecer el cliente en su sitio web.
          </span>
          <input
            type="text"
            name="productos-servicios"
            className="block bg-transparent border-b border-gray-800 outline-none w-full"
          />
        </label>
      </fieldset>
    </fieldset>
  );
};

export default ContentForm;
