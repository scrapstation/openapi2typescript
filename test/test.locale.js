const openAPI = require('../dist/index');

openAPI.generateService({
  schemaPath: 'https://localhost:7185/swagger/v1/swagger.json',
  serversPath: './servers',
  enumStyle: 'enum',
  namespace: false
});
