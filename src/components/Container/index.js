import styles from './Container.module.css'
import PropTypes from 'prop-types' //Type dari element / value yang di kirim ke props

const Container = (props) => {
    return (
        <section className={styles.container}>
            {props.children}
        </section>
    )
}
//Memberikan type props
Container.propTypes = {
    children: PropTypes.node
}

export default Container