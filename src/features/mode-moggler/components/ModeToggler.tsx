import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useThemeMode } from "../hooks/useThemeMode";

export const ModeToggler = () => {
	const { isDark, toggleTheme } = useThemeMode();

	return (
		<Button className="flex self-end" variant="ghost" onClick={toggleTheme}>
			{isDark ? <Moon /> : <Sun />}
		</Button>
	);
};
