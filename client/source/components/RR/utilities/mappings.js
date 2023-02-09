const recommendedOptions = {
  recommended: [
    { label: 'Yes', value: true },
    { label: 'No', value: false }
  ]
};

const postID = {
  Size: '135240',
  Width: '135241',
  Comfort: '135242',
  Quality: '135243',
  Length: '135234',
  Fit: '135235'
};

const ratingText = {
  1: 'Poor',
  2: 'Fair',
  3: 'Average',
  4: 'Good',
  5: 'Great'
};

const traitOptions = {
  Size: [
    { label: 'A size too small', value: 1 },
    { label: '½ a size too small', value: 2 },
    { label: 'Perfect', value: 3 },
    { label: '½ a size too big', value: 4 },
    { label: 'A size too wide', value: 5 }
  ],
  Width: [
    { label: 'Too narrow', value: 1 },
    { label: 'Slightly narrow', value: 2 },
    { label: 'Perfect', value: 3 },
    { label: 'Slightly wide', value: 4 },
    { label: 'Too wide', value: 5 }
  ],
  Comfort: [
    { label: 'Uncomfortable', value: 1 },
    { label: 'Slightly uncomfortable', value: 2 },
    { label: 'Ok', value: 3 },
    { label: 'Comfortable', value: 4 },
    { label: 'Perfect', value: 5 }
  ],
  Quality: [
    { label: 'Poor', value: 1 },
    { label: 'Below average', value: 2 },
    { label: 'What I expected', value: 3 },
    { label: 'Pretty great', value: 4 },
    { label: 'Perfect', value: 5 }
  ],
  Length: [
    { label: 'Runs Short', value: 1 },
    { label: 'Runs slightly short', value: 2 },
    { label: 'Perfect', value: 3 },
    { label: 'Runs slightly long', value: 4 },
    { label: 'Runs long', value: 5 }
  ],
  Fit: [
    { label: 'Runs tight', value: 1 },
    { label: 'Runs slightly tight', value: 2 },
    { label: 'Perfect', value: 3 },
    { label: 'Runs slightly loose', value: 4 },
    { label: 'Runs loose', value: 5 }
  ]
};

export {
  recommendedOptions,
  postID,
  ratingText,
  traitOptions
};
