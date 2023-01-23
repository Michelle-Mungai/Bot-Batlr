import React, { useState, useEffect } from 'react';
import BotSpecs from './BotSpecs';

const BotCollection = ({ addToArmy, dischargeFromArmy }) => {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState({});
  const [showSpecs, setShowSpecs] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(res => res.json())
      .then(data => setBots(data))
      .catch(err => console.log(err));
  }, []);

  const handleSelect = bot => {
    setSelectedBot(bot);
    setShowSpecs(true);
  };

  const handleAddToArmy = () => {
    addToArmy(selectedBot);
    setSelectedBot({});
    setShowSpecs(false);
  }

  const handleDischarge = async (id) => {
    try {
      await fetch(`http://localhost:3000/bots/${id}`, { method: 'DELETE' });
      dischargeFromArmy(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {!showSpecs ? (
        <div>
          <h2>Bot Collection</h2>
          <ul>
            {bots.map(bot => (
              <li key={bot.id} onClick={() => handleSelect(bot)}>
                {bot.name}
                <button onClick={() => handleDischarge(bot.id)}>X</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        
        <BotSpecs
          bot={selectedBot}
          onBack={() => setShowSpecs(false)}
          onAdd={handleAddToArmy}
          onDischarge={() => handleDischarge(selectedBot.id)}
        />
      )}
    </div>
  );
};

export default BotCollection;
