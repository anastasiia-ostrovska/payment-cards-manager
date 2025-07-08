import { useState, useEffect } from "react";
import type { CardsTableActionHandler, PaymentCard } from "../common/types";
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

	const handleDeleteCard: CardsTableActionHandler = (id) => {
		setCards((previousCards) => previousCards.filter((card) => card.id !== id));
	};

	const handleSetDefaultCard: CardsTableActionHandler = (id) => {
		setCards((previousCards) =>
			previousCards.map((card) => ({
				...card,
				isDefault: card.id === id,
			}))
		);
	};

	return {
		cards,
		isLoading,
		handleDeleteCard,
		handleSetDefaultCard,
	};
};
