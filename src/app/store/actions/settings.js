// import SettingsServer from "../../server/settings";

export const setSettings = settings => ({
  type: "SETTINGS_SET",
  settings
});

export const loadSettings = () => async dispatch => {
  //   const settings = await SettingsServer.getSettings();
  //   dispatch(setSettings(settings));
};
