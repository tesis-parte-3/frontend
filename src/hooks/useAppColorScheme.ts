import { useState, useEffect } from "react";

function useAppColorScheme() {
    const [colorScheme, setColorScheme] = useState(
    localStorage.getItem("appColorScheme") || "light"
    );

    useEffect(() => {
    localStorage.setItem("appColorScheme", colorScheme);
    }, [colorScheme]);

    return [colorScheme, setColorScheme];
}

export default useAppColorScheme;
