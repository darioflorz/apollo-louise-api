import * as louiseApi from '../../datasources/louiseApi';

const exposureResolver = {
  Query: {
    async exposure(root, args, context, info) {
      // code to get data from db / other source
      return louiseApi.getExposure(args.id);
    }
  },
  Exposure: {
    async product(exposure) {
      return louiseApi.getProduct(exposure.product_key);
    },
  }
};

export { exposureResolver }

