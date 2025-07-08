import type { ColumnDef, Table } from "@tanstack/react-table";

export interface CardsDataTable<TData, TValue> {
	columns: Array<ColumnDef<TData, TValue>>;
	data: Array<TData>;
	isLoading?: boolean;
}

export interface CardsTable<TData> {
	table: Table<TData>;
}

export type CardsTableActionHandler = (id: string) => void;
