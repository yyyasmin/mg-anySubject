import React from "react";
import styled from "styled-components";

const PlayersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align:center;
/***
  background-color: red;
***/
`;

const Player = styled.div`
  font-size: 2rem;
  color: ${(props) => (props.isPlayersTurn ? "brown" : "lightbrown")};
`;

const PlayerName = styled.span`
  font-size: 2rem;
  color: #808000;
`;

const BoldPlayerName = styled(PlayerName)`
  font-weight: bold;
`;

const Turn = styled.div`
  font-size: 2rem;
  color: #808000;
  dispaly: flex;
`;

const Players = ({ maxMembers = 2, players = [], playerName }) => {
  const currentPlayerIndex = players.findIndex((player) => player.name === playerName);
  const activePlayer = players.find((player) => player.isActive);

  return (
    <PlayersContainer>

      <Player>
        PLAYERS:{" "}
          {players.map((player, index) => (
            <React.Fragment key={index}>
              <PlayerName>
                {index === currentPlayerIndex ? `${player.name}(you)` : player.name}
              </PlayerName>
              {index < players.length - 1 && ", "} {/* Add comma between player names */}
            </React.Fragment>
          ))}
          {players.length < maxMembers && (
            <>
              &nbsp; {/* Non-breaking space */}
              <PlayerName>
                Waiting for another player to join the game...
              </PlayerName>
            </>
          )}
      </Player>

      <Player>
      {activePlayer && (
        <Turn>
          IT'S{" "}
          <BoldPlayerName>
            {activePlayer.name === playerName ? `${activePlayer.name}(your)` : activePlayer.name}
          </BoldPlayerName>'S TURN
        </Turn>
      )}
      </Player>

    </PlayersContainer>
  );
};

export default Players;
