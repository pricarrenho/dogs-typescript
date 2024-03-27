import { ChangeEvent, useState } from "react";
import { Types } from "./types";

const types: Types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha precisa ter 8 caracteres. Incluindo 1 maiúsculo, 1 minúsculo e 1 digito",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize números apenas",
  },
};

export const useForm = (type: string | false) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function validate(value: string) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    if (error) validate(event.target.value);
    setValue(event.target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
