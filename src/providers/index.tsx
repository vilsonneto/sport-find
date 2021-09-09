import { ReactNode } from "react";
import { IProvidersProps } from "../types/IProviders";
import { GroupsProvider } from "./Groups";

const Providers = ({ children }: IProvidersProps) => {
  return <GroupsProvider>{children}</GroupsProvider>;
};

export default Providers;
