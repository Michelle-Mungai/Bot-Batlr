import React from "react";
import BotCard from "./BotCard";

function BotCollection({ collection, clickHandler, handleDelete }) {

  return (
    <div className="ui four column grid" id="bot">
      {"Cick on a bot to add it to your army."}
      <div className="row">
        {collection.map((bot) => (
          <BotCard key={bot.id} bot={bot} clickHandler={clickHandler} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;