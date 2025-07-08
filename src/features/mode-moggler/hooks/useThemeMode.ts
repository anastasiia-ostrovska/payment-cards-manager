import { useEffect, useState } from "react";
import { Theme } from "../common/types";
import { THEME_STORAGE_KEY } from "../common/constants";

export const useThemeMode = () => {
	const [theme, setTheme] = useState<Theme>(
		(localStorage.getItem(THEME_STORAGE_KEY) as Theme) || Theme.Dark
	);
	const isDark = theme === Theme.Dark;

	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add(Theme.Dark);
		} else {
			document.documentElement.classList.remove(Theme.Dark);
		}
		localStorage.setItem(THEME_STORAGE_KEY, theme);
	}, [isDark, theme]);

	const toggleTheme = () => {
		setTheme(isDark ? Theme.Light : Theme.Dark);
	};

	return { isDark, toggleTheme };
};
