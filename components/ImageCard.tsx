interface ImageProps {
  currentImgPath: string;
}

const ImageCard: React.FC<ImageProps> = ({ currentImgPath }) => {
  return (
    <div className="w-56 h-56 mt-3 mb-5">
      <img
        src={currentImgPath}
        alt="image of object"
        className="w-full h-full"
      />
    </div>
  );
};

export default ImageCard;
