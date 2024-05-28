import { TableWrapperTypes, FruitOrVeggies } from "./Types"

export const FruitsTable = ({ inputValue, isThere }: TableWrapperTypes) => {
    const fruits: FruitOrVeggies = [
        { id: 1, name: "armut", price: "25", stock: false },
        { id: 2, name: "elma", price: "20", stock: true },
        { id: 3, name: "kiraz", price: "15", stock: false },
        { id: 4, name: "kivi", price: "25", stock: false },
        { id: 5, name: "çilek", price: "20", stock: true },
        { id: 6, name: "ananas", price: "15", stock: false },
        { id: 7, name: "avakado", price: "40", stock: true },
        { id: 8, name: "vişne", price: "40", stock: true },

    ]


    return (

        <>
            <div>
                <ul>
                    <h3 style={{ textAlign: "center" }}>FRUİTS</h3>

                    {fruits.filter((fruit) => {
                        const matchesName = fruit.name.toLowerCase().includes(inputValue.toLowerCase());
                        const matchesStock = !isThere || fruit.stock;
                        return matchesName && matchesStock;
                    }).map((fruit) => (
                        <li key={fruit.id} style={{ textAlign: "center" }}>
                            {`${fruit.name} - ${fruit.price} ₺`}
                        </li>
                    ))
                    }



                </ul>
            </div>
        </>

    )
}