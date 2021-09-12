import {
  Header,
  ContainerNav,
  ContainerAbout,
  Typography,
  Image,
  ContainerFeatures,
  Card,
  ContainerFooter,
} from "./styles";

import logo from "./../../assets/logo.jpeg";

import { AiOutlineTwitter } from "react-icons/ai";
import { BiCopyright, BiPhone } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import Button from "./../../components/Button";

import { Link, useHistory } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <Header>
        <Link to="/">
          <img src={logo} alt="logo_image" />
        </Link>
        <ContainerNav>
          <ul>
            <li>
              <Link to="/aboutus">Sobre Nós</Link>
            </li>
            <li>
              <Button onClick={() => history.push("/login")}>Entrar</Button>
            </li>
          </ul>
        </ContainerNav>
      </Header>
      <main>
        <ContainerAbout>
          <Typography>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nunc enim, eleifend sed facilisis at, imperdiet vitae libero. Ut
              dapibus consectetur lacus eu hendrerit. Aliquam ultricies nunc ac
              consectetur consequat. Sed commodo, sapien nec vestibulum
              volutpat, nisi elit egestas nisl, at hendrerit arcu mauris non
              arcu. Nulla scelerisque ipsum sed.
            </p>
            <Button variantGreen onClick={() => history.push("/register")}>
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
          <section>
            <Card>
              <h3>Feature 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nunc enim, eleifend sed facilisis at, imperdiet vitae
                libero.
              </p>
            </Card>
            <Card>
              <h3>Feature 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nunc enim, eleifend sed facilisis at, imperdiet vitae
                libero.
              </p>
            </Card>
            <Card>
              <h3>Feature 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nunc enim, eleifend sed facilisis at, imperdiet vitae
                libero.
              </p>
            </Card>
          </section>
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
              <nav>
                <h6>Links</h6>
                <Link to="/">Home</Link>
                <Link to="/register">Signup</Link>
                <Link to="/login">Login</Link>
              </nav>
              <nav>
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
              </nav>
              <nav>
                <h6>Outros</h6>
                <Link to="">Feedback</Link>
                <Link to="">FAQ</Link>
                <Link to="/aboutus">Time</Link>
              </nav>
            </div>
          </div>
        </ContainerFooter>
      </main>
    </>
  );
};

export default Home;
