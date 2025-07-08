import { type Row as RowInstance, flexRender } from "@tanstack/react-table";
import { TableCell, TableRow } from "@/components/ui/table.tsx";

type CardsTableRow<TData> = {
	row: RowInstance<TData>;
};

export function CardsTableRow<TData>({ row }: CardsTableRow<TData>) {
	return (
		<TableRow>
			{row.getVisibleCells().map((cell) => (
				<TableCell key={cell.id}>
					{flexRender(cell.column.columnDef.cell, cell.getContext())}
				</TableCell>
			))}
		</TableRow>
	);
}
