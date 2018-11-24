import * as louiseApi from '../../datasources/louiseApi';

const versionResolver = {
    Query: {
      async version(root, args, context, info) {
        // code to get data from db / other source
        const res_1 = await louiseApi.getVersion(args.id);
        return res_1.data;
      },
    },
    Version: {
        async product(version){
          const res_1 = await louiseApi.getProduct(version.product_key);
          return res_1.data;
        },
        async subtitles(version){
          const res_1 = await louiseApi.getVersionSubtitles(version.id);
          return res_1.data;
        },
    }
  };

  export {versionResolver}