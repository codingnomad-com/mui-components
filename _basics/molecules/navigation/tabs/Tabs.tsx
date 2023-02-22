import React, {
  FC,
  ReactElement,
  MouseEvent,
  useState,
  useEffect,
} from 'react';
import Button from '@basics/atoms/formElements/button/Button';
import {
  TabsProps,
  TabsTabItemProps,
  TabsFormattedTabItemProps,
} from '@/interfaces';
import { StyledTabs } from './Tabs.styles';

const Tabs: FC<TabsProps> = (props): ReactElement => {
  const {
    activeBackgroundColor = 'primary',
    activeTab,
    activeTextColor = 'white',
    backgroundColor = 'white',
    borderColor = 'primary',
    buttonSpacing,
    handleClick,
    size = 'medium',
    tabItems = [],
    textColor = 'primary',
  } = props;

  const [currentTab, setCurrentTab] = useState(activeTab || '');

  useEffect(() => setCurrentTab(activeTab || ''), [activeTab]);

  const formattedTabs = tabItems.map((tab: TabsTabItemProps) => {
    const isActive = currentTab === tab.value;

    return {
      ...tab,
      isActive,
      buttonColor: isActive ? activeBackgroundColor : backgroundColor,
      buttonTextColor: isActive ? activeTextColor : textColor,
      buttonBorderColor: borderColor,
      buttonLabel: tab.label,
      borderColor,
    };
  });

  const handleChangeActiveTab = (
    event: MouseEvent,
    tab: TabsFormattedTabItemProps,
  ) => {
    if (handleClick && tab.linkType === 'callback') {
      event.stopPropagation();

      setCurrentTab(tab.value);

      handleClick(tab.value);
    }
  };

  return (
    <StyledTabs {...props}>
      {formattedTabs.map((tab, key) => (
        <Button
          key={key}
          buttonColor={tab.buttonColor}
          buttonTextColor={tab.buttonTextColor}
          buttonBorderColor={tab.buttonBorderColor}
          buttonLabel={tab.buttonLabel}
          buttonSpacing={buttonSpacing}
          buttonBorderRadius="0px"
          onClick={(event: MouseEvent) => handleChangeActiveTab(event, tab)}
          buttonSize={size}
          buttonHref={tab.href}
          buttonTarget={tab.targetBlank}
        />
      ))}
    </StyledTabs>
  );
};

export default Tabs;
