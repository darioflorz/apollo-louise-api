import * as louiseApi from '../../datasources/louiseApi';

const productResolver = {
  Query: {
    async product(root, args, context, info) {
      // code to get data from db / other source
      return louiseApi.getProduct(args.id);
    },
    async products(root, args, context, info) {
      // code to get data from db / other source
      if(args.ids !== undefined){
        return louiseApi.getProductsByIds(args.ids);
      }
      var url_1 = args.media_id !== undefined ? `media_id=${args.media_id}`  
      : args.serie_key !== undefined ? `serie_key=${args.serie_key}`
      : `client_reference=${args.client_reference}`;

      var url = `products?${url_1}`; // use template literals (`${some_variable}`)
      
      return louiseApi.get(url);
    },
  },
  Product: {
    async exposures(product) {
      return louiseApi.getProductExposures(product.product_key);
    },
    async broadcasts(product) {
      return louiseApi.getProductBroadcasts(product.product_key);
    },
    async versions(product) {
      return louiseApi.getProductVersions(product.product_key);
    },
  }
};

export { productResolver }

