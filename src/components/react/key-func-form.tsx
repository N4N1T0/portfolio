import { keyFunctionality } from "@/constants/form";
import FormImage from "@/assets/form/eftakher-alam-i1VQZsU86ok-unsplash.webp";

const KeyFuntionalityForm = ({ sending }: { sending: boolean }) => {
	return (
		<fieldset
			disabled={sending}
			className="space-y-7"
			id="fieldsetForm"
			data-image={FormImage.src}
		>
			<legend className="text-3xl">2. Funcionalidades Clave</legend>
			<fieldset className="space-y-3">
				<legend className="text-lg">2.1 Funciones básicas</legend>
				{keyFunctionality.basicas.map((item) => (
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
				<legend className="text-lg">2.2 Funciones avanzadas</legend>
				<label className="block">
					<span className="text-sm">
						Escribe a continuación si se requieren funciones personalizadas.
					</span>
					<input
						type="text"
						name="funciones avanzadas"
						className="block bg-transparent border-b border-gray-800 outline-none w-full"
					/>
				</label>
			</fieldset>
			<fieldset className="space-y-3">
				<legend className="text-lg">2.3 Paginas</legend>
				{keyFunctionality.paginas.map((item) => (
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
		</fieldset>
	);
};

export default KeyFuntionalityForm;
