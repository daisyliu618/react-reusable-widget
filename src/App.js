import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is react?',
    content: 'React is a front-end js framework',
  },
  {
    title: 'What is react?',
    content: 'React is a front-end js framework',
  },
  {
    title: 'What is react?',
    content: 'React is a front-end js framework',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const showAccordion = () => {
  //   if (window.location.pathname === '/') {
  //     return <Accordion items={items} />;
  //   }
  // };

  // const showList = () => {
  //   if (window.location.pathname === '/list') {
  //     return <Search />;
  //   }
  // };

  // const showDropdown = () => {
  //   if (window.location.pathname === '/dropdown') {
  //     return <Dropdown />;
  //   }
  // };

  // const showTranslate = () => {
  //   if (window.location.pathname === '/translate') {
  //     return <Translate />;
  //   }
  // };

  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate items={items} />
      </Route>
    </div>
  );
};

export default App;
