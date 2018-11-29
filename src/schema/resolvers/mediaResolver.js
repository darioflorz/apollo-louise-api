const mediaResolver = {
  Query: {
    async media(_root, {id}, {dataSources}, _info) {
      // code to get data from db / other source
      return dataSources.LouiseAPI.getMedia(id);
    },
    async medias(_root, {media_id}, {dataSources}, _info) {
      var url = `media?media_id=${media_id}`;  
      return dataSources.LouiseAPI.getResult(url);
    },
  },
  Media: {
    async version(media, _args, {dataSources}, _info) {
      return dataSources.LouiseAPI.getVersion(media.version_key);
    },
  }
};

export { mediaResolver }

