import {RESTDataSource} from 'apollo-datasource-rest'

class CometMetadataAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = process.env.COMET_METADATA_URL;
        this.metadatatoken = process.env.COMET_TOKEN;
    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.metadatatoken);
    }

    async getProduct(reference){
        try {
            const result = await this.get(`programs/data?reference=${reference}&providerId=2`);
            return result[0];
        } catch (error) {
            return null;
        }
        
    }
}

export {CometMetadataAPI}