const PointerMeta = () => {
    return (
        <div className="grid grid-cols-[1fr_auto] w-full items-center order-2 gap-2 p-2 py-0 sm:flex sm:order-1 sm:flex-col sm:w-[auto] sm:h-full sm:p-0 sm:gap-2 sm:pb-2 sm:pt-12 sm:px-1 bg-[#211134]">
            <div className="w-12 h-12 max-sm:order-2 sm:w-16 sm:h-16 bg-gradient-to-r from-[#fffcf6] to-[#e6e2ed] bg-white shadow-[0_6px_6px_#130124,inset_-3px_-4px_6px_#bba388,inset_-2px_-19px_#ffffff3d] rounded-full flex justify-center items-center">
                <div className="w-2 h-2 rounded-full border-2 border-[#fd0a0a]" />
            </div>
            <div className="w-[50%] h-4 sm:w-4 sm:h-[477px] m-auto">
                <img className="sm:-rotate-90 origin-top-right sm:-translate-x-[100%] sm:min-w-[477px] min-h-[16px]" src="https://foony.com/img/games/8-ball-pool-online-billiards/items/Cues/poolCueDefault.webp" />
            </div>
        </div>
    )
}
export default PointerMeta