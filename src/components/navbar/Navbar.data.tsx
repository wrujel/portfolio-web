import {
  RiHome4Line,
  RiAccountPinCircleLine,
  RiServerLine,
  RiBriefcase2Line,
  RiChatPollLine,
} from "react-icons/ri";

export const dataNavbar = [
  {
    name: "home",
    path: "/",
    icon: <RiHome4Line size="30" />,
  },
  {
    name: "about",
    path: "/about",
    icon: <RiAccountPinCircleLine size="30" />,
  },
  {
    name: "Services",
    path: "/services",
    icon: <RiServerLine size="30" />,
  },
  {
    name: "experience",
    path: "/experience",
    icon: <RiBriefcase2Line size="30" />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <RiChatPollLine size="30" />,
  },
];
