interface Props {
  imgPath: string;
}
const HeroImage: React.FC<Props> = ({ imgPath }) => {
  return <img src={imgPath} alt="children image" />;
};
export default HeroImage;
