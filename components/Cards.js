import Image from 'next/image';
import { HousingData } from './HousingData';
import styles from '../styles/Cards.module.css';

const Cards = () => {
    return ( 
        <section className={styles.cards}>
            {HousingData.map((e) => {
                return (
                    <article className={styles.card}>
                        {/* <Image src={e.img} width='100%' height='100%' layout="responsive" objectFit='contain' /> */}

                        <h2 className={styles.cardType}>{e.type}</h2>
                        
                        <p className={styles.cardArea}>{e.area}M<sup>²</sup></p>

                        <p className={styles.cardRent}>{e.rent}</p>

                        <address className={styles.cardCity}>{e.city}</address>
                    </article>
                )
            })}
        </section>
    );
}
 
export default Cards;