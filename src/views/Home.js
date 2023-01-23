import React, { useState } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const Home = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  const handleAddToArmy = bot => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleReleaseBot = bot => {
    setArmy(army.filter(b => b !== bot));
  };

  const handleDischargeBot = bot => {
    setArmy(army.filter(b => b !== bot));
  };

  return (
    <div>
      <BotCollection bots={bots} addToArmy={handleAddToArmy} dischargeFromArmy={handleDischargeBot}/>
      <YourBotArmy bots={bots} army={army} enlistBot={handleAddToArmy} releaseBot={handleReleaseBot} dischargeBot={handleDischargeBot}/>
    </div>
  );
};

export default Home;
