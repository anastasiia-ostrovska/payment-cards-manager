import { useState } from "react";
import {
	type Table as TableInstance,
	type ColumnFiltersState,
	type SortingState,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable,
	getFilteredRowModel,
} from "@tanstack/react-table";
import type { CardsDataTable } from "../common/types";
import { getTableMessage } from "../common/utils";

interface UseCardsTableReturn<TData> {
	table: TableInstance<TData>;
	message: string;
}

export const useTable = <TData, TValue>({
	data,
	columns,
	isLoading = false,
}: CardsDataTable<TData, TValue>): UseCardsTableReturn<TData> => {
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [sorting, setSorting] = useState<SortingState>([]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		state: { sorting, columnFilters },
	});

	const hasRows = !!table.getRowModel().rows?.length;
	const message = getTableMessage(isLoading, hasRows);

	return { table, message };
};
