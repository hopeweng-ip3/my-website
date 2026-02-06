require("dotenv").config();
const settings = require("../../helpers/constants");

const allSettings = settings.ALL_NOTE_SETTINGS;

module.exports = {
  eleventyComputed: {
    layout: (data) => {
      // Safety Check: Check if tags exist before looking inside them
      if (data.tags && data.tags.includes("gardenEntry")) {
        return "layouts/index.njk";
      }
      return "layouts/note.njk";
    },
    permalink: (data) => {
      // 1. Homepage Logic (This is working)
      if (data.tags && data.tags.includes("gardenEntry")) {
        return "/";
      }

      // 2. NUCLEAR FIX: Check the file path directly!
      // This ignores "slug" issues and looks for the filename in the path.
      const path = data.page.filePathStem || "";
      
      if (path.includes("The Media Project")) {
        return "/media-project/";
      }
      if (path.includes("Path of Inner Work")) {
        return "/inner-work/";
      }

      // 3. Manual Permalink from YAML
      if (data.permalink) {
        return data.permalink;
      }

      // 4. Default Fallback
      // This ensures all other notes get clean URLs too
      return `/notes/${data.page.fileSlug}/`;
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
