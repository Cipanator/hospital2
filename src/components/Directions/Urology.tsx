import styles from "./Urology.module.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Urology = () => {
    return (
        <Container>
            <h1>Отделение урологии клиники специализируется на следующих направлениях:</h1>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <p className={styles.text}><b>1. Эндоурология:</b></p>
                    <ul>
                    <li>малоинвазивное (через просвет мочеиспускательного канала - без разрезов) хирургическое лечение аденомы простаты (ТУР – трансуретральная резекция, биполярный ТУР в физрастворе, плазменная вапоризация); </li>
                    <li>эндоскопические операции при камнях мочевыводящей системы (через просвет мочеиспускательного канала - без разрезов), в том числе лазерная и ультразвуковая литотрипсия (дробление камней почек ультразвуком и лазером), перкутанные (чрескожные) операции при крупных и коралловидных камнях почки; </li>
                    <li>малоинвазивное лечение почечной колики.</li>
                    <div className={styles.image}></div>
                    </ul>
                    <p className={styles.text}><b>2. Урогинекология и реконструктивная урология:</b></p>
                    <ul>
                    <li>реконструктивно-пластические операции при опущении и выпадении органов малого таза (опущение стенок влагалища, опущение матки, мочевого пузыря, прямой кишки) и недержании мочи у женщин и мужчин с применением современных биоинертных синтетических эндопротезов – УроСлинг, TVT, Пелвикс; </li>
                    <li>пластические операции на женских половых органах;</li>
                    <li>операции по поводу опущений и выпадений влагалища и матки (пролапс тазовых органов);</li>
                    <li>оперативное лечение мочеполовых свищей, послеоперационных стриктур мочеточника и др.</li>
                    </ul>
                    <p className={styles.text}><b>3. Онкоурология:</b></p>
                    <ul>
                    <li>радикальные и органосохраняющие операции при раке почки, раке мочевого пузыря. </li>
                    </ul>
                    <p className={styles.text}><b>4. Амбулаторная хирургия в урологии:</b></p>
                    <ul>
                    <li>микрохирургические операции в урологии при варикоцеле, </li>
                    <li>хирургическое лечение фимоза, водянки оболочек яичка, кист придатка яичка, короткой уздечки и др. </li>
                    </ul>
                    <p className={styles.text}><b>5. Инвазивные методы диагностики: </b></p>
                    <ul>
                    <li>трансректальная мультифокальная биопсия предстательной железы. </li>
                    </ul>
                    <p className={styles.text}>Персонал отделения имеет в своем распоряжении все необходимое для достижения наилучшего результата лечения практически любой урологической патологии:</p>
                    <ul>
                    <li>хирургические расходные материалы и эндопротезы ведущих иностранных и отечественных производителей (Rusch, Cook, Covidien, Ethicon, Bard, Линтекс, РБМ и др.); </li>
                    <li>оригинальные лекарственные препараты, обеспечивающие максимальный эффект и минимум осложнений (в абсолютном большинстве случаев мы отказываемся от применения так называемых «дженериков»); </li>
                    <li>эндоскопическое и лапароскопическое оборудование "Olympus" и "Karl Storz Endoscope" для всех видов эндоурологических и лапароскопических вмешательств (уретероскопы, контактные литотрипторы, нефроскопы, монополярные и биполярные резектоскопы, лапароскопический инструментарий и др.);</li>
                    <li>ультразвуковое оборудование "Philips" последнего поколения.</li>
                    </ul>
                    <h4>Ориентиры дальнейшего развития</h4>
                    <p className={styles.text}>Основным ориентиром развития отделения является дальнейшее повышение качества и доступности медицинской помощи больным урологического профиля. Широкое внедрение и совершенствование малотравматичных эндоскопических методов лечения позволит эффективно бороться с абсолютным большинством урологических заболеваний, но при этом уменьшать болевые ощущения, сокращать продолжительность госпитализации и ускорять реабилитацию.</p>
                    <p className={styles.text}>В урологическом отделении  проводится бесплатное хирургическое лечение пациентов в рамках государственной программы по оказанию высокотехнологичной медицинской помощи (ВМП) за счет средств федерального бюджета.</p>
                    <p className={styles.text}>В составе отделения развернуто 26 коек, перевязочная, смотровой кабинет, процедурный кабинет, цистоскопический кабинет и эндоурологическая операционная.</p>
                    <p className={styles.text}>Клиника на соответствие требованиям стандарта ГОСТ Р ИСО 9001-2015 применительно ко всем видам оказываемых клиникой услуг каждый год проходит процедуру подтверждения соответствия системы менеджмента качества. Наличие такого добровольного сертификата во многих странах является знаком качества оказываемых услуг для потребителя, дополнительной гарантией надежности и профессиональной компетентности не только на национальном, но и на международном уровне.</p>
                
                </div>



            </div>
        </Container >
    )
}