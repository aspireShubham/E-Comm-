

import { useContext } from "react";
import { Theme } from "./Theme";
import { createContext } from "react";

type ThemeContextProvider = {
    children : React.ReactNode
}

const ThemeContext = createContext(Theme)

 const ThemeContextProvider = ({children} : ThemeContextProvider) => {

    return (
        <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>
    )

}

export default ThemeContextProvider