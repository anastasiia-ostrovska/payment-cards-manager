import type { ColumnDef } from "@tanstack/react-table";

export interface CardsDataTable<TData, TValue> {
	columns: Array<ColumnDef<TData, TValue>>;
	data: Array<TData>;
	isLoading?: boolean;
}

export type CardsTableActionHandler = (id: string) => void;
