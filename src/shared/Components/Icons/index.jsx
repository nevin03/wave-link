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

export const PlayButton = ({
  width = 148,
  height = 148,
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 148 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect
        x="24.4"
        y="20.4"
        width="98.4"
        height="98.4"
        rx="49.2"
        fill="#EB9A42"
      />
      <path
        d="M60.1172 56.1164C60.117 55.4387 60.2956 54.773 60.635 54.1864C60.9744 53.5998 61.4626 53.1131 62.0502 52.7755C62.6379 52.4379 63.3042 52.2614 63.9819 52.2637C64.6596 52.266 65.3247 52.4471 65.91 52.7886L89.014 66.2655C89.5971 66.6038 90.0812 67.0892 90.4178 67.6733C90.7545 68.2573 90.932 68.9194 90.9326 69.5935C90.9332 70.2677 90.7568 70.9301 90.4212 71.5147C90.0855 72.0993 89.6023 72.5856 89.0198 72.9249L65.91 86.4056C65.3247 86.7472 64.6596 86.9283 63.9819 86.9306C63.3042 86.9329 62.6379 86.7563 62.0502 86.4187C61.4626 86.0812 60.9744 85.5945 60.635 85.0079C60.2956 84.4213 60.117 83.7555 60.1172 83.0778V56.1164Z"
        fill="white"
        stroke="white"
        strokeWidth="3.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MessageIcon = ({
  width = 29,
  height = 29,
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g opacity="1">
        <path
          d="M3.26953 7.28467L11.1139 11.7752C14.0058 13.4306 15.2276 13.4306 18.1196 11.7752L25.9639 7.28467"
          stroke="white"
          strokeWidth="1.71"
          strokeLinejoin="round"
        />
        <path
          d="M3.28743 15.8547C3.3616 19.3692 3.3987 21.1263 4.68222 22.4281C5.96572 23.7297 7.75206 23.775 11.3247 23.8657C13.5266 23.9217 15.7068 23.9217 17.9088 23.8657C21.4814 23.775 23.2677 23.7297 24.5513 22.4281C25.8348 21.1263 25.8719 19.3692 25.946 15.8547C25.9699 14.7247 25.9699 13.6014 25.946 12.4714C25.8719 8.95701 25.8348 7.1998 24.5513 5.89811C23.2677 4.59642 21.4814 4.55108 17.9088 4.46038C15.7068 4.40448 13.5266 4.40448 11.3247 4.46037C7.75206 4.55105 5.96572 4.5964 4.6822 5.8981C3.39869 7.19978 3.3616 8.95699 3.28741 12.4714C3.26356 13.6014 3.26357 14.7247 3.28743 15.8547Z"
          stroke="white"
          strokeWidth="1.71"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const MapsIcon = ({
  width = 29,
  height = 28,
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M25.9639 11.4649V10.5678C25.9639 8.34415 25.9639 7.23235 25.2992 6.54155C24.6345 5.85075 23.5647 5.85075 21.425 5.85075H19.0664C18.0254 5.85075 18.0168 5.84871 17.0808 5.37545L13.3003 3.46412C11.7219 2.66609 10.9327 2.26708 10.0919 2.29481C9.25114 2.32254 8.48786 2.77276 6.96129 3.67319L5.568 4.49502C4.44668 5.15642 3.88601 5.48713 3.57777 6.03728C3.26953 6.58744 3.26953 7.25741 3.26953 8.59735V18.0175C3.26953 19.7781 3.26953 20.6584 3.6579 21.1484C3.91633 21.4743 4.27848 21.6935 4.67886 21.7662C5.28055 21.8754 6.01724 21.4409 7.49055 20.5718C8.49102 19.9817 9.45389 19.3688 10.6508 19.535C11.6536 19.6742 12.5856 20.3136 13.482 20.7668"
          stroke="white"
          strokeWidth="1.71"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M10.0781 2.29346V19.4899"
          stroke="white"
          strokeWidth="1.71"
          strokeLinejoin="round"
        />

        <path
          d="M18.0215 5.73242V10.8913"
          stroke="white"
          strokeWidth="1.71"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M21.7754 24.8583C21.5294 25.091 21.2005 25.2211 20.8583 25.2211C20.5161 25.2211 20.1872 25.091 19.9412 24.8583C17.6881 22.7139 14.6689 20.3184 16.1413 16.8405C16.9374 14.9601 18.8485 13.7568 20.8583 13.7568C22.8681 13.7568 24.7792 14.9601 25.5754 16.8405C27.046 20.3139 24.0341 22.7212 21.7754 24.8583Z"
          stroke="white"
          strokeWidth="1.71"
        />

        <path
          d="M20.8594 18.9165H20.8694"
          stroke="white"
          strokeWidth="2.28"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <defs>
        <clipPath id="clip0">
          <rect width="28.368" height="27.514" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
