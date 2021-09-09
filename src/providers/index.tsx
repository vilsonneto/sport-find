import { ReactNode } from "react";

interface IProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return <>{children}</>;
};

export default Providers;
