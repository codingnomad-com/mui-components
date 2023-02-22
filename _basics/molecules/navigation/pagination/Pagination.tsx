import React, { FC, ReactElement, useReducer, useEffect } from 'react';
import Button from '@basics/atoms/formElements/button/Button';
import Hidden from '@basics/shared/layout/hidden/Hidden';
import { PaginationProps, PaginationState } from '@/interfaces';

import { StyledPagination } from './Pagination.styles';

const Pagination: FC<PaginationProps> = (props): ReactElement => {
  const {
    activeButtonBorderColor,
    activeButtonColor = 'primary',
    activeButtonTextColor = 'white',
    buttonBorderColor,
    buttonBorderRadius,
    buttonColor = 'secondary',
    buttonSize,
    buttonSpacing = '0',
    buttonTextColor = 'white',
    currentPage,
    handlePageChange,
    iconStyle = 'light',
    numberOfPages,
    nextIconName = 'arrow-right',
    prevIconName = 'arrow-left',
  } = props;

  const maxPrevNext = 2;

  const [state, setState] = useReducer(
    (currentState: PaginationState, newState: PaginationState) => ({
      ...currentState,
      ...newState,
    }),
    {
      currentPage,
      maxPrevNext,
      prevPage: currentPage - 1,
      nextPage: currentPage + 1,
      lastPage: numberOfPages,
      pagesBefore: [],
      pagesAfter: [],
    },
  );

  useEffect(() => {
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    let pagesBefore = [];
    const pagesAfter = [];

    for (let i = prevPage; i > 0 && pagesBefore.length < maxPrevNext; i--) {
      pagesBefore.push(i);
    }

    pagesBefore = pagesBefore.reverse();

    for (
      let i = nextPage;
      i <= numberOfPages && pagesAfter.length < maxPrevNext;
      i++
    ) {
      pagesAfter.push(i);
    }

    setState({
      ...state,
      currentPage,
      prevPage,
      nextPage,
      pagesBefore,
      pagesAfter,
    });
  }, [currentPage]);

  return (
    <Hidden hidden={numberOfPages <= 1}>
      <StyledPagination {...props}>
        {currentPage > 1 && (
          <Button
            iconSpacing="0px"
            iconName={prevIconName}
            iconStyle={iconStyle}
            buttonColor={buttonColor}
            buttonBorderColor={buttonBorderColor}
            buttonTextColor={buttonTextColor}
            buttonSize={buttonSize}
            buttonBorderRadius={buttonBorderRadius}
            buttonSpacing={buttonSpacing}
            onClick={() => handlePageChange && handlePageChange(state.prevPage)}
          />
        )}

        {state.pagesBefore.indexOf(1) === -1 &&
          currentPage > state.prevPage + 1 && (
            <Button
              buttonLabel="1"
              buttonColor={buttonColor}
              buttonBorderColor={buttonBorderColor}
              buttonTextColor={buttonTextColor}
              buttonSize={buttonSize}
              buttonBorderRadius={buttonBorderRadius}
              buttonSpacing={buttonSpacing}
              onClick={() => handlePageChange && handlePageChange(1)}
            />
          )}

        {state.pagesBefore.indexOf(1) === -1 && currentPage > 5 && (
          <Button
            buttonLabel="..."
            buttonColor={buttonColor}
            buttonBorderColor={buttonBorderColor}
            buttonTextColor={buttonTextColor}
            buttonSize={buttonSize}
            buttonBorderRadius={buttonBorderRadius}
            buttonSpacing={buttonSpacing}
            buttonDisabled
            onClick={() => false}
          />
        )}

        {state.pagesBefore.map((page: number, key: number) => (
          <Button
            key={key}
            buttonLabel={`${page}`}
            buttonColor={buttonColor}
            buttonBorderColor={buttonBorderColor}
            buttonTextColor={buttonTextColor}
            buttonSize={buttonSize}
            buttonBorderRadius={buttonBorderRadius}
            buttonSpacing={buttonSpacing}
            onClick={() => handlePageChange && handlePageChange(page)}
          />
        ))}

        <Button
          buttonLabel={`${currentPage}`}
          buttonColor={activeButtonColor}
          buttonBorderColor={activeButtonBorderColor}
          buttonTextColor={activeButtonTextColor}
          buttonSize={buttonSize}
          buttonBorderRadius={buttonBorderRadius}
          buttonSpacing={buttonSpacing}
        />

        {state.pagesAfter.map((page: number, key: number) => (
          <Button
            key={key}
            buttonLabel={`${page}`}
            buttonColor={buttonColor}
            buttonBorderColor={buttonBorderColor}
            buttonTextColor={buttonTextColor}
            buttonSize={buttonSize}
            buttonBorderRadius={buttonBorderRadius}
            buttonSpacing={buttonSpacing}
            onClick={() => handlePageChange && handlePageChange(page)}
          />
        ))}

        {state.lastPage > 1 &&
          state.pagesAfter.indexOf(state.lastPage - 1) === -1 &&
          currentPage !== state.lastPage - 1 &&
          currentPage !== state.lastPage && (
            <Button
              buttonLabel="..."
              buttonColor={buttonColor}
              buttonBorderColor={buttonBorderColor}
              buttonTextColor={buttonTextColor}
              buttonSize={buttonSize}
              buttonBorderRadius={buttonBorderRadius}
              buttonSpacing={buttonSpacing}
              buttonDisabled
            />
          )}

        {state.pagesAfter.indexOf(state.lastPage) === -1 &&
          currentPage < state.lastPage && (
            <Button
              buttonLabel={`${state.lastPage}`}
              buttonColor={buttonColor}
              buttonBorderColor={buttonBorderColor}
              buttonTextColor={buttonTextColor}
              buttonSize={buttonSize}
              buttonBorderRadius={buttonBorderRadius}
              buttonSpacing={buttonSpacing}
              onClick={() =>
                handlePageChange && handlePageChange(state.lastPage)
              }
            />
          )}

        {currentPage < state.lastPage && (
          <Button
            iconSpacing="0px"
            iconName={nextIconName}
            iconStyle={iconStyle}
            buttonColor={buttonColor}
            buttonBorderColor={buttonBorderColor}
            buttonTextColor={buttonTextColor}
            buttonSize={buttonSize}
            buttonBorderRadius={buttonBorderRadius}
            buttonSpacing={buttonSpacing}
            onClick={() => handlePageChange && handlePageChange(state.nextPage)}
          />
        )}
      </StyledPagination>
    </Hidden>
  );
};

export default Pagination;
