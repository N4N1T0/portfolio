import { objetivos } from "@/constants/form";
import FormImage from "@/assets/form/balazs-ketyi-_x335IZXxfc-unsplash.webp";

const ObjetivosForm = ({ sending }: { sending: boolean }) => {
	return (
		<fieldset
			disabled={sending}
			className="space-y-7"
			id="fieldsetForm"
			data-image={FormImage.src}
		>
			<legend className="text-3xl">1. Objetivos del Sitio</legend>
			<fieldset className="space-y-3">
				<legend className="text-lg">1.1 Proposito</legend>
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
			<fieldset className="space-y-3">
				<legend className="text-lg">1.2 Publico Objetivo</legend>
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
			<fieldset className="space-y-3">
				<legend className="text-lg">1.3 Competencias</legend>
				<label className="block">
					Competidores Principales
					<input
						type="text"
						name="competidores"
						className="block bg-transparent border-b border-gray-800 outline-none w-full"
					/>
				</label>
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
