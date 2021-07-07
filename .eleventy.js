module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/library');
    eleventyConfig.addPassthroughCopy('./src/script');
    eleventyConfig.addPassthroughCopy('./src/styles');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
    
};