import * as React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as styled from '../styles';
import InputField from '../../../components/InputField';
import DatePickerField from '../../../components/DatePicker';

type Inputs = {
  example: string;
  exampleRequired: string;
  departure: string;
};

const MachineForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const [value, setValue] = React.useState('');
  console.log(value);
  // onChange={(e) => setValue(e.target.value)}

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <styled.MachineWrapperForm>
      <h3>Machines</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register('example')} />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register('exampleRequired', { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <div>
            <span>Point de départ</span>
            {/* <InputField {...register('departure')} /> */}
            {/* <Controller name={'departure'} render={({ field }) => <InputField {...field}></InputField>} /> */}
          </div>

          <Controller
            render={({ field }) => (
              <InputField
                {...field}
                onChange={(e) => field.onChange(e.target.value)}
                initialValue={field.value}
              ></InputField>
            )}
            control={control}
            name="departure"
          />

          {/* <div>
            <span>Date de départ</span>
            <DatePickerField />
          </div>
          <div>
            <span>Date de retour</span>
            <DatePickerField />
          </div> */}
        </div>
        <input type="submit" />
      </form>
    </styled.MachineWrapperForm>
  );
};

export default MachineForm;
