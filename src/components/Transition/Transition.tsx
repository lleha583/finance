import "./Transition.scss";
import shopping from "../../assets/icons/components/shopping.svg";
import { ITransitions, IUser } from "../../interface/interface";

export default function Transition(props: { transition: ITransitions[] }) {
  return (
    <section className="transition">
      <h1>Recent Transition</h1>
      <div className="transition__inner">
        {props.transition.map((item: ITransitions) => {
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
