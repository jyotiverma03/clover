export interface IEmployee {
  id?: string;
  firstName?: string;
  lastName?: string;
  phoneNo?: string | null;
}

export const defaultValue: Readonly<IEmployee> = {};
