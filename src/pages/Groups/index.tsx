import Header from "../../components/Header";
import GroupCard from "../../components/GroupCard";
import { GroupsContainer, ArrowSvg } from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { HiArrowLeft } from "react-icons/hi";
import { ImArrowLeft2 } from "react-icons/im";
import { IoMdArrowRoundBack } from "react-icons/io";

import { grupos } from "../../testeslocais/mocks";

const Groups = () => {
  return (
    <section>
      <Header />
      <ArrowSvg>
        <AiOutlineArrowLeft />
        <HiArrowLeft />
        <ImArrowLeft2 />
        <IoMdArrowRoundBack />
      </ArrowSvg>
      <GroupsContainer>
        {grupos.map((group, index) => (
          <GroupCard key={index} group={group} />
        ))}
      </GroupsContainer>
    </section>
  );
};
export default Groups;
