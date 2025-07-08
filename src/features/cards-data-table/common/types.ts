import type { ColumnDef, Table } from "@tanstack/react-table";
import type { ReactElement } from "react";

// Data
export type Brand = "visa" | "mastercard" | "amex";

export type PaymentCard = {
	id: string;
	brand: Brand;
	last4: string;
	isDefault: boolean;
};

export type PaymentBrands = Record<Brand, ReactElement>;

// Table
export interface CardsDataTable<TData, TValue> {
	columns: Array<ColumnDef<TData, TValue>>;
	data: Array<TData>;
	isLoading?: boolean;
}

export interface CardsTable<TData> {
	table: Table<TData>;
}

// Handlers
export type CardsTableActionHandler = (id: string) => void;

export interface DropdownActionsHandlers {
	onDeleteClick: CardsTableActionHandler;
	onSetDefaultClick: CardsTableActionHandler;
}
