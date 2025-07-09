import type { ColumnDef, Table } from "@tanstack/react-table";

// Table
export interface CardsDataTable<TData, TValue> {
	columns: Array<ColumnDef<TData, TValue>>;
	data: Array<TData>;
	isLoading?: boolean;
}

export interface CardsTable<TData> {
	table: Table<TData>;
}
