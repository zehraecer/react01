import { TableWrapperTypes, FruitOrVeggies } from "./Types"

export const FruitsTable = ({ inputValue, isThere }: TableWrapperTypes) => {
    const fruits: FruitOrVeggies = [
        { id: 1, name: "armut", price: "25", stock: false },
        { id: 2, name: "elma", price: "20", stock: true },
        { id: 3, name: "kiraz", price: "15", stock: false },
        { id: 4, name: "erik", price: "40", stock: true },

    ]

    const filteredFruits = fruits.filter((fruit) => {
        const matchesName = fruit.name.toLowerCase().includes(inputValue.toLowerCase());
        const matchesStock = !isThere || fruit.stock;
        return matchesName && matchesStock;
    });
    return (

        <>
            <div>
                <h3>FRUİTS</h3>
                <ul>

                    {filteredFruits.map((fruit) => (
                        <li key={fruit.id}>
                            {`${fruit.name} - ${fruit.price}`}
                        </li>
                    ))}

                </ul>
            </div>
        </>

    )
}