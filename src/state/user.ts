export type User = {
  firstname: string;
  lastname: string;
  name: string;
  age: number;
};

export const userState: User | null = {
  firstname: 'A',
  lastname: 'B',
  name: '',
  age: 30,
};
