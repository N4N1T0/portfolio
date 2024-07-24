// Form Imports
import { keyFunctionality } from "@/constants/form";

// Assets Imports
import { FormImage2 } from "@/assets";

/**
+ * Renders a form for key functionalities.
+ *
+ * @param {Object} props - The component props.
+ * @param {boolean} props.sending - Indicates if the form is in the process of being sent.
+ * @return {JSX.Element} The rendered form.
+ */
const KeyFuntionalityForm = ({
	sending,
}: { sending: boolean }): JSX.Element => {
	return (
		// Main fieldset for the key functionalities form
		<fieldset
			disabled={sending} // Disable the form if it's being sent
			className="space-y-7"
			id="fieldsetForm"
			data-image={FormImage2.src}
		>
			<legend className="text-3xl">2. Funcionalidades Clave</legend>{" "}
			{/* Title */}
			{/* Section for basic functions */}
			<fieldset className="space-y-3">
				<legend className="text-lg">2.1 Funciones básicas</legend>
				{keyFunctionality.basicas.map((item) => (
					<label className="flex items-center gap-1" key={item.name}>
						<input // Checkbox for each basic function
							type="checkbox"
							id={item.name}
							name={item.name}
							value={item.name}
						/>
						{item.info} {/* Information about the function */}
					</label>
				))}
			</fieldset>
			{/* Section for advanced functions */}
			<fieldset className="space-y-3">
				<legend className="text-lg">2.2 Funciones avanzadas</legend>
				<label className="block">
					<span className="text-sm">
						Escribe a continuación si se requieren funciones personalizadas.
					</span>
					<input // Text input for custom advanced functions
						type="text"
						name="funciones avanzadas"
						className="block bg-transparent border-b border-gray-800 outline-none w-full"
					/>
				</label>
			</fieldset>
			{/* Section for pages */}
			<fieldset className="space-y-3">
				<legend className="text-lg">2.3 Paginas</legend>
				{keyFunctionality.paginas.map((item) => (
					<label className="flex items-center gap-1" key={item.name}>
						<input // Checkbox for each page
							type="checkbox"
							id={item.name}
							name={item.name}
							value={item.name}
						/>
						{item.info} {/* Information about the page */}
					</label>
				))}
			</fieldset>
		</fieldset>
	);
};

export default KeyFuntionalityForm;
