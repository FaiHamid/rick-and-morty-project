"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import * as charactersActions from "@/features/charactersSlice";
import { Loader } from "@/components/Loader";
import { PersonCard } from "@/components/personCard/PersonCard";
import { Paginations } from "@/components/pagination/Pagination";
import { FiltersAndSearch } from "@/components/FiltersAndSearch/FiltersAndSearch";
import { NoResults } from "@/components/NoResults";
import { Modal } from "@/components/Modal";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const characters = useAppSelector((state) => state.characters.characters);
  const selectedPerson = useAppSelector((state) => state.selectedPerson.character);
  const search = useAppSelector((state) => state.filters.search);
  const status = useAppSelector((state) => state.filters.status);
  const gender = useAppSelector((state) => state.filters.gender);
  const species = useAppSelector((state) => state.filters.species);
  const charactersStatus = useAppSelector((state) => state.characters.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      charactersActions.getCharactersAsync({
        currentPage,
        search,
        status,
        gender,
        species,
      })
    );
  }, [currentPage, search, status, gender, species]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, status, gender, species]);
  return (
    <main className="flex flex-col items-center min-h-screen justify-between p-20 bg-[#fffffc99]">
      <FiltersAndSearch />
      {charactersStatus === "loading" && <Loader />}
      {charactersStatus === "idle" && characters.length > 0 && (
        <>
          <div className="flex flex-wrap justify-center gap-4 mb-9">
            {characters.map((character) => (
              <PersonCard person={character} key={character.id} onOpenModal={() => setIsModalOpen(true)}/>
            ))}
          </div>

          <Paginations
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}

      {!(charactersStatus === "idle") && characters.length > 0 && <NoResults />}
      {selectedPerson && (
        <Modal
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          person={selectedPerson}
        />
      )}
    </main>
  );
}
