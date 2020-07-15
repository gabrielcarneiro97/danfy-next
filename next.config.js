module.exports = {
  exportPathMap: async (defaultPathMap) => ({
    ...defaultPathMap,
    '/': { page: '/main' },
  }),
};
