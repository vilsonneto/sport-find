import Header from "../../components/Header";
import GroupCard from "../../components/GroupCard";
import { GroupsContainer } from "./styles";
import ArrowLeft from "../../components/ArrowLeft";

import { grupos } from "../../testeslocais/mocks";

const Groups = () => {
  return (
    <section>
      <Header />
      <ArrowLeft />
      <GroupsContainer>
        {grupos.map((group, index) => (
          <GroupCard key={index} group={group} />
        ))}
      </GroupsContainer>
    </section>
  );
};
export default Groups;
