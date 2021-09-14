import { Modal } from "../Modal";
import { useEvents } from "../../providers/Events";
import { Form } from "./styles";
import Input from "../Input";
import Button from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IEvents } from "../../types/IProviders";
import InputTexteArea from "../InputTextArea";

interface ICreateEvent {
  group_Id: number;
  category: string;
  creator: number;
  state: string;
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

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    local: yup.string().required("Campo obrigatório"),
    data: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEventForm>({ resolver: yupResolver(formSchema) });

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
      cancelEvent(edit);
    }
  };

  return (
    <Modal closeModal={closeModal}>
      <Form onSubmit={handleSubmit(handleEvent)}>
        {edit ? <h1>Editar Evento</h1> : <h1>Novo Evento</h1>}
        <ul>
          <li>
            <Input
              error={errors.name?.message}
              name="name"
              label="Nome"
              register={register}
              defaultValue={edit?.name}
            />
          </li>
          <li>
            <Input
              error={errors.local?.message}
              name="local"
              label="Local"
              register={register}
              defaultValue={edit?.local}
            />
          </li>
          <li>
            <Input
              error={errors.data?.message}
              name="data"
              label="Data"
              type="date"
              register={register}
              defaultValue={edit?.data}
            />
          </li>
          <li className="textarea">
            <InputTexteArea
              error={errors.description?.message}
              name="description"
              label="Descrição"
              cols={30}
              rows={5}
              register={register}
              defaultValue={edit?.description}
            />
          </li>
          <li>
            {!edit ? (
              <div className="buttom-create">
                <Button type="submit" variantGreen>
                  Criar
                </Button>
              </div>
            ) : (
              <div className="button-edit">
                <Button type="submit" variantGreen>
                  Editar
                </Button>
                <Button onClick={handleDelet} variantRed>
                  Deletar
                </Button>
              </div>
            )}
          </li>
        </ul>
      </Form>
    </Modal>
  );
};

export default ModalEvent;
