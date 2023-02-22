import React, { FC, ReactElement, ChangeEvent, useContext } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { ThemeContext } from 'styled-components';

import { RangeSliderProps } from '@/interfaces';
import Inputfield from '@/components/_basics/atoms/formElements/inputfield/Inputfield';
import Label from '@/components/_basics/atoms/formElements/label/Label';
import {
  StyledWrapper,
  StyledInput,
  StyledInputsWrapper,
} from './RangeSlider.styles';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const RangeSlider: FC<RangeSliderProps> = (props): ReactElement => {
  const {
    id,
    handleChange,
    maxValue,
    minValue,
    minLabel,
    maxLabel,
    label,
    lowestPossible = 0,
    highestPossible = 1000,
  } = props;

  const { colors } = useContext(ThemeContext);

  const handleChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e?.target?.value);
    handleChange({ minValue: value, maxValue }, id);
  };

  const handleChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e?.target?.value);
    handleChange({ minValue, maxValue: value }, id);
  };

  const handleRangeChange = ([min, max]: [number, number]) => {
    handleChange({ minValue: min, maxValue: max }, id);
  };

  const handleBlur = () => {
    const roundedMin = minValue && Math.floor(minValue);
    const roundedMax = maxValue && Math.floor(maxValue);

    handleChange({ minValue: roundedMin, maxValue: roundedMax }, id);
  };

  return (
    <StyledWrapper>
      {label && <Label label={label} />}

      {typeof minValue === 'number' && typeof maxValue === 'number' && (
        <Range
          min={lowestPossible}
          max={highestPossible}
          value={[minValue, maxValue]}
          onChange={handleRangeChange}
          railStyle={{ backgroundColor: colors.gray, height: 15 }}
          trackStyle={[{ backgroundColor: colors.primary, height: 15 }]}
          handleStyle={[
            {
              height: 26,
              width: 10,
              borderWidth: 0,
              borderRadius: 5,
              backgroundColor: colors.primary,
            },
          ]}
          tipFormatter={(value) => `${value} €`}
        />
      )}

      <StyledInputsWrapper>
        {typeof minValue === 'number' && (
          <StyledInput>
            {minLabel && <Label label={minLabel} />}

            <Inputfield
              textAlign="center"
              inputProps={{
                type: 'number',
                value: String(minValue),
                onChange: handleChangeMin,
                onBlur: handleBlur,
                placeholder: '',
              }}
            />

            <span>€</span>
          </StyledInput>
        )}

        {typeof maxValue === 'number' && (
          <StyledInput>
            {maxLabel && <Label label={maxLabel} />}

            <Inputfield
              textAlign="center"
              inputProps={{
                type: 'number',
                value: String(maxValue),
                onChange: handleChangeMax,
                onBlur: handleBlur,
              }}
            />

            <span>€</span>
          </StyledInput>
        )}
      </StyledInputsWrapper>
    </StyledWrapper>
  );
};

export default RangeSlider;
