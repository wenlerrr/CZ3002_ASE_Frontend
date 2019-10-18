const postsData = [
  {
    id: 1000000000000,
    title: "Take out the trash",
    description: "You are trashyy",
    date: "Today",
    person:
      "https://randomuser.me/api/portraits/men/" +
      Math.floor(Math.random() * 50 + 1) +
      ".jpg",
    reply: [
      {
        id: 2000000000000,
        username: "Raymond",
        comment: "YESSSS!",
        person:
          "https://randomuser.me/api/portraits/men/" +
          Math.floor(Math.random() * 50 + 1) +
          ".jpg"
      },
      {
        id: 2000000000000,
        username: "Wen Le",
        comment: "NOOOO!",
        person:
          "https://randomuser.me/api/portraits/women/" +
          Math.floor(Math.random() * 50 + 1) +
          ".jpg"
      }
    ]
  },
  {
    id: 1100000000000,
    title: "Grocery shopping",
    description: "Shopppingg leggooo",
    date: "",
    person:
      "https://randomuser.me/api/portraits/men/" +
      Math.floor(Math.random() * 50 + 1) +
      ".jpg",
    reply: []
  },
  {
    id: 1110000000000,
    title: "Clean gecko tank",
    description: "Yashh! I love gecko",
    date: "Yesterday",
    person:
      "https://randomuser.me/api/portraits/women/" +
      Math.floor(Math.random() * 50 + 1) +
      ".jpg",
    reply: []
  },
  {
    id: 1111000000000,
    title: "Mow lawn",
    description: "MOO Moo",
    date: "",
    person:
      "https://randomuser.me/api/portraits/women/" +
      Math.floor(Math.random() * 50 + 1) +
      ".jpg",
    reply: []
  },
  {
    id: 1111100000000,
    title: "Catch up on Arrested Development",
    description: "",
    date: "",
    person:
      "https://randomuser.me/api/portraits/men/" +
      Math.floor(Math.random() * 50 + 1) +
      ".jpg",
    reply: []
  }
];

export default postsData;
