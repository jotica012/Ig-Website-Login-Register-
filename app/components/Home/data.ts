interface DataShape {
    user: string;
    username: string;
    location: string;
    caption: string;
    likes: number;
    comments: number;
    days: number;
    bg: string;
    pic: string;
    peopleFollowed: string;
    story: string;
  }
  
  const data: DataShape[] = [
    {
      user: "./img/user.png",
      username: "Jotica012",
      location: "Cali",
      caption: "Wenas juanes",
      likes: 10,
      comments: 10,
      days: 2,
      bg: "./img/bg.png",
      pic: "./img/user3.png",
      peopleFollowed: "lidalee_01113",
      story: "./app/img/user3.png",
    },
    {
      user: "./img/user5.png",
      username: "Jotica012",
      location: "Cali",
      caption: "Wenas juanes",
      likes: 10,
      comments: 10,
      days: 2,
      bg: "./img/bg2.png",
      pic: "./img/user5.png",
      peopleFollowed: "lidalee_01113",
      story: "./app/img/user2.png",
    },
  ];
  
  export default data;