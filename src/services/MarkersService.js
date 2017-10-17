import request from 'superagent';
export default class MarkersService {
    static getMarkers(callback){
        return request.
		get("https://conayu.mybluemix.net/traer").
		end(function(error, response){
			if(error) return callback(error);
			return callback(null, response.body);
		});
    }
}