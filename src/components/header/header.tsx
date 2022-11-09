import { InitialHeader } from "./initialHeader";
import { HeaderForEdition } from "./headerForEdition";

export const Header: any = (props: any) => {
  return <>{props.isReadyToEdit ? <HeaderForEdition /> : <InitialHeader />}</>;
};
