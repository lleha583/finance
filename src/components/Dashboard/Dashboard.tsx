import "./Dashboard.scss";

export default function Dashboard() {

    let money = '1236.34';
    let number = '4266 5290 4726 8442';
    let year = '09/26';

  return (
    <section className="dashboard">
        <h1>Dashboard</h1>
        <div className="card">
            <div className="card__inner">
                <div className="card_balance">
                    <p>Current Balance</p>
                    <h2>${money}</h2>
                </div>
                <div className="card_info">
                    <p>{number}</p>
                    <p>{year}</p>
                </div>
                
            </div>
        </div>
    </section>
  );
}
