import {BehaviorType, Door, God, HeavenlyStem, Palace, Star} from "@/type";

export const palaces: Palace[] = ["坎一宮", "坤二宮", "震三宮", "巽四宮", "坤二宮", "乾六宮", "兌七宮", "艮八宮", "離九宮"];

export const gods: God[] = ["值符", "螣蛇", "太陰", "六合", "白虎", "玄武", "九地", "九天", "值符"];

export const stars: Star[] = ["天蓬", "天芮", "天冲", "天輔", "天禽", "天心", "天柱", "天任", "天英"];

export const doors: Door[] = ["休門", "死門", "傷門", "杜門", "死門", "開門", "驚門", "生門", "景門"];

export const heavenlyStems: HeavenlyStem[] = ["癸", "戊", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬"];

export enum ElementColor {
    WOOD = "green.500",
    FIRE = "red.500",
    EARTH = "orange.600",
    METAL = "yellow.500",
    WATER = "blue.500",
}

export enum BehaviorColor {
    吉 = "red.500",
    平 = "gray.600",
    凶 = "green.500",
}

export const palaceColorMap: Record<Palace, ElementColor> = {
    坎一宮: ElementColor.WATER,
    坤二宮: ElementColor.EARTH,
    震三宮: ElementColor.WOOD,
    巽四宮: ElementColor.WOOD,
    乾六宮: ElementColor.METAL,
    兌七宮: ElementColor.METAL,
    艮八宮: ElementColor.EARTH,
    離九宮: ElementColor.FIRE,
};

export const godColorMap: Record<God, ElementColor> = {
    值符: ElementColor.EARTH,
    螣蛇: ElementColor.FIRE,
    太陰: ElementColor.METAL,
    六合: ElementColor.WOOD,
    白虎: ElementColor.METAL,
    玄武: ElementColor.WATER,
    九地: ElementColor.EARTH,
    九天: ElementColor.METAL,
};

export const starColorMap: Record<Star, ElementColor> = {
    天蓬: ElementColor.WATER,
    天芮: ElementColor.EARTH,
    天冲: ElementColor.WOOD,
    天輔: ElementColor.WOOD,
    天禽: ElementColor.EARTH,
    天心: ElementColor.METAL,
    天柱: ElementColor.METAL,
    天任: ElementColor.EARTH,
    天英: ElementColor.FIRE,
};

export const doorColorMap: Record<Door, ElementColor> = {
    休門: ElementColor.WATER,
    死門: ElementColor.EARTH,
    傷門: ElementColor.WOOD,
    杜門: ElementColor.WOOD,
    開門: ElementColor.METAL,
    驚門: ElementColor.METAL,
    生門: ElementColor.EARTH,
    景門: ElementColor.FIRE,
};

export const heavenlyStemColorMap: Record<HeavenlyStem, ElementColor> = {
    乙: ElementColor.WOOD,
    丙: ElementColor.FIRE,
    丁: ElementColor.FIRE,
    戊: ElementColor.EARTH,
    己: ElementColor.EARTH,
    庚: ElementColor.METAL,
    辛: ElementColor.METAL,
    壬: ElementColor.WATER,
    癸: ElementColor.WATER,
};

export const godTypeMap: Record<God, BehaviorType> = {
    值符: "吉",
    螣蛇: "平",
    太陰: "吉",
    六合: "吉",
    白虎: "凶",
    玄武: "平",
    九地: "吉",
    九天: "吉",
};

export const starTypeMap: Record<Star, BehaviorType> = {
    天蓬: "凶",
    天芮: "凶",
    天冲: "平",
    天輔: "吉",
    天禽: "平",
    天心: "吉",
    天柱: "平",
    天任: "吉",
    天英: "平",
};

export const doorTypeMap: Record<Door, BehaviorType> = {
    休門: "吉",
    死門: "凶",
    傷門: "平",
    杜門: "平",
    開門: "吉",
    驚門: "平",
    生門: "吉",
    景門: "平",
};

export const heavenlyStemTypeMap: Record<HeavenlyStem, BehaviorType> = {
    乙: "吉",
    丙: "吉",
    丁: "吉",
    戊: "吉",
    己: "平",
    庚: "凶",
    辛: "平",
    壬: "平",
    癸: "平",
};

export const palaceExplanationMap: Record<Palace | "空亡", string> = {
    坎一宮: "艱難、受困、深陷",
    坤二宮: "牽扯拖拉、進展緩慢",
    震三宮: "開創、奮鬥",
    巽四宮: "徘徊不定、沒有方向",
    乾六宮: "積極主動、居高臨下",
    兌七宮: "社交、口舌、是非",
    艮八宮: "阻隔、停止不前",
    離九宮: "光明前景、由盛轉衰",
    空亡: "辛勞、無收穫、無力",
};

export const godExplanationMap: Record<God | "空亡", string> = {
    值符: "主見強、喜掌控",
    螣蛇: "聰明圓滑、變來變去、三心二意",
    太陰: "心思細膩、想得多",
    六合: "有親和力、人緣佳",
    白虎: "威嚴強勢、脾氣硬、不服輸",
    玄武: "暗中行事、聰明",
    九地: "低調、保守、固執",
    九天: "好動、高調、志高",
    空亡: "心裡沒底、沒主見、靈感直覺",
};

export const starExplanationMap: Record<Star | "空亡", string> = {
    天蓬: "膽大敢拚、不顧後果",
    天芮: "保守固執、不易變通",
    天冲: "行動力強、冒失",
    天輔: "斯文文雅、善關懷",
    天禽: "保守、尊貴",
    天心: "聰明、核心人物",
    天柱: "口才佳、唱反調、不服輸",
    天任: "有責任感、勤奮可靠、保守固執",
    天英: "個性急、有才華",
    空亡: "心裡沒底、沒主見、靈感直覺",
};

export const doorExplanationMap: Record<Door | "空亡", string> = {
    休門: "輕鬆和諧、不積極",
    死門: "保守固執、死氣沉沉",
    傷門: "積極主動、冒失",
    杜門: "話少、保守、事藏心裡",
    開門: "樂觀開朗、積極進取",
    驚門: "口才佳、易擔心、口舌官司",
    生門: "生龍活虎、活躍",
    景門: "喜展現、有願景、或空想",
    空亡: "多勞少穫、使不上力、沒有方法",
};

export const heavenlyStemExplanationMap: Record<HeavenlyStem, string> = {
    乙: "柔順依賴、猶豫軟弱",
    丙: "熱情付出、沒耐性、易出亂子",
    丁: "溫聚和順、體貼",
    戊: "忠厚可靠、不易變通",
    己: "想法多、點子多、花花關子",
    庚: "威嚴、強硬、不服輸",
    辛: "創新改革、虛榮自我",
    壬: "聰明、任性、迷惘",
    癸: "不能自主、多愁善感、想不開",
};

export const qmPatternMap: Record<`${HeavenlyStem}${HeavenlyStem}`, [string, BehaviorType]> = {
    戊乙: ["青龍和會", "吉"],
    戊丙: ["青龍返首", "吉"],
    戊丁: ["青龍耀明", "吉"],
    戊戊: ["青龍伏吟", "凶"],
    戊己: ["貴人入獄", "凶"],
    戊庚: ["值符飛宮", "凶"],
    戊辛: ["青龍折足", "凶"],
    戊壬: ["青龍入牢", "凶"],
    戊癸: ["青龍華蓋", "平"],
    己乙: ["地戶逢星", "凶"],
    己丙: ["火悖地戶", "凶"],
    己丁: ["朱雀入獄", "凶"],
    己戊: ["犬遇青龍", "平"],
    己己: ["地戶逢鬼", "凶"],
    己庚: ["刑格返名", "凶"],
    己辛: ["遊魂入墓", "凶"],
    己壬: ["地網高張", "凶"],
    己癸: ["地刑玄武", "凶"],
    庚乙: ["太白逢星", "凶"],
    庚丙: ["太白入熒", "凶"],
    庚丁: ["亭亭之格", "凶"],
    庚戊: ["天乙伏宮", "凶"],
    庚己: ["官府刑格", "凶"],
    庚庚: ["太白同宮", "凶"],
    庚辛: ["白虎幹格", "凶"],
    庚壬: ["移盪格", "凶"],
    庚癸: ["大格", "凶"],
    辛乙: ["白虎猖狂", "凶"],
    辛丙: ["干合悖師", "凶"],
    辛丁: ["獄神得奇", "吉"],
    辛戊: ["困龍被傷", "凶"],
    辛己: ["入獄自刑", "凶"],
    辛庚: ["白虎出力", "凶"],
    辛辛: ["伏吟天庭", "凶"],
    辛壬: ["兇蛇入獄", "凶"],
    辛癸: ["天牢華蓋", "凶"],
    壬乙: ["小蛇得勢", "吉"],
    壬丙: ["水蛇入火", "凶"],
    壬丁: ["干合蛇刑", "平"],
    壬戊: ["小蛇化龍", "吉"],
    壬己: ["反吟蛇刑", "凶"],
    壬庚: ["太白擒蛇", "凶"],
    壬辛: ["騰蛇相纏", "凶"],
    壬壬: ["天獄自刑", "凶"],
    壬癸: ["天羅地網", "凶"],
    癸乙: ["華蓋逢星", "吉"],
    癸丙: ["華蓋悖師", "凶"],
    癸丁: ["騰蛇夭矯", "凶"],
    癸戊: ["天乙合會", "吉"],
    癸己: ["華蓋地戶", "凶"],
    癸庚: ["太白入網", "凶"],
    癸辛: ["網蓋天牢", "凶"],
    癸壬: ["復見騰蛇", "凶"],
    癸癸: ["天網四張", "凶"],
    丁乙: ["人遁吉格", "吉"],
    丁丙: ["星隨月轉", "吉"],
    丁丁: ["奇入太陰", "吉"],
    丁戊: ["青龍轉光", "吉"],
    丁己: ["火入勾陳", "凶"],
    丁庚: ["星奇受阻", "凶"],
    丁辛: ["朱雀入獄", "凶"],
    丁壬: ["奇儀相合", "吉"],
    丁癸: ["朱雀投江", "凶"],
    丙乙: ["日月並行", "吉"],
    丙丙: ["月奇悖師", "凶"],
    丙丁: ["星奇朱雀", "吉"],
    丙戊: ["飛鳥跌穴", "吉"],
    丙己: ["火悖入刑", "凶"],
    丙庚: ["熒入太白", "凶"],
    丙辛: ["日月相會", "吉"],
    丙壬: ["火入天羅", "凶"],
    丙癸: ["月奇地網", "凶"],
    乙乙: ["日奇伏吟", "凶"],
    乙丙: ["奇儀順遂", "吉"],
    乙丁: ["奇儀相佐", "吉"],
    乙戊: ["陰害陽門", "凶"],
    乙己: ["日奇入墓", "凶"],
    乙庚: ["日奇被刑", "凶"],
    乙辛: ["青龍逃走", "凶"],
    乙壬: ["日奇天羅", "凶"],
    乙癸: ["日奇地網", "凶"],
};
