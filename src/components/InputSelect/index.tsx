import { Container, InputContainer } from "./styles";

import { IconType } from "react-icons";

import { UseFormRegister, FieldValues } from "react-hook-form";

interface IInputSelectProps {
  label: string;
  icon?: IconType;
  name: string;
  options: string[];
  register: UseFormRegister<FieldValues>;
  error: string;
}

const InputSelect = ({
  label,
  icon: Icon,
  name,
  options,
  register,
  error,
}: IInputSelectProps) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon size={20} />}
        <select {...register(name)}>
          <option value="" />
          {options.map((item, index) => (
            <option key={index} value={item.toLowerCase()}>
              {item}
            </option>
          ))}
        </select>
      </InputContainer>
    </Container>
  );
};

export default InputSelect;
