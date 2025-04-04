"use client"
import { useExitModal, useSignModal } from "@/store";
import { Dispatch, SetStateAction } from "react";

const Head = ({ isChatOpen, setChatOpen }: { isChatOpen: boolean, setChatOpen: Dispatch<SetStateAction<boolean>> }) => {
    const { setShowExitModal } = useExitModal()
    const { setShowSignModal } = useSignModal()
    return (
        <div className="absolute top-0 w-full flex justify-between items-center" draggable="false">
            <a onClick={() => {
                setShowExitModal(true)
            }} className="cursor-pointer drop-shadow-[0_1px_1px_black] pointer-events-auto mb-auto text-2xl leading-none hover:bg-default-800/60 active:bg-default-1000/80 hover:bg-[#51298499] block p-2">
                <svg className="w-[1.25em] h-[1.25em]"><use href="#svg-back-icon" /></svg>
            </a>
            <div className="flex justify-between max-xl:justify-end items-center w-[300px] z-10">
                <div className="p-2 max-xl:hidden">
                    <button onClick={() => setChatOpen(prev => !prev)} className={`hover:bg-[#ffffff1a] rounded-md p-1`}>
                        <svg className="w-[1.25em] h-[1.25em]"><use href={isChatOpen ? "#svg-chat-close" : "#svg-chat-open"} /></svg>
                    </button>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center gap-4 px-3 bg-[#00000040] rounded-full border-2 border-[#734d947d]">
                        <svg className="w-5 h-5"><use href="#svg-speaker" /></svg>
                        <svg className="w-8 h-8 p-2"><use href="#svg-arrow-down" /></svg>
                    </div>
                    <div className="p-2">
                        <button onClick={() => {
                            setShowSignModal(true)
                            setShowExitModal(true)
                        }} className="text-[16px] p-2 rounded-md bg-amber-600 text-white font-bold shadow-[inset_0_-5px_0_#b45309,0_3px_4px_0_rgba(30,14,17,.9)] hover:bg-amber-500 hover:brightness-110 hover:shadow-[inset_0_-5px_0_#d97706,0_3px_4px_0_rgba(30,14,17,.9)] active:bg-amber-700 active:brightness-90 active:shadow-[inset_0_5px_0_#d97706,0_3px_4px_0_rgba(30,14,17,.9)]">LOG IN</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Head