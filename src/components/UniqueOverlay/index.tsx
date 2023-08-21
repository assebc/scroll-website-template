import { FC } from "react";
import { useTransform } from "framer-motion";
import { useWrapperScroll } from "../Model";
import { Container, Header, Footer } from "./styles";

export const UniqueOverlay: FC = () => {
    
    const { scrollYProgress } = useWrapperScroll();
    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

    return (
        <Container>
            <Header>
                <img src="/favicon.png" width={120}/>
            </Header>
    
            <Footer style={{ opacity }}>
                <ul>
                    <li>
                        <a href="https://bitsway.dev">Scroll</a>
                    </li>
                    <li>
                        <a href="https://bitsway.dev">Website</a>
                    </li>
                    <li>
                        <a href="https://bitsway.dev">Template</a>
                    </li>
                </ul>
            </Footer>
        </Container>
    );
};

