export type Profile = {
  id: string,
  userId: string,
  name: string,
  profilePic: string,
  about: string,
  blog: string,
  github: string,
  linkedIn: string,
  twitter: string,
  resume: string,
};

export type Job = {
  id: string,
  userId: string,
  name: string,
  dateStarted: string,
  dateEnded: string,
  description: string,
  role: string,
  details?: {
    list?: string[],
  },
};

export type Project = {
  id: string,
  userId: string,
  name: string,
  description: string,
  githubLink: string,
  demoLink: string,
  imageLink: string,
  tags?: {
    list?: string[],
  },
};
