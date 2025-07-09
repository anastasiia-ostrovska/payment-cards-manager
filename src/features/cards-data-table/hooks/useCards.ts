import { useState, useEffect } from "react";
import type {
	AddCardHandler,
	CardsTableActionHandler,
	PaymentCard,
} from "@/common/types";
import { paymentCardsData } from "../common/configs";

export const useCards = () => {
	const [cards, setCards] = useState<Array<PaymentCard>>([]);
	const [isLoading, setIsLoading] = useState(true);

	// Data fetching simulation
	useEffect(() => {
		setIsLoading(true);

		const timer = setTimeout(() => {
			setCards(paymentCardsData);
			setIsLoading(false);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	const handleSetDefaultCard: CardsTableActionHandler = (id) => {
		setCards((previousCards) =>
			previousCards.map((card) => ({
				...card,
				isDefault: card.id === id,
			}))
		);
	};

	const handleDeleteCard: CardsTableActionHandler = (id) => {
		setCards((previousCards) => {
			let isCurrentDefault = false;

			const updatedCards = previousCards.filter((card) => {
				if (card.id === id && card.isDefault) isCurrentDefault = true;
				return card.id !== id;
			});

			if (isCurrentDefault && updatedCards.length > 0) {
				return updatedCards.map((card, index) => ({
					...card,
					isDefault: index === 0,
				}));
			}

			return updatedCards;
		});
	};

	const handleAddCard: AddCardHandler = ({ brand, last4 }) => {
		const newCard: PaymentCard = {
			id: crypto.randomUUID(),
			brand,
			last4,
			isDefault: false,
		};
		setCards((previous) => [...previous, newCard]);
	};

	return {
		cards,
		isLoading,
		handleDeleteCard,
		handleSetDefaultCard,
		handleAddCard,
	};
};
