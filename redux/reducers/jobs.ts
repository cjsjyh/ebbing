const initialState = {
  counter: 0,
};

const jobs = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "test":
      return {};
    default:
      return state;
  }
};

export default jobs;
