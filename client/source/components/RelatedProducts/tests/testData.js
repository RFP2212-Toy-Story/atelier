const testProductId = 40350;

const testProduct = {
  id: 40350,
  campus: 'hr-rfp',
  name: 'Blues Suede Shoes',
  slogan: '2019 Stanley Cup Limited Edition',
  description: 'Touch down in the land of the Delta Blues in the middle of the pouring rain',
  category: 'Dress Shoes',
  default_price: '120.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
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
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        }
      ],
      skus: {
        1394961: {
          quantity: 14,
          size: '7'
        },
        1394962: {
          quantity: 25,
          size: '7.5'
        },
        1394963: {
          quantity: 9,
          size: '8'
        },
        1394964: {
          quantity: 2,
          size: '8.5'
        },
        1394965: {
          quantity: 18,
          size: '9'
        },
        1394966: {
          quantity: 12,
          size: '9.5'
        },
        1394967: {
          quantity: 10,
          size: '10'
        },
        1394968: {
          quantity: 18,
          size: '10.5'
        },
        1394969: {
          quantity: 11,
          size: '11'
        },
        1394970: {
          quantity: 35,
          size: '11.5'
        },
        1394971: {
          quantity: 25,
          size: '12'
        }
      }
    }
  ]
};

const testProductRelated = [
  40344,
  40345,
  40346,
  40352
];

export {
  testProductId,
  testProduct,
  testProductStyles,
  testProductRelated
};
