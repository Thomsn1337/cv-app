export interface CvData {
  general: {
    firstname: string;
    lastname: string;
    title: string;
    dateOfBirth: string;
    phone: string;
    address: string;
  };
}

export const exampleData: CvData = {
  general: {
    firstname: "John",
    lastname: "Smith",
    title: "qwrt",
    dateOfBirth: "2000-10-23",
    phone: "123-456-7890",
    address: "qwer",
  },
};
