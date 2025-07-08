import { useCards } from "./useCards";
import { useTableColumns } from "./useTableColumns";

export const useCardsTableData = () => {
	const { cards, isLoading, handleDeleteCard, handleSetDefaultCard } =
		useCards();

	const columns = useTableColumns({
		onDeleteClick: handleDeleteCard,
		onSetDefaultClick: handleSetDefaultCard,
	});

	return { columns, data: cards, isLoading };
};
