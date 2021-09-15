import { Container, InputContainer } from "./styles";

import { UseFormRegister, FieldValues } from "react-hook-form";

interface IInputProps {
  label: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  error?: string;
  rows: number;
  cols: number;
  placeholder?: string;
  defaultValue?: string;
  maxLength?: number;
}

const InputTexteArea = ({
  label,
  rows,
  cols,
  register,
  name,
  error,
  maxLength,
  placeholder,
  defaultValue,
}: IInputProps) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        <textarea
          rows={rows}
          cols={cols}
          placeholder={placeholder}
          {...register(name)}
          defaultValue={defaultValue}
          maxLength={maxLength}
        />
      </InputContainer>
    </Container>
  );
};

export default InputTexteArea;
