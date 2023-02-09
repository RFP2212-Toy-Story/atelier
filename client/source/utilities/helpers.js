// eslint-disable-next-line consistent-return
const average = function calculateAverageRating(ratings) {
  if (ratings) {
    let count = null;
    let total = null;
    const breakdown = Object.entries(ratings);
    breakdown.forEach((rating) => {
      count += Number(rating[1]);
      total += (rating[0] * rating[1]);
    });
    return (total / count).toFixed(1);
  }
};

export default average;
