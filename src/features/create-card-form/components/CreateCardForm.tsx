import { Form } from "@/components/ui/form";
import type { AddCardHandler } from "@/common/types";
import { CREATE_CARD_FORM_ID } from "../common/constants";
import { createCardInputs } from "../common/configs";
import { useCreateCardForm } from "../hooks/useCreateCardForm";
import { FormControlledInput } from "./FormControlledInput";
import { FormControlledSelect } from "./FormControlledSelect";

export const CreateCardForm = ({ addCard }: { addCard: AddCardHandler }) => {
	const { form, onSubmit } = useCreateCardForm({ addCard });

	return (
		<Form {...form}>
			<form
				className="space-y-3"
				id={CREATE_CARD_FORM_ID}
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormControlledSelect {...createCardInputs.brand} />
				<FormControlledInput {...createCardInputs.number} />
				<FormControlledInput {...createCardInputs.date} />
				<FormControlledInput {...createCardInputs.cvc} />
			</form>
		</Form>
	);
};
