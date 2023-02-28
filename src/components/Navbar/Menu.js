
import Link from './Link/Link';
import styles from './Menu.module.css';

export const Menu = (props) => {

  const links = props.sections.map(s => <Link key={s} section={s} />)
  
    return (
        <nav className={styles.menu}>
        <ul>
          {links}
        </ul>
      </nav>
    )
}