import { useState } from 'react'
import * as styles from './styles'
import ResponsiveContainer from '@/components/Containers/ResponsiveContainer'
import ContentContainer from '@/components/Containers/ContentContainer'
import Image from 'next/image'
import Logo from 'public/images/logo.svg'
import ReactFlagsSelect from 'react-flags-select'

const Navbar = () => {
    const [selected, setSelected] = useState('GB')

    return (
        <ResponsiveContainer>
            <ContentContainer>
                <styles.NavbarContainer>
                    <styles.LogoContainer>
                        <Image src={Logo} width={100} height={100} />
                    </styles.LogoContainer>

                    <styles.TabContainer>
                        <styles.TabItem>Content1</styles.TabItem>
                        <styles.TabItem>Content2</styles.TabItem>
                        <styles.TabItem>Content3</styles.TabItem>
                        <styles.TabItem>Content4</styles.TabItem>
                    </styles.TabContainer>

                    <styles.SelectLanguageContainer>
                        <ReactFlagsSelect
                            selected={selected}
                            onSelect={code => setSelected(code)}
                            customLabels={{
                                GB: {
                                    primary: 'English'
                                },
                                FR: {
                                    primary: 'Français'
                                }
                            }}
                            countries={['GB', 'FR']}
                        />
                    </styles.SelectLanguageContainer>
                </styles.NavbarContainer>
            </ContentContainer>
        </ResponsiveContainer>
    )
}

export default Navbar
