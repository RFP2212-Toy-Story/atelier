const calculateAverageRating = (ratings) => {
  let count = null;
  let total = null;
  const breakdown = Object.entries(ratings);
  breakdown.forEach((rating) => {
    count += rating[1];
    total += (rating[0] * rating[1]);
  });
  return (total / count);
};

export default calculateAverageRating;
