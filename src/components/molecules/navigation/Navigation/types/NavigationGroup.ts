import { NavigationCategory } from './NavigationCategory';

export type NavigationGroup = {
  key: string;
  title?: string;
  categories: NavigationCategory[];
};
