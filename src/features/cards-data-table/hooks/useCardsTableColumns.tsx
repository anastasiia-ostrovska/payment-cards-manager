import type {
	Brand,
	DropdownActionsHandlers,
	PaymentCard,
} from "../common/types";
import type { ColumnDef } from "@tanstack/react-table";
import { DefaultCardCell } from "@/features/cards-data-table/components/DefaultCardCell";
import { DropdownActionsMenu } from "@/features/cards-data-table/components/DropdownActionsMenu";
import { paymentBrandImages } from "@/features/cards-data-table/common/configs";

export const useCardsTableColumns = ({
	onDeleteClick,
	onSetDefaultClick,
}: DropdownActionsHandlers): Array<ColumnDef<PaymentCard>> => {
	return [
		{
			accessorKey: "brand",
			header: "Brand",
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
