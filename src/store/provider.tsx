"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";


export const GlobalContext = createContext<{
    showExitModal: boolean,
    setShowExitModal: Dispatch<SetStateAction<boolean>>,
    showSignModal: boolean,
    setShowSignModal: Dispatch<SetStateAction<boolean>>,
}>({
    showExitModal: false,
    setShowExitModal: () => { },
    showSignModal: false,
    setShowSignModal: () => { },
});
const StoreProvider = ({ children }: { children: ReactNode }) => {

    const [showExitModal, setShowExitModal] = useState(false)
    const [showSignModal, setShowSignModal] = useState(false)
    return (
        <GlobalContext.Provider value={{ showExitModal, setShowExitModal, showSignModal, setShowSignModal }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default StoreProvider