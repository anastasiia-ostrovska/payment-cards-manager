import type {
	Brand,
	DropdownActionsHandlers,
	PaymentCard,
} from "@/common/types";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DefaultCardCell } from "../components/DefaultCardCell";
import { DropdownActionsMenu } from "../components/DropdownActionsMenu";
import { paymentBrandImages } from "../common/configs";

export const useTableColumns = ({
	onDeleteClick,
	onSetDefaultClick,
}: DropdownActionsHandlers): Array<ColumnDef<PaymentCard>> => {
	return [
		{
			accessorKey: "brand",
			header: ({ column }) => {
				return (
					<Button
						variant="ghost"
						onClick={() => {
							column.toggleSorting(column.getIsSorted() === "asc");
						}}
					>
						Brand
						<ArrowUpDown />
					</Button>
				);
			},
			cell: ({ row }) => {
				const brand: Brand = row.getValue("brand");
				return paymentBrandImages[brand];
			},
		},
		{
			accessorKey: "last4",
			header: "Last 4",
		},
		{
			accessorKey: "isDefault",
			header: "Default",
			cell: ({ row }) => {
				const isDefault: boolean = row.getValue("isDefault");

				if (isDefault) {
					return <DefaultCardCell />;
				}

				return null;
			},
		},
		{
			id: "actions",
			cell: ({ row }) => {
				const card = row.original;

				return (
					<DropdownActionsMenu
						id={card.id}
						onDeleteClick={onDeleteClick}
						onSetDefaultClick={onSetDefaultClick}
					/>
				);
			},
		},
	];
};
