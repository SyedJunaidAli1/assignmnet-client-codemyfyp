export type PersonalDetails = {
  fullName: string;
  dob: string;
  age: number;
  height: string;
  religion: string;
  caste: string;
  location: string;
  contact: string;
};

export type FamilyDetails = {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  siblings: string;
  familyType: string;
};

export type EducationProfession = {
  highestQualification: string;
  college: string;
  profession: string;
  company: string;
  income: string;
};

export type Horoscope = {
  rashi: string;
  nakshatra: string;
  manglik: boolean;
};

export type Biodata = {
  personalDetails: PersonalDetails;
  familyDetails: FamilyDetails;
  educationProfession: EducationProfession;
  horoscope?: Horoscope;
  profilePhoto?: string;
  template: string;
};