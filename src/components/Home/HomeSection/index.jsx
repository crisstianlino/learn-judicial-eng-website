import * as styles from './styles'
import ResponsiveContainer from '@/components/Containers/ResponsiveContainer'
import ContentContainer from '@/components/Containers/ContentContainer'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import Sky from 'public/images/skyWithBuildings.jpg'

const HomeSection = props => {
    const { isDesktop, isMobile } = props
    const { t } = useTranslation()

    return (
        <>
            <styles.BackgroundImage isMobile={isMobile}>
                <Image src={Sky} fill style={{ objectFit: 'cover' }} />
                <ResponsiveContainer>
                    <ContentContainer
                        isMobile={isMobile}
                        zIndex={1}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        {/* <styles.Container> */}
                        <styles.Title>TEXT HERE</styles.Title>
                        <styles.Text>litte text here</styles.Text>
                        <styles.Button>click</styles.Button>
                        {/* </styles.Container> */}
                    </ContentContainer>
                </ResponsiveContainer>
            </styles.BackgroundImage>
        </>
    )
}

export default HomeSection
