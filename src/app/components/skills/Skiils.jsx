//STYLES
import Image from 'next/image'
import Button from '../utils/Button'
import styles from './Skiils.module.css'

function Skiils(){
return(
    <section className={styles.mainContainer}>
        <div className={styles.content}>
            <div className={styles.textContent}>
                <h1>Por que escolher a</h1>
                <h2>IDEAL PLANOS DE SAÚDE?</h2>

                <ul>
                    <li>
                        <h1>Atendimento</h1>
                        familiar personalizado
                    </li>

                    <li>
                        <h1>Conhecimneto especializado</h1>
                        sobre múltiplos planos
                    </li>

                    <li>
                        <h1>Transparênci</h1>
                        nas condições de cada plano
                    </li>
                </ul>

                <div>
                    <Button text='ENTRE EM CONTATO AGORA MESMO PELO WHATSAPP' />
                </div>

                
            </div>

            <div className={styles.imageContainer}>
                <Image src='/img/IMG - DRA APONTANDO.png' fill className={styles.image} />
            </div>
        </div>

    </section>
)
}export default Skiils