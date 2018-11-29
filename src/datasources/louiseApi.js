import {RESTDataSource} from 'apollo-datasource-rest'

class LouiseAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = process.env.LOUISE_URL;
      this.token = process.env.LOUISE_KEY;
    }
    

    willSendRequest(request) {
        request.headers.set('x-api-key', this.token);
    }

    async getExposure(exposureId){
        return this.getResult(`exposures/${exposureId}`);
    }
    
    async getMedia(mediaId){
        return this.getResult(`media/${mediaId}`);
    }
    
    async getProduct(productId){
        return this.getResult(`products/${productId}`);
    }
    
    async getProductsByIds(productIds){
        return Promise.all(
            productIds.map(productId => this.getProduct(productId)),
        );
    }
    
    async getProductBroadcasts(productId){
        return this.getResult(`products/${productId}/broadcasts`);
    }
    
    async getProductExposures(productId){
        return this.getResult(`Products/${productId}/exposures`);
    }
    
    async getProductVersions(productId){
        return this.getResult(`products/${productId}/versions`);
    }
    
    async getVersion(versionId){
        return this.getResult(`versions/${versionId}`);
    }
    
    async getVersionMedias(versionId){
        return this.getResult(`versions/${versionId}/media`);
    }
    
    async getVersionSubtitles(versionId){
        return this.getResult(`versions/${versionId}/subtitles`);
    }
    
    async getResult(path){
        //console.log(`- ${this.baseURL}/${path}`);
        const result = await this.get(path);
        return result.data;
    }
}

export {LouiseAPI}