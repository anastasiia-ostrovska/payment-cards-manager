import type { CardsDataTable as CardsDataTableProps } from "../common/types";
import { Table } from "@/components/ui/table";
import { CardsTableHeader } from "./CardsTableHeader";
import { CardsTableBody } from "./CardsTableBody";
import { CardsFilterInput } from "./CardsFilterInput";
import { useTable } from "../hooks/useTable";

export const CardsDataTable = <TData, TValue>({
	columns,
	data,
	isLoading = false,
}: CardsDataTableProps<TData, TValue>) => {
	const { table, message } = useTable({
		data,
		columns,
		isLoading,
	});

	return (
		<div className="flex flex-col w-full gap-4">
			<div className="flex w-full justify-between items-center gap-8">
				<p className="font-bold text-nowrap">My Cards</p>
				<CardsFilterInput table={table} />
			</div>
			<div className="rounded-md border">
				<Table>
					<CardsTableHeader table={table} />
					<CardsTableBody
						columnsLength={columns.length}
						message={message}
						table={table}
					/>
				</Table>
			</div>
		</div>
	);
};

export default CardsDataTable;
