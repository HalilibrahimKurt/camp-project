import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'


export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://media-exp3.licdn.com/dms/image/C4D03AQF4DVT__c0VWA/profile-displayphoto-shrink_400_400/0/1597101270976?e=1628726400&v=beta&t=cpc8q3yeQMPUcbIBNYnFQHHEFTswJJMc3-xXXKx9Cag" />
                <Dropdown pointing="top left" text="Halil">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
