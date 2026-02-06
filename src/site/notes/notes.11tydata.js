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
      // 1. Home Page Logic
      if (data.tags && data.tags.includes("gardenEntry")) {
        return "/";
      }

      // 2. FORCE FIX: Manually set the paths for your specific pages
      // This ensures they work even if the YAML frontmatter is ignored.
      if (data.page.fileSlug === 'the-media-project') {
        return '/media-project/';
      }
      if (data.page.fileSlug === 'path-of-inner-work') {
        return '/inner-work/';
      }

      // 3. Use manual permalink if present (for other future pages)
      if (data.permalink) {
        return data.permalink;
      }

      // 4. Default Fallback: Clean URL structure
      // This prevents the ugly "host-digital-garden..." URLs
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
