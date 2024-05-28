import { FruitOrVeggy, TableWrapperTypes } from "./Types"

export const Vegetables = ({ inputValue, isThere }: TableWrapperTypes) => {
    const veggies: FruitOrVeggy = [
        { id: 1, name: "patlıcan", price: "30", stock: true },
        { id: 2, name: "biber", price: "30", stock: false },
        { id: 3, name: "kabak", price: "30", stock: true },
        { id: 4, name: "salatalık", price: "30", stock: false }
    ]

    const filteredVeggies = veggies.filter((veggie) => {
        const matchesName = veggie.name.toLowerCase().includes(inputValue.toLowerCase());
        const matchesStock = !isThere || veggie.stock;
        return matchesName && matchesStock;
    });


    return (

        <>

            <div>
                <h3>VEGİTABLES</h3>
                <ul>
                    {filteredVeggies.map((veggie) => {
                        if (veggie.name.toLowerCase().includes(inputValue.toLowerCase()))
                            return (
                                <li key={veggie.id}>{veggie.name}</li>
                            )

                    })}
                </ul>
            </div>

        </>

    )
}