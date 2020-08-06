import { TableSortByFieldState } from 'src/packages/datav-core';

export interface Options {
  frameIndex: number;
  showHeader: boolean;
  sortBy?: TableSortByFieldState[];
}

export interface TableSortBy {
  displayName: string;
  desc: boolean;
}

export interface CustomFieldConfig {
  width: number;
  displayMode: string;
}
