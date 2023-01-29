import React from 'react';

const SortReviews = function SortReviews({ sortType, setSortType }) {
  return (
    <span className="sort-bar">
      <h3> reviews, sorted by</h3>
    </span>
  );
};

// SortReviews.propTypes = {
//   sortType: PropTypes.string.isRequired,
// };


export default SortReviews;

// GET /reviews:
// {
//   "product": "40444",
//   "page": 0,
//   "count": 5,
//   "results": [
//       {
//           "review_id": 645228,
//           "rating": 1,
//           "summary": "Qui id voluptatem.",
//           "recommend": false,
//           "response": null,
//           "body": "Rerum vitae autem dolore rerum porro voluptas. Eligendi eaque qui voluptas saepe quibusdam dicta voluptatibus quo eum. Doloribus corrupti nulla perferendis minima ratione aut. Assumenda delectus et voluptas et numquam. Accusamus est aut et ipsa illum non quis explicabo rerum. Rerum ut doloribus aliquid.",
//           "date": "2021-08-08T00:00:00.000Z",
//           "reviewer_name": "Michele.Grant",
//           "helpfulness": 26,
//           "photos": [
//               {
//                   "id": 1236189,
//                   "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "id": 1236190,
//                   "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "id": 1236191,
//                   "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
//               }
//           ]
//       },
//       {
//           "review_id": 645226,
//           "rating": 2,
//           "summary": "Suscipit labore dignissimos modi enim in maxime enim sunt.",
//           "recommend": true,
//           "response": null,
//           "body": "Perferendis officiis ad aliquid pariatur consequatur. At ea fugit est accusamus laborum error harum. Ut qui eius molestiae ea.",
//           "date": "2020-09-06T00:00:00.000Z",
//           "reviewer_name": "Claudia.Schuster18",
//           "helpfulness": 24,
//           "photos": [
//               {
//                   "id": 1236193,
//                   "url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
//               },
//               {
//                   "id": 1236194,
//                   "url": "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
//               }
//           ]
//       },
//       {
//           "review_id": 645229,
//           "rating": 1,
//           "summary": "Necessitatibus culpa explicabo eos.",
//           "recommend": false,
//           "response": null,
//           "body": "Numquam reiciendis facere qui minima odio dolor et. Et animi quibusdam voluptatem dolores sunt autem velit aut enim. Minus maxime maxime. Enim ipsam et. Quia amet sit consequatur vel quo.",
//           "date": "2021-06-17T00:00:00.000Z",
//           "reviewer_name": "Juanita.Runte",
//           "helpfulness": 21,
//           "photos": [
//               {
//                   "id": 1236187,
//                   "url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
//               },
//               {
//                   "id": 1236188,
//                   "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
//               }
//           ]
//       },
//       {
//           "review_id": 645227,
//           "rating": 4,
//           "summary": "Sequi rerum voluptatibus cumque.",
//           "recommend": true,
//           "response": null,
//           "body": "Eos quo consequuntur est tenetur voluptas suscipit provident. Pariatur repellat nostrum voluptates maiores aut omnis unde voluptas. Harum natus ea ducimus at et nemo. Ut ex velit eaque. In error qui et non incidunt odio voluptates voluptatem.",
//           "date": "2020-08-25T00:00:00.000Z",
//           "reviewer_name": "Ubaldo.Schaden30",
//           "helpfulness": 6,
//           "photos": [
//               {
//                   "id": 1236192,
//                   "url": "https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
//               }
//           ]
//       },
//       {
//           "review_id": 645225,
//           "rating": 2,
//           "summary": "Repellat distinctio est non id natus autem.",
//           "recommend": true,
//           "response": null,
//           "body": "Et nihil et nam. Accusamus sed dolore atque dignissimos nulla. Omnis occaecati facere quasi dolorum et aut.",
//           "date": "2021-07-08T00:00:00.000Z",
//           "reviewer_name": "Arjun97",
//           "helpfulness": 0,
//           "photos": [
//               {
//                   "id": 1236195,
//                   "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
//               },
//               {
//                   "id": 1236196,
//                   "url": "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
//               },
//               {
//                   "id": 1236197,
//                   "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
//               }
//           ]
//       }
//   ]
// }