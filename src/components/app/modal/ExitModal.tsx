"use client";
import { useExitModal } from "@/store";
import Image from "next/image"

const ExitModal = () => {
    const { showExitModal: show, setShowExitModal: setShow } = useExitModal()
    return (
        show ?
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/70 flex justify-center items-center">
                <div className="w-[480px] h-[170px] bg-[#422169] p-4 rounded-3xl border-4 border-[#351a53]">
                    <div className="flex flex-col items-center gap-4 w-full min-h-max -translate-y-[20%] relative">
                        <button onClick={() => setShow(false)} className="absolute -right-[10px] top-[40px] p-2 rounded-full hover:bg-[#6131a488]">
                            <svg className="w-6 h-6"><use href="#svg-close" /></svg>
                        </button>
                        <Image alt="bomb" width={100} height={100} src="https://foony.com/img/items/bomby_sign.webp" />
                        <p className="text-center text-[18px] font-bold">You're in the middle of a game, do you want to Forfeit and Leave?</p>
                        <div className="flex justify-center items-center gap-2 w-full">
                            <button onClick={() => setShow(false)} className="text-[20px] px-4 p-2 rounded-md bg-[#16a34a] text-white font-bold hover:bg-[#22c55e] hover:brightness-110  active:bg-[#15803d]active:brightness-90 shadow-[inset_0_-5px_0_#15803d,0_3px_4px_0_rgba(30,14,17,.9)] hover:shadow-[inset_0_-5px_0_#16a34a,0_3px_4px_0_rgba(30,14,17,.9)] active:shadow-[inset_0_5px_0_#16a34a,0_3px_4px_0_rgba(30,14,17,.9)]">YES, PLEASE</button>
                            <button onClick={() => setShow(false)} className="text-[20px] px-4 p-2 rounded-md bg-[#763acb] text-white font-bold hover:bg-[#8a4ee5] hover:brightness-110  active:bg-[#6131a4]active:brightness-90 shadow-[inset_0_-5px_0_#6630b2,0_3px_4px_0_rgba(30,14,17,.9)] hover:shadow-[inset_0_-5px_0_rgb(120,71,196),0_3px_4px_0_rgba(30,14,17,.9)] active:shadow-[inset_0_5px_0_#894ce2,0_3px_4px_0_rgba(30,14,17,.9)]">NO, THANKS</button>
                        </div>
                    </div>
                </div>
            </div> :
            <></>
    )
}
export default ExitModal