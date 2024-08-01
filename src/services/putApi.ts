import { useSelector } from "react-redux";
import { IRecord, ITransitions } from "../interface/interface";

export default function putApi(props: {record: IRecord, transData: ITransitions}) {


    const pushData = {
        name: props.record.name,
        email: props.record.email,
        card: [...props.record.card],
        transitions: [...props.record.transitions, props.transData]
      }
    console.log(pushData)
    
      fetch("https://api.jsonbin.io/v3/b/66a8dc7fad19ca34f88ef50d", {
        method: "PUT",
        headers: {
          "X-Master-Key": "$2a$10$.qwR4ivgwYmt0svX8dJ0heS1oXkqsdFhDW1gWMSF01PGXqOY6WV0y",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pushData),
      })
      .then(response=>response.json())
      .then(value=>console.log(value))

      setTimeout(() =>{
            location.reload();
      }, 1000)

}