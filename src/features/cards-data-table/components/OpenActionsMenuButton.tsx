import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export const OpenActionsMenuButton = () => {
	return (
		<DropdownMenuTrigger asChild>
			<Button className="h-8 w-8 p-0" variant="ghost">
				<span className="sr-only">Open menu</span>
				<MoreHorizontal className="h-4 w-4" />
			</Button>
		</DropdownMenuTrigger>
	);
};
