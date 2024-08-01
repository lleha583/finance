import { useSelector } from "react-redux";
import Dashboard from "../../components/Dashboard/Dashboard"
import Transition from "../../components/Transition/Transition";
import { IUser } from "../../interface/interface";
import DiagrammPie from "../../components/DiagrammPie/DiagrammPie";
import "./home.module.scss"

export default function Home() {
  const user = useSelector((state: IUser) => {
    return state;
  });

  if (user.status === "fulfilled") {
    return (
      <div>
        <Dashboard card={user.record.card} />
        <Transition transition={user.record.transitions} />
        <DiagrammPie transition={user.record.transitions} />
      </div>
    );
  }
}
