export type menuItemType = {
  name: string;
  path: string;
  group?: string;
  items?: menuItemType[];
  visible: boolean;
  needsLogin?: boolean;
};
