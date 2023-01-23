import React from "react";
import "./style.css";
// import BotSpecs from "./BotSpecs";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, clickHandler, handleDelete }) {
  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} onClick={() => clickHandler(bot)}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap"  id="bott">
            <small>{bot.catchphrase.substring(0, 32)}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon red heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon yellow lightning" />
            {bot.damage}
          </span>
            &nbsp;&nbsp;
          <span>
            <i className="icon black shield" />
            {bot.armor}
          </span>

          <span>
            <div className="ui center aligned segment basic">
              <button
                title="Delete this bot"
                className="ui red button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(bot);
                }}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;