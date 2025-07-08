import type { CardsDataTable as CardsDataTableProps } from "../common/types";
import { Table } from "@/components/ui/table";
import { CardsTableHeader } from "./CardsTableHeader";
import { CardsTableBody } from "./CardsTableBody";
import { useCardsDataTable } from "../hooks/useCardsDataTable";

export const CardsDataTable = <TData, TValue>({
	columns,
	data,
	isLoading = false,
}: CardsDataTableProps<TData, TValue>) => {
	const { table, message } = useCardsDataTable({
		data,
		columns,
		isLoading,
	});

	return (
		<div className="w-full max-w-lg rounded-md border">
			<Table>
				<CardsTableHeader table={table} />
				<CardsTableBody
					columnsLength={columns.length}
					message={message}
					table={table}
				/>
			</Table>
		</div>
	);
};

export default CardsDataTable;
