const courses = [
  {
    id: 1,
    title: "React hooks and context api",
    slug: "React hooks and context api",
    authorId: 1,
    keyword: "Express WebApi",
    level: "Intermediary",
    category: "Frontend-Web",
    leadDriver: "Rajat",
    IsScheduled: "Yes (21-Aug-19)",
    Notes: "some experience with react/redux",
    TotalVotes: "8"
  },
  {
    id: 3,
    title: "Creating APIs using Express framework in Node",
    slug: "Creating APIs using Express framework in Node",
    authorId: 3,
    keyword: "Express WebApi",
    level: "Beginner",
    category: "Backend",
    leadDriver: "Akash Seth",
    IsScheduled: "Yes (11-Sep-19)",
    Notes: "some experience with APIs",
    TotalVotes: "5"
  },
  {
    id: 4,
    title: "Agile Estimation Techniques",
    slug: "Agile Estimation Techniques",
    authorId: 2,
    keyword: "Express WebApi",
    level: "Beginner",
    category: "Agile",
    leadDriver: "Vishal Garg",
    IsScheduled: "Yes (10-Oct-19)",
    Notes: "some experience with Agile",
    TotalVotes: "7"
  },
  {
    id: 5,
    title: "Introduction to Tensorflow/keras",
    slug: "Introduction to Tensorflow/keras",
    authorId: 2,
    keyword: "Express Tensorflow",
    level: "Beginner",
    category: "Mixed",
    leadDriver: "Tarik Setia",
    IsScheduled: "Yes (18-Sep-19)",
    Notes: "some experience with Tensorflow",
    TotalVotes: "17"
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  keyword: "",
  level: "",
  category: "",
  leadDriver: "",
  IsScheduled: "",
  Notes: "",
  VoteUp: "",
  TotalVotes: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors
};
