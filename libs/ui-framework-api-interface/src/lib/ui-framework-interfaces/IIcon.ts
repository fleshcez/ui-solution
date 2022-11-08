export enum IconType {
  mail = "mail",
  inbox = "inbox"

}

export enum IconSize {
  small = "small",
  medium = "medium",
  large = "large"
}

export interface IIcon {
  icon: IconType;
  size: IconSize;
}
