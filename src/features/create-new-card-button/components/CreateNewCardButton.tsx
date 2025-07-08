import type { ReactElement } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

interface CreateNewCardButtonProps {
	title: string;
	createCardForm: ReactElement;
	actions: ReactElement;
}

export const CreateNewCardButton = ({
	title,
	createCardForm,
	actions,
}: CreateNewCardButtonProps) => {
	return (
		<Dialog>
			<form className="flex self-end">
				<DialogTrigger asChild>
					<Button variant="outline">Create New</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
					</DialogHeader>
					{createCardForm}
					<DialogFooter>
						<DialogClose asChild>{actions}</DialogClose>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
};
