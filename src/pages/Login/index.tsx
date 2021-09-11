import {
  Background,
  Container,
  Header,
  Content,
  ContainerForm,
  ContainerImage,
} from "./styles";

import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

import logo from "../../assets/logo.jpeg";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { useAuth } from "../../providers/Auth";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const Login = () => {
  const { loginUser } = useAuth();

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <>
      <Header>
        <Link to="/">
          <img src={logo} alt="image_logo" />
        </Link>
      </Header>
      <Container>
        <Background />
        <Content>
          <ContainerForm>
            <form onSubmit={handleSubmit(loginUser)}>
              <h1>Entrar</h1>
              <ul>
                <li>
                  <Input
                    label="E-mail"
                    name="email"
                    icon={AiOutlineMail}
                    register={register}
                    error={errors.email?.message}
                  />
                </li>
                <li>
                  <Input
                    label="Senha"
                    name="password"
                    icon={AiOutlineLock}
                    type="password"
                    register={register}
                    error={errors.password?.message}
                  />
                </li>
                <li>
                  <Button variantGreen type="submit">
                    Enviar
                  </Button>
                  <span>
                    Não tem conta? Registre-se <Link to="/register">Aqui</Link>
                  </span>
                </li>
              </ul>
            </form>
          </ContainerForm>
          <ContainerImage>
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_aim1cylt.json"
            />
          </ContainerImage>
        </Content>
      </Container>
    </>
  );
};

export default Login;
