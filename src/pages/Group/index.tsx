import {
  Header,
  ContainerStyle,
  Container,
  Footer,
  ContainerMembers,
  ContainerChat,
} from "./styles";

import { FaPencilAlt, FaBan } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";

import Button from "./../../components/Button";
import ArrowLeft from "./../../components/ArrowLeft";
import { CardEvent } from "./../../components/CardEvent";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { useAuth } from "./../../providers/Auth";
import { useGroups } from "./../../providers/Groups";

interface IParams {
  id: string;
}

const Group = () => {
  const params = useParams<IParams>();

  const { allGroups, updateDescription, banMember } = useGroups();

  const group = allGroups.find((item) => item.id === Number(params.id));

  const [show, setShow] = useState<boolean>(false);

  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.innerWidth >= 1024
  );

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <Header>
        <ArrowLeft path="/groups" />
      </Header>
      <ContainerStyle>
        {(show || isDesktop) && (
          <ContainerMembers>
            <div>
              <h3>
                <HiUserGroup /> Membros
              </h3>
              <div>
                {group?.members.map((item, index) => (
                  <div key={index}>
                    <span>{item.name}</span>
                    <FaBan onClick={() => banMember(group, item.id)} />
                  </div>
                ))}
              </div>
            </div>
          </ContainerMembers>
        )}
        <Container>
          <div>
            <header>
              <h1>{group?.name}</h1>
              <span>{group?.category}</span>
            </header>
            <Button variantGreen>Criar evento</Button>
          </div>
          <article>
            <section>
              <h3>Localização:</h3>
              <p>localização do grupo</p>
            </section>
            <section>
              <h3>
                Descrição:
                <FaPencilAlt onClick={() => console.log("Bug")} />
              </h3>
              <p>{group?.description}</p>
            </section>
          </article>
          <article>
            <h3>Próximos eventos:</h3>
            <section>
              {group?.groupEvents.map((item, index) => (
                <CardEvent key={index} event={item} />
              ))}
            </section>
          </article>
        </Container>
        <ContainerChat>
          <Button>Chat</Button>
        </ContainerChat>
        <Footer>
          <div>
            <IoIosArrowUp size={35} onClick={() => setShow(!show)} />
          </div>
          <div>
            <Button>Chat</Button>
          </div>
        </Footer>
      </ContainerStyle>
    </>
  );
};

export default Group;
