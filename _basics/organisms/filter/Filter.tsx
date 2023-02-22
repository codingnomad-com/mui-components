import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useCallback,
  FormEventHandler,
} from 'react';
import FilterSelect from '@basics/molecules/filter/filterSelect/FilterSelect';
import SearchField from '@basics/molecules/filter/searchField/SearchField';
import SortSelect from '@basics/molecules/filter/sortSelect/SortSelect';
import QuickFilter from '@basics/molecules/filter/quickFilter/QuickFilter';
import RangeSlider from '@basics/molecules/filter/rangeSlider/RangeSlider';
import Headline from '@basics/atoms/typography/headline/Headline';
import Button from '@basics/atoms/formElements/button/Button';
import Textlink from '@basics/atoms/typography/links/textlink/Textlink';
import DateFilter from '@basics/molecules/filter/datePickerFilter/DatePickerFilter';

import {
  FilterProps,
  FilterItem,
  FilterType,
  QuickFilterProps,
  SearchFieldProps,
  FilterSelectProps,
  SortSelectProps,
  RangeSliderProps,
  DatePickerFilterProps,
  FilterRow,
} from '@/interfaces';
import { FilterSelectItem, QuickFilterItem } from '@/types';
import {
  StyledFilter,
  StyledFilterRow,
  StyledResetButton,
  StyledCtaWrapper,
} from './Filter.styles';

const getFormattedFilters = (rows: FilterRow[]) => {
  const getFiltersOfType = (type: FilterType) =>
    rows.reduce((acc, row) => {
      const itemsOfType = row.items.filter((item) => item.type === type);
      return [...acc, ...itemsOfType];
    }, []);

  const [
    quickFilters,
    searchFields,
    filterSelects,
    sortSelects,
    rangeSliders,
    dateFilters,
  ] = [
    'quickFilter',
    'searchField',
    'filterSelect',
    'sortSelect',
    'rangeSlider',
    'dateFilter',
  ].map(getFiltersOfType);

  const formattedDateFilters = dateFilters.map(
    ({ name, value }: DatePickerFilterProps) => ({
      name,
      value,
    }),
  );

  const formattedQuickFilters: QuickFilterItem[] = [];
  quickFilters.forEach((quickFilter: QuickFilterProps) =>
    quickFilter.items.forEach((item) => {
      if (item.selected) {
        formattedQuickFilters.push(item);
      }
    }),
  );

  const formattedSearchFields = searchFields
    .map(({ name, value }: SearchFieldProps) =>
      value
        ? {
            name,
            value,
          }
        : false,
    )
    .filter(Boolean);

  const formattedFilterSelects = filterSelects
    .map((filterSelect: FilterSelectProps) => {
      if (!filterSelect.items.some((item) => item.selected)) return false;

      if (filterSelect.isMulti) {
        const updatedItems = filterSelect.items
          .filter((item) => item.selected)
          .map((item) => item.value);

        return {
          [filterSelect.name]: updatedItems,
          isMulti: true,
        };
      }

      const { name } = filterSelect;
      const value = filterSelect.items.find((item) => item.selected)?.value;

      return {
        name,
        value,
      };
    })
    .filter(Boolean);

  const formattedSortSelects = sortSelects
    .map((sortSelect: SortSelectProps) => {
      const selectedItem = sortSelect.items.find((item) => item.selected);

      if (!selectedItem) return false;

      const [name, value] = (selectedItem.value || '').split(':');

      return { name, value };
    })
    .filter(Boolean);

  const formattedRangeSliders = rangeSliders.map(
    ({ id, minValue, maxValue }: RangeSliderProps) => ({
      id,
      minValue,
      maxValue,
    }),
  );

  return {
    searchFields: formattedSearchFields,
    dateFilters: formattedDateFilters,
    quickFilters: formattedQuickFilters,
    filterSelects: formattedFilterSelects,
    sortSelects: formattedSortSelects,
    rangeSliders: formattedRangeSliders,
  };
};

