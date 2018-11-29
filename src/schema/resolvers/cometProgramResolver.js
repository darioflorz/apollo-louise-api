const cometProgramResolver = {
    Query: {
        async cometProgram(_root, { reference }, { dataSources }, _info) {
            return dataSources.CometMetadataAPI.getProduct(reference);
        }
    },
    CometProgram: {
        async product(cometProgram, _args, { dataSources }, _info) {
            return dataSources.LouiseAPI.getProduct(cometProgram.reference);
        },
    }
};

export { cometProgramResolver }

