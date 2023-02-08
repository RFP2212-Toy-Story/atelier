const testProdID = 40444;

const testReviews = [
  {
    review_id: 645236,
    rating: 2,
    summary: 'Eos ratione modi.',
    recommend: true,
    response: null,
    body: 'Culpa aperiam quidem qui veritatis eius accusantium voluptate consequuntur. Illo enim dolorem qui error quisquam itaque. Aut sed eius excepturi.',
    date: '2020-11-16T00:00:00.000Z',
    reviewer_name: 'Mac63',
    helpfulness: 29,
    photos: [
      {
        id: 1236175,
        url: 'https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
      },
      {
        id: 1236176,
        url: 'https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80'
      }
    ]
  },
  {
    review_id: 645239,
    rating: 4,
    summary: 'Eos at dolorem eos eius.',
    recommend: true,
    response: null,
    body: 'Qui adipisci tempore ut. Dignissimos incidunt voluptatem est nam non et aliquam qui. Qui id magnam qui minima. Fuga nihil maxime nulla. Qui atque saepe autem et perspiciatis sapiente perspiciatis. Nostrum assumenda fugiat illo.',
    date: '2020-10-19T00:00:00.000Z',
    reviewer_name: 'Maiya34',
    helpfulness: 29,
    photos: [
      {
        id: 1236169,
        url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80'
      },
      {
        id: 1236170,
        url: 'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
      }
    ]
  },
  {
    review_id: 645249,
    rating: 4,
    summary: 'Facere animi modi rerum dignissimos iste.',
    recommend: true,
    response: null,
    body: 'Aut quo sint hic et. Inventore pariatur nisi magni. Aut veniam molestias sit sed non consectetur harum. Minima dolores et veritatis.',
    date: '2020-11-25T00:00:00.000Z',
    reviewer_name: 'Anastacio82',
    helpfulness: 26,
    photos: [
      {
        id: 1236146,
        url: 'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
      },
      {
        id: 1236147,
        url: 'https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80'
      }
    ]
  },
  {
    review_id: 645242,
    rating: 5,
    summary: 'Odit error qui dolor delectus iusto fugiat.',
    recommend: true,
    response: null,
    body: 'Explicabo eos ab modi facilis. Et doloribus qui in voluptatum est. Quia et non suscipit aut. Cupiditate laudantium delectus id quis enim natus error et.',
    date: '2021-07-18T00:00:00.000Z',
    reviewer_name: 'Albert.Orn',
    helpfulness: 26,
    photos: [
      {
        id: 1236162,
        url: 'https://images.unsplash.com/photo-1534960680480-ca9853707e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80'
      },
      {
        id: 1236163,
        url: 'https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
      },
      {
        id: 1236164,
        url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80'
      }
    ]
  },
  {
    review_id: 645244,
    rating: 4,
    summary: 'Quaerat est cumque ipsum nihil ducimus.',
    recommend: true,
    response: '"Odio ut maxime molestias autem soluta est ab voluptas."',
    body: 'Sed maxime quia vitae rerum explicabo quae deleniti. Minus et provident ab neque laudantium placeat minus ducimus repellat. Laudantium vitae et repellat accusantium. Omnis vel fugit quia consequuntur asperiores facilis optio.',
    date: '2020-10-24T00:00:00.000Z',
    reviewer_name: 'Tristian.Hahn',
    helpfulness: 14,
    photos: [
      {
        id: 1236157,
        url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
      },
      {
        id: 1236158,
        url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80'
      }
    ]
  }
];

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

const testMeta = {
  product_id: '40444',
  ratings: {
    1: '9',
    2: '9',
    3: '9',
    4: '13',
    5: '7'
  },
  recommended: {
    false: '10',
    true: '37'
  },
  characteristics: {
    Fit: {
      id: 135553,
      value: '2.7894736842105263'
    },
    Length: {
      id: 135554,
      value: '2.6052631578947368'
    },
    Comfort: {
      id: 135555,
      value: '2.8157894736842105'
    },
    Quality: {
      id: 135556,
      value: '3.1315789473684211'
    }
  }
};

export {
  testProdID,
  testReviews,
  testProduct,
  testMeta
};
