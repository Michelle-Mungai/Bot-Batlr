import React from 'react';

const BotSpecs = ({ bot, onBack, onAdd, onDischarge }) => {
  return (
    <div>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={onBack}>Back</button>
      <button onClick={onAdd}>Add to army</button>
      <button onClick={onDischarge}>Discharge</button>
    </div>
  );
};

export default BotSpecs;
