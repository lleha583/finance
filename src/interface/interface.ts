export interface IRecord {
  card: ICard[];
  email: string;
  name: string;
  transitions: ITransitions[],
}

export interface ICard {
    balance: number,
    number: string,
    date: string
}

export interface ITransitions {
    category: string,
    date: string,
    money: number,
    id: number
}

export interface IUser {
  card: any;
  status: string;
  record: IRecord;
  metaData: any;
}
