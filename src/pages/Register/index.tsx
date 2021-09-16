import { Player } from "@lottiefiles/react-lottie-player";
import {
  Background,
  Container,
  Header,
  Content,
  ContainerForm,
  ContainerImage,
} from "../Register/styles";
import logo from "../../assets/logo.jpeg";
import { useAuth } from "../../providers/Auth";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdPerson } from "react-icons/io";
import { AiOutlineMail, AiFillLock, AiFillFlag } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { StateArr } from "../../utils/StateArr";
import InputSelect from "../../components/InputSelect";

interface IRegisterUserData {
  username: string;
  email: string;
  password: string;
  verifyPassword: string;
  state: string;
}

const Register = () => {
  const { registerUser } = useAuth();
  const history = useHistory();

  const formSchema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Minimo 6 caractéres")
      .matches(
        /^.*((?=.*[!@#$%^&*]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Requer: letra maiúscula, minúscula, número, caracter especial"
      ),
    verifyPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "As Senhas não correspondem"),
    state: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUserData>({ resolver: yupResolver(formSchema) });

  const handleForm = ({
    username,
    email,
    password,
    state,
  }: IRegisterUserData) => {
    const data = { username, email, password, state };
    registerUser(data, history);
  };

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
          <ContainerImage>
            <Player
              src="https://assets2.lottiefiles.com/packages/lf20_dqzlxqtl.json"
              style={{ width: "400px", height: "400px" }}
              loop
              autoplay
            ></Player>
          </ContainerImage>
          <ContainerForm>
            <form onSubmit={handleSubmit(handleForm)}>
              <h1>Cadastro</h1>
              <ul>
                <li>
                  <Input
                    error={errors.username?.message}
                    name="username"
                    label="Nome"
                    icon={IoMdPerson}
                    register={register}
                  />
                </li>
                <li>
                  <Input
                    error={errors.email?.message}
                    name="email"
                    label="E-mail"
                    icon={AiOutlineMail}
                    register={register}
                  />
                </li>
                <li>
                  <Input
                    error={errors.password?.message}
                    name="password"
                    label="Senha"
                    type="password"
                    icon={AiFillLock}
                    register={register}
                  />
                </li>
                <li>
                  <Input
                    error={errors.verifyPassword?.message}
                    name="verifyPassword"
                    label="Confirmar senha"
                    type="password"
                    icon={AiFillLock}
                    register={register}
                  />
                </li>
                <li>
                  <InputSelect
                    error={errors.state?.message}
                    name="state"
                    label="Estado"
                    icon={AiFillFlag}
                    register={register}
                    options={StateArr}
                  />
                </li>
                <li>
                  <Button type="submit" variantGreen>
                    Enviar
                  </Button>
                  <span>
                    Já tem conta? Faça login <Link to="/login"> Aqui </Link>
                  </span>
                </li>
              </ul>
            </form>
          </ContainerForm>
        </Content>
      </Container>
    </>
  );
};

export default Register;
