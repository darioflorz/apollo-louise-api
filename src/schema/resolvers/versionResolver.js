import * as louiseApi from '../../datasources/louiseApi';

const versionResolver = {
    Query: {
      async version(root, args, context, info) {
        // code to get data from db / other source
        return louiseApi.getVersion(args.id);
      },
    },
    Version: {
        async product(version){
          return louiseApi.getProduct(version.product_key);
        },
        async medias(version){
          return louiseApi.getVersionMedias(version.id);
        },
        async subtitles(version){
          return louiseApi.getVersionSubtitles(version.id);
        },
    }
  };

  export {versionResolver}