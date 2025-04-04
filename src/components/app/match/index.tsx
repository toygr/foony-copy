import Meta from "./meta"
import Table from "./Table"

const Match = () => {
    return (
        <div className="min-h-0 h-full flex flex-col order-1 bg-default-1100 sm:order-2 sm:min-w-0 sm:h-[auto] sm:w-full sm:min-h-[auto]">
            <Meta />
            <Table />
        </div>
    )
}
export default Match