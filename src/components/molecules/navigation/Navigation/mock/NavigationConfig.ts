import { NavigationGroup } from '~/molecules/navigation/Navigation/types/NavigationGroup';

/* eslint-disable no-alert */
export const navigationConfig: NavigationGroup[] = [
  {
    key: '1',
    categories: [
      {
        key: '1',
        title: 'Dashboard',
        icon: 'DashboardTwoTone',
      },
    ],
  },
  {
    key: '2',
    title: 'Brand Management',
    categories: [
      {
        key: '1',
        title: 'Brand Portal',
        icon: 'StarsTwoTone',
        createItemConf: {
          label: 'Neues Brand Portal hinzufügen',
          icon: 'AddCircleTwoTone',
        },
        items: [
          {
            key: '1',
            bulletIcon: 'Abc',
            title: 'Brand 1',
          },
          {
            key: '2',
            title: 'Brand 2',
          },
        ],
      },
      {
        key: '2',
        title: 'Media Libraries',
        icon: 'BookmarksTwoTone',
        items: [],
        createItemConf: {
          label: 'Neue Media Library hinzufügen',
        },
      },
      {
        key: '3',
        title: 'Guidelines',
        icon: 'AutoStoriesTwoTone',
        items: [
          {
            key: '1',
            title: 'Entry1',
          },
          {
            key: '2',
            title: 'Entry2',
          },
        ],
        createItemConf: {
          label: 'Neue Guideline hinzufügen',
        },
      },
    ],
  },
  {
    key: '3',
    title: 'Verfügbare Dateien',
    categories: [
      {
        key: '4',
        title: 'File Collections',
        icon: 'PermMediaTwoTone',
        items: [
          {
            key: '1',
            title: 'Entry1',
          },
          {
            key: '2',
            title: 'Entry2',
          },
        ],
        createItemConf: {
          label: 'Neue Collection hinzufügen',
        },
      },
    ],
  },
];
