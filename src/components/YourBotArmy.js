import React, { useState } from 'react';

const YourBotArmy = ({ bots, enlistBot, releaseBot, dischargeBot }) => {
  const [army, setArmy] = useState([]);

  const handleEnlist = bot => {
    enlistBot(bot);
    setArmy([...army, bot]);
  };

  const handleRelease = bot => {
    releaseBot(bot);
    setArmy(army.filter(b => b !== bot));
  };

  const handleDischarge = bot => {
    dischargeBot(bot);
    setArmy(army.filter(b => b !== bot));
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {army.map(bot => (
          <li key={bot.id}>
            {bot.name}
            <button onClick={() => handleRelease(bot)}>Release</button>
            <button onClick={() => handleDischarge(bot)}>Discharge</button>
          </li>
        ))}
      </ul>
      <h3>Available Bots</h3>
      <ul>
        {bots.map(bot => (
          <li key={bot.id}>
            {bot.name}
            <button onClick={() => handleEnlist(bot)}>Enlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourBotArmy;
