import styles from "../styles/header.module.css";
import cropIcon from "../../assets/images/header/cropIcon.png";
import shareIcon from "../../assets/images/header/shared.svg";
import Image from "next/image";
import { NextPage } from "next";

export const HeaderForEdition: NextPage = () => {
  return (
    <header className={styles.initialHeader}>
      <div>
        <Image src={cropIcon} alt="cropIcon" />
      </div>
      <div>
        <Image src={shareIcon} alt="shareIcon" />
      </div>
    </header>
  );
};
