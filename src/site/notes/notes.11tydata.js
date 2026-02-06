require("dotenv").config();
const settings = require("../../helpers/constants");

const allSettings = settings.ALL_NOTE_SETTINGS;

module.exports = {
  eleventyComputed: {
    layout: (data) => {
      // FIX 1: Safety Check - Check if tags exist before looking inside them
      if (data.tags && data.tags.includes("gardenEntry")) {
        return "layouts/index.njk";
      }
      return "layouts/note.njk";
    },
    permalink: (data) => {
      // FIX 2: Safety Check - Check if tags exist before looking inside them
      if (data.tags && data.tags.includes("gardenEntry")) {
        return "/";
      }

      // CRITICAL FIX: If a manual permalink is set in YAML, use it!
      // If this returns undefined, Eleventy will use the default path.
      return data.permalink || undefined;
    },
    settings: (data) => {
      const noteSettings = {};
      allSettings.forEach((setting) => {
        let noteSetting = data[setting];
        let globalSetting = process.env[setting];

        let settingValue =
          noteSetting || (globalSetting === "true" && noteSetting !== false);
        noteSettings[setting] = settingValue;
      });
      return noteSettings;
    },
  },
};