const Filter: FC<FilterProps> = (props): ReactElement => {
  const {
    onSubmit,
    filterRows: initialFilterRows,
    headlineProps,
    wrapperStyles,
    applyButtonText = 'Suchen',
    resetText = 'Filter zurücksetzen',
    applyOnChange,
    noBorder,
    refetch,
    variables = {},
  } = props;

  const [rows, setRows] = useState(initialFilterRows);

  useEffect(() => {
    if (refetch) {
      const formattedFilters = getFormattedFilters(rows);

      refetch({
        ...variables,
        page: 1,
        filters: formattedFilters,
      });
    }
  }, []);

  const onChangeFilter = useCallback(
    (updatedRows: FilterRow[]) => {
      if (applyOnChange && refetch) {
        const formattedFilters = getFormattedFilters(updatedRows);

        refetch({
          ...variables,
          page: 1,
          filters: formattedFilters,
        });
      }

      setRows(updatedRows);
    },
    [applyOnChange, rows, refetch, variables],
  );

  const resetAll = () => setRows(initialFilterRows);

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formattedFilters = getFormattedFilters(rows);

    if (refetch) {
      refetch({ ...variables, page: 1, filters: formattedFilters });
    }

    if (onSubmit) {
      onSubmit(formattedFilters);
    }
  };

  const handleSortSelectChanged = (
    updatedItems: FilterSelectItem[],
    id: string,
  ) => {
    const updatedRows = rows.map((row) => ({
      ...row,
      items: row.items.map((item) => {
        if (item.type === 'sortSelect' && item.id === id) {
          return { ...item, items: updatedItems };
        }

        return item;
      }),
    }));

    onChangeFilter(updatedRows);
  };

  const handleSearchFieldChanged = (updatedValue: string, id: string) => {
    const updatedRows = rows.map((row) => ({
      ...row,
      items: row.items.map((item) => {
        if (item.type === 'searchField' && item.id === id) {
          return { ...item, value: updatedValue };
        }

        return item;
      }),
    }));

    onChangeFilter(updatedRows);
  };

  const handleFilterSelectChanged = (
    updatedItems: FilterSelectItem[],
    id: string,
  ) => {
    const updatedRows = rows.map((row) => ({
      ...row,
      items: row.items.map((item) => {
        if (item.type === 'filterSelect' && item.id === id) {
          return { ...item, items: updatedItems };
        }

        return item;
      }),
    }));

    onChangeFilter(updatedRows);
  };

  const handleQuickFilterChanged = (
    updatedItems: QuickFilterItem[],
    id: string,
  ) => {
    const updatedRows = rows.map((row) => ({
      ...row,
      items: row.items.map((item) => {
        if (item.type === 'quickFilter' && item.id === id) {
          return { ...item, items: updatedItems };
        }

        return item;
      }),
    }));

    onChangeFilter(updatedRows);
  };

  const handleRangeSliderChanged = (
    { minValue, maxValue }: { minValue: number; maxValue: number },
    id: string,
  ) => {
    const updatedRows = rows.map((row) => ({
      ...row,
      items: row.items.map((item) => {
        if (item.type === 'rangeSlider' && item.id === id) {
          return {
            ...item,
            minValue,
            maxValue,
          };
        }

        return item;
      }),
    }));

    onChangeFilter(updatedRows);
  };

  const handleDateFilterChanged = (value: string, id: string) => {
    const updatedRows = rows.map((row) => ({
      ...row,
      items: row.items.map((item) => {
        if (item.type === 'dateFilter' && item.id === id) {
          return { ...item, value };
        }

        return item;
      }),
    }));

    onChangeFilter(updatedRows);
  };

  const renderFilterItem = (item: FilterItem) => {
    if (item.type === 'quickFilter') {
      return (
        <QuickFilter
          {...item}
          handleClick={handleQuickFilterChanged}
          key={item.id}
        />
      );
    }

    if (item.type === 'sortSelect') {
      return (
        <SortSelect
          {...item}
          handleChange={handleSortSelectChanged}
          key={item.id}
        />
      );
    }

    if (item.type === 'searchField') {
      return (
        <SearchField
          {...item}
          handleChange={handleSearchFieldChanged}
          key={item.id}
        />
      );
    }

    if (item.type === 'filterSelect') {
      return (
        <FilterSelect
          {...item}
          handleChange={handleFilterSelectChanged}
          key={item.id}
        />
      );
    }

    if (item.type === 'rangeSlider') {
      return (
        <RangeSlider
          {...item}
          handleChange={handleRangeSliderChanged}
          key={item.id}
        />
      );
    }

    if (item.type === 'dateFilter') {
      return (
        <DateFilter
          {...item}
          handleChange={handleDateFilterChanged}
          key={item.id}
        />
      );
    }

    return <></>;
  };

  return (
    <StyledFilter
      onSubmit={handleOnSubmit}
      noBorder={noBorder}
      style={wrapperStyles}
    >
      {headlineProps && (
        <Headline headlineLevel="h2" {...headlineProps}>
          {headlineProps.children}
        </Headline>
      )}

      {rows.map(
        (
          { items, justifyContent, includeResetButton, includeSearchButton },
          key,
        ) => (
          <StyledFilterRow key={key} justifyContent={justifyContent}>
            {items.map((item) => renderFilterItem(item))}

            {(includeSearchButton || includeResetButton) && (
              <StyledCtaWrapper>
                {includeResetButton && (
                  <StyledResetButton>
                    <Textlink handleClick={resetAll} underlined>
                      {resetText}
                    </Textlink>
                  </StyledResetButton>
                )}

                {includeSearchButton && (
                  <Button
                    buttonColor="primary"
                    buttonTextColor="white"
                    buttonSpacing="0"
                    buttonLabel={applyButtonText}
                  />
                )}
              </StyledCtaWrapper>
            )}
          </StyledFilterRow>
        ),
      )}
    </StyledFilter>
  );
};

export default Filter;
