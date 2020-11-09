import Image from "next/image";

const HeroImage: React.FC = () => {
  return (
    <Image
      src="/images/children.svg"
      alt="children Image"
      width={400}
      height={400}
    />
  );
};
export default HeroImage;
