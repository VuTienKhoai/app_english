import { SvgXml } from "react-native-svg";
import { icon_HomePage } from "../../assets/svg/iconTabNavigation/icon_HomePage";
import { icon_chest } from "../../assets/svg/iconTabNavigation/icon_chest";
import { icon_notificationScreen } from "../../assets/svg/iconTabNavigation/icon_notification";
import { icon_Cup } from "../../assets/svg/iconTabNavigation/icon_Cup";

export default function TabbarIcon(props) {
  switch (props.name) {
    case "Home":
      return <SvgXml key={props.name} xml={icon_HomePage} />;
    case "ChestScreen":
      return <SvgXml key={props.name} xml={icon_chest} />;
    case "NotificationScreen":
      return <SvgXml key={props.name} xml={icon_notificationScreen} />;
    case "EmulationScreen":
      return <SvgXml key={props.name} xml={icon_Cup} />;

    default:
      return <></>;
  }
}
