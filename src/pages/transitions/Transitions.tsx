import { useSelector } from "react-redux";
import { IUser } from "../../interface/interface";
import { ITransitions } from "../../interface/interface";
import shopping from "../../assets/icons/components/shopping.svg";
import "./transitions.scss";
import { useState } from "react";
import putApi from "../../services/putApi";

export default function Transitions() {
  const user = useSelector((state: IUser) => {return state;});

  const [trans, setTrans] = useState(false);
  const [category, setCategory] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [money, setMoney] = useState<string>("");

  const createPut = () => {
    const transData = {
      category: category,
      money: Number(money),
      date: date,
      id: 4
    }
    const record = user.record
    putApi({record, transData})
  }

  if(user.status === "fulfilled") {
    return (
      <section>
      <h1>Transitions</h1>
      <button className="btn_add" onClick={() => {setTrans(!trans);}}>Add transition</button>
      <div className="transition__inner transition_page">
      <div className="transition_block">
        <div className="transition_block_img">
            <p>category</p>
        </div>
        <p>date</p>
        <p>price</p>
        </div>
        {trans === true ? (
          <div className="transition_block">
            <div className="transition_block_img">
              <img src={shopping} />
              <input onChange={(e)=>{setCategory(e.target.value)}} value={category} placeholder="Category" type="text" />
            </div>
            <input  onChange={(e)=>{setDate(e.target.value)}} value={date} placeholder="date"  type="text" />
            <input  onChange={(e)=>{setMoney(e.target.value)}} value={money} placeholder="money"  type="text" />
            <button onClick={createPut}>add</button>
          </div>) : ("")}
        {user.record.transitions.map((item: ITransitions) => {
          return (
            <div className="transition_block" key={item.id}>
              <div className="transition_block_img">
                <img src={shopping} />
                <p>{item.category}</p>
              </div>
              <p>{item.date}</p>
              <p>${item.money}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
}
