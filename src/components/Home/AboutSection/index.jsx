import * as styles from './styles'
import ResponsiveContainer from '@/components/Containers/ResponsiveContainer'
import ContentContainer from '@/components/Containers/ContentContainer'
import { useTranslation } from 'next-i18next'
import People from 'public/images/People.png'
import CardWB from '@/components/Cards/CardWB'

const AboutSection = props => {
    const { isDesktop, isMobile } = props
    const { t } = useTranslation()

    return (
        <>
            <ResponsiveContainer>
                <ContentContainer isMobile={isMobile}>
                    <styles.Container>
                        <styles.TitleContainer>
                            <styles.Title>title hre</styles.Title>
                            <styles.Text>text here</styles.Text>
                        </styles.TitleContainer>
                        <styles.CardContainer>
                            <CardWB
                                image={People.src}
                                title={'title'}
                                text={'text'}
                            />
                            <CardWB
                                image={People.src}
                                title={'title'}
                                text={'text'}
                            />
                            <CardWB
                                image={People.src}
                                title={'title'}
                                text={'text'}
                            />
                        </styles.CardContainer>
                    </styles.Container>
                </ContentContainer>
            </ResponsiveContainer>
        </>
    )
}

export default AboutSection
