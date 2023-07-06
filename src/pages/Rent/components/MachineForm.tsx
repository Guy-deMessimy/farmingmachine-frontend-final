import * as React from 'react';
import { fr } from 'date-fns/locale';
import { Calendar } from 'react-feather';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

// Components
import InputField from '../../../components/InputField/index';
import DatePickerField from '../../../components/DatePicker';

// Typing and utils
import { Inputs } from '../../../models/MachineFormConfig';
import { RENT_FORM } from '../../../utils/form-enum';

// Asset and style
import * as styled from '../styles';

const MachineForm = () => {
  const { handleSubmit, watch, control } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log('data', data);
  const inputRef = React.useRef<any>(null);

  console.log(watch('departure'));
  console.log(watch('departure_date'));

  const date = new Date().toLocaleDateString('fr-FR');
  console.log(typeof date);
  const startLabel: React.ReactElement = (
    <div>
      <span>{RENT_FORM.DATES_DEPARTURE.departureDate}</span>
      <Calendar />
    </div>
  );

  const endLabel: React.ReactElement = (
    <div>
      <span>{RENT_FORM.DATES_DEPARTURE.returnDate}</span>
      <Calendar />
    </div>
  );

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <styled.MachineWrapperForm>
      <h3>Machines</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <styled.MachineWrapperGroup>
          <div>
            <span>{RENT_FORM.DEPARTURE.title}</span>
            <Controller
              render={({ field }) => (
                <InputField
                  {...field}
                  id={RENT_FORM.DEPARTURE.id}
                  name={RENT_FORM.DEPARTURE.name}
                  type="text"
                  initialValue={field.value}
                  placeholder={RENT_FORM.DEPARTURE.placeholder}
                  onChange={(e) => field.onChange(e.target.value)}
                  ariaLabel={RENT_FORM.DEPARTURE.ariaLabel}
                  clearable
                  clearOnEscape
                  innerRef={inputRef}
                ></InputField>
              )}
              control={control}
              name="departure"
            />
          </div>
          <div>
            <Controller
              render={({ field }) => (
                <DatePickerField
                  initialValue={field.value}
                  initialState={{ value: [] }}
                  placeholder={date}
                  formatString="dd/MM/yyyy"
                  // @ts-expect-error argument type exception
                  onChange={({ date }) => field.onChange(Array.isArray(date) ? date : [date])}
                  startDateLabel={startLabel}
                  endDateLabel={endLabel}
                  ariaLabel={RENT_FORM.DATES_DEPARTURE.ariaLabel}
                  highlightedDate={new Date('March 10, 2019')}
                  range
                  separateRangeInputs
                  clearable={true}
                  locale={fr}
                />
              )}
              control={control}
              name="departure_date"
            />
          </div>
        </styled.MachineWrapperGroup>
        <input type="submit" />
      </form>
    </styled.MachineWrapperForm>
  );
};

export default MachineForm;
