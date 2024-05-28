import { InputAreaProps } from "./Types"

export const InputArea = ({ inputValue, setInputValue, isThere, setIsThere }: InputAreaProps) => {


    console.log(isThere);

    return (

        <>
            <div>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <div>
                <input type="checkbox" checked={isThere} onChange={(e) => setIsThere(e.target.checked)} />
                <label htmlFor="">Only show products in stock</label>

            </div>
        </>

    )
}