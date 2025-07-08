import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import type { DropdownActionsHandlers } from "@/common/types";
import { OpenActionsMenuButton } from "./OpenActionsMenuButton";

interface DropdownActionsMenuProps extends DropdownActionsHandlers {
	id: string;
}

export const DropdownActionsMenu = ({
	id,
	onDeleteClick,
	onSetDefaultClick,
}: DropdownActionsMenuProps) => {
	return (
		<DropdownMenu>
			<OpenActionsMenuButton />
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={() => {
						onSetDefaultClick(id);
					}}
				>
					Set as default
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => {
						onDeleteClick(id);
					}}
				>
					Delete
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
