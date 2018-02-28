import development from './dev';
import staging from './staging';
import production from './prod';

const config = {
  development,
  staging,
  production,
};
export default config[process.env.NODE_ENV || 'development'];
