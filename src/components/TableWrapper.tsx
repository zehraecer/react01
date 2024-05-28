import { FruitsTable } from "./FruitsTable"
import { TableWrapperTypes } from "./Types"
import { Vegetables } from "./Vegetables"

export const TableWrapper = ({ inputValue, isThere }: TableWrapperTypes) => {

    return (

        <>
            <Vegetables
                inputValue={inputValue}
                isThere={isThere}
            />
            <FruitsTable
                inputValue={inputValue}
                isThere={isThere}
            />
        </>

    )
}