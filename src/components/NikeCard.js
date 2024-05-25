import React, { useState } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import yasminLogo from "../assets/textures/yasminLogo.PNG";


const computeBorderColor = (frameColor) => {
  return `border: 1.0rem solid ${frameColor};`; // Converted border width to rem
};

const CardContainer = styled.div`
  display: flex;
  cursor: grab;
  border-radius: 1.5625rem; // Converted border radius to rem
  ${({ frameColor }) => computeBorderColor(frameColor)}
  box-sizing: border-box;
`;


const CardImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 1.5625rem; // Converted border radius to rem
  object-fit: cover; /* Maintain aspect ratio and cover entire container */
  object-position: center;
  `;


const NikeCard = (props) => {
  const { card, faceType, frameColor, toggleCardFlip } = props;


  const handleCardClick = () => {
    if (toggleCardFlip != null) {
      toggleCardFlip(card.id);
    }
  };


  return (
    <ReactCardFlip isFlipped={faceType === "back"}>
      <CardContainer  frameColor={frameColor} onClick={handleCardClick}>
        <CardImage src={card.imageImportName} alt={card.name} />
      </CardContainer>

      <CardContainer  frameColor={frameColor} onClick={handleCardClick}>
        <CardImage src={yasminLogo} alt={card.name}  />
      </CardContainer>
    </ReactCardFlip>
  );
};

export default NikeCard;
