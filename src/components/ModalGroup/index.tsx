import { Modal } from "../Modal";
import Input from "../Input";
import InputSelect from "../InputSelect";
import InputTexteArea from "../InputTextArea";
import Button from "../Button";
import { useGroups } from "../../providers/Groups";
import { useAuth } from "../../providers/Auth";
import { IGroupData } from "../../types/IProviders";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "./styles";
import { StateArr } from "../../utils/StateArr";

interface IModalGoupProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalGroup = ({ closeModal }: IModalGoupProps) => {
  const { createGroup } = useGroups();
  const { user } = useAuth();
  const { username } = user;
  const category = [
    "Ciclismo",
    "Vôlei",
    "Basquete",
    "Futebol",
    "Yoga",
    "Mergulho",
    "Trilha",
    "Rapel",
    "Skate",
    "Surf",
  ];

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    state: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleModalGroups = (data: IGroupData) => {
    createGroup(username, data);
    closeModal(false);
  };

  return (
    <Modal closeModal={closeModal}>
      <Form onSubmit={handleSubmit(handleModalGroups)}>
        <h1> Novo Grupo</h1>
        <ul>
          <li>
            <Input
              error={errors.name?.message}
              name="name"
              label="Nome"
              register={register}
            />
          </li>
          <li>
            <InputSelect
              error={errors.category?.message}
              options={category}
              name="category"
              label="Categoria"
              register={register}
            />
          </li>
          <li>
            <InputSelect
              error={errors.state?.message}
              options={StateArr}
              name="state"
              label="Estado"
              register={register}
            />
          </li>
          <li>
            <InputTexteArea
              error={errors.description?.message}
              name="description"
              label="Descrição"
              cols={30}
              rows={5}
              register={register}
              maxLength={120}
            />
          </li>
          <li>
            <Button type="submit" variantGreen>
              Criar
            </Button>
          </li>
        </ul>
      </Form>
    </Modal>
  );
};

export default ModalGroup;
