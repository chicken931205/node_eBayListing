const axios = require('axios');

const appId = 'DansCher-GuitarEf-PRD-9e53bbf14-72f35801';
const categoryId = '181222';
const url = 'https://svcs.ebay.com/services/search/FindingService/v1';

const findItemSpecific = (itemSpecifics, name) => {
    const specific = itemSpecifics.find(spec => spec.name[0].toLowerCase() === name.toLowerCase());
    return specific ? specific.value[0] : 'Not specified';
}

const findItemsAdvanced = () => {

    const params = {
        'OPERATION-NAME': 'findItemsAdvanced',
        'SERVICE-VERSION': '1.0.0',
        'SECURITY-APPNAME': appId,
        'RESPONSE-DATA-FORMAT': 'JSON',
        'categoryId': categoryId,
        'itemFilter(0).name': 'ListingType',
        'itemFilter(0).value(0)': 'FixedPrice',
        'itemFilter(1).name': 'Condition',
        'itemFilter(1).value(0)': '3000',
        'itemFilter(2).name': 'LocatedIn',
        'itemFilter(2).value(0)': 'North America',
        'sortOrder': 'StartTimeNewest',
        'outputSelector(0)': 'ItemSpecifics',
    };

    try {
        axios.get(url, { params })
        .then(async (response) => {
            const items = response.data.findItemsAdvancedResponse[0].searchResult[0].item;
            for (let i = 0;i < items.length;i++) {
                // const item = items[i];
                // const itemSpecifics = item.itemSpecifics ? item.itemSpecifics[0].nameValueList : [];
                // const model = findItemSpecific(itemSpecifics, 'Model'); // Custom function to find model in item specifics
                // const upc = findItemSpecific(itemSpecifics, 'UPC');
                // const brand = findItemSpecific(itemSpecifics, 'Brand');
                // if(model == 'Not specified' && upc == 'Not specified' && brand == 'Not specified') {
                //     continue;
                // }
                const title = item.title;
                const price = item.sellingStatus[0].convertedCurrentPrice[0].__value__;
                const currency = item.sellingStatus[0].convertedCurrentPrice[0]['@currencyId'];
                const shippingCost = item.shippingInfo[0].shippingServiceCost ? item.shippingInfo[0].shippingServiceCost[0].__value__ : 'Free Shipping';
                const itemSpecifics = item.itemSpecifics ? item.itemSpecifics[0].nameValueList : [];
                const model = findItemSpecific(itemSpecifics, 'Model'); // Custom function to find model in item specifics
                const upc = findItemSpecific(itemSpecifics, 'UPC');
                const brand = findItemSpecific(itemSpecifics, 'Brand');

                console.log(`Title: ${title}`);
                console.log(`Price: ${price}`);
                console.log(`Currency: ${currency}`);
                console.log(`Shipping Cost: ${shippingCost}`);
                console.log(`Model: ${model}`);
                console.log(`UPC: ${upc}`);
                console.log(`Brand: ${brand}`);
                console.log('-----------------');
            }
        })
        .catch(error => {
            console.error('Error fetching eBay listings:', error);
        });
    } catch (error) {
        console.error('Error in findItemsAdvanced:', error);
    }
}


findItemsAdvanced();




  