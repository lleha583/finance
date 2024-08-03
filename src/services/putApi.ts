
import { ITransitions, IUser, IUserData } from "../interface/interface";

export default function putApi(props: {user: { user: IUser; userData: IUserData }, transData: ITransitions;}) {
  const balance = {
    card: [
      {
        ...props.user.userData.card[0],
        balance: Number((props.user.userData.card[0].balance - props.transData.money).toFixed(2)),
      }
    ]
  };

  const pushData = {
    transitions: [props.transData, ...props.user.userData.transition]
  };

  const editApi = (url: string, data: any) => {
    fetch(url, {
      method: "PUT",
      headers: {
        "X-Master-Key": "$2a$10$.qwR4ivgwYmt0svX8dJ0heS1oXkqsdFhDW1gWMSF01PGXqOY6WV0y",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })};

  editApi(props.user.user.record.transitions, pushData);
  editApi(props.user.user.record.card, balance);
}
