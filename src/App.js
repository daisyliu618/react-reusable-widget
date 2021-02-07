import React from 'react';
import Accordion from './components/Accordion';

const items = [{
  title:'What is react?',
  content:'React is a front-end js framework'
},
{
  title:'What is react?',
  content:'React is a front-end js framework'
},
{
  title:'What is react?',
  content:'React is a front-end js framework'
}
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
