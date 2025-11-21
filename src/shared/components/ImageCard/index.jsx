import React from "react";
import Typography from "../Typography";

const ImageCard = ({
  image,
  title = "",
  content = "",
  buttonText = "",
  onButtonClick = () => {},
  className = "",
}) => {
  return (
    <div className={`w-full md:w-1/2 ${className}`}>
      <div className="relative w-full rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-2xl"
        />

        <div className="absolute top-4 left-4 flex flex-col items-start text-left">
          <Typography variant="heading3" className="text-white drop-shadow-md">
            {title}
          </Typography>

          {content && (
            <Typography
              variant="content2"
              className="text-white/90 mt-2 max-w-md drop-shadow-md"
            >
              {content}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
