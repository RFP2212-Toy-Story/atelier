const testProductId = 10000;

const testProduct = {
  id: 10000,
  campus: 'hr-rfp',
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
  features: [
    {
      feature: 'Fabric',
      value: 'Canvas'
    },
    {
      feature: 'Buttons',
      value: 'Brass'
    }
  ]
};

const testProductStyles = {
  product_id: '10000',
  results: [
    {
      style_id: 240500,
      name: 'Forest Green & Black',
      original_price: '140.00',
      sale_price: null,
      'default?': true,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        }
      ],
      skus: {
        1394769: {
          quantity: 8,
          size: 'XS'
        },
        1394770: {
          quantity: 15,
          size: 'S'
        }
      }
    }
  ]
};

const testProductResponse = {
  status: 200,
  data: {
    results: [testProductStyles]
  }
};

export {
  testProduct,
  testProductId,
  testProductResponse,
  testProductStyles
};
