import { SelectItem } from "@/components/ui/select";
import type { BrandOptions } from "../common/types";

export const BrandSelectItem = ({ value, icon, label }: BrandOptions) => {
	return (
		<SelectItem value={value}>
			<div className="flex items-center gap-2">
				<img alt={label} className="w-5 h-5 object-contain" src={icon} />
				{label}
			</div>
		</SelectItem>
	);
};
