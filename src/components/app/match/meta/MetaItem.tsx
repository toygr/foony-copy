import { ReactNode } from "react"

type Props = {
    className?: string,
    options: {
        justify: string,
        balls: number[]
    },
    children: ReactNode,
    title: string,
}
const MetaItem = ({ className, options, children, title }: Props) => {
    return (
        <div className={`gap-0 md:gap-1 lg:gap-2 grid grid-rows-[auto_1fr] m-auto overflow-hidden sm:m-0 ${className}`}>
            <div className="relative items-center flex flex-col group col-start-[avatar-col] col-end-[avatar-col] row-start-1 row-end-3 self-center [&>*]:w-[48px] [&>*]:h-[48px] lg:[&>*]:w-[64px] lg:[&>*]:h-[64px]">
                <div className="relative w-[64px] md:w-[95px] justify-self-end hover:brightness-125 hover:z-20">
                    <div className="flex-center overflow-hidden aspect-square bg-[#380c5c] border-solid border-default-900 rounded-[15%] w-full h-auto border-0 p-[2px]">
                        {children}
                        <div className="absolute inset-0 border-solid border-white border-[3.5px] rounded-[15%] z-50">
                        </div>
                        <div className="absolute inset-0 border-solid border-default-700 border-[3.5px] rounded-[15%] z-40">
                        </div>
                    </div>
                </div>
            </div>
            <p className={`font-bold whitespace-nowrap overflow-ellipsis overflow-hidden text-center text-white z-10 md:whitespace-break-spaces self-end w-fit col-start-[name-col] col-end-[name-col] row-1 m-0 md:m-0 text-xs leading-tight sm:text-sm md:text-[16px] lg:text-lg ${options.justify}`}>
                <span className="hover:cursor-pointer hover:underline">{title}</span>
            </p>
            <div className={`self-start col-start-[name-col] col-end-[name-col] row-start-2 row-end-3 mt-1.5 md:mt-2 lg:mt-0 ${options.justify} flex justify-center items-center flex-wrap sm:gap-1 lg:gap-2`}>
                {options.balls.map((v) =>
                    <div key={v} style={{ backgroundImage: `url(https://foony.com/img/games/8-ball-pool-online-billiards/items/Balls/poolBallDefault_${v}.webp)` }} className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-center bg-size-[300%] rounded-full shadow-[black_0px_2px-4px] hover:brightness-125" />)}
            </div>
        </div>
    )
}
export default MetaItem