import React from "react"
import Flex from "../utils/Flex";
import LanguageSwitch from "../common/LanguageSwitch";

const Footer = () => {
    return <footer className="Footer">
        <Flex className="Footer__Container" alignItems="center" justifyContent="space-between">
            <p>© 2020 Evervi.io </p>
            <LanguageSwitch />


        </Flex>
    </footer>
}

export default Footer;