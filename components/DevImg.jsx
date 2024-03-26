import Image from "next/image"

const DevImg = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='Rob Haynes portrait'/>
    </div>
  )
}

export default DevImg