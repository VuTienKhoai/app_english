import { SvgXml } from "react-native-svg";
import {
  icon_Home,
  icon_HomeFocus,
} from "../../assets/svg/iconTabNavigation/icon_Home";
import { icon_HomePage } from "../../assets/svg/iconTabNavigation/icon_HomePage";
import { icon_shield } from "../../assets/svg/icon_shield";
import { icon_award } from "../../assets/svg/iconTabNavigation/icon_award";
import { icon_chest } from "../../assets/svg/iconTabNavigation/icon_chest";
import { icon_notification } from './../../assets/svg/iconTabNavigation/icon_About';
import { icon_notificationScreen } from "../../assets/svg/iconTabNavigation/icon_notification";
import { icon_Person } from "../../assets/svg/iconTabNavigation/icon_Person";
import { icon_Cup } from "../../assets/svg/iconTabNavigation/icon_Cup";

export default function TabbarIcon(props) {

  switch (props.name) {
    case "PageHome":
      return (
        <SvgXml
          key={props.name}
          xml={icon_HomePage}
        />
      );
    case "AboutScreen":
      return (
        <SvgXml
          key={props.name}
          xml={icon_chest}
        />
      );
    case "NotificationScreen":
      return (
        <SvgXml
          key={props.name}
          xml={icon_notificationScreen}
        />
      );
    case "EmulationScreen":
      return (
        <SvgXml
          key={props.name}
          xml={icon_Cup}
        />
      );


    default:
      return <></>;
  }
}
