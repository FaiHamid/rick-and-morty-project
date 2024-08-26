import Image from "next/image";

export const Header: React.FC = () => (
  <header className="sticky top-0 right-0 left-0 z-20 bg-[rgb(74,175,74)] shadow-xl">
    <div className="flex">
      <Image
        src='/icons/icons8-rick-sanchez.svg'
        alt='logo rick and morty'
        width={100}
        height={100}
      />

      <Image
        src='/icons/Rick.svg'
        alt='rick and morty'
        width={350}
        height={100}
        className="ms-auto me-auto"
      />
    </div>
  </header>
)