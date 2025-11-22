import React from "react";
import Typography from "../Typography";
import Button from "../Button";

const ImageCard = ({
  image,
  title = "",
  content = "",
  buttonText = "",
  onButtonClick = () => {},
  className = "",
  height = "auto",
}) => {
  return (
    <div className={`w-full md:w-1/2 ${className}`}>
      <div className="relative w-full rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={title}
          style={{ height }}
          className="w-full object-cover rounded-2xl"
        />

        {/* Title & description same positioning */}
        <div className="absolute top-4 left-4 flex flex-col items-start text-left max-w-[65%]">
          {title && (
            <Typography variant="heading3" className="text-white drop-shadow-md">
              {title}
            </Typography>
          )}
          {content && (
            <Typography
              variant="content2"
              className="text-white/90 mt-2 max-w-md drop-shadow-md"
            >
              {content}
            </Typography>
          )}
        </div>

        {/* Visit Website Button positioned like screenshot */}
        {buttonText && (
          <div className="absolute left-4 bottom-6">
            <Button
              variant="filled"
              size="sm"
              radius="full"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
