// src\services\departments\departments-types.ts

export type TDepartment = {
  departmentId: number;
  displayName: string;
};

export type TDepartmentsState = {
  items: TDepartment[];
  current: TDepartment | null;
  loading: boolean;
  error: string | null;
};