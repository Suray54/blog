const INITIAL_STATE = {
  blogs: {
    front: {
      id: "1",
      title: "front",
      header: "RoadMap to Front-end Developer",
      details:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,minima magnam harum deleniti hic suscipit optio praesentium officiis      dolor. Reprehenderit dignissimos nisi illum libero vel asperiores      alias unde. Odit, repellat",
      date: "2020/08/20",
      tag: "Web Developer",
    },
    back: {
      id: "2",
      title: "back",
      header: "RoadMap to Back-end Developer",
      details:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,minima magnam harum deleniti hic suscipit optio praesentium officiis      dolor. Reprehenderit dignissimos nisi illum libero vel asperiores      alias unde. Odit, repellat",
      date: "2020/08/21",
      tag: "Web Developer",
    },
    full: {
      id: "3",
      title: "full",
      header: "RoadMap to full-stack Developer",
      details:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,minima magnam harum deleniti hic suscipit optio praesentium officiis      dolor. Reprehenderit dignissimos nisi illum libero vel asperiores      alias unde. Odit, repellat",
      date: "Future",
      tag: "Web Developer",
    },
  },
};
const blogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default blogReducer;
