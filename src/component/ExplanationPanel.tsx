import React from "react";
import {Flex} from "@chakra-ui/react";
import {BehaviorType} from "@/type";
import {BehaviorColor} from "@/constant";

interface Props {
    title: string;
    type?: BehaviorType;
    children: React.ReactNode;
}

export const ExplanationPanel = React.memo<Props>(({type, title, children}) => {
    return (
        <Flex _last={{pb: 20}} w="full" px={8} py={2} width="full" flexDirection="column">
            <Flex width="full" flexDirection="column">
                <Flex borderTopRadius="lg" p={2} bgColor="red.700" color="white" fontWeight="bold" justifyContent="center">
                    {title}
                </Flex>
                <Flex borderBottomRadius="lg" p={2} bgColor="orange.100" fontWeight="bold" color={BehaviorColor[type ?? "平"]} justifyContent="center">
                    {children}
                </Flex>
            </Flex>
        </Flex>
    );
});
