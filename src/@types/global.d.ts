declare namespace ITodo {
  interface IUser {
    name: string;
    id: number | string;
  }

  interface IProject {
    id: number | string;
    name: string;
    personId: number;
    organization: string;
    created: number;
  }

  interface IParam {
    name: string;
    personId: number | string;
  }
}
