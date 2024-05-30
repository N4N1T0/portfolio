import { styleAndDesign } from "@/constants/form";
import { useState } from "react";
import FormImage from "@/assets/form/ux-indonesia-qC2n6RQU4Vw-unsplash.webp";

const StyleAndDesign = ({ sending }: { sending: boolean }) => {
	const [hasDesign, setHasDesign] = useState(false);

	return (
		<fieldset
			disabled={sending}
			className="space-y-7"
			id="fieldsetForm"
			data-image={FormImage.src}
		>
			<legend className="text-3xl">3. Estilo y Diseño</legend>
			<label className="flex items-center gap-1 mt-4 text-lg">
				<input
					type="checkbox"
					id="hasDesign"
					name="hasDesign"
					value="hasDesign"
					onChange={() => setHasDesign(!hasDesign)}
				/>
				¿Ya tienes el diseño personalizado?
			</label>
			{!hasDesign && (
				<>
					<fieldset className="space-y-3">
						<legend className="text-lg">3.1 Temática del diseño</legend>
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
						<label className="block">
							<span className="text-sm">
								proporciona 3 nombres de web se su agrado como referencias
							</span>
							<input
								type="text"
								name="referencias"
								className="block bg-transparent border-b border-gray-800 outline-none w-full"
							/>
						</label>
					</fieldset>
				</>
			)}
		</fieldset>
	);
};

export default StyleAndDesign;
