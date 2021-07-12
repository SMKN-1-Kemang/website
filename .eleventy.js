const {DateTime} = require('luxon');
const searchFilter = require("./src/script/searchFilter");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/library');
    eleventyConfig.addPassthroughCopy('./src/script');
    eleventyConfig.addPassthroughCopy('./src/styles');
    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addFilter("search", searchFilter);

    eleventyConfig.addCollection("news", collection => {
        return [...collection.getFilteredByGlob("./src/news/**/*.md")];
    });

    eleventyConfig.addFilter("dateFilter", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};