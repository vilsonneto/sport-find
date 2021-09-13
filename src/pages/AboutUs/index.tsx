import Avatar, { genConfig } from "react-nice-avatar";
import logogitlab1 from "../../assets/logo/logogitlab1.png";
import logolinkedin1 from "../../assets/logo/logolinkedin1.png";
import { AboutContainer } from "../AboutUs/styles";

const AboutUs = () => {
  // const config = genConfig(AvatarConfig?);
  const contatos = [
    {
      image: "https://ca.slack-edge.com/TQZR39SET-U01N3V440SG-1046913fd7e8-512",
      linkedin: "https://www.linkedin.com/in/miqueias-carvalho-dos-santos/",
      gitlab: "https://gitlab.com/Miqueias_Carvalho",
      info: "Tech Lead",
    },
    {
      image: "https://ca.slack-edge.com/TQZR39SET-U01SH3T3T1A-1baedf502140-512",
      linkedin: "https://www.linkedin.com/in/vilson-neto-40539b17b/",
      gitlab: "https://gitlab.com/vilsonneto",
      info: "Scrum Master",
    },
    {
      image: "https://ca.slack-edge.com/TQZR39SET-U01NGNUH856-359235fc14da-512",
      linkedin:
        "https://www.linkedin.com/in/natalia-cristine-almeida-nunes-740b6a81/",
      gitlab: "https://gitlab.com/naticristinenunes",
      info: "P.O",
    },
    {
      image: "https://ca.slack-edge.com/TQZR39SET-U01PCE481SQ-7294c6d27fcc-512",
      linkedin: "aaa",
      gitlab: "https://gitlab.com/henrique.da.silva5720",
      info: "Q.A",
    },
    {
      image: "https://ca.slack-edge.com/TQZR39SET-U01PLF8SF6Z-9a28fad38290-512",
      linkedin: "aa",
      gitlab: "https://gitlab.com/DivinitySystem",
      info: "Q.A",
    },
  ];
  return (
    <AboutContainer>
      <h1> Sobre Nós</h1>
      {/* <Avatar style={{ width: '8rem', height: '8rem' }} {...config} /> */}
      <div className="conteiner-geral">
        {contatos.map((item) => (
          <div className="conteiner-cart">
            <img src={item.image} alt="imagem" />
            <p>{item.info}</p>
            <div className="conteiner-logo">
              <a href={item.linkedin} target="_blank" rel="noreferrer">
                <img src={logolinkedin1} alt="linkedin" />
              </a>
              <a href={item.gitlab} target="_blank" rel="noreferrer">
                <img src={logogitlab1} alt="gitlab" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <p>
        Copyright © 2021 Kenzie Academy Brasil - Todos os direitos reservados
      </p>
    </AboutContainer>
  );
};

export default AboutUs;
