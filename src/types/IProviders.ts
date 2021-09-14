import { ReactNode } from "react";

export interface IProvidersProps {
  children: ReactNode;
}

export interface IDecode {
  email: string;
  sub: string | number;
  exp?: number;
  iat?: number;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  state: string;
  subscribed_groups: IGroup[];
  subscribed_events: IEvents[];
}

export interface IGroupData {
  name: string;
  description: string;
  category: string;
}

export interface IMembers {
  name: string;
  id: number;
}

export interface IEvents {
  name: string;
  group_Id: number;
  local: string;
  data: string;
  category: string;
  description: string;
  users: number[];
  creator: number;
  id: number;
}

export interface IBanneds {
  id: number;
}

export interface IGroup {
  id: number;
  name: string;
  description: string;
  category: string;
  creator: number;
  groupEvents: IEvents[];
  members: IMembers[];
  banned: IBanneds[];
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData {
  username: string;
  email: string;
  password: string;
  state: string;
}
