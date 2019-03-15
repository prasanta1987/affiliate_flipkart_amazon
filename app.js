const flipkart = require("flipkart-affiliate-client-v1");
const { OperationHelper } = require('apac');
const qury = require('./qury')


var flipkartClient = new flipkart.CreateAffiliateClient({
    trackingId: "prasanta13",
    token: "37aab18a3e8e48da95f50ee7e1a6d951",
    format: "json"
})


// const amazonClient = new OperationHelper({
//     awsId: 'AKIAJXE3GUWUHYUNXDNA',
//     awsSecret: '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',
//     assocId: 'prasanta1987-21',
//     locale: 'IN'
// })

qury.forEach((e) => {
    filpkartSearch(e);
})

function filpkartSearch(e) {

    flipkartClient.doKeywordSearch(e, 2)
        .then(function (value) {
            JSON.parse(value.body).products.forEach((e) => {
                console.log(e.productBaseInfoV1.title)
            })
        })
        .catch(function (err) {
            console.log(err);
        })

}