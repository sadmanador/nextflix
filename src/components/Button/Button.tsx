import { ButtonProps } from "@/types";
import styles from "../../styles/Button.module.scss";

const Button = (props: ButtonProps): React.ReactElement | null => {
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
};
export default Button;