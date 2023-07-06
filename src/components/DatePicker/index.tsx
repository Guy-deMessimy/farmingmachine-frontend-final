import React from 'react';
import { StatefulDatepicker } from 'baseui/datepicker';
import { DatePickerProps } from '../../models/MachineFormConfig';

const DatePickerField = (props: DatePickerProps) => {
  const {
    initialValue,
    initialState,
    placeholder,
    formatString,
    onChange,
    startDateLabel,
    endDateLabel,
    ariaLabel,
    highlightedDate,
    range,
    separateRangeInputs,
    clearable,
    locale,
    innerRef,
  } = props;

  return (
    <StatefulDatepicker
      value={initialValue ?? ''}
      initialState={initialState}
      placeholder={placeholder}
      formatString={formatString}
      onChange={onChange}
      startDateLabel={startDateLabel}
      endDateLabel={endDateLabel}
      aria-label={ariaLabel}
      highlightedDate={highlightedDate}
      range={range}
      separateRangeInputs={separateRangeInputs}
      clearable={clearable}
      locale={locale}
      mountNode={innerRef}
    />
  );
};

// export default DatePickerField;

const ForwardRefDatePickerField = React.forwardRef((props: DatePickerProps, ref) => (
  // @ts-expect-error argument type exception
  <DatePickerField innerRef={ref} {...props} />
));

export default ForwardRefDatePickerField;
