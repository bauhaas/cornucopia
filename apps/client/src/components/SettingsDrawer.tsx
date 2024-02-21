import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

import settingsIllustration from "../assets/undraw_personal_settings_re_i6w4.svg";
import { Badge } from "./ui/badge";

type settingsSectionsType = {
  title: string;
  disabled?: boolean;
  settings: {
    id: string;
    label: string;
  }[];
}[];

const settingsSections: settingsSectionsType = [
  {
    title: "General settings",
    disabled: true,
    settings: [
      {
        id: "dark-mode",
        label: "Dark mode",
      },
      {
        id: "background-dots",
        label: "Background dots",
      },
    ],
  },
  {
    title: "Categories display",
    settings: [
      {
        id: "top-10",
        label: "Top 10",
      },
      {
        id: "watch-list",
        label: "Watch list",
      },
      {
        id: "recently-watched",
        label: "Recently watched",
      },
    ],
  },
  {
    title: "Movie Cards",
    disabled: true,
    settings: [
      {
        id: "rating-stars",
        label: "Rating stars",
      },
      {
        id: "year",
        label: "Year",
      },
      {
        id: "name",
        label: "Name",
      },
      {
        id: "duration",
        label: "Duration",
      },
      {
        id: "director",
        label: "Director",
      },
    ],
  },
  {
    title: "Filmography",
    disabled: true,
    settings: [
      {
        id: "completion-bar",
        label: "Completion bar",
      },
      {
        id: "related-watched-movies",
        label: "Related watched movies",
      },
      {
        id: "avatar",
        label: "Avatar",
      },
    ],
  },
];

type SettingsSwitchProps = {
  id: string;
  label: string;
  disabled?: boolean;
};

const SettingsSwitch = ({ id, label, disabled }: SettingsSwitchProps) => {
  return (
    <div className="flex items-center gap-2">
      <Switch id={id} disabled={disabled} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
};

const SettingsSections = () => {
  return (
    <>
      {settingsSections.map((section) => (
        <div key={section.title} className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">
            {section.title}
            {section.disabled && (
              <Badge variant="warn" className="ml-2">
                WIP
              </Badge>
            )}
          </h3>
          <Separator />
          <div className="flex flex-col gap-1">
            {section.settings.map((setting) => (
              <SettingsSwitch
                key={setting.id}
                id={setting.id}
                label={setting.label}
                disabled={section.disabled}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export const SettingsDrawer = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="text-black dark:text-white font-bold">
        Settings
      </DrawerTrigger>
      <DrawerContent className="bg-white flex flex-col rounded-t-[10px]  h-full w-[300px] min-w-fit mt-24 fixed bottom-0 right-0 z-50">
        <DrawerHeader>
          <DrawerTitle>Settings</DrawerTitle>
          <DrawerDescription>
            Customize your space as you want
          </DrawerDescription>
          <SettingsSections />
        </DrawerHeader>
        <DrawerFooter>
          <img
            src={settingsIllustration}
            alt="Settings illustration"
            className="absolute bottom-0 mb-4 self-center h-24"
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
