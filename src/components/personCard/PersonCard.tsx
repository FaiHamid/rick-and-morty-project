import { Character } from "@/types/Character"
import Image from "next/image";
// import Link from "next/link";

interface Props {
  person: Character;
}

export const PersonCard:  React.FC<Props> = ({ person }) => {
  const {name, status, image, species} = person;

  return (
  <div className="border-[2px] border-[#4fd4b3]  bg-white p-4 rounded-lg">
    {/* <Link
        to={``}
        // className={styles.product__image}
        style={{ backgroundImage: `url(${image})` }}
        // state={{search}}
      /> */}

    <Image
      src={image}
      alt={name}
      width={300}
      height={200}
      className="mb-3 rounded-lg"
      priority
    />

    <div className="h-12 w-[300px] text-center">
      <h2>{name}</h2>
    </div>
    
    <span></span>
    <p>{status}</p>
    <p>{species}</p>
  </div>
)}