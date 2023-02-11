const testProductId = 40350;

const testProduct = {
  id: 40350,
  name: 'Blues Suede Shoes',
  slogan: '2019 Stanley Cup Limited Edition',
  description: 'Touch down in the land of the Delta Blues in the middle of the pouring rain',
  category: 'Dress Shoes',
  default_price: '120.00',
  features: [
    {
      feature: 'Sole',
      value: 'Rubber'
    },
    {
      feature: 'Material',
      value: 'FullControlSkin'
    },
    {
      feature: 'Stitching',
      value: 'Double Stitch'
    }
  ]
};

const testProductStyles = {
  product_id: '40350',
  results: [
    {
      style_id: 240531,
      name: 'White Sole',
      original_price: '120.00',
      sale_price: null,
      'default?': false,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        }
      ]
    }
  ]
};

const testRelatedProductsList = [
  40347,
  40351,
  40362,
  40371
];

const testRelatedProduct = {
  id: 40347,
  name: "Slacker's Slacks",
  slogan: 'Comfortable for everything, or nothing',
  description: "I'll tell you how great they are after I nap for a bit.",
  category: 'Pants',
  default_price: '65.00',
  features: [
    {
      feature: 'Fabric',
      value: '99% Cotton 1% Elastic'
    },
    {
      feature: 'Cut',
      value: 'Loose'
    }
  ]
};

const testRelatedProductStyles = {
  product_id: '40347',
  results: [
    {
      style_id: 240516,
      name: 'Black',
      original_price: '65.00',
      sale_price: null,
      'default?': true,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        }
      ]
    }
  ]
};

export {
  testProductId,
  testRelatedProduct,
  testProduct,
  testProductStyles,
  testRelatedProductsList,
  testRelatedProductStyles
};
