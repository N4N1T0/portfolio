import { services } from "@/constants/form";
import FormImage from "@/assets/form/austin-distel-tLZhFRLj6nY-unsplash.webp";

const Services = ({ sending }: { sending: boolean }) => {
	return (
		<fieldset
			disabled={sending}
			className="space-y-7"
			id="fieldsetForm"
			data-image={FormImage.src}
		>
			<legend className="text-3xl">6. Servicios Adicionales</legend>
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
