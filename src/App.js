import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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
      <Search />
    </div>
  );
};
