
import Box from "./components/context/Box"
import ThemeContextProvider from "./components/context/ThemeContextProvider"

export default function HookComponent  ()  {


    return (
        <>
        <ThemeContextProvider>
            <Box/>
        </ThemeContextProvider>
        </>
    )
} 