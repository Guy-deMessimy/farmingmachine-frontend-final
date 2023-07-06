export type Inputs = {
  departure: string;
  departure_date: string;
};

export interface InputProps {
  id: string;
  name: string;
  type: string;
  initialValue: string | number;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  ariaLabel: string;
  clearable: boolean;
  clearOnEscape: boolean;
  innerRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;
}

export interface DatePickerProps {
  initialValue: string | Date;
  initialState: { value: [] };
  placeholder: string;
  formatString: string;
  onChange: (a: { date: string | Date | (string | Date)[] | null | undefined }) => void;
  startDateLabel: any;
  endDateLabel: any;
  ariaLabel: string;
  highlightedDate: Date;
  range: boolean;
  separateRangeInputs: boolean;
  clearable: boolean;
  locale: object;
}
