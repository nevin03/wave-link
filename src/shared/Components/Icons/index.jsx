import React from "react";

export const TickIcon = ({
  width = 21,
  height = 27,
  strokeColor = "#FCAD38",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M18.502 12.7233V13.497C18.5009 15.3106 17.9137 17.0753 16.8278 18.5278C15.7419 19.9804 14.2156 21.043 12.4764 21.5572C10.7372 22.0715 8.87844 22.0097 7.17724 21.3812C5.47604 20.7527 4.02358 19.5911 3.03648 18.0697C2.04939 16.5483 1.58054 14.7485 1.69987 12.9388C1.8192 11.1292 2.52031 9.40659 3.69863 8.02794C4.87696 6.6493 6.46937 5.68849 8.23837 5.28881C10.0074 4.88913 11.8582 5.07199 13.5147 5.81012M18.502 6.76407L10.0918 15.1827L7.56876 12.6596"
        stroke={strokeColor}
        strokeWidth={1.68203}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PlusIcon = ({
  width = 19,
  height = 19,
  fill = "black",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M8.70833 13.4583V16.625H10.2917V10.2917H16.625V8.70833H10.2917V2.375H8.70833V8.70833H2.375V10.2917H8.70833V13.4583Z"
        fill={fill}
        fillOpacity="0.35"
      />
    </svg>
  );
};

export const ArrowIcon = ({
  width = 21,
  height = 33,
  fill = "#EB9A42",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M3.30596 0.505798L19.5993 14.7725C20.506 15.5725 20.506 16.9858 19.5993 17.7858L3.30596 32.0525C2.02596 33.1725 -0.000703812 32.2658 -0.000703812 30.5591V1.99913C-0.000703812 0.292464 2.02596 -0.640869 3.30596 0.505798Z"
        fill={fill}
      />
    </svg>
  );
};
