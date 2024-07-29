import "./Transition.scss";
import { useState } from "react";
import shopping from "../../assets/icons/components/shopping.svg"

interface ITransition {
    category: string,
    date: string,
    money: number,
    id: number,
}

const testTransition = [
    {
        category: 'clothes',
        date: '14.10.2024',
        money: 274,
        id: 0,
    },
    {
        category: 'products',
        date: '23.10.2024',
        money: 43.56,
        id: 1,
    },
    {
        category: 'electronics',
        date: '06.07.2024',
        money: 990.99,
        id: 2,
    }
]
export default function Transition() {

    const [transition, setTransition] = useState<ITransition[]>([...testTransition]);
    return (
        <section className="transition">
            <h1>Recent Transition</h1>
            <div className="transition__inner">
            {
                transition.map((item: ITransition) => {
                    console.log(item)
                    return (
                        <div className="transition_block" key={item.id}>
                            <div className="transition_block_img">
                                    <img src={shopping} />
                                <p>{item.category}</p>
                            </div>
                            <p>{item.date}</p>
                            <p>${item.money}</p>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}