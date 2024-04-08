import Image from "next/image";
import star from "@/assets/Star.png";
const StarImg = () => {
  return (
    <div>
      <Image src={star} width={50} height={50} alt="star" />
    </div>
  );
};

export default StarImg;
