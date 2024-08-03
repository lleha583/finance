import { IUser, ITransitions, IUserData } from "../interface/interface";

export default function removeApi(props: {user: { user: IUser; userData: IUserData }, key: number;}) {
  const deleteTrans: ITransitions[] = [];

  const balance = {
    card: [{ ...props.user.userData.card[0] }],
  };

  props.user.userData.transition.filter((item) => {
    if (+item.id == +props.key) {
      balance.card[0].balance = +Number(item.money).toFixed(2);
      return;
    }
    deleteTrans.push(item);
    return;
  });

  const pushData = {
    transitions: [...deleteTrans],
  };

  const editApi = (url: string, data: any) => {
    fetch(url, {
      method: "PUT",
      headers: {
        "X-Master-Key":"$2a$10$.qwR4ivgwYmt0svX8dJ0heS1oXkqsdFhDW1gWMSF01PGXqOY6WV0y",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })};

  editApi(props.user.user.record.transitions, pushData);
  editApi(props.user.user.record.card, balance);
}
