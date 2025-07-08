import { type Table as TableInstance, flexRender } from "@tanstack/react-table";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";

type CardsTableHeaderProps<TData> = {
	table: TableInstance<TData>;
};

export function CardsTableHeader<TData>({
	table,
}: CardsTableHeaderProps<TData>) {
	return (
		<TableHeader>
			{table.getHeaderGroups().map((headerGroup) => (
				<TableRow key={headerGroup.id}>
					{headerGroup.headers.map((header) => (
						<TableHead key={header.id}>
							{header.isPlaceholder
								? null
								: flexRender(
										header.column.columnDef.header,
										header.getContext()
									)}
						</TableHead>
					))}
				</TableRow>
			))}
		</TableHeader>
	);
}
