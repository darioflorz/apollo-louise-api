import * as louiseApi from '../../schema/louiseApi';

const productResolver = {
  Query: {
    async product(root, args, context, info) {
      // code to get data from db / other source
      const res_1 = await louiseApi.getProduct(args.id);
      return res_1.data;
    },
    async products(root, args, context, info) {
      // code to get data from db / other source
      var url_1 = args.media_id !== undefined ? `media_id=${args.media_id}`  
      : args.serie_key !== undefined ? `serie_key=${args.serie_key}`
      : `client_reference=${args.client_reference}`;

      var url = `products?${url_1}`; // use template literals (`${some_variable}`)
      
      const res_1 = await louiseApi.get(url);
      return res_1.data;
    },
  },
  Product: {
    async exposures(product) {
      //console.log(version);
      const res_1 = await louiseApi.getProductExposures(product.product_key);
      return res_1.data;
    },
    async broadcasts(product) {
      //console.log(version);
      const res_1 = await louiseApi.getProductBroadcasts(product.product_key);
      return res_1.data;
    },
    async versions(product) {
      //console.log(version);
      const res_1 = await louiseApi.getProductVersions(product.product_key);
      return res_1.data;
    },
  }
};

export { productResolver }

