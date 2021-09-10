import { IProvidersProps } from "../types/IProviders";
import { GroupsProvider } from "./Groups";
import { AuthProvider } from "./Auth";

const Providers = ({ children }: IProvidersProps) => {
  return (
    <AuthProvider>
      <GroupsProvider>{children}</GroupsProvider>;
    </AuthProvider>
  );
};

export default Providers;
