import * as React from 'react';
import { Input } from 'baseui/input';
import { InputProps } from '../../models/MachineFormConfig';

const InputField = (props: InputProps) => {
  const { id, name, type, initialValue, placeholder, onChange, ariaLabel, clearable, clearOnEscape, innerRef } = props;

  return (
    <Input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={initialValue ?? ''}
      onChange={onChange}
      aria-label={ariaLabel}
      clearable={clearable}
      clearOnEscape={clearOnEscape}
      inputRef={innerRef}
    />
  );
};

// @ts-expect-error argument type exception
const ForwardRefInputField = React.forwardRef((props: InputProps, ref) => <InputField innerRef={ref} {...props} />);

export default ForwardRefInputField;
