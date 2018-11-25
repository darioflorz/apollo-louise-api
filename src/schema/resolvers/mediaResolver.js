import * as louiseApi from '../../datasources/louiseApi';

const mediaResolver = {
  Query: {
    async media(root, args, context, info) {
      // code to get data from db / other source
      return louiseApi.getMedia(args.id);
    },
    async medias(root, args, context, info) {
      var url_1 = `media_id=${args.media_id}`;
      var url = `media?${url_1}`;
      
      return louiseApi.get(url);
    },
  },
  Media: {
    async version(media) {
      return louiseApi.getVersion(media.version_key);
    },
  }
};

export { mediaResolver }

