import { useFormContext } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { CreateCardFormValues, CreateCardInput } from "../common/types";

export const FormControlledInput = ({
	label,
	name,
	placeholder,
	type,
}: CreateCardInput) => {
	const { control } = useFormContext<CreateCardFormValues>();

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input placeholder={placeholder} type={type} {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
