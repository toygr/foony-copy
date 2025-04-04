"use client";

import { emoticons } from "@/utils";
import Image from "next/image"
import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState } from "react"

const Chat = () => {
    const initialChats = [
        "Join Discord: https://discord.gg/fwvzUh5TV3",
        "Invite friends: yt6h3p9i"
    ]
    const [msgs, setMsgs] = useState(initialChats)
    return (
        <div className={`flex flex-col w-full xl:w-[300px] xl:p-2 xl:pt-12  bg-[#170725] xl:bg-[#481c75] h-auto min-h-auto max-h-full order-3 sm:col-span-full xl:col-3 font-bold text-[14px]`}>
            <ul className={`hidden xl:flex w-full h-full overflow-y-auto flex-col gap-1 font-semibold`}>
                {msgs.map((msg, i) => <li key={i}>
                    {msg}
                    {/* {msg.split(emoticons[0].emots[0]).reduce((prev, cur) => ([...prev]), [])}
                    <span>abc</span>
                    <Image width={24} height={24} alt="Emot" className="w-6 h-6 inline-block" src="https://foony.com/img/items/emoteGrin.webp" />
                    <span>def</span> */}
                </li>)}
            </ul>
            <div className="w-full h-8 flex gap-1 justify-center items-center">
                <div className="hover:bg-[#512984] hover:cursor-pointer p-1 rounded-sm relative group/emot-box">
                    <div className="group-hover/emot-box:flex absolute hidden justify-center items-center bottom-[100%] min-w-max xl:-translate-x-[50%] p-3 pt-8 bg-[#422169] rounded-2xl border-3 border-white">
                        {emoticons.map((emoticon, i) =>
                            <EmotImage key={i} setMsgs={setMsgs} src={emoticon.src} emots={emoticon.emots} />)}
                    </div>
                    <Image width={24} height={24} alt="Emot" className="w-6 h-6" src="https://foony.com/img/items/emoteGrin.webp" />
                </div>
                <ChatInput setMsgs={setMsgs} />
            </div>
        </div>
    )
}
const ChatInput = ({ setMsgs }: { setMsgs: Dispatch<SetStateAction<string[]>> }) => {
    const [chatMsg, setChatMsg] = useState("")
    return (
        <div className="flex-[1_1_0%]">
            <input
                onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
                    if (e.code.includes("Enter")) {
                        setMsgs(prev => [...prev, chatMsg])
                        setChatMsg("")
                    }
                }}
                value={chatMsg}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setChatMsg(e.target.value)}
                type="text"
                className={`w-full sm:py-2 px-3 bg-[#170725] xl:bg-[#311356] rounded-md outline-none font-normal not-italic`}
                placeholder="Say something..." />
        </div>
    )
}
const EmotImage = ({ src, emots, setMsgs }: { src: string, emots: string[], setMsgs: Dispatch<SetStateAction<string[]>> }) => {
    return (
        <div className="group/emot">
            <div className="hidden group-hover/emot:flex gap-4 absolute top-2 left-8">
                {emots.map((emot, i) => <span key={i}>{emot}</span>)}
            </div>
            <Image onClick={() => {
                setMsgs(prev => [...prev, emots[0]])
            }} width={64} height={64} alt="Emot" className="w-16 h-16 hover:bg-[#512984] p-2 rounded-lg" src={src} />
        </div>
    )
}
export default Chat