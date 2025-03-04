import picture from "/profile-picture.svg";

export interface CvData {
  general: {
    picture: string;
    firstname: string;
    lastname: string;
    title: string;
    dateOfBirth: string;
    phone: string;
    address: string;
    email: string;
  };
}

export const exampleData: CvData = {
  general: {
    picture,
    firstname: "John",
    lastname: "Smith",
    title: "Software Developer",
    dateOfBirth: "2000-10-23",
    phone: "123-456-7890",
    address: "Rome, IT",
    email: "steiflerthomas@gmail.com",
  },
};
