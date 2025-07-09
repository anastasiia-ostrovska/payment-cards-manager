import { TableCell, TableRow } from "@/components/ui/table.tsx";

interface TableMessageProps {
	colSpan: number;
	message: string
}

export const TableMessage = ({ colSpan, message }:TableMessageProps) => {
	return (
		<TableRow>
			<TableCell className="h-24 text-center" colSpan={colSpan}>
				{message}
			</TableCell>
		</TableRow>
	);
};