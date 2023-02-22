/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactElement, useContext } from 'react';
import ReactSelect, { StylesConfig, ValueType } from 'react-select';
import { ThemeContext } from 'styled-components';

import Label from '@basics/atoms/formElements/label/Label';
import { SelectProps } from '@/interfaces';
import Theme from '@/theme/themeTypes';

import { StyledSelectWrapper } from './Select.styles';

const Select: FC<SelectProps> = (props): ReactElement => {
  const {
    handleSelectChange,
    handleBlur,
    isMulti,
    selectArrowColor = 'darkGray',
    selectIsDisabled,
    selectIsMandatory,
    selectLabel,
    selectLabelIndent,
    selectName,
    selectOptions = [],
    selectPlaceholder = '',
    selectPlaceholderTextColor,
    selectSelectedOptions,
    selectTextColor,
  } = props;
  const {
    colors,
    borderRadius,
    fontSize: themeFontSizes,
    components: { select: themeStyles = {} } = {},
  } = useContext(ThemeContext) as Theme;

  const activeOptions = selectOptions?.filter((option) =>
    (selectSelectedOptions || []).includes(option.value),
  );

  const handleChange = (result: any) => {
    handleSelectChange(result);
  };

  const {
    textColor = 'black',
    backgroundColor = 'white',
    placeholderColor = 'gray',
    placeholderPaddingLeft = '10px',
    fontSize = 'sm',
  } = themeStyles;

  const customStyles: StylesConfig<ValueType<any, false>, false> = {
    option: (provided) => ({
      ...provided,
      color: colors[selectTextColor || textColor],
      fontSize: themeFontSizes[fontSize],
    }),
    control: (provided) => ({
      ...provided,
      borderRadius,
      border: 'none',
      marginLeft: selectLabelIndent || 'inherit',
      fontSize: themeFontSizes[fontSize],
      justifyContent: 'flex-start',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: colors[backgroundColor],
    }),
    placeholder: (provided) => ({
      ...provided,
      color: colors[selectPlaceholderTextColor || placeholderColor],
      paddingLeft: placeholderPaddingLeft,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: colors[selectArrowColor],
    }),
    indicatorSeparator: () => ({ display: 'none' }),
  };

  return (
    <StyledSelectWrapper {...props}>
      {selectLabel && (
        <Label label={`${selectLabel}${selectIsMandatory ? '*' : ''}`} />
      )}

      <ReactSelect
        options={selectOptions}
        name={selectName || 'default-name'}
        onChange={handleChange}
        styles={customStyles}
        placeholder={selectPlaceholder}
        value={activeOptions}
        isDisabled={selectIsDisabled}
        isMulti={isMulti}
        onBlur={handleBlur}
      />
    </StyledSelectWrapper>
  );
};

export default Select;
