import Dashboard from "../../components/Dashboard/Dashboard";
import HeaderUser from "../../components/HeaderUser/HeaderUser";
import Transition from "../../components/Transition/Transition";

export default function Home() {
    return (
        <>
            <HeaderUser />
            <Dashboard />
            <Transition />
        </>
    )
}