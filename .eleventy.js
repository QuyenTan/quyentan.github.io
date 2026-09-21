module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./styles");
    eleventyConfig.addPassthroughCopy("./fonts");
    eleventyConfig.addPassthroughCopy("./images");
    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "docs",
        },
    };
};