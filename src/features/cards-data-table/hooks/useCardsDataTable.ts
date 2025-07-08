import {
	type Table as TableInstance,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";

import type { CardsDataTable } from "../common/types";
import { getTableMessage } from "../common/utils";

interface UseCardsDataTableReturn<TData> {
	table: TableInstance<TData>;
	message: string;
}

export const useCardsDataTable = <TData, TValue>({
	data,
	columns,
	isLoading = false,
}: CardsDataTable<TData, TValue>): UseCardsDataTableReturn<TData> => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	const hasRows = !!table.getRowModel().rows?.length;
	const message = getTableMessage(isLoading, hasRows);

	return { table, message };
};
