// import { CustomCheckbox } from './checkbox';
import AtomInputCheckbox from "./checkbox/checkbox";
import InputText from "./InputText";
import InputPassword from "./password";
import InputSelect from "./select";
import AtomInputType, { CustomCheckbox } from "./type";

export const AtomInput = (props: AtomInputType) => {
  const { type } = props;
  switch (type) {
    case "text":
      return <InputText {...props} />;
    case "email":
      return <InputText keyboardType="email-address" {...props} />;
    case "password":
      return <InputPassword {...props} />;
    case "checkbox":
      return <AtomInputCheckbox {...(props as unknown as CustomCheckbox)} />;
    case "search":
      return <InputText inputIconHeigth="20px" {...props} />;
    case "select":
      return <InputSelect {...props} />;
    default:
      return <InputText {...props} />;
  }
};
export default AtomInput;
