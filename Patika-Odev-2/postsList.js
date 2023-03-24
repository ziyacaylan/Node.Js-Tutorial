const myPosts = [
  {
    id: "1",
    title: "Javascript",
    body: "Lorem ipsum dolar...!",
    date: "2023-03-24",
  },
  {
    id: "2",
    title: "Typescript",
    body: "Lorem ipsum dolar...!",
    date: "2023-03-24",
  },
  {
    id: "3",
    title: "TailwinsUI",
    body: "Lorem ipsum dolar...!",
    date: "2023-03-24",
  },
  {
    id: "4",
    title: "Material UI",
    body: "Lorem ipsum dolar...!",
    date: "2023-03-24",
  },
];

const ListThePost = () => {
  myPosts.map((post) => console.log(post));
};

const addTheNewPost = () => {
  myPosts.push({
    id: "5",
    title: "Next.JS",
    body: "Lorem ipsum dolar...!",
    date: "2023-03-25",
  });
};

const showThePost = async () => {
  try {
    await addTheNewPost();
    ListThePost();
  } catch (error) {
    console.log(error);
  }
};

showThePost();
