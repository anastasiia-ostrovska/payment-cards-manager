import VisaImg from "@/assets/icons/visa.png";
import MastercardImg from "@/assets/icons/mastercard.png";
import AmexImg from "@/assets/icons/amex.png";
import type { BrandOptions, CreateCardInputs } from "../common/types";

// Form Schema Configs
export const regexPatterns = {
	cardNumber: /^\d{4} \d{4} \d{4} \d{4}$/,
	date: /^(0[1-9]|1[0-2])\/\d{2}$/,
	cvc: /^\d{4}$/,
};

export const errorMessages = {
	brand: "Please select a card brand",
	cardNumber: "Card number must be 16 digits",
	date: "Date must be in MM/YY format",
	cvc: "CVC must be 4 digits",
};

// Select Brand Options
export const brandOptions: Array<BrandOptions> = [
	{ label: "Visa", value: "visa", icon: VisaImg },
	{ label: "Mastercard", value: "mastercard", icon: MastercardImg },
	{ label: "Amex", value: "amex", icon: AmexImg },
];

// Input items
export const createCardInputs: CreateCardInputs = {
	brand: {
		label: "Card Brand",
		name: "brand",
		placeholder: "Select a card brand",
	},
	number: {
		label: "Card number",
		name: "number",
		placeholder: "0000 0000 0000 0000",
		mask: "9999 9999 9999 9999",
	},
	date: {
		label: "Expiration date",
		name: "date",
		placeholder: "MM/YY",
		mask: "99/99",
	},
	cvc: {
		label: "CVC",
		name: "cvc",
		placeholder: "****",
		mask: "9999",
	},
};
