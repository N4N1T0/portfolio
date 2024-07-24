// Form Imports
import { technical } from "@/constants/form";

// Assets Imports
import { FormImage6 } from "@/assets";

/**
+ * Renders a technical form with hosting and platform options.
+ *
+ * @param {Object} props - The component props.
+ * @param {boolean} props.sending - Indicates if the form is being sent.
+ * @return {JSX.Element} The technical form.
+ */
const Technical = ({ sending }: { sending: boolean }): JSX.Element => {
	// Main fieldset for the technical form
	return (
		<fieldset
			disabled={sending}
			className="space-y-7"
			id="fieldsetForm"
			data-image={FormImage6.src}
		>
			{/* Title for the technical form section */}
			<legend className="text-3xl">5. Aspectos Técnicos</legend>

			{/* Fieldset for hosting and domain options */}
			<fieldset className="space-y-3">
				{/* Legend for the hosting and domain section */}
				<legend className="text-lg">5.1 Hosting y Dominio</legend>

				{/* Render checkboxes for hosting options */}
				{technical.hosting.map((item) => (
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

				{/* Input field for preferred hosting provider */}
				<label className="block">
					<span className="text-sm">Proveedor de preferencia.</span>
					<span className="text-sm">Proveedor de preferncia.</span>
					<input
						type="text"
						name="proveedor-hosting"
						className="block bg-transparent border-b border-gray-800 outline-none w-full"
					/>
				</label>
			</fieldset>

			{/* Fieldset for platform and technology options */}
			<fieldset className="space-y-3">
				{/* Legend for the platform and technology section */}
				<legend className="text-lg">5.2 Plataformas y Tecnologías</legend>

				{/* Render checkboxes for platform options */}
				{technical.platafromas.map((item) => (
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

				{/* Input field for other platforms */}
				<label className="block">
					<span className="text-sm">Otro</span>
					<input
						type="text"
						name="otra-plataforma"
						className="block bg-transparent border-b border-gray-800 outline-none w-full"
					/>
				</label>
			</fieldset>
		</fieldset>
	);
};

export default Technical;
