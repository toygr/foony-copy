"use client"
import { useSignModal } from "@/store"
import { Dispatch, SetStateAction, useState } from "react"

type ModalType = "login" | "signup"
const DAYS_OF_MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const SignModal = () => {
    const [selectedType, setSelectedType] = useState<ModalType>("login")
    const { showSignModal, setShowSignModal } = useSignModal()
    return (
        showSignModal ? <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/70 flex justify-center items-center">
            <div className="w-[640px] bg-[#422169] p-1 rounded-3xl border-4 border-[#351a53] relative">
                <div className="flex flex-col items-center gap-2 w-full relative">
                    <button onClick={() => setShowSignModal(false)} className="absolute right-0 top-0 p-2 rounded-full hover:bg-[#6131a488] z-40">
                        <svg className="w-6 h-6"><use href="#svg-close" /></svg>
                    </button>
                    <div className="w-full flex justify-center items-center h-14 font-bold rounded-b-none">
                        <TypeSelector type="login" selected={selectedType === "login"} setSelectedType={setSelectedType} />
                        <TypeSelector type="signup" selected={selectedType === "signup"} setSelectedType={setSelectedType} />
                    </div>
                    {selectedType === "login" ? <Login /> : <Signup />}
                </div>
            </div>
        </div> : <></>
    )
}
const Login = () => {
    return (
        <div className="w-full px-4">
            <div className="w-full flex items-center justify-center pb-4">
                <button className="flex justify-center items-center gap-2 w-[320px] bg-[#f5f5f5] text-black font-bold py-2 px-4 rounded-full not-italic text-[18px]">
                    <svg className="w-[30px] h-[30px]"><use href="#svg-google" /></svg>
                    <span> Sign in with Google </span>
                </button>
            </div>
            <div className="w-full h-[2px] bg-[#fcd34d] justify-center flex mb-4">
                <span className="bg-[#422169] px-4 block min-h-max -translate-y-[50%] text-[18px]">OR</span>
            </div>
            <div className="flex gap-2 items-center w-full pt-4 border-b-2 border-[#a972f54d] hover:border-[#a972f5] relative focus-within:[&>p]:block">
                <p className="hidden absolute left-1 top-0 text-xs text-[#c49ef8cc] font-bold">Username / Email</p>
                <svg className="w-[14px] h-[14px]"><use href="#svg-avatar" /></svg>
                <input type="text" className="w-full outline-none focus-within:placeholder:opacity-0" placeholder="Username / Email" />
            </div>
            <div className="flex gap-2 items-center w-full pt-4 my-4 border-b-2 border-[#a972f54d] hover:border-[#a972f5] relative focus-within:[&>p]:block">
                <p className="hidden absolute left-1 top-0 text-xs text-[#c49ef8cc] font-bold">Password</p>
                <svg className="w-[14px] h-[14px]"><use href="#svg-lock" /></svg>
                <input type="password" className="w-full outline-none focus-within:placeholder:opacity-0" placeholder="Password" />
            </div>
            <p className="p-2 my-4 hover:bg-[#6131a488] text-[12px] w-fit font-bold rounded-md">TROUBLE LOGGING IN?</p>
            <div className="w-full text-center text-[11.2px] text-[#b18fdb] font-bold pb-8">
                <span>This site is protected by reCAPTCHA and the Google </span>
                <span className="text-white">Privacy Policy </span>
                <span>and </span>
                <span className="text-white">Terms of Service</span>
                <span> apply. </span>
            </div>
            <div className="absolute left-0 -bottom-[30px] w-full flex justify-center items-center">
                <button className="text-[20px] px-6 p-2 pb-3 rounded-md bg-[#16a34a] text-white font-bold hover:bg-[#22c55e] hover:brightness-110  active:bg-[#15803d]active:brightness-90 shadow-[inset_0_-5px_0_#15803d,0_3px_4px_0_rgba(30,14,17,.9)] hover:shadow-[inset_0_-5px_0_#16a34a,0_3px_4px_0_rgba(30,14,17,.9)] active:shadow-[inset_0_5px_0_#16a34a,0_3px_4px_0_rgba(30,14,17,.9)]">LOG IN</button>
            </div>
        </div>
    )
}
const Signup = () => {
    const [month, setMonth] = useState(0)
    const [day, setDay] = useState(0)
    const [year, setYear] = useState(0)
    return (
        <div className="w-full px-2">
            <div className="w-full flex items-center justify-center pb-4">
                <button className="flex justify-center items-center gap-2 w-[320px] bg-[#f5f5f5] text-black font-bold py-2 px-4 rounded-full not-italic text-[18px]">
                    <svg className="w-[30px] h-[30px]"><use href="#svg-google" /></svg>
                    <span> Sign up with Google </span>
                </button>
            </div>
            <div className="w-full h-[2px] bg-[#fcd34d] justify-center flex mb-4">
                <span className="bg-[#422169] px-4 block min-h-max -translate-y-[50%] text-[18px]">OR</span>
            </div>
            <div className="flex gap-2 items-center w-full pt-4 border-b-2 border-[#a972f54d] hover:border-[#a972f5] relative focus-within:[&>p]:block">
                <p className="hidden absolute left-1 top-0 text-xs text-[#c49ef8cc] font-bold">Username / Email</p>
                <svg className="w-[14px] h-[14px]"><use href="#svg-avatar" /></svg>
                <input type="text" className="w-full outline-none focus-within:placeholder:opacity-0" placeholder="Username / Email" />
            </div>
            <p className="text-xs text-[#c49ef8cc] font-bold">Usernames must be between 4 and 25 characters.</p>
            <div className="flex gap-2 items-center w-full pt-4 border-b-2 border-[#a972f54d] hover:border-[#a972f5] relative focus-within:[&>p]:block">
                <p className="hidden absolute left-1 top-0 text-xs text-[#c49ef8cc] font-bold">Password</p>
                <svg className="w-[14px] h-[14px]"><use href="#svg-lock" /></svg>
                <input type="password" className="w-full outline-none focus-within:placeholder:opacity-0" placeholder="Password" />
            </div>
            <p className="text-xs text-[#c49ef8cc] font-bold">Passwords must be at least 8 characters long.</p>
            <div className="flex gap-2 items-center w-full pt-4 border-b-2 border-[#a972f54d] hover:border-[#a972f5] relative focus-within:[&>p]:block">
                <p className="hidden absolute left-1 top-0 text-xs text-[#c49ef8cc] font-bold">Confirm Password</p>
                <svg className="w-[14px] h-[14px]"><use href="#svg-lock" /></svg>
                <input type="password" className="w-full outline-none focus-within:placeholder:opacity-0" placeholder="Confirm Password" />
            </div>

            <p className="text-[#c49ef8cc] font-bold py-4">Birthday</p>
            <div className="w-full flex justify-between items-center pt-4">
                <div className="relative focus-within:[&>label]:-top-[70%] focus-within:[&>label]:text-xs focus-within:[&>label]:text-white">
                    <label className={`absolute left-0 ${month === 0 ? "-top-[20%]" : "-top-[70%] text-xs"} ${month * day * year === 0 ? "text-[#ef4444]" : "text-white"} font-bold`}>Month</label>
                    <select value={month} onChange={(e) => setMonth(parseInt(e.target.value))} className={`w-[128px] pb-1 [&>option]:bg-black text-white border-b-2 ${month * day * year === 0 ? "border-[#ef4444]" : "border-[#a972f54d]"}`} aria-label="Month" defaultValue={0}>
                        <option value="0" disabled></option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
                <div className="relative focus-within:[&>label]:-top-[70%] focus-within:[&>label]:text-xs focus-within:[&>label]:text-white">
                    <label className={`absolute left-0 ${day === 0 ? "-top-[20%]" : "-top-[70%] text-xs"} ${month * day * year === 0 ? "text-[#ef4444]" : "text-white"} font-bold`}>Day</label>
                    <select value={day} onChange={(e) => setDay(parseInt(e.target.value))} className={`w-[128px] pb-1 [&>option]:bg-black text-white border-b-2 ${month * day * year === 0 ? "border-[#ef4444]" : "border-[#a972f54d]"}`} aria-label="Day" defaultValue={0}>
                        <option value="0" disabled></option>
                        {Array.from({ length: 31 }, (_, i) => (i + 1)).map((v, i) => <option key={i} value={v}>{v}</option>)}
                    </select>
                </div>
                <div className="relative focus-within:[&>label]:-top-[70%] focus-within:[&>label]:text-xs focus-within:[&>label]:text-white">
                    <label className={`absolute left-0 ${year === 0 ? "-top-[20%]" : "-top-[70%] text-xs"} ${month * day * year === 0 ? "text-[#ef4444]" : "text-white"} font-bold`}>Year</label>
                    <select value={year} onChange={(e) => setYear(parseInt(e.target.value))} className={`w-[128px] pb-1 [&>option]:bg-black text-white border-b-2 ${month * day * year === 0 ? "border-[#ef4444]" : "border-[#a972f54d]"}`} aria-label="Year" defaultValue={0}>
                        <option value="0" disabled></option>
                        {Array.from({ length: 110 }, (_, i) => (2012 - i)).map((v, i) => <option key={i} value={v}>{v}</option>)}
                    </select>
                </div>
            </div>
            {month * day * year === 0 && <p className="text-[10px] text-[#ef4444] font-bold">You must be 13 years old to sign up.</p>}

            <div className="flex gap-2 items-center w-full pt-4 mt-4 border-b-2 border-[#a972f54d] hover:border-[#a972f5] relative focus-within:[&>p]:block">
                <p className="hidden absolute left-1 top-0 text-xs text-[#c49ef8cc] font-bold">Email</p>
                <svg className="w-[14px] h-[14px]"><use href="#svg-email" /></svg>
                <input type="email" className="w-full outline-none focus-within:placeholder:opacity-0" placeholder="Email" />
            </div>
            <div className="flex items-center gap-1 text-[#b18fdb] hover:bg-[#c49ef833] rounded-md w-fit py-2 px-2 -mx-2 my-4">
                <input type="checkbox" id="check" className="" />
                <label htmlFor="check" className="text-[12px]">Send me offers, news, and updates about Foony.</label>
            </div>

            <div className="w-full text-center text-[11.2px] text-[#b18fdb] font-bold pb-4">
                <span>This site is protected by reCAPTCHA and the Google </span>
                <span className="text-white">Privacy Policy </span>
                <span>and </span>
                <span className="text-white">Terms of Service</span>
                <span> apply. </span>
            </div>
            <div className="w-full text-center text-[11.2px] text-[#b18fdb] font-bold pb-8">
                <span>By clicking Sign Up, you are indicating that you have read and acknowledge the </span>
                <span className="text-white">Terms of Service, Privacy Policy </span>
                <span>and </span>
                <span className="text-white">Community Guidelines.</span>
            </div>
            <div className="absolute left-0 -bottom-[30px] w-full flex justify-center items-center">
                <button className="text-[20px] px-6 p-2 pb-3 rounded-md bg-[#16a34a] text-white font-bold hover:bg-[#22c55e] hover:brightness-110  active:bg-[#15803d]active:brightness-90 shadow-[inset_0_-5px_0_#15803d,0_3px_4px_0_rgba(30,14,17,.9)] hover:shadow-[inset_0_-5px_0_#16a34a,0_3px_4px_0_rgba(30,14,17,.9)] active:shadow-[inset_0_5px_0_#16a34a,0_3px_4px_0_rgba(30,14,17,.9)]">SIGN UP</button>
            </div>
        </div>
    )
}
const TypeSelector = ({ type, selected, setSelectedType }: { type: ModalType, selected: boolean, setSelectedType: Dispatch<SetStateAction<ModalType>> }) => {
    return (
        <div onClick={() => setSelectedType(type)} className={`w-full flex justify-center items-center h-full bg-[#2b1643] ${type === "login" ? "rounded-tl-2xl" : "rounded-tr-2xl"} ${selected ? "" : " hover:bg-[#2b164399] text-[#c49ef8] hover:text-white"}`}>
            <button className={`w-[160px] h-full ${selected ? "border-b-2 border-[#e879f9]" : ""}`}>
                {type === "login" ? "LOG IN" : "SIGN UP"}
            </button>
        </div>
    )
}
export default SignModal