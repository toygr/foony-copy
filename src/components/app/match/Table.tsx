import { Dispatch, SetStateAction, useState } from "react"

const Table = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="w-full h-full relative font-bold overflow-hidden">
            <div className="absolute left-0 top-0 p-2 hover:bg-[#51298499] rounded-md">
                <svg onClick={() => setShow(true)} className="w-[27px] h-[27px] hover:rotate-90 ease-in-out transition-all z-10"><use href="#svg-gear" /></svg>
                <SettingDialog show={show} setShow={setShow} />
            </div>
            <div className="w-full h-full bg-contain bg-center bg-no-repeat bg-[url(https://media.discordapp.net/attachments/1296435871746359337/1357419418598117567/DxZrLUaFlVC4AAAAAElFTkSuQmCC.png?ex=67f022d9&is=67eed159&hm=b54bb7d9fe72c68fe675dee1bd23e9d669ebd8f2086eabb7e283fd8e4aa71ff8&=&format=webp&quality=lossless&width=1358&height=881)]" />
        </div>
    )
}
const SettingDialog = ({ show, setShow }: { show: boolean, setShow: Dispatch<SetStateAction<boolean>> }) => {
    return (
        show ?
            <div className="absolute left-0 top-0 w-[100vw] h-[100vh]">
                <div onClick={() => setShow(prev => !prev)} className="absolute left-0 top-0 w-[100vw] h-[100vh]" />
                <div className="absolute left-0 top-10 w-[200px] px-1 py-3 bg-[#512984] rounded-md border-2 border-[#6131a4]">
                    <div className="w-full flex items-end px-4 justify-between">
                        <div className="flex flex-col gap-2">
                            <span className="text-[#c49ef8] text-[12px] font-bold">Invite Code</span>
                            <input type="text" value="e2mtsjfk" readOnly className="w-full text-white uppercase font-semibold outline-none border-b-2 border-white/20" />
                        </div>
                        <button className="p-2 rounded-full hover:bg-[#6131a4]">
                            <svg className="w-4 h-4"><use href="#svg-copy" /></svg>
                        </button>
                    </div>
                    <p className="text-[#c49ef8] text-[13px] px-4 py-2 ">Graphics</p>
                    <GraphicsCollection />
                    <p className="text-[#c49ef8] text-[13px] px-4 py-2 ">Game</p>
                    <div className="w-full flex px-4 py-2 justify-between items-center">
                        <button className="text-[16px] p-2 rounded-md bg-[#763acb] text-white font-bold hover:bg-[#8a4ee5] hover:brightness-110  active:bg-[#6131a4]active:brightness-90 shadow-[inset_0_-5px_0_#6630b2,0_3px_4px_0_rgba(30,14,17,.9)] hover:shadow-[inset_0_-5px_0_rgb(120,71,196),0_3px_4px_0_rgba(30,14,17,.9)] active:shadow-[inset_0_5px_0_#894ce2,0_3px_4px_0_rgba(30,14,17,.9)]">SPECTATE</button>
                        <button className="text-[16px] p-4 rounded-md bg-[#763acb] text-white font-bold hover:bg-[#8a4ee5] hover:brightness-110  active:bg-[#6131a4]active:brightness-90 shadow-[inset_0_-5px_0_#6630b2,0_3px_4px_0_rgba(30,14,17,.9)] hover:shadow-[inset_0_-5px_0_rgb(120,71,196),0_3px_4px_0_rgba(30,14,17,.9)] active:shadow-[inset_0_5px_0_#894ce2,0_3px_4px_0_rgba(30,14,17,.9)]">
                            <svg className="w-4 h-4"><use href="#svg-flag" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            : <></>
    )
}
const GraphicsCollection = () => {
    const items = ["Auto", "Low", "Medium", "High", "Highest"]
    const [indexItem, setIndexItem] = useState(0)
    return (
        <ul className="[&>li]:hover:bg-[#6131a4]">
            {
                items.map((item, i) =>
                    <GraphicsItem setIndexItem={setIndexItem} key={i} index={i} checked={i === indexItem} title={item} />)
            }
        </ul>
    )
}
const GraphicsItem = ({ checked, title, setIndexItem, index }: { index: number, checked?: boolean, title: string, setIndexItem: Dispatch<SetStateAction<number>> }) => {
    return (
        <li onClick={() => {
            setIndexItem(index)
        }} className="flex items-center gap-2 px-4 py-1">
            <div className="w-4 h-4">
                {checked && <svg className="w-4 h-4"><use href="#svg-check" /></svg>}
            </div>
            <span>{title}</span>
        </li>
    )
}
export default Table