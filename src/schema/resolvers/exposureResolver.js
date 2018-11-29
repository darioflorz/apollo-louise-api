const exposureResolver = {
  Query: {
    async exposure(_root, {id}, {dataSources}, _info) {
      // code to get data from db / other source
      return dataSources.LouiseAPI.getExposure(id);
    }
  },
  Exposure: {
    async product(exposure, _args, {dataSources}, _info) {
      return dataSources.LouiseAPI.getProduct(exposure.product_key);
    },
  }
};

export { exposureResolver }

