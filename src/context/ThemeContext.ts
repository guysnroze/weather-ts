import { createContext } from "react";

interface Props {
    theme: string
    changeTheme: (them: string) => void
}

export const ThemeContext = createContext<Props>({
    theme: '',
    changeTheme: () => {},
})