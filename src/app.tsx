import React from "react";
import {NumberCode} from "@/component/NumberCode";
import {Flex, VStack} from "@chakra-ui/react";
import {Logo} from "@/component/Logo";
import {PalaceView} from "@/component/PalaceView";
import {
    doorExplanationMap,
    doors,
    doorTypeMap,
    godExplanationMap,
    gods,
    godTypeMap,
    heavenlyStemExplanationMap,
    heavenlyStems,
    heavenlyStemTypeMap,
    palaceExplanationMap,
    palaces,
    starExplanationMap,
    stars,
    starTypeMap,
} from "@/constant";
import {ExplanationPanel} from "@/component/ExplanationPanel";
import {RandomButton} from "@/component/RandomButton";

export const App = React.memo(() => {
    const [numberCode, setNumberCode] = React.useState("");
    const [palaceDigit, godDigit, starDigit, doorDigit, skyDigit, earthDigit] = numberCode.split("").map(Number);

    const palace = palaces[palaceDigit - 1];
    const god = gods[godDigit - 1];
    const star = stars[starDigit - 1];
    const door = doors[doorDigit - 1];
    const sky = heavenlyStems[skyDigit];
    const earth = heavenlyStems[earthDigit];

    return (
        <Flex flexDirection="column" alignItems="center">
            <Logo />
            <NumberCode value={numberCode} setValue={setNumberCode} />
            <RandomButton setNumberCode={setNumberCode} />
            {numberCode.length === 6 && (
                <React.Fragment>
                    <PalaceView palace={palace} god={god} star={star} door={door} sky={sky} earth={earth} />
                    <VStack width="full">
                        <ExplanationPanel title="平台環境">{palaceExplanationMap[palace ?? "空亡"]}</ExplanationPanel>
                        <ExplanationPanel type={godTypeMap[god]} title="人格">
                            {godExplanationMap[god ?? "空亡"]}
                        </ExplanationPanel>
                        <ExplanationPanel type={starTypeMap[star]} title="個性">
                            {starExplanationMap[star ?? "空亡"]}
                        </ExplanationPanel>
                        <ExplanationPanel type={doorTypeMap[door]} title="行動">
                            {doorExplanationMap[door ?? "空亡"]}
                        </ExplanationPanel>
                        <ExplanationPanel type={heavenlyStemTypeMap[sky]} title="外表">
                            {heavenlyStemExplanationMap[sky]}
                        </ExplanationPanel>
                        <ExplanationPanel type={heavenlyStemTypeMap[earth]} title="內心">
                            {heavenlyStemExplanationMap[earth]}
                        </ExplanationPanel>
                    </VStack>
                </React.Fragment>
            )}
        </Flex>
    );
});
