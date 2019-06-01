import addDefaultMws from './default';
import addDevMws from './development';
import addProdMws from './production';
import envVars from '../../config/envVars';

const { NODE_ENV } = envVars;

const addMiddlewares = server => {
  const app = addDefaultMws(server);

  switch (NODE_ENV) {
    case 'production':
      return addProdMws(app);
    default:
      return addDevMws(app);
  }
};

export default addMiddlewares;
