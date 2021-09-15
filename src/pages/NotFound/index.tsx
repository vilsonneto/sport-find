import { Container } from "./styles";

import Button from "./../../components/Button";

import { Player } from "@lottiefiles/react-lottie-player";

import { useHistory } from "react-router";
import { useAuth } from "./../../providers/Auth";

const NotFound = () => {
  const history = useHistory();

  const { token } = useAuth();

  const handleClick = () => {
    !!token ? history.push("/dashboard") : history.push("/");
  };

  return (
    <Container>
      <header>
        <h1>Página não encontrada</h1>
      </header>
      <main>
        <Player
          autoplay
          loop
          src="https://assets7.lottiefiles.com/private_files/lf30_bdec2jzh.json"
        />
      </main>
      <footer>
        <Button onClick={handleClick}>Página inicial</Button>
      </footer>
    </Container>
  );
};

export default NotFound;
