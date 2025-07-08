import type { z } from "zod";
import type { cardFormSchema } from "../common/schema";
import type { Brand } from "@/common/types";

export interface BrandOptions {
	label: string;
	value: Brand;
	icon: string;
}

export type CreateCardInputFieldName = keyof z.infer<typeof cardFormSchema>;
export type CreateCardFormValues = z.infer<typeof cardFormSchema>;

export type CreateCardInput = {
	label: string;
	name: CreateCardInputFieldName;
	placeholder: string;
	type?: string;
};

export type CreateCardInputs = Record<
	CreateCardInputFieldName,
	CreateCardInput
>;
