import "./Dashboard.scss";
import { ICard } from "../../interface/interface";
import iconMoney from "../../assets/icons/components/money.svg";

export default function Dashboard(props: {card: ICard[]}) {

  return (
    <section className="dashboard">
      <div>
        <h1>Dashboard</h1>
        {props.card.map((item: ICard, index: number) => {
          return (
            <div className="card" key={index}>
              <div className="card__inner">
                <div className="card_balance">
                  <p>Current Balance</p>
                  <h2>${item.balance}</h2>
                </div>
                <div className="card_info">
                  <p>{item.number}</p>
                  <p>{item.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="link_transitions">
        <img src={iconMoney} />
        <h1>spent today</h1>
        <h2>0</h2>
      </div>
    </section>
  );
}
