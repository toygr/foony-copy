import { userAvatarURL } from "@/utils"
import MetaItem from "./MetaItem"
import Image from "next/image"

const Meta = () => {
    return (
        <div className="bg-default-1100 grid items-center gap-1 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-4 p-1 lg:p-2 bg-[#2b1643]">
            <MetaItem
                className="grid-cols-[[name-col]_minmax(0,1fr)_[avatar-col]_auto]"
                title="(You) Conscious Larva"
                options={{
                    justify: "justify-self-end",
                    balls: [1, 2, 3, 4, 5, 6, 7]
                }}>
                <Image alt="8M0S59TEBHSx6picWkDN8PWmR572's avatar" width={100} height={100} className="text-hidden p-0 object-contain w-full h-full" src={userAvatarURL} decoding="async" loading="lazy" />
            </MetaItem>
            <div className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] rounded-lg bg-[#170c25] flex-center m-auto sm:m-0" />
            <MetaItem
                className="opacity-70 grid-cols-[[avatar-col]_auto_[name-col]_minmax(0,1fr)]"
                title="Bulby (Bot)"
                options={{
                    justify: "justify-self-start",
                    balls: [9, 10, 11, 12, 13, 14, 15]
                }}>
                <Image alt="bot_0's avatar" width={100} height={100} className="text-hidden p-0 object-contain w-full h-full" src="https://foony.com/img/avatars/bulby.webp" decoding="async" loading="lazy" />
            </MetaItem>
        </div>
    )
}
export default Meta