import { useSelector } from "react-redux";
import { IUser, ITransitions, IUserData } from "../../interface/interface";
import shopping from "../../assets/icons/components/shopping.svg";
import "./transitions.scss";
import { useState } from "react";
import putApi from "../../services/putApi";
import dayjs from "dayjs";
import removeApi from "../../services/removeApi";


export default function Transitions() {
  const user = useSelector((state: {user: IUser, userData: IUserData}) => {return state});

  let day = dayjs();

  const [trans, setTrans] = useState(false);
  const [category, setCategory] = useState<string>("");
  const [date, setDate] = useState<string>(``);
  const [money, setMoney] = useState<string>("");

  const createApi = () => {
    const transData = {
        category: category,
        money: +money,
        date: date,
        id: user.userData.transition[0].id + 1
    }
    
    putApi({user, transData})
  }

  const deleteApi = (key: number) => {
    removeApi({user, key})
  }

  if(user.userData.status === "fulfilled") {
    return (
      <section>
      <h1>Transitions</h1>
      <button className="btn_new" onClick={() => {setTrans(!trans);}}>Add transition</button>
      <div className="transition__inner transition_page">
      <div className="transition_block">
        <div className="transition_block_img">
            <p>category</p>
        </div>
        <p>date</p>
        <p>price</p>
        <p>settings</p>
        </div>
        {trans === true ? (
          <div className="transition_block">
            <div className="transition_block_img">
              <img src={shopping} />
              <input onChange={(e)=>{setCategory(e.target.value)}} value={category} placeholder="Category" type="text" />
            </div>
            <input  onChange={(e)=>{setDate(e.target.value)}} value={date} placeholder="date"  type="text" />
            <input  onChange={(e)=>{setMoney(e.target.value)}} value={money} placeholder="money"  type="text" />
            <button className="btn_add" onClick={createApi}>add</button>
          </div>) : ("")}
        {user.userData.transition.map((item: ITransitions) => {
          return (
            <div className="transition_block" key={item.id}>
              <div className="transition_block_img">
                <img src={shopping} />
                <p>{item.category}</p>
              </div>
              <p>{item.date}</p>
              <p>${item.money}</p>
              <button className="btn_add" onClick={()=>{deleteApi(item.id)}}>Delete</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
}
