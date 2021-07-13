const {DateTime} = require('luxon');

module.exports = function(eleventyConfig) {
    // Make all static
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/library');
    eleventyConfig.addPassthroughCopy('./src/script');
    eleventyConfig.addPassthroughCopy('./src/styles');
    eleventyConfig.addPassthroughCopy('./src/admin');

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