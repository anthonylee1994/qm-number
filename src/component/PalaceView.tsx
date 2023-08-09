import React from "react";
import {Flex, Text, VStack} from "@chakra-ui/react";
import {BehaviorColor, doorColorMap, godColorMap, heavenlyStemColorMap, palaceColorMap, qmPatternMap, starColorMap} from "@/constant";
import {Door, God, HeavenlyStem, Palace, Star} from "@/type";

interface Props {
    palace?: Palace;
    god?: God;
    star?: Star;
    door?: Door;
    sky: HeavenlyStem;
    earth: HeavenlyStem;
}

export const PalaceView = React.memo<Props>(({palace, god, star, door, sky, earth}) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [pattern, patternType] = qmPatternMap[`${sky}${earth}`];

    React.useEffect(() => {
        if (!ref.current) return;
        const {width} = ref.current.getBoundingClientRect();
        ref.current.style.height = `${width}px`;

        const listener = () => {
            if (!ref.current) return;
            const {width} = ref.current.getBoundingClientRect();
            ref.current.style.height = `${width}px`;
        };

        window.addEventListener("resize", listener);

        return () => {
            window.removeEventListener("resize", listener);
        };
    }, [ref]);

    return (
        <Flex
            mb={2}
            borderWidth={6}
            borderColor="yellow.600"
            w={330}
            p={4}
            borderRadius="2xl"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
            ref={ref}
            bgColor="orange.100"
        >
            <Text fontWeight="bold" fontSize="4xl" color={god ? godColorMap[god] : "gray.500"}>
                {god || "神空亡"}
            </Text>
            <Text fontWeight="bold" fontSize="6xl" color={door ? doorColorMap[door] : "gray.500"}>
                {door || "門空亡"}
            </Text>
            <Text fontWeight="bold" fontSize="5xl" color={star ? starColorMap[star] : "gray.500"}>
                {star || "星空亡"}
            </Text>
            <Text fontWeight="bold" mt={3} fontSize="3xl" color={palace ? palaceColorMap[palace] : "gray.500"}>
                {palace}
            </Text>

            <VStack position="absolute" bottom={5} right={5}>
                <Text fontWeight="bold" color={sky ? heavenlyStemColorMap[sky] : "gray.500"} lineHeight={1.2} fontSize={40}>
                    {sky}
                </Text>
                <Text fontWeight="bold" color={earth ? heavenlyStemColorMap[earth] : "gray.500"} lineHeight={1.2} fontSize={40}>
                    {earth}
                </Text>
            </VStack>

            <VStack position="absolute" top={5} left={5}>
                {pattern.split("").map((item, index) => (
                    <Text key={index} fontWeight="bold" color={BehaviorColor[patternType ?? "平"]} fontSize={40} lineHeight={1}>
                        {item}
                    </Text>
                ))}
            </VStack>
        </Flex>
    );
});
