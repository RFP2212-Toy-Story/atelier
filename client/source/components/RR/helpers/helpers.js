const average = function calculateAverageRating(ratings) {
  let count = null;
  let total = null;
  const breakdown = Object.entries(ratings);
  breakdown.forEach((rating) => {
    count += Number(rating[1]);
    total += (rating[0] * rating[1]);
  });
  return (total / count).toFixed(1);
};

const count = function calculateTotalRatings(ratings) {
  return Object.keys(ratings).reduce((acc, key) => acc + Number(ratings[key]), 0);
};

const percentages = function createPercentageBreakdown(ratings) {
  const result = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  };
  const total = count(ratings);
  const breakdown = Object.entries(ratings);
  breakdown.forEach((rating) => {
    const ratingNum = Number(rating[0]);
    const ratingCount = Number(rating[1]);
    result[ratingNum] = Math.round((ratingCount / total) * 100);
  });
  return Object.entries(result);
};

const recommended = function recommendedPercentage(votes) {
  const recommend = Number(votes.true);
  const total = recommend + Number(votes.false);
  return Math.round((recommend / total) * 100);
};

export {
  average,
  count,
  percentages,
  recommended
};
