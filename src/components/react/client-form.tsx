import { useState } from "react";
import { onSubmit } from "@/lib/index";
import {
	ObjetivosForm,
	KeyFuntionalityForm,
	StyleAndDesign,
	ContentForm,
	Technical,
	Services,
} from "@/components/react";

const ClientForm = () => {
	const [sending, setSending] = useState(false);

	return (
		<form
			className="max-w-2xl py-10 space-y-20 group opacity-0"
			onSubmit={(e) => onSubmit(e, setSending)}
			id="form"
		>
			<ObjetivosForm sending={sending} />
			<KeyFuntionalityForm sending={sending} />
			<StyleAndDesign sending={sending} />
			<ContentForm sending={sending} />
			<Technical sending={sending} />
			<Services sending={sending} />
			<button
				type="submit"
				disabled={sending}
				id="submit"
				className="px-6 py-2 bg-gray-900 text-white hover:bg-gray-700 duration-200 transition-colors group-disabled:opacity-50"
			>
				Enviar Formulario
			</button>
		</form>
	);
};

export default ClientForm;
