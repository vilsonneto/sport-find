import Header from "../../components/Header";
import GroupCard from "../../components/GroupCard";
import { Container, GroupsContainer } from "./styles";
import ArrowLeft from "../../components/ArrowLeft";

import { grupos } from "../../testeslocais/mocks";
import CategoryItem from "../../components/CategoryItem";

const Groups = () => {
  const categoryFilter = (x: string) => {
    console.log(x);
  };

  return (
    <Container>
      <Header />
      <div className="cabecalho">
        <ArrowLeft />
        <h1>Grupos</h1>
      </div>
      <CategoryItem filterCategory={categoryFilter} />
      <GroupsContainer>
        {grupos.map((group, index) => (
          <GroupCard key={index} group={group} />
        ))}
      </GroupsContainer>
    </Container>
  );
};
export default Groups;
