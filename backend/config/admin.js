module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e88bd301a0d3b6b4a1adc36b23d3df93'),
  },
});
