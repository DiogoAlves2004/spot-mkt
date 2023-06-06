//STYLES
import Image from 'next/image'
import styles from './HomePage.module.css'

function HomePage(){
return(
    <section className={styles.mainContainer}>

        <div className={styles.BgContianer}>
            <Image 
                src="/img/BG - 1.jpg"
                alt="Home Image"
                fill
                className={styles.image}
            />
        </div>

        <div className={styles.content}>

            <div className={styles.textContainer}>
                
                <Image 
                    src="/img/logos/LOGO - IDEAL PRETA.png"
                    alt="Home Image"
                    width={125}
                    height={50}
                />

                <h1>O PLANO IDEAL</h1>
                <h2>para cuidar da sua saúde em Belo Horizonte!</h2>

                <h3>Descubra qual plano de saúde atual vai ser o <span>melhor para você!</span></h3>

                <ul>
                    <li>Sem complexidade</li>
                    <li>Diagnóstico transparente</li>
                    <li>Planos adequados ao seu perfil</li>
                    <li>Conhecimento especializados de <span>mais de 10 anos</span></li>
                    <li>Opçoes especiais para os <span>idosos</span></li>
                </ul>
            </div>

            <div className={styles.imageContianer}>
                <Image 
                    src="/img/IMG - DRA.png"
                    alt="Doutora"
                    fill
                    className={styles.image}
                />
            </div>

        </div>






    </section>
)
}export default HomePage