const versionResolver = {
    Query: {
      async version(_root, {id}, {dataSources}, _info) {
        // code to get data from db / other source
        return dataSources.LouiseAPI.getVersion(id);
      },
    },
    Version: {
        async product(version, _args, {dataSources}, _info){
          return dataSources.LouiseAPI.getProduct(version.product_key);
        },
        async medias(version, _args, {dataSources}, _info){
          return dataSources.LouiseAPI.getVersionMedias(version.id);
        },
        async subtitles(version, _args, {dataSources}, _info){
          return dataSources.LouiseAPI.getVersionSubtitles(version.id);
        },
    }
  };

  export {versionResolver}