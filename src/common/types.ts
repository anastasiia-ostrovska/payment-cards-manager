export type FunctionComponent = React.ReactElement | null;

type HeroIconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
	React.RefAttributes<SVGSVGElement>;
type IconProps = HeroIconSVGProps & {
	title?: string;
	titleId?: string;
};
export type Heroicon = React.FC<IconProps>;

// Payment Cards Data
export type Brand = "visa" | "mastercard" | "amex";

export type PaymentCard = {
	id: string;
	brand: Brand;
	last4: string;
	isDefault: boolean;
};

export type PaymentBrands = Record<Brand, React.ReactElement>;

// Payment Cards Data Handlers
export type CardsTableActionHandler = (id: string) => void;
export type AddCardHandler = ({
	brand,
	last4,
}: {
	brand: Brand;
	last4: string;
}) => void;

export interface DropdownActionsHandlers {
	onDeleteClick: CardsTableActionHandler;
	onSetDefaultClick: CardsTableActionHandler;
}
