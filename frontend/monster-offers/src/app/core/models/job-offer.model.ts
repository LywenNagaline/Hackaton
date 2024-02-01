export interface JobOffer {
  id: number;
  title: string;
  requiredExperience: ExperienceLevelType;
  creationDate: Date;
  department: string;
}

enum ExperienceLevelType {
  BEGINNER,
  EXPERIENCED,
  SENIOR
}
