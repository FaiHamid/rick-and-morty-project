'use client'
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import * as charactersActions from '@/features/charactersSlice';
import { Loader } from "@/components/Loader";
import { PersonCard } from "@/components/personCard/PersonCard";
import { Paginations } from "@/components/pagination/Pagination";
import { FiltersAndSearch } from "@/components/FiltersAndSearch/FiltersAndSearch";


export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const characters = useAppSelector(state => state.characters.characters);
  const charactersStatus = useAppSelector(state => state.characters.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(charactersActions.getCharactersAsync(currentPage));
  }, [currentPage]);

  return (
    <main className="flex flex-col items-center min-h-screen justify-between p-20 bg-[#e8ecab99]">
      
      {charactersStatus === "loading" && <Loader/>}
      <FiltersAndSearch />
      {charactersStatus === 'idle' && (
        <div className="flex flex-wrap justify-center gap-4 mb-9">
          {characters.map(character => (
            <PersonCard person={character} key={character.id} />
          ))}
        </div>
      )}

      <Paginations
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
