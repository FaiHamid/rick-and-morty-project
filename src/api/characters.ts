import { DataFromServer } from "@/types/Character"
import { client } from "@/utils/axiosClient"

export const getAllCharacters = (page: number) => {
  return client.get<DataFromServer>(`/character/?page=${page}`);
}

// export const getCharacter = (personId: number) => {
//   return client.get<Character>(`/character/${personId}`);
// }

