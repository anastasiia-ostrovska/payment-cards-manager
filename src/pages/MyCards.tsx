import { CardsDataTable, useCardsTableData } from "@/features/cards-data-table";
import { OpenDialogButton } from "@/features/open-dialog-button";
import {
	CreateCardForm,
	CreateCardSubmitButton,
} from "@/features/create-card-form";
import { ModeToggler } from "@/features/mode-moggler";

export const MyCards = () => {
	const { columns, data, isLoading, handleAddCard } = useCardsTableData();

	return (
		<main
			className={`
		flex flex-col items-center justify-center justify-self-center 
		h-full min-h-[100dvh] w-full max-w-lg 
		gap-4 p-4`}
		>
			<ModeToggler />
			<CardsDataTable columns={columns} data={data} isLoading={isLoading} />
			<OpenDialogButton
				createCardForm={<CreateCardForm addCard={handleAddCard} />}
				submitButton={<CreateCardSubmitButton />}
				title="Add New Card"
			/>
		</main>
	);
};
