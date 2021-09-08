import React from 'react';

import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

const ProductTag = () => (
  <Select
    defaultValue={['one']}
    isMulti
    options={options}
    name="colors"
    className="basic-multi-select"
    classNamePrefix="select"
  />
);


export default ProductTag;