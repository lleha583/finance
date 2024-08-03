export interface IRecord {
  card: string;
  email: string;
  name: string;
  transitions: string,
}

export interface IUserData {
  card: ICard[],
  transition: ITransitions[],
  status: string
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
  status: string;
  record: IRecord;
  metaData: any;
}
