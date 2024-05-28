import { useState } from "react"
import { InputArea } from "./InputArea"
import { TableWrapper } from "./TableWrapper"

export const AppWrapper = () => {

    const [inputValue, setInputValue] = useState<string>('')
    const [isThere, setIsThere] = useState(false)

    return (
        <>
            <InputArea
                inputValue={inputValue}
                setInputValue={setInputValue}
                isThere={isThere}
                setIsThere={setIsThere}
            />
            <TableWrapper
                inputValue={inputValue}
                isThere={isThere}
            />
        </>


    )
}