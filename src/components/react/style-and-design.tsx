// Form Imports
import { styleAndDesign } from "@/constants/form";

// Assets Imports
import { FormImage5 } from "@/assets";

// React Imports
import { useState } from "react";

/**
+ * Renders a form for selecting the style and design of a project.
+ *
+ * @param {Object} props - The properties passed to the component.
+ * @param {boolean} props.sending - Indicates whether the form is in the process of being sent.
+ * @return {JSX.Element} The rendered form.
+ */
const StyleAndDesign = ({ sending }: { sending: boolean }): JSX.Element => {
	const [hasDesign, setHasDesign] = useState(false);

	return (
		<fieldset
			disabled={sending}
			className="space-y-7"
			id="fieldsetForm"
			data-image={FormImage5.src}
		>
			<legend className="text-3xl">3. Estilo y Diseño</legend>
			{/* Checkbox to ask if the user already has a custom design */}
			<label className="flex items-center gap-1 mt-4 text-lg">
				<input
					type="checkbox"
					id="hasDesign"
					name="hasDesign"
					value="hasDesign"
					onChange={() => setHasDesign(!hasDesign)}
				/>
				¿Ya tienes el diseño personalizado? ¿Ya tienes el diseño personalizado?
			</label>
			{/* If the user does not have a custom design, show the rest of the form */}
			{!hasDesign && (
				<>
					<fieldset className="space-y-3">
						<legend className="text-lg">3.1 Temática del diseño</legend>
						{/* Render checkboxes for design themes */}
						{styleAndDesign.tematica.map((item) => (
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
					<fieldset className="space-y-3">
						<legend className="text-lg">3.2 ¿Qué estilo te gustaría?</legend>
						{/* Render checkboxes for design styles */}
						{styleAndDesign.estilo.map((item) => (
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
					<fieldset className="space-y-3">
						<legend className="text-lg">3.3 Referencias</legend>
						{/* Input for design references */}
						<label className="block">
							<span className="text-sm">
								proporciona 3 nombres de web se su agrado como referencias
							</span>
							<input
								type="text"
								name="referencias"
								className="block bg-transparent border-b border-gray-800 outline-none"
							/>
						</label>
					</fieldset>
				</>
			)}
		</fieldset>
	);
};

export default StyleAndDesign;
