import { content } from "@/constants/form";
import FormImage from "@/assets/form/ben-maffin-Ux6_jnk2cO8-unsplash.webp";

const ContentForm = ({ sending }: { sending: boolean }) => {
	return (
		<fieldset
			disabled={sending}
			className="space-y-7"
			id="fieldsetForm"
			data-image={FormImage.src}
		>
			<legend className="text-3xl">4. Contenidos</legend>
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
