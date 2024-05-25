import React from "react";
import styled from "styled-components";

const computeBorderColor = (frameColor) => {
  return `border: 0.5rem solid ${frameColor}; border-radius: 1rem;`; // Add border radius
};

const MatchedCardsGallery = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fad5a5;
  border-radius: 1.5625rem;
  height: 75%;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
`;

const OuterFrame = styled.div`
  ${({ frameColor }) => computeBorderColor(frameColor)}
  box-sizing: border-box;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: grab;
  border-radius: 1.5625rem;
  box-sizing: border-box;
  width: 45%;
  margin: 1rem 2rem; // Increased horizontal margin for more space between cards
  align-items: center;
  background-color: #EAD1F5;
  color:  #36013F;

`;

const InnerFrame = styled.div`
  ${({ frameColor }) => computeBorderColor(frameColor)}
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;



const ImageFrame = styled(InnerFrame)`
  width: 300px;
  height: 300px;
`;
const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 1rem;
  object-fit: contain;
`;


const TextFrame =styled(InnerFrame)`
width: 100%;
height: 100%;
`;
const CardText = styled.div`
  font-size: 2rem;
  border-radius: 0.5rem;
  width: 100%;
  text-align: center;
  background-color: #E7CBF3;

`;


const PlayerFrame = styled(InnerFrame)`
  width: 300px;
  height: 4rem;
  margin: 0 auto;
`;
const PlayerName = styled.div`
  font-size: 3rem;
  font-weight: bold;
  postion: relative
  width: 100%; // Set the width to 100% to make it fill the available width
  text-align: center;
`;


const MatchedCards = ({ frameColor, last2FlippedCards, userName, players }) => {
  console.log("IN - MATCHECARDS -- frameColor: ", frameColor);
  console.log("IN - MATCHECARDS -- last2FlippedCards: ", last2FlippedCards);
  console.log("IN - MATCHECARDS -- userName: ", userName);
  console.log("IN - MATCHECARDS -- players: ", players);

  return (
    <MatchedCardsGallery>
      {last2FlippedCards.map((card, index) => (
        <CardContainer key={index}>
          <OuterFrame frameColor={frameColor}>
            
            <PlayerFrame frameColor={frameColor}>
              <PlayerName>{players[index].name}</PlayerName>
            </PlayerFrame>

            <ImageFrame frameColor={frameColor}>
              <CardImage src={card.imageImportName} alt={card.imageImportName} />
            </ImageFrame>

            <TextFrame frameColor={frameColor}>
              <CardText>{card["text" + (index + 1)]}</CardText>
            </TextFrame>

          </OuterFrame>
        </CardContainer>
      ))}
    </MatchedCardsGallery>
  );
};

export default MatchedCards;
