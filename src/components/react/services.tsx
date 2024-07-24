// Form Imports
import { services } from "@/constants/form";

// Assets Imports
import { FormImage4 } from "@/assets/";

/**
+ * Renders a form for selecting additional services.
+ *
+ * @param {Object} props - The component props.
+ * @param {boolean} props.sending - Indicates if the form is currently being sent.
+ * @return {JSX.Element} The rendered form component.
+ */
const Services = ({ sending }: { sending: boolean }): JSX.Element => {
	return (
		// Main fieldset for the services form
		<fieldset
			disabled={sending} // Disable the form if it's currently being sent
			className="space-y-7"
			id="fieldsetForm"
			data-image={FormImage4.src} // Set the background image
		>
			<legend className="text-3xl">6. Servicios Adicionales</legend>
			{/* Fieldset for maintenance services */}
			<fieldset className="space-y-3">
				<legend className="text-lg">6.1 Mantenimiento</legend>
				{services.mantenimiento.map((item) => (
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
			{/* Fieldset for SEO, SEM, and marketing services */}
			<fieldset className="space-y-3">
				<legend className="text-lg">6.2 SEO, SEM y Marketing</legend>
				{services.marketing.map((item) => (
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
			{/* Fieldset for maintenance services */}
			<fieldset className="space-y-3">
				<legend className="text-lg">6.3 Mantenimiento</legend>
				{services.redes.map((item) => (
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
				{/* Input field for social networks */}
				<label className="block">
					<span className="text-sm">Redes Sociales</span>
					<input
						type="text"
						name="redes"
						className="block bg-transparent border-b border-gray-800 outline-none w-full"
					/>
				</label>
			</fieldset>
		</fieldset>
	);
};

export default Services;
