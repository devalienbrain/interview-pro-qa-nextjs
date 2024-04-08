import Image from "next/image";
import banner from "@/assets/brain-it.png";
const Banner = () => {
  return (
    <div>
      <section>
        <div>
          <Image
            src={banner}
            width="100%"
            height="100%"
            alt="brain-it"
            className="rounded-md"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
