import { Character } from "@/types/Character"
import Image from "next/image";
import cn from 'classnames';
import classNames from "classnames";
import { useAppDispatch } from "@/store/hooks";
import { changeSelectedPerson } from "@/features/selectedPersonSlice";


interface Props {
  person: Character;
  onOpenModal: () => void;
}

export const PersonCard:  React.FC<Props> = ({ person, onOpenModal }) => {
  const {name, status, image, species} = person;
  const dispatch = useAppDispatch();

  const handleChangePerson = () => {
    dispatch(changeSelectedPerson(person));
    onOpenModal();
  }

  return (
  <div className="border-[2px] border-[#4fd4b3]  bg-white p-4 rounded-lg cursor-pointer" onClick={handleChangePerson}>
    <Image
      src={image}
      alt={name}
      width={300}
      height={200}
      className="mb-3 rounded-lg"
      priority
    />

    <div className="h-12 w-[300px] text-center bg-[#90bceb7c] rounded-lg">
      <h2>{name}</h2>
    </div>
    
    <div className="flex items-center">
      <div className={cn('rounded-full w-4 h-4 mr-3',{
      'bg-green-600': status === 'Alive', 
      'bg-red-600': status === 'Dead',
      'bg-gray-500': status === 'unknown'
      })}></div>
    <p>{status}</p>
    </div>
    
    <p>{species}</p>
  </div>
)}