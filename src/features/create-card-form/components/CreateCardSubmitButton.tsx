import { Button } from "@/components/ui/button";
import { CREATE_CARD_FORM_ID } from "../common/constants";

export const CreateCardSubmitButton = () => {
	return (
		<Button form={CREATE_CARD_FORM_ID} type="submit">
			Add card
		</Button>
	);
};
