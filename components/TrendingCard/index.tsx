import Image from "next/image"

type TrendingCardProp ={
    icon: string;
    total:string;
    text: string;
    change: string;
    changeColor: string;
    iconColor: string;
}

const TrendingCard = ({icon, total, text, change, changeColor, iconColor}: TrendingCardProp) => {
  return (

    <div className="flex justify-between items-center bg-sidebar p-4 rounded-2xl flex-grow">
          <div className="flex gap-x-3">
            <div style={{ backgroundColor: iconColor }} className='flex justify-center items-center w-[55px] h-[55px] rounded-full'>
              <Image src={icon} alt={text}/>
            </div>
            <div className="flex flex-col">
              <p className=" font-semibold text-xl ">{total}</p>
              <p className="text-xs text-[#6C7AA0]">{text}</p>
            </div>
          </div>
          <p style={{ color: changeColor }} className='text-sm '>{change}</p>
        </div>

  )
}

export default TrendingCard