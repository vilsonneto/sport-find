import Header from "../../components/Header";
import GroupCard from "../../components/GroupCard";
import { Container, GroupsContainer } from "./styles";
import ArrowLeft from "../../components/ArrowLeft";

import { grupos } from "../../testeslocais/mocks";
import CategoryItem from "../../components/CategoryItem";
import { useState } from "react";

const Groups = () => {
  const [groupList, setGroupList] = useState(grupos);

  const categoryFilter = (chosenCategory: string) => {
    if (chosenCategory === "AllGroups") {
      setGroupList(grupos);
    } else {
      let filteredGroups = grupos.filter(
        (group) => group.category === chosenCategory
      );
      setGroupList(filteredGroups);
    }
  };

  return (
    <Container>
      <Header />
      <div className="cabecalho">
        <ArrowLeft />
        <h1 onClick={() => categoryFilter("AllGroups")}>Grupos</h1>
      </div>
      <CategoryItem filterCategory={categoryFilter} />
      <GroupsContainer>
        {groupList.map((group, index) => (
          <GroupCard key={index} group={group} />
        ))}
      </GroupsContainer>
    </Container>
  );
};
export default Groups;
