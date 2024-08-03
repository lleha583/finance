import { useSelector } from "react-redux";
import Dashboard from "../../components/Dashboard/Dashboard"
import Transition from "../../components/Transition/Transition";
import { IUser, IUserData } from "../../interface/interface";
import DiagrammPie from "../../components/DiagrammPie/DiagrammPie";
import "./home.module.scss"

export default function Home() {
  const user = useSelector((state: {user: IUser, userData: IUserData}) => {
    return state;
  });

  if (user.userData.status === "fulfilled") {
      return (
      <>
        <Dashboard card={user.userData.card} />
        <Transition transition={user.userData.transition} />
        <DiagrammPie transition={user.userData.transition} />
      </>
    )
  }
}
