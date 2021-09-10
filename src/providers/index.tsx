import { IProvidersProps } from "../types/IProviders";
import { GroupsProvider } from "./Groups";
import { AuthProvider } from "./Auth";
import { EventsProvider } from "./Events";

const Providers = ({ children }: IProvidersProps) => {
  return (
    <AuthProvider>
      <GroupsProvider>
        <EventsProvider>{children}</EventsProvider>
      </GroupsProvider>
      ;
    </AuthProvider>
  );
};

export default Providers;
