import React from "react";
import styled from "styled-components";
import "@fontsource/lato";

const StyledCard = styled.div`
  width: 299px;
  border: 1px solid #dcdde1;
  border-radius: 3px;
  background: #353b48;
`;

const StyledImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dcdde1;
  border-bottom: 1px solid #dcdde1;
`;

const StyledWrapStatsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledStats = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  font-family: "Lato";
`;

export const Card = ({ pokemon }) => {
  return (
    <StyledCard>
      <StyledImg>
        <img src={pokemon.img} alt={pokemon.name} />
      </StyledImg>
      <StyledTitle>
        <h3>{pokemon.name.toUpperCase()}</h3>
      </StyledTitle>
      <StyledWrapStatsList>
        <div>
          <StyledStats>Salud: {pokemon.stats.hp}</StyledStats>
          <StyledStats>Ataque: {pokemon.stats.atk}</StyledStats>
          <StyledStats>Defensa: {pokemon.stats.def}</StyledStats>
        </div>
        <div>
          <StyledStats>Ataque especial: {pokemon.stats.spe_atk}</StyledStats>
          <StyledStats>Defensa especial: {pokemon.stats.spe_def}</StyledStats>
          <StyledStats>Velocidad: {pokemon.stats.speed}</StyledStats>
        </div>
      </StyledWrapStatsList>
    </StyledCard>
  );
};
