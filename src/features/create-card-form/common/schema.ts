import { z } from "zod";
import { regexPatterns, errorMessages } from "./configs";

export const cardFormSchema = z.object({
	brand: z.enum(["visa", "mastercard", "amex"], {
		errorMap: () => ({ message: errorMessages.brand }),
	}),
	number: z.string().regex(regexPatterns.cardNumber, {
		message: errorMessages.cardNumber,
	}),
	date: z.string().regex(regexPatterns.date, {
		message: errorMessages.date,
	}),
	cvc: z.string().regex(regexPatterns.cvc, {
		message: errorMessages.cvc,
	}),
});
