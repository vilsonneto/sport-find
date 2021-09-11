import Header from "../../components/Header";
import GroupCard from "../../components/GroupCard";
import { GroupsContainer } from "./styles";
import ArrowLeft from "../../components/ArrowLeft";

import { grupos } from "../../testeslocais/mocks";
import CategoryItem from "../../components/CategoryItem";

const Groups = () => {
  const categoryFilter = (x: string) => {
    console.log(x);
  };

  return (
    <section>
      <Header />
      <ArrowLeft />
      <CategoryItem filterCategory={categoryFilter} />
      <GroupsContainer>
        {grupos.map((group, index) => (
          <GroupCard key={index} group={group} />
        ))}
      </GroupsContainer>
    </section>
  );
};
export default Groups;
