interface ImageProps {
  currentImgPath: string;
}

const ImageCard: React.FC<ImageProps> = ({ currentImgPath }) => {
  return (
    <div>
      <img src={currentImgPath} alt="image of object" />
    </div>
  );
};

export default ImageCard;
