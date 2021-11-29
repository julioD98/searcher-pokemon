import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetPokemon } from "../../Hooks/GetPokemon";

import { Card } from "./../../Components/Card";
import { WrapContent } from "./../../Components/WrapContent";
import { Loader } from "./../../Components/Loader";
import { NotFound } from "./../../Components/NotFound";
import { Button } from "../../Components/Button";

export const Results = () => {
  const { search } = useParams();
  const pokemon = useGetPokemon(search);
  return (
    <WrapContent>
      {pokemon && pokemon.status === 200 ? (
        <>
          <Card pokemon={pokemon} />
          <Link to="/home">
            <Button>Regresar</Button>
          </Link>
        </>
      ) : pokemon && pokemon.status === 404 ? (
        <NotFound>{pokemon.msg}</NotFound>
      ) : (
        <Loader />
      )}
    </WrapContent>
  );
};
