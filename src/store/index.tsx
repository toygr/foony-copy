import { useContext } from "react";
import { GlobalContext } from "./provider";

export const useExitModal = () => ({
    showExitModal: useContext(GlobalContext).showExitModal,
    setShowExitModal: useContext(GlobalContext).setShowExitModal
})
export const useSignModal = () => ({
    showSignModal: useContext(GlobalContext).showSignModal,
    setShowSignModal: useContext(GlobalContext).setShowSignModal
})