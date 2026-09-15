module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./styles");
    eleventyConfig.addPassthroughCopy("./fonts");
    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "docs",
        },
    };
};