import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../providers/Auth";
import Input from "../../components/Input";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { Form, Header, Article, SVG, Retangle } from "./styles";
import logo from "../../assets/logo.jpeg";
import { Player } from "@lottiefiles/react-lottie-player";

const Login = () => {
  const { loginUser } = useAuth();

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("email inválido"),
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
          <img src={logo} alt="" />
        </Link>
      </Header>
      <main>
        <Article>
          <section>
            <Form onSubmit={handleSubmit(loginUser)}>
              <h1>Entrar</h1>
              <Input
                error={errors.email?.message}
                label={"E-mail"}
                name={"email"}
                register={register}
                icon={AiOutlineMail}
              />
              <Input
                error={errors.password?.message}
                label={"Senha"}
                name={"password"}
                register={register}
                icon={AiFillLock}
              />
              <Button type="submit" variantGreen>
                Enviar
              </Button>
              <span>
                Não tem conta? Registre-se <Link to="/register">aqui</Link>
              </span>
            </Form>
          </section>
          <SVG>
            <Player
              src="https://assets9.lottiefiles.com/packages/lf20_aim1cylt.json"
              style={{
                height: "400px",
                width: "400px ",
              }}
              autoplay
              loop
            />
          </SVG>
          {/* <Retangle></Retangle> */}
        </Article>
      </main>
    </>
  );
};

export default Login;
