import { Input } from "@/components/ui/input";
import type { CardsTable } from "../common/types";

export const CardsFilterInput = <TData,>({ table }: CardsTable<TData>) => {
	return (
		<Input
			className="max-w-sm"
			placeholder="Filter last 4 numbers..."
			type="number"
			value={(table.getColumn("last4")?.getFilterValue() as string) ?? ""}
			onChange={(event) =>
				table.getColumn("last4")?.setFilterValue(event.target.value)
			}
		/>
	);
};
