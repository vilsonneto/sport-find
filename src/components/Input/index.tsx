import { Container, InputContainer } from "./styles";

import { IconType } from "react-icons";

import { UseFormRegister } from "react-hook-form";

interface IInputProps {
  label: string;
  icon?: IconType;
  register: UseFormRegister<any>;
  name: string;
  error?: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
}

const Input = ({
  label,
  icon: Icon,
  register,
  name,
  error,
  type,
  placeholder,
  defaultValue,
}: IInputProps) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon size={20} />}
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          defaultValue={defaultValue}
        />
      </InputContainer>
    </Container>
  );
};

export default Input;
