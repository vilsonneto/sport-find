import Header from "../../components/Header";
import GroupCard from "../../components/GroupCard";
import { Container, GroupsContainer } from "./styles";
import ArrowLeft from "../../components/ArrowLeft";
import { useGroups } from "../../providers/Groups";
import CategoryItem from "../../components/CategoryItem";
import { useState } from "react";

const Groups = () => {
  const { allGroups } = useGroups();
  const [groupList, setGroupList] = useState(allGroups);

  const categoryFilter = (chosenCategory: string) => {
    if (chosenCategory === "AllGroups") {
      setGroupList(allGroups);
    } else {
      let filteredGroups = allGroups.filter(
        (group) => group.category === chosenCategory
      );
      setGroupList(filteredGroups);
    }
  };

  return (
    <>
      <Header />
      <Container>
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
    </>
  );
};
export default Groups;
