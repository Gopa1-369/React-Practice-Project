import styles from './Navigation.module.css'

const Navigation = () => {
  return (
   <nav className={styles.navigation}>
    <div>
<img src="/images/logo.png" alt="logo"  />
    </div>
    <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
    </ul>
   </nav>
  )
}

export default Navigation