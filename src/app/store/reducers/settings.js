const initialState = {
  socialMedia: {},
  stores: {},
  categories: [],
  home: {
    slider: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SETTINGS_SET":
      return action.settings;
    default:
      return state;
  }
};
