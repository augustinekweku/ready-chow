import DashboardIcon from "@mui/icons-material/Dashboard";
import PaletteIcon from "@mui/icons-material/Palette";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";

import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';import AddLinkIcon from "@mui/icons-material/AddLink";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import CategoryIcon from "@mui/icons-material/Category";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddBusinessOutlinedIcon from "@mui/icons-material/AddBusinessOutlined";

export const mainNavLinks = [
  {
    url: "/dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    url: "/builder",
    title: "Builder",
    icon: <PaletteIcon />,
  },

  {
    url: "/settings",
    title: "Settings",
    icon: <SettingsIcon />,
  },
];

export const sideNavLinks = [
  {
    url: "/bio",
    title: "Profile Bio",
    icon: <AccountCircleIcon />,
  },
  {
    url: "/support-content",
    title: "Support My Content",
    icon: <FavoriteIcon />,
  },
  {
    url: "/services",
    title: "Services",
    icon: <CategoryIcon />,
  },
  {
    url: "/donation-setup",
    title: "Donations",
    icon: <VolunteerActivismIcon />,
  },
  {
    url: "/ticket-setup",
    title: "Ticket",
    icon: <ConfirmationNumberIcon />,
  },
  {
    url: "/external-links",
    title: "Links",
    icon: <AddLinkIcon />,
  },
  {
    url: "/shop",
    title: "Shop",
    icon: <AddBusinessOutlinedIcon />,
  },

  {
    url: "/socials",
    title: "Social Media links",
    icon: <TravelExploreIcon />,
  },
];

export const settingsLinks = [
  {
    url: "/settings/account-preferences",
    title: "Account Preferences",
    icon: <SettingsIcon  />,
  },
  {
    url: "/settings/settlement-account",
    title: "Settlement Account",
    icon: <MonetizationOnIcon />,
  },
]
