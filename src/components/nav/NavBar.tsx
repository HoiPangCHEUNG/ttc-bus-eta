import { Button, Text } from "@fluentui/react-components";
import {
  ArrowRouting20Regular,
  ArrowRouting24Filled,
  Home20Regular,
  Home24Filled,
  Question20Regular,
  Question24Filled,
} from "@fluentui/react-icons";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { fluentStyles } from "../../styles/fluent";
import { LanguageSelection } from "./LanguageSelection";

interface NavItem {
  label: string;
  prefix: string;
  path: string;
  icon: JSX.Element;
  iconActive: JSX.Element;
}

const navItems: NavItem[] = [
  {
    label: "nav.label.home",
    prefix: `${process.env.PUBLIC_URL}`,
    path: ``,
    icon: <Home20Regular />,
    iconActive: <Home24Filled />,
  },
  {
    label: "nav.label.lines",
    prefix: `${process.env.PUBLIC_URL}`,
    path: `/lines`,
    icon: <ArrowRouting20Regular />,
    iconActive: <ArrowRouting24Filled />,
  },
  {
    label: "nav.label.about",
    prefix: `${process.env.PUBLIC_URL}`,
    path: `/about`,
    icon: <Question20Regular />,
    iconActive: <Question24Filled />,
  },
];

export function BottomBar({ width }: { width: number }) {
  const { t } = useTranslation();
  const fluentStyle = fluentStyles();

  const BottomNavItems = navItems.map((item) => {
    return (
      <NavLink
        className={fluentStyle.navButtonLink}
        to={item.path}
        key={t(item.label)}
      >
        {({ isActive }) => (
          <Button
            className={fluentStyle.bottomNavButton}
            shape="circular"
            appearance={isActive ? "primary" : "subtle"}
            icon={isActive ? item.iconActive : item.icon}
            size="large"
          >
            {width > 480 && <Text>{t(item.label)}</Text>}
          </Button>
        )}
      </NavLink>
    );
  });

  // add support for swithing lang

  return (
    <div className="bottomNav">
      {BottomNavItems}
      <LanguageSelection width={width} />
    </div>
  );
}

export function SideBar({ width }: { width: number }) {
  const { t } = useTranslation();
  const fluentStyle = fluentStyles();

  const BottomNavItems = navItems.map((item) => {
    return (
      <NavLink
        className={fluentStyle.navButtonLink}
        to={item.path}
        key={t(item.label)}
      >
        {({ isActive }) => (
          <Button
            className={fluentStyle.sideNavButton}
            shape="circular"
            appearance={isActive ? "primary" : "subtle"}
            icon={isActive ? item.iconActive : item.icon}
          >
            <Text>{t(item.label)}</Text>
          </Button>
        )}
      </NavLink>
    );
  });
  return (
    <nav className="sideNav">
      {BottomNavItems}
      <LanguageSelection width={width} />
    </nav>
  );
}
