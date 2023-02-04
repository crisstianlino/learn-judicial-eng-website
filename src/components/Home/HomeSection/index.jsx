import * as styles from './styles'
import ResponsiveContainer from '@/components/Containers/ResponsiveContainer'
import ContentContainer from '@/components/Containers/ContentContainer'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import Sky from 'public/images/skyWithBuildings.jpg'
import { Heading } from '@/components/Typography'

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
                        <Heading
                            level={1}
                            size={'xxlarge'}
                            color={'white'}
                            fontWeight={700}
                        >
                            TEXT HERE
                        </Heading>
                        <Heading
                            level={6}
                            size={'small'}
                            color={'white'}
                            fontWeight={400}
                        >
                            TEXT HERE
                        </Heading>
                        <styles.Button>click</styles.Button>
                    </ContentContainer>
                </ResponsiveContainer>
            </styles.BackgroundImage>
        </>
    )
}

export default HomeSection
