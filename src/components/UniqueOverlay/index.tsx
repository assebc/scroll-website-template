import { FC } from "react";
import { useTransform } from "framer-motion";
import { useWrapperScroll } from "../Model";
import { Container, Footer } from "./styles";

export const UniqueOverlay: FC = () => {
    
    const { scrollYProgress } = useWrapperScroll();
    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

    return (
        <Container>
            {/* <Header>
                <img src="/favicon.png" width={32} />
            </Header> */}
    
            <Footer style={{ opacity }}>
                <ul>
                    <li>
                        <a href="https://cbessa.pt">Scroll</a>
                    </li>
                    <li>
                        <a href="https://cbessa.pt">Website</a>
                    </li>
                    <li>
                        <a href="https://cbessa.pt">Template</a>
                    </li>
                </ul>
            </Footer>
        </Container>
    );
};

