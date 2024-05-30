import { technical } from "@/constants/form";
import FormImage from "@/assets/form/luca-bravo-XJXWbfSo2f0-unsplash.webp";

const Technical = ({ sending }: { sending: boolean }) => {
	return (
		<fieldset
			disabled={sending}
			className="space-y-7"
			id="fieldsetForm"
			data-image={FormImage.src}
		>
			<legend className="text-3xl">5. Aspectos Técnicos</legend>
			<fieldset className="space-y-3">
				<legend className="text-lg">5.1 Hosting y Dominio</legend>
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
				<label className="block">
					<span className="text-sm">Proveedor de preferncia.</span>
					<input
						type="text"
						name="proveedor-hosting"
						className="block bg-transparent border-b border-gray-800 outline-none w-full"
					/>
				</label>
			</fieldset>
			<fieldset className="space-y-3">
				<legend className="text-lg">5.2 Plataformas y Tecnologías</legend>
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
