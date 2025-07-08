import { CardsDataTable, useCardsTableData } from "@/features/cards-data-table";
import { OpenDialogButton } from "@/features/open-dialog-button";
import {
	CreateCardForm,
	CreateCardSubmitButton,
} from "@/features/create-card-form";

export const MyCards = () => {
	const { columns, data, isLoading, handleAddCard } = useCardsTableData();

	return (
		<main
			className={`
		flex flex-col items-center justify-center justify-self-center 
		h-dvh w-full max-w-lg 
		gap-4 p-4`}
		>
			<CardsDataTable columns={columns} data={data} isLoading={isLoading} />
			<OpenDialogButton
				createCardForm={<CreateCardForm addCard={handleAddCard} />}
				submitButton={<CreateCardSubmitButton />}
				title="Add New Card"
			/>
		</main>
	);
};
