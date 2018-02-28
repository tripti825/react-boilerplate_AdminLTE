import config from 'config';
import { fromJS } from 'immutable';


export function getRequestUrl(api) {
  return `${config.apiUrl}${api}`;
}

export function generatePacket(arg){
	const req_config = {
		query_type : 'select',
		table_name : 'table2',
		return_type: 'id',
		data	   : [{}]
	}

	const result = Object.keys(req_config).reduce((acc, key) => {
	  acc[key] = arg[key] || req_config[key];
	  return acc;
	}, {});

	return result;	
}