import { Collapse, InputAdornment } from '@mui/material';
import { FC, Fragment, ReactElement, useState } from 'react';
import { Input } from '~/atoms/formElement/Input/Input';
import { MaterialIcon } from '~/atoms/icon/MaterialIcon/MaterialIcon';
import { MaterialIconName } from '~/atoms/icon/MaterialIcon/types/MaterialIconName';
import { Box } from '~/atoms/layout/Box/Box';
import { IconButton } from '~/molecules/button/IconButton/IconButton';
import { List } from '~/molecules/data/List/List';
import { ListItem } from '~/molecules/data/List/ListItem';
import { ListItemButton } from '~/molecules/data/List/ListItemButton';
import { ListItemIcon } from '~/molecules/data/List/ListItemIcon';
import { ListItemText } from '~/molecules/data/List/ListItemText';
import { ListSubheader } from '~/molecules/data/List/ListSubheader';
import { NavigationProps } from './interfaces/NavigationProps';
import { CreateItem } from './types/CreateItem';
import { NavigationCategory } from './types/NavigationCategory';
import { NavigationGroup } from './types/NavigationGroup';
import { NavigationItem } from './types/NavigationItem';

export const Navigation: FC<NavigationProps> = (props) => {
  const { groups } = props;

  const [categoriesOpen, setOpen] = useState([{ key: 'key', state: false }]);

  const addUseSate = (key: string, state: boolean) => {
    categoriesOpen.push({ key, state });
  };

  const handleCollapsClick = (key: string) => {
    const newCategoriesOpen = Object.assign([], categoriesOpen) as {
      key: string;
      state: boolean;
    }[];
    if (categoriesOpen[key]) {
      newCategoriesOpen[key].state = !categoriesOpen[key].state;
    }
    setOpen(newCategoriesOpen);
  };

  const renderFoldIcon = (
    key: string,
    expanIcon?: MaterialIconName,
    collapseIcon?: MaterialIconName,
  ): ReactElement<typeof MaterialIcon> =>
    categoriesOpen[key] ? (
      <MaterialIcon iconName={collapseIcon ?? 'ExpandLessTwoTone'} />
    ) : (
      <MaterialIcon iconName={expanIcon ?? 'ExpandMoreTwoTone'} />
    );

  const renderAddInput = (conf: CreateItem) => (
    <ListItem dense>
      <Input
        key="a"
        size="small"
        variant="standard"
        placeholder={conf.label}
        InputProps={
          conf.icon && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={conf.onCreate}>
                  <MaterialIcon iconName={conf.icon} />
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      />
    </ListItem>
  );

  const renderNavigationItems = (items: NavigationItem[]) =>
    items.map((item: NavigationItem) => {
      return (
        <ListItemButton
          key={item.key}
          sx={{ py: 0, minHeight: 32 }}
          onClick={item.onClick}
        >
          <ListItemIcon sx={{ fontSize: 11 }}>
            <MaterialIcon
              iconName={
                item.bulletIcon ? item.bulletIcon : 'FiberManualRecordTwoTone'
              }
            />
          </ListItemIcon>

          <ListItemText
            primary={item.title}
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: 'medium',
            }}
          />
        </ListItemButton>
      );
    });

  const renderItemList = (category: NavigationCategory) => {
    return (
      <Collapse
        in={categoriesOpen[category.key].state}
        timeout="auto"
        unmountOnExit
      >
        <List disablePadding>
          {category.items &&
            category.items.length > 0 &&
            renderNavigationItems(category.items)}

          {category.createItemConf && renderAddInput(category.createItemConf)}
        </List>
      </Collapse>
    );
  };

  const renderNavigationCategories = (categories: NavigationCategory[]) =>
    categories.map((category: NavigationCategory) => {
      const collapsable =
        (category.items && category.items.length > 0) ||
        category.createItemConf;

      if (collapsable) {
        addUseSate(category.key, category.defaultOpen ?? false);
      }

      return (
        <Fragment key={category.key}>
          <ListItemButton
            onClick={
              collapsable ? () => handleCollapsClick(category.key) : undefined
            }
          >
            <ListItemIcon>
              {category.icon && <MaterialIcon iconName={category.icon} />}
            </ListItemIcon>

            <ListItemText primary={category.title} />

            {collapsable &&
              renderFoldIcon(
                category.key,
                category.expandIcon,
                category.collapseIcon,
              )}
          </ListItemButton>

          {collapsable && renderItemList(category)}
        </Fragment>
      );
    });

  const renderNavigation = (navigationGroups: NavigationGroup[]) =>
    navigationGroups.map((group: NavigationGroup) => {
      return (
        <List
          key={group.key}
          sx={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            '.MuiListItemIcon-root': {
              minWidth: '40px',
              flexDirection: 'column',
              alignItems: 'center',
            },
          }}
          subheader={
            group.title && <ListSubheader>{group.title}</ListSubheader>
          }
        >
          {renderNavigationCategories(group.categories)}
        </List>
      );
    });

  return <Box>{renderNavigation(groups)}</Box>;
};
