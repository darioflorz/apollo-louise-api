const productResolver = {
  Query: {
    async product(_root, {id}, {dataSources}, _info) {
      // code to get data from db / other source
      return dataSources.LouiseAPI.getProduct(id);
    },
    async products(_root, args, {dataSources}, _info) {
      // code to get data from db / other source
      if(args.ids !== undefined){
        return dataSources.LouiseAPI.getProductsByIds(args.ids);
      }
      var url_1 = args.media_id !== undefined ? `media_id=${args.media_id}`  
      : args.serie_key !== undefined ? `serie_key=${args.serie_key}`
      : `client_reference=${args.client_reference}`;

      var url = `products?${url_1}`; // use template literals (`${some_variable}`)
      
      return dataSources.LouiseAPI.getResult(url);
    },
  },
  Product: {
    async exposures(product, _args, {dataSources}, _info) {
      return dataSources.LouiseAPI.getProductExposures(product.product_key);
    },
    async broadcasts(product, _args, {dataSources}, _info) {
      return dataSources.LouiseAPI.getProductBroadcasts(product.product_key);
    },
    async versions(product, _args, {dataSources}, _info) {
      return dataSources.LouiseAPI.getProductVersions(product.product_key);
    },
  }
};

export { productResolver }

