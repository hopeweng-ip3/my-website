require("dotenv").config();
const settings = require("../../helpers/constants");

const allSettings = settings.ALL_NOTE_SETTINGS;

module.exports = {
  eleventyComputed: {
    layout: (data) => {
      // Safety: Check if tags exist before reading them
      if (data.tags && data.tags.includes("gardenEntry")) {
        return "layouts/index.njk";
      }
      return "layouts/note.njk";
    },
    permalink: (data) => {
      // 1. Homepage Logic
      if (data.tags && data.tags.includes("gardenEntry")) {
        return "/";
      }

      // 2. HARDCODED BYPASS (The Fix)
      // We check the filename (slug) and force the URL we want.
      if (data.page.fileSlug === 'the-media-project') {
        return '/media-project/';
      }
      if (data.page.fileSlug === 'path-of-inner-work') {
        return '/inner-work/';
      }

      // 3. Default Fallback
      // If we are here, it's a normal note. Use the clean /notes/ URL.
      // We use 'undefined' so it defaults to the standard behavior if no manual link exists.
      return data.permalink || `/notes/${data.page.fileSlug}/`;
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
