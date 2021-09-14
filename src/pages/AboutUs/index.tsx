import { Header, Container, ContainerCards, Card } from "./../AboutUs/styles";

import logolinkedin from "./../../assets/logo/logolinkedin.png";
import logogitlab from "./../../assets/logo/logogitlab.png";

import ArrowLeft from "./../../components/ArrowLeft";

const AboutUs = () => {
  const contacts = [
    {
      name: "Miqueias Carvalho",
      image: "https://ca.slack-edge.com/TQZR39SET-U01N3V440SG-1046913fd7e8-512",
      linkedin: "https://www.linkedin.com/in/miqueias-carvalho-dos-santos/",
      gitlab: "https://gitlab.com/Miqueias_Carvalho",
      info: "Tech Lead",
    },
    {
      name: "Vilson Neto",
      image: "https://ca.slack-edge.com/TQZR39SET-U01SH3T3T1A-1baedf502140-512",
      linkedin: "https://www.linkedin.com/in/vilson-neto-40539b17b/",
      gitlab: "https://gitlab.com/vilsonneto",
      info: "Scrum Master",
    },
    {
      name: "Natalia Nunes",
      image: "https://ca.slack-edge.com/TQZR39SET-U01NGNUH856-359235fc14da-512",
      linkedin:
        "https://www.linkedin.com/in/natalia-cristine-almeida-nunes-740b6a81/",
      gitlab: "https://gitlab.com/naticristinenunes",
      info: "P.O.",
    },
    {
      name: "Henrique da Silva",
      image: "https://ca.slack-edge.com/TQZR39SET-U01PCE481SQ-7294c6d27fcc-512",
      linkedin: "https://www.linkedin.com/in/henrique-da-silva-0b6049214/",
      gitlab: "https://gitlab.com/henrique.da.silva5720",
      info: "Q.A.",
    },
    {
      name: "Priccila Lucem",
      image: "https://ca.slack-edge.com/TQZR39SET-U01PLF8SF6Z-9a28fad38290-512",
      linkedin: "aa",
      gitlab: "https://gitlab.com/DivinitySystem",
      info: "Q.A.",
    },
  ];

  return (
    <>
      <Header>
        <ArrowLeft path="/" />
      </Header>
      <Container>
        <h1> Sobre Nós</h1>
        <ContainerCards>
          {contacts.map((item, index) => (
            <Card key={index}>
              <img src={item.image} alt={`${item.name.toLowerCase()}_image`} />
              <span>{item.name}</span>
              <span>{item.info}</span>
              <div>
                <a href={item.linkedin} target="_blank" rel="noreferrer">
                  <img
                    src={logolinkedin}
                    alt={`${item.name.toLowerCase()}_linkedin`}
                  />
                </a>
                <a href={item.gitlab} target="_blank" rel="noreferrer">
                  <img
                    src={logogitlab}
                    alt={`${item.name.toLowerCase()}_gitlab`}
                  />
                </a>
              </div>
            </Card>
          ))}
        </ContainerCards>
        <span>
          Copyright © 2021 Kenzie Academy Brasil - Todos os direitos reservados
        </span>
      </Container>
    </>
  );
};

export default AboutUs;
