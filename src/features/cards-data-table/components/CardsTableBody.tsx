import type { Table as TableInstance } from "@tanstack/react-table";
import { TableBody } from "@/components/ui/table";
import { CardsTableRow } from "./CardsTableRow";
import { TableMessage } from "./TableMessage";

interface CardsTableBodyProps<TData> {
	table: TableInstance<TData>;
	message: string;
	columnsLength: number;
}

export const CardsTableBody = <TData,>({
	table,
	message,
	columnsLength,
}: CardsTableBodyProps<TData>) => {
	const hasRows = table.getRowModel().rows?.length;

	return (
		<TableBody>
			{hasRows && !message ? (
				table
					.getRowModel()
					.rows.map((row) => <CardsTableRow key={row.id} row={row} />)
			) : (
				<TableMessage colSpan={columnsLength} message={message} />
			)}
		</TableBody>
	);
};
