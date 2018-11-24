import * as louiseApi from '../../datasources/louiseApi';

const exposureResolver = {
  Query: {
    async exposure(root, args, context, info) {
      // code to get data from db / other source
      const res_1 = await louiseApi.getExposure(args.id);
      return res_1.data;
    }
  },
  Exposure: {
    async product(exposure) {
      // code to get data from db / other source
      const res_1 = await louiseApi.getProduct(exposure.product_key);
      return res_1.data;
    },
  }
};

export { exposureResolver }

