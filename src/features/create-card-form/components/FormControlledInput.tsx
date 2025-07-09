import { useFormContext } from "react-hook-form";
import { withMask } from "use-mask-input";
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
	mask = "",
}: CreateCardInput) => {
	const { control } = useFormContext<CreateCardFormValues>();

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl {...(mask ? { ref: withMask(mask) } : {})}>
						<Input placeholder={placeholder} {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
