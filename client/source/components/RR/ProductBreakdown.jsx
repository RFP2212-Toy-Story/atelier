import React from 'react';
import Slider from './Slider.jsx';

const ProductBreakdown = function ProductBreakdown({ traits }) {
  if (!traits) {
    return <div />;
  }

  // CREATES BARS FOR ONLY CHARACTERISTICS THAT EXIST, IN ORDER
  return (
    <div className="product-breakdown">
      { traits.Size
        ? (<div><Slider trait="Size" feedback={traits.Size.value} key={traits.Size.id} /></div>)
        : null }
      { traits.Width
        ? (<div><Slider trait="Width" feedback={traits.Width.value} key={traits.Width.id} /></div>)
        : null }
      { traits.Comfort
        ? (<div><Slider trait="Comfort" feedback={traits.Comfort.value} key={traits.Comfort.id} /></div>)
        : null }
      { traits.Quality
        ? (<div><Slider trait="Quality" feedback={traits.Quality.value} key={traits.Quality.id} /></div>)
        : null }
      { traits.Length
        ? (<div><Slider trait="Length" feedback={traits.Length.value} key={traits.Length.id} /></div>)
        : null }
      { traits.Fit
        ? (<div><Slider trait="Fit" feedback={traits.Fit.value} key={traits.Fit.id} /></div>)
        : null }
    </div>
  );
};

export default ProductBreakdown;
