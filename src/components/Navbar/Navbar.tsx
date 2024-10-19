
import { motion } from 'framer-motion';
import { Notifications } from '../../utils/icons';
import useDimensions from '../../hooks/useDimensions';
import styles from '../../styles/Navbar.module.scss';
import Menu from './Menu';
import SearchBar from './SearchBar';
import Profile from './Profile';


interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps): React.ReactElement {
  const navBackground = isScrolled ? styles.navBar__filled : styles.navBar;
  const { isMobile } = useDimensions();

  return (
    <motion.div
      className={navBackground}
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={{
        hidden: { opacity: 0, transition: { duration: 0.2 } },
        visible: { opacity: 1, transition: { duration: 0.2 } }
      }}>
      <div className={styles.navBar__left}>
        <Menu />
      </div>

      <div className={styles.navBar__right}>
        <SearchBar />
        {!isMobile && <Notifications className={styles.icon} />}
        <Profile />
      </div>
    </motion.div>
  );
}
