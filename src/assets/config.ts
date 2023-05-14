export const Config = {
  Basic: {
    language: 'en', // this could be an environment variable, or setup in a config service externally
  },
  Storage: {
    Key: 'garage',
    Timeout: 168, // a week
    ResetKey: '20220606', // yyyymmdd is best option
  },
};
