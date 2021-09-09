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
  username: string;
  email: string;
  password: string;
  state: string;
  subscribed_groups: [];
  subscribed_events: [];
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

export interface IEvents {}

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
