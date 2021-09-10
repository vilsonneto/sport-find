import {
  ContainerNav,
  ContainerAbout,
  Typography,
  Image,
  ContainerFeatures,
  Card,
  ContainerFooter,
} from "./styles";

import { AiOutlineTwitter } from "react-icons/ai";
import { BiCopyright, BiPhone } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import Button from "./../../components/Button";

import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const Home = () => {
  return (
    <main>
      <ContainerNav>
        <div>
          <h1>LOGO</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/aboutus">Sobre Nós</Link>
            </li>
            <li>
              <Button onClick={() => console.log("funcionando")}>Entrar</Button>
            </li>
          </ul>
        </div>
      </ContainerNav>
      <ContainerAbout>
        <Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nunc enim, eleifend sed facilisis at, imperdiet vitae libero. Ut
            dapibus consectetur lacus eu hendrerit. Aliquam ultricies nunc ac
            consectetur consequat. Sed commodo, sapien nec vestibulum volutpat,
            nisi elit egestas nisl, at hendrerit arcu mauris non arcu. Nulla
            scelerisque ipsum sed.
          </p>
          <Button variantGreen onClick={() => console.log("funcionando")}>
            Registre-se
          </Button>
        </Typography>
        <Image>
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_aaleelx7.json"
          />
        </Image>
      </ContainerAbout>
      <ContainerFeatures>
        <h1>Features do Projeto</h1>
        <div>
          <Card>
            <h3>Feature 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nunc enim, eleifend sed facilisis at, imperdiet vitae libero.
            </p>
          </Card>
          <Card>
            <h3>Feature 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nunc enim, eleifend sed facilisis at, imperdiet vitae libero.
            </p>
          </Card>
          <Card>
            <h3>Feature 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nunc enim, eleifend sed facilisis at, imperdiet vitae libero.
            </p>
          </Card>
        </div>
      </ContainerFeatures>
      <ContainerFooter>
        <div>
          <div>
            <span>Termos e Privacidade</span>
            <span>
              <BiCopyright />
              <span>2021 SportFind Inc.</span>
            </span>
          </div>
          <div>
            <div>
              <h6>Links</h6>
              <Link to="/">Home</Link>
              <Link to="/register">Signup</Link>
              <Link to="/login">Login</Link>
            </div>
            <div>
              <h6>Ajuda e Contatos</h6>
              <Link to="">Ajuda & Suporte</Link>
              <Link to="">
                <FaInstagram />
                <span>Instagram</span>
              </Link>
              <Link to="">
                <AiOutlineTwitter />
                <span>Twitter</span>
              </Link>
              <Link to="">
                <FiMail />
                <span>Mail</span>
              </Link>
              <Link to="">
                <BiPhone />
                <span>Contato</span>
              </Link>
            </div>
            <div>
              <h6>Outros</h6>
              <Link to="">Feedback</Link>
              <Link to="">FAQ</Link>
              <Link to="/aboutus">Time</Link>
            </div>
          </div>
        </div>
      </ContainerFooter>
    </main>
  );
};

export default Home;
