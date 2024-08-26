import { DataFromServer } from "@/types/Character";
import { Gender, Species, Status } from "@/types/Status";
import { client } from "@/utils/axiosClient";

export const getAllCharacters = (
  page: number,
  name: string,
  status: Status,
  gender: Gender,
  species: Species,
) => {
  return client.get<DataFromServer>(
    `/character/?page=${page}${name ? `&name=${name}` : ""}${status ? `&status=${status}` : ""}${gender ? `&gender=${gender}` : ""}${species ? `&species=${species}` : ""}`
  );
};

// export const getCharacter = (personId: number) => {
//   return client.get<Character>(`/character/${personId}`);
// }
