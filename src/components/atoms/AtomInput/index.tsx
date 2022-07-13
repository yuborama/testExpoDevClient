import Input from './inputText';
import InputSelect from './select';
import AtomInputType from './type';

export const AtomInput = (props: AtomInputType) => {
  const { type, options } = props;
  switch (type) {
    case 'text':
      return <Input {...props} />;
    case 'email':
      return <Input keyboardType="email-address" {...props} />;
    case 'password':
      return <Input secureTextEntry={true} {...props} />;
    case 'checkbox':
      return <Input {...props} />;
    case 'select':
      return <InputSelect {...props} />;
    default:
      return <Input {...props} />;
  }
};
export default AtomInput;
