export interface NavItem {
  id: number;
  display: string;
  router: string;
  param?: any;
  type: RoutingItemTypeEnum,
  isActive: boolean;
  isInvisable?: boolean;
  childs?: NavItem[]
}

export enum RoutingItemTypeEnum {
  LINK = 0,
  DROPDOWN = 1,
}
