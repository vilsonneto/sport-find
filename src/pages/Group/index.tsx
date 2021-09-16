import {
  Container,
  ContainerStyle,
  ContainerMain,
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
import ModalEvent from "./../../components/ModalEvent";

import React, { useEffect, useMemo, useState } from "react";

import { useParams } from "react-router-dom";

import { useAuth } from "./../../providers/Auth";
import { useGroups } from "./../../providers/Groups";
import Header from "../../components/Header";
import { useEvents } from "../../providers/Events";
import Chat from "../../components/Chat";

interface IParams {
  id: string;
}

const Group = () => {
  const params = useParams<IParams>();

  const { allEvents } = useEvents();
  const { allGroups, updateDescription, banMember, subscribeGroup, exitGroup } =
    useGroups();

  const group = allGroups.find((item) => item.id === Number(params.id));

  const groupEvents = useMemo(() => {
    const result = allEvents.filter((event) => event.group_Id === group?.id);
    return result;
  }, [allEvents, group]);

  const { user } = useAuth();
  const adm = user.id === group?.creator;
  const member = !!group?.members.find((item) => item.id === user.id);

  const [showMembers, setshowMembers] = useState<boolean>(false);

  const [showModal, setShowModal] = useState<boolean>(false);

  const [enableInput, setEnableInput] = useState<boolean>(false);

  const [userInput, setUserInput] = useState<string>(group?.description || "");

  useEffect(() => {
    group && setUserInput(group?.description);
  }, [group]);

  const handleChange = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!!group) {
      if (event.key === "Enter") {
        updateDescription(group, userInput);

        setEnableInput(false);
      }
    }
  };

  return (
    <Container>
      <div className="containerHeader">
        <Header />
      </div>
      <div className="containerArrow">
        <ArrowLeft path="/groups" />
      </div>
      <ContainerStyle>
        <ContainerMembers showMembers={showMembers}>
          <div>
            <h3>
              <HiUserGroup /> Membros
            </h3>
            <div>
              {group?.members.map((item, index) => (
                <div key={index}>
                  <span>{item.name}</span>
                  {adm && item.id !== user.id && (
                    <FaBan onClick={() => banMember(group, item.id)} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ContainerMembers>
        <ContainerMain>
          <div>
            <header>
              <h1>{group?.name}</h1>
              <span>{group?.category}</span>
            </header>
            {adm ? (
              <Button variantGreen onClick={() => setShowModal(!showModal)}>
                Criar evento
              </Button>
            ) : member ? (
              group && (
                <Button
                  variantGreen
                  onClick={() =>
                    exitGroup(group, { name: user.username, id: user.id })
                  }
                >
                  Sair
                </Button>
              )
            ) : (
              group && (
                <Button
                  variantGreen
                  onClick={() =>
                    subscribeGroup(group, { name: user.username, id: user.id })
                  }
                >
                  Entrar
                </Button>
              )
            )}
          </div>
          <article>
            <section>
              <h3>Localização:</h3>
              <p>{group?.state}</p>
            </section>
            <section>
              <h3>
                Descrição:
                {adm && (
                  <FaPencilAlt onClick={() => setEnableInput(!enableInput)} />
                )}
              </h3>
              {enableInput ? (
                <textarea
                  maxLength={120}
                  value={userInput}
                  onChange={(event) => setUserInput(event.target.value)}
                  onKeyPress={(event) => handleChange(event)}
                />
              ) : (
                <div>
                  <p>{group?.description}</p>
                </div>
              )}
            </section>
          </article>
          <article>
            <h3>Próximos eventos:</h3>
            <section>
              <div>
                {groupEvents.map((item, index) => (
                  <CardEvent key={index} event={item} userId={user.id} />
                ))}
              </div>
            </section>
          </article>
        </ContainerMain>
        <ContainerChat>
          <Chat />
        </ContainerChat>
        <Footer showMembers={showMembers}>
          <div>
            <IoIosArrowUp
              size={35}
              onClick={() => setshowMembers(!showMembers)}
            />
          </div>
          <div>
            <Chat />
          </div>
        </Footer>
      </ContainerStyle>
      {showModal && group && (
        <ModalEvent
          closeModal={setShowModal}
          create={{
            group_Id: group?.id,
            category: group?.category,
            creator: group?.creator,
            state: group?.state,
          }}
        />
      )}
    </Container>
  );
};

export default Group;
