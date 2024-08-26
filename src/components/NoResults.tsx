import Image from "next/image";

export const NoResults = () => (
  <div className="flex flex-col items-center">
    <Image
      src='/pngegg.png'
      alt='no results after search'
      width={300}
      height={400}
    />
    
    <h2 className="text-[30px] font-bold ml-9">We couldn&apos;t find any results</h2>
  </div>
  

)