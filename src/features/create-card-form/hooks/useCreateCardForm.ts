import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { AddCardHandler } from "@/common/types";
import { cardFormSchema } from "../common/schema";

export const useCreateCardForm = ({ addCard }: { addCard: AddCardHandler }) => {
	const form = useForm<z.infer<typeof cardFormSchema>>({
		resolver: zodResolver(cardFormSchema),
		defaultValues: {
			brand: "visa",
			number: "",
			date: "",
			cvc: "",
		},
	});

	function onSubmit(values: z.infer<typeof cardFormSchema>) {
		const { brand, number } = values;
		const last4 = number.slice(-4);
		addCard({ brand, last4 });
		form.reset();
	}

	return { form, onSubmit };
};
