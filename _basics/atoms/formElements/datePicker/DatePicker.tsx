import 'react-datepicker/dist/react-datepicker.css';

import React, {
  FC,
  ReactElement,
  KeyboardEvent,
  SyntheticEvent,
  useState,
  forwardRef,
} from 'react';
import DatePickerComponent, { registerLocale } from 'react-datepicker';
import de from 'date-fns/locale/de';

import Label from '@basics/atoms/formElements/label/Label';
import Button from '@basics/atoms/formElements/button/Button';
import Errormessage from '@basics/atoms/formElements/errormessage/Errormessage';
import { isValidDate, formatDate } from '@mehrwerk/utilities';
import { DatePickerProps } from '@/interfaces';

registerLocale('de', de);

const DatePicker: FC<DatePickerProps> = (props): ReactElement => {
  const {
    handleChange,
    value = '',
    labelProps,
    buttonProps,
    errorMessage,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const isDateValid = isValidDate(new Date(value));

  const formattedDate = isDateValid ? new Date(value) : null;

  const handleChangeDate = (newDate: Date, event: SyntheticEvent) => {
    event.stopPropagation();

    if (newDate && isValidDate(new Date(newDate))) {
      handleChange(newDate);
    }

    setIsOpen(false);
  };

  const ButtonRef = forwardRef(
    (forwardedProps, ref): React.ReactElement => (
      <Button
        {...buttonProps}
        {...forwardedProps}
        {...ref}
        iconName="calendar"
        iconPosition="right"
        buttonLabel={
          formattedDate
            ? formatDate(Number(formattedDate), {
                dayFormat: '2-digit',
                monthFormat: '2-digit',
                yearFormat: 'numeric',
              })
            : 'Datum auswählen'
        }
        buttonTextColor={formattedDate ? 'white' : 'primary'}
        buttonBorderColor={formattedDate ? 'white' : 'primary'}
        buttonColor={formattedDate ? 'primary' : 'white'}
      />
    ),
  );
  ButtonRef.displayName = 'ButtonRef';

  return (
    <div onClick={() => setIsOpen(true)} style={{ position: 'relative' }}>
      {labelProps && <Label {...labelProps} />}

      <DatePickerComponent
        dateFormat="dd.MM.yyyy"
        locale="de"
        open={isOpen}
        selected={formattedDate}
        onChange={handleChangeDate}
        onClickOutside={() => setIsOpen(false)}
        onKeyDown={(e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false)}
        customInput={<ButtonRef />}
      />

      {errorMessage && <Errormessage message={errorMessage} />}
    </div>
  );
};

export default DatePicker;
