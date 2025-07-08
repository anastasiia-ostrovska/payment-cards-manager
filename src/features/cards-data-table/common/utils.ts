const tableMessages = {
	loading: "Loading...",
	notFound: "No cards found",
};

export const getTableMessage = (
	isLoading: boolean,
	hasRows: boolean
): string => {
	if (isLoading) return tableMessages.loading;
	if (!hasRows) return tableMessages.notFound;
	return "";
};
