import type { ReactElement, ReactNode } from "react";
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

interface OpenDialogButtonProps {
	title: string;
	createCardForm: ReactElement;
	submitButton: ReactElement;
	closeButton?: ReactNode;
}

export const OpenDialogButton = ({
	title,
	createCardForm,
	submitButton,
	closeButton = null,
}: OpenDialogButtonProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild className="flex self-end">
				<Button variant="outline">Create New</Button>
			</DialogTrigger>
			<DialogContent aria-describedby={undefined} className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-xl text-start">{title}</DialogTitle>
				</DialogHeader>
				{createCardForm}
				<DialogFooter>
					{closeButton && <DialogClose asChild>{closeButton}</DialogClose>}
					{submitButton}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
