import * as louiseApi from '../../datasources/louiseApi';

const mediaResolver = {
  Query: {
    async media(root, args, context, info) {
      // code to get data from db / other source
      const res_1 = await louiseApi.getMedia(args.id);
      return res_1.data;
    },
    async medias(root, args, context, info) {
      // code to get data from db / other source
      var url_1 = `media_id=${args.media_id}`;
      var url = `media?${url_1}`;
      
      const res_1 = await louiseApi.get(url);
      return res_1.data;
    },
  },
  Media: {
    async version(media) {
      // code to get data from db / other source
      const res_1 = await louiseApi.getVersion(media.version_key);
      return res_1.data;
    },
  }
};

export { mediaResolver }

