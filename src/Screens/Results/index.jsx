import React from "react";
import { useGetPokemon } from "../../Hooks/GetPokemon";

import { Card } from "./../../Components/Card";
import { WrapContent } from "./../../Components/WrapContent";
import { Loader } from "./../../Components/Loader";
import { NotFound } from "./../../Components/NotFound";

import { useParams } from "react-router-dom";

export const Results = () => {
  const { search } = useParams();
  const pokemon = useGetPokemon(search);
  return (
    <WrapContent>
      {pokemon && pokemon.status === 200 ? (
        <Card pokemon={pokemon} />
      ) : pokemon && pokemon.status === 404 ? (
        <NotFound>{pokemon.msg}</NotFound>
      ) : (
        <Loader />
      )}
    </WrapContent>
  );
};
