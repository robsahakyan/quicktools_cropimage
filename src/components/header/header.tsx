import { InitialHeader } from "./initialHeader";
import { HeaderForEdition } from "./headerForEdition";
import { GlobalProps } from "../../types/globalProps";

export const Header = (props: GlobalProps) => {
  return <>{props.isReadyToEdit ? <HeaderForEdition /> : <InitialHeader />}</>;
};
