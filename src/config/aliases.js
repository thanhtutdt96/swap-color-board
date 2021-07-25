const aliases = (prefix = `src`) => ({
    '@': `${prefix}`,
    '@components': `${prefix}/components`,
    '@contexts': `${prefix}/contexts`,
    '@config': `${prefix}/config`,
});

module.exports = aliases;
