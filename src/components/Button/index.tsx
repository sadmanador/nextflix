import styles from "../../styles/Button.module.scss";
import { IconType } from "react-icons";

interface ButtonProps {
  filled?: boolean;
  label?: string;
  Icon: IconType;
  rounded?: boolean;
  onClick?: () => void;
  hidden?: boolean; 
}

export default function Button(props: ButtonProps): React.ReactElement | null {
  const { filled, label, Icon, rounded, onClick, hidden } = props; 

  const backgroundColor = filled ? "white" : "#6d6d6db3";
  const fontColor = filled ? "black" : "white";

  const style = !rounded
    ? styles.button
    : filled
    ? styles.roundButton
    : styles.outlineRounded;


  if (hidden) {
    return null;
  }

  return (
    <button
      className={style}
      style={{ backgroundColor: `${backgroundColor}`, color: `${fontColor}` }}
      onClick={onClick}
    >
      <Icon className={styles.icon} />
      {!rounded && <span className={styles.label}>{label}</span>}
    </button>
  );
}
