import React from 'react';
import './App.css';
import DropdownMenu from './components/DropdownMenu';
import Card from './components/Card';

function App() {
 
    const cardsData = [
      {
        title: 'Card 1',
        description: 'This is the first card.',
        imageSrc: 'https://example.com/card1.jpg',
      },
      {
        title: 'Card 2',
        description: 'This is the second card.',
        imageSrc: 'https://example.com/card2.jpg',
      },
      {
        title: 'Card 2',
        description: 'This is the second card.',
        imageSrc: 'https://example.com/card2.jpg',
      },
      {
        title: 'Card 2',
        description: 'This is the second card.',
        imageSrc: 'https://example.com/card2.jpg',
      },
      {
        title: 'Card 2',
        description: 'This is the second card.',
        imageSrc: 'https://example.com/card2.jpg',
      },
      {
        title: 'Card 2',
        description: 'This is the second card.',
        imageSrc: 'https://example.com/card2.jpg',
      },
    ];
  return (
    <div className="App">
      <h1>Dropdown Menu Example</h1>
      <DropdownMenu />
      <h3>Card Examples</h3>
      <div className="card-container">

      {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
