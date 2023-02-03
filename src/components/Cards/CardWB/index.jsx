import * as styles from './styles'
import Image from 'next/image'

const CardWB = ({ title, image, text }) => {
    return (
        <styles.Container>
            <Image src={image} width={100} height={100} />
            <styles.Title>{title}</styles.Title>
            <styles.Text>{text}</styles.Text>
        </styles.Container>
    )
}

export default CardWB
