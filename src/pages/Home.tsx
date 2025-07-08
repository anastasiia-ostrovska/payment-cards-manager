import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Home = () => {
	return (
		<main
			className={`
		flex flex-col items-center justify-center justify-self-center 
		h-dvh w-full max-w-lg 
		gap-4 p-4`}
		>
			<p className="font-bold text-4xl text-nowrap">Welcome!</p>
			<Button>
				<Link to="/my-cards">My Cards</Link>
			</Button>
		</main>
	);
};
