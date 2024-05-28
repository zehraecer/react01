import { FruitOrVeggy, TableWrapperTypes } from "./Types"

export const Vegetables = ({ inputValue, isThere }: TableWrapperTypes) => {
    const veggies: FruitOrVeggy = [
        { id: 1, name: "patlıcan", price: "30", stock: true },
        { id: 2, name: "biber", price: "10", stock: false },
        { id: 3, name: "kabak", price: "20", stock: true },
        { id: 4, name: "salatalık", price: "25", stock: false },
        { id: 5, name: "havuç", price: "35", stock: true },
        { id: 6, name: "enginar", price: "15", stock: false },
        { id: 7, name: "fasulye", price: "40", stock: true },
        { id: 8, name: "kereviz", price: "26", stock: false },
    ]

    return (

        <>

            <div>
                <ul>
                    <h3>VEGİTABLES</h3>

                    {veggies.filter((veggie) => {
                        const input = veggie.name.toLowerCase().includes(inputValue.toLowerCase());
                        const checkbox = !isThere || veggie.stock;
                        return input && checkbox;
                    }).map((veggie) => {
                        if (veggie.name.toLowerCase().includes(inputValue.toLowerCase()))
                            return (
                                <li key={veggie.id}>{`
                                ${veggie.name}- ${veggie.price}₺
                                `
                                }
                                </li>
                            )

                    })

                    }
                </ul>
            </div>

        </>

    )
}