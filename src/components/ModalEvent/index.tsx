import { Modal } from "../Modal";
import { useEvents } from "../../providers/Events";
import Input from "../Input";
import Button from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IEvents } from "../../types/IProviders";

interface ICreateEvent {
  group_Id: number;
  categoria: string;
  creator: number;
}

interface IModalEventsProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  create?: ICreateEvent;
  edit?: IEvents;
}

interface IEventForm {
  name: string;
  local: string;
  data: string;
  description: string;
}

const ModalEvent = ({ closeModal, edit, create }: IModalEventsProps) => {
  const { createEvent, cancelEvent, editEvent } = useEvents();
  const variantGreen = true;
  const variantRed = true;

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    local: yup.string().required("Campo obrigatório"),
    data: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEventForm>({ resolver: yupResolver(schema) });

  const handleEvent = (data: IEventForm) => {
    if (create) {
      const eventCreate = { ...create, users: [], ...data };
      createEvent(eventCreate);
    } else if (edit) {
      editEvent(edit, data);
    }
  };

  const handleDelet = () => {
    if (edit) {
      console.log(edit);
      cancelEvent(edit);
    }
  };

  return (
    <Modal closeModal={closeModal}>
      <form onSubmit={handleSubmit(handleEvent)}>
        {edit ? <h1>Editar Evento</h1> : <h1>Novo Evento</h1>}
        <Input
          error={errors.name?.message}
          name="name"
          label="Nome"
          register={register}
          defaultValue={edit?.name}
        />
        <Input
          error={errors.local?.message}
          name="local"
          label="Local"
          register={register}
          defaultValue={edit?.local}
        />
        <Input
          error={errors.data?.message}
          name="data"
          label="Data"
          type="date"
          register={register}
          defaultValue={edit?.data}
        />
        <Input
          error={errors.description?.message}
          name="description"
          label="Descrição"
          register={register}
          defaultValue={edit?.description}
        />
        {!edit ? (
          <Button type="submit" variantGreen={variantGreen}>
            Criar
          </Button>
        ) : (
          <div>
            <Button type="submit" variantGreen={variantGreen}>
              Editar
            </Button>
            <Button onClick={handleDelet} variantRed={variantRed}>
              Deletar
            </Button>
          </div>
        )}
      </form>
    </Modal>
  );
};

export default ModalEvent;
