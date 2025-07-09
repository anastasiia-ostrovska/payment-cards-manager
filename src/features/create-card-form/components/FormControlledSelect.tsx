import { useFormContext } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { brandOptions } from "../common/configs";
import type { CreateCardFormValues, CreateCardInput } from "../common/types";
import { BrandSelectItem } from "./BrandSelectItem";

export const FormControlledSelect = ({
	label,
	name,
	placeholder,
}: CreateCardInput) => {
	const { control } = useFormContext<CreateCardFormValues>();

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<Select value={field.value} onValueChange={field.onChange}>
						<FormControl>
							<SelectTrigger>
								<SelectValue placeholder={placeholder} />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{brandOptions.map((option) => (
								<BrandSelectItem key={option.label} {...option} />
							))}
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
