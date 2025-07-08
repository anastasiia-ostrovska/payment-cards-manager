import type { ColumnDef } from "@tanstack/react-table";
import type { Brand, PaymentBrands, PaymentCard } from "./types";
import { BrandImage } from "../components/BrandImage";
import { DefaultCardCell } from "../components/DefaultCardCell";
import { DropdownActionsMenu } from "../components/DropdownActionsMenu";

// Brand images
export const paymentBrandImages: PaymentBrands = {
	visa: <BrandImage alt="Visa" src="/src/assets/images/png/visa.png" />,
	mastercard: (
		<BrandImage alt="Mastercard" src="/src/assets/images/png/mastercard.png" />
	),
	amex: <BrandImage alt="Amex" src="/src/assets/images/png/amex.png" />,
};

// Cards mock data
export const paymentCardsData: Array<PaymentCard> = [
	{
		id: crypto.randomUUID(),
		brand: "visa",
		last4: "2852",
		isDefault: true,
	},
	{
		id: crypto.randomUUID(),
		brand: "mastercard",
		last4: "9362",
		isDefault: false,
	},
	{
		id: crypto.randomUUID(),
		brand: "amex",
		last4: "5498",
		isDefault: false,
	},
];

// Columns data
export const columns: Array<ColumnDef<PaymentCard>> = [
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
					onDeleteClick={(id) => {
						alert(id);
					}}
					onSetDefaultClick={(id) => {
						alert(id);
					}}
				/>
			);
		},
	},
];
