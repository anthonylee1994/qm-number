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
    己: "想法多、點子多、花花腸子",
    庚: "威嚴、強硬、不服輸",
    辛: "創新改革、虛榮自我",
    壬: "聰明、任性、迷惘",
    癸: "不能自主、多愁善感、想不開",
};

export const qmPatternMap: Record<`${HeavenlyStem}${HeavenlyStem}`, [string, BehaviorType, string[]]> = {
    戊乙: [
        "青龍和會",
        "吉",
        [
            "戊+乙——青龍和會，門吉事吉，門兇事也兇。這是一個合格，必有他人他事牽連。遇到好的中間人（門），事情就吉，反之則兇。測投資代表股份制、合作等。測辦事有人幫。測病，多種病。遇到此格，要特別注意門的影響。兇門或吉門門迫，應吉的效果就很不理想。此格利於合作和聚集，不利於一個人獨立做事或獨",
            "戊+乙，烏雲遇到日頭，雲開霧散。乙是日頭，作用在人事上事情明朗，貴人相幫。作用在地理上主清風和煦，鳥語花香。從神助上講，花點錢敬神：乙奇神咒。",
            "象意聯想：牆頭起伏不平；牆頭草；有錢多次花；鼻炎。此方位有牛圈、豬圈；陶製的藝術品。",
        ],
    ],
    戊丙: [
        "青龍返首",
        "吉",
        [
            "戊+丙——青龍返首，動作大吉，但若逢門迫、入墓、擊刑，則吉事成兇。測投資，投進去的資本又回來了，可發財。但就怕入墓和擊刑：戊落乾宮入墓了，破財。落震宮擊刑了，損財。戊落巽宮最吉。門迫不好，主會遇到人事上的變化，戊想回來，但門被鎖死了，回不來。此格，測疾病—壞了，舊病復發，主反覆。測要債，可要回來，但有亂子。打官司，還得重審。測出行，打架妻子失踪了，還會回來。",
            "“青龍返首，鰲頭獨立”命盤臨此格，主金榜題名。測婚姻戊+丙，男方為百里挑一的女婿、女方為華貴嬌娘。青龍返首就是往返照耀之意。丙是月亮，開始時是烏雲遮月，後來是月出雲沒。喻人事，開始時挺難的，一片混亂，後來有眉目了，見到光明，事物必有轉機。",
            "象意聯想：得到錢了；交罰款；變壓器。此方位有窯灶爐冶、熱力塔、電飯煲。",
        ],
    ],
    戊丁: [
        "青龍耀明",
        "吉",
        [
            "戊+丁——青龍耀明，宜見上級領導、貴人，求功名，為事吉利.，若值墓迫，招惹是非。丁主希望、機遇、奇蹟，一般說來是好事，但如果一個男的來求測，那他可能外面有女人。測公關，需要動用少女。測病，需要動手術。測運氣，主人生有重大機遇。",
            "命盤“戊加丁奇，富貴榮耀”。青龍耀明，即閃耀著一點光明，一絲絲的光線，代表希望和奇蹟。這個光明也受到外力的影響，門吉則吉；門兇，則枉費心機。門吉，一點點光明，再加上人為的助力，則希望加大。而門兇，剛有一點希望又被外來因素破壞了。",
            "象意聯想：壁燈、鼻炎、花錢找情人、胃開刀、乳腺手術；有牆角、電線桿、路燈。",
        ],
    ],
    戊戊: [
        "青龍伏吟",
        "凶",
        [
            "戊+戊——名為伏吟，凡事不利，道路閉塞，以守為好。測投資，資本難以周轉，要雙倍的投。測出行，戊就是山，阻隔重重，會堵車。測婚姻，沒有動向，難變。測疾病，有腫脹的地方、胃脹難受、不想吃東西、混混沌沌、想睡覺.。測辦事，一次辦不成，需要不斷的完善和補充才能辦成。",
            "戊+戊—作用在人身上，主愚鈍、無知、不轉彎、死心眼。作用在人事上，閉塞不通，推行不開，遲緩。也主大智若愚。",
            "象意聯想：雙倍的投資；梯子；傻子；雙份收入；背靠背。此方位有土丘、高崗、食品店。",
        ],
    ],
    戊己: [
        "貴人入獄",
        "凶",
        [
            "戊+己——貴人入獄，公私皆不利。己為陷阱，戊為錢，錢掉到陷阱裡了，主破財。測投資為合夥投資、各懷鬼胎，錢不到位。己是私慾，想美事。打官司，有好事也實現不了。貴人入獄，測牢獄，出不來。找貴人，此人幫不上忙。逢這種格局，就是能力不足的問題，只有等待衝出墓庫之時，才能有轉機，一般說來還能挺得過去，困難是暫時的。",
            "象意聯想：老闆的想法、牆邊有垃圾。此方位有土丘、墳墓、岡陵。",
        ],
    ],
    戊庚: [
        "值符飛宮",
        "凶",
        [
            "戊+庚——值符飛宮，吉事不吉，兇事更兇，求財沒利益，測病也主凶。同時，甲庚相衝,飛宮也主換地方。這是一個動格，肯定動，不會安份的。測工作，肯定要換。臨生門，換房子，改生意，換地方。臨開門，工作調整。測投資，錢換主人了。開店要遷址，選房子，住不長。測什麼，什麼都呆不住。經商遇到戊+庚或庚+戊，主此地不如他地，即不能在此地做生意，有時候可以轉換門庭就好了。",
            "命盤“庚+戊，戊+庚，多成多敗，此地不比他地”，必然遇到反复較量的鬥爭局面，最好是避開對手，換地經營。如果是合作或做事，主不是一路人，你所說的事和他做的事不是一回事，合作不到一塊去。測運氣，為事業的轉成，換行業或換單位。測病，為轉移。測墳地，景＋戊＋庚＋騰蛇，不能用，主墳換地方，因景為路，故以後這地方要修路。測什麼換什麼，代表轉移，走。",
            "象意聯想：拉磚的車；錢丟了；交罰款了。此方位有橋樑、水泥路；水泥柱子、橫梁。",
        ],
    ],
    戊辛: [
        "青龍折足",
        "凶",
        [
            "戊+辛——青龍折足，吉門有生助，尚能謀事；若逢凶門，主招災，失財或有足疾、折傷。如果是年輕人求測，可能是腿腳上有毛病。測財運，肯定是破財，無論落在哪個宮都是破財。只是落宮不同，破財的形式或者破財的地方不一樣。這是一個衝格，幹什麼都要動，但這個動是錯誤的。測投資，投錯了。測工作，換錯地方了。測出行，容易腿腳受傷。測事情，要出問題、夭折、半道折損、半途而廢。測懷孕，要防流產。測疾病，為增生類的疾病。衝格，指動態的事情。此格坐不住，也留不住，最忌諱投資，此局做事，就發生不利的變化。",
            "作用在人事上，主半途而廢或者出現扯後腿的人或意外閃失。遇到戊+辛，開始順，則以後不順。開始不順，則馬上要順利。",
            "象意聯想：電線桿、鼻子有病；要破財了；老闆要發工資了；老闆出手大方、牆上有裂縫、有沙堆、牆不平、牆角衝射、肉裡有碎骨頭。",
        ],
    ],
    戊壬: [
        "青龍入牢",
        "凶",
        [
            "戊+壬——青龍入天牢，凡陰陽事皆不吉利。此格也主破財，主錢財收不回來，借出的錢,打水瓢了。壬水主變化，戊是什麼，什麼就變化了。投資，虧本。測婚姻、錢財、工作、公司等，都要發生不利的變化。此格，也代表運氣不好，辦不成事，處在一個低潮期。當官的遇此格沒好事，要不就是犯錯誤，要不就是退二線/下台或進去了。青龍代表權位，代表政府官員，壬水牢獄，動了。",
            "此格也是一個變動格。測工作，也是要動的。測疾病，病要走了。此格表示貴人失陷，小人擋道，被小人牽扯。要注意身邊的人或當地地方的人牽扯，陷害。外出求財、做事，受到當地地方勢力的欺凌。",
            "象意聯想：花錢如流水；水庫；水缸、橋樑、蓄水池、河堤、堤壩、西瓜、壇子。",
        ],
    ],
    戊癸: [
        "青龍華蓋",
        "平",
        [
            "戊+癸——青龍華蓋，又戊癸相合，故逢吉門為吉，可招福臨門；逢凶門，事多不利，為凶。逢合必有勾連、合夥。不僅論天地盤之合，也論天禽星和天芮星所帶之幹。逢合為多，為合夥。婚姻為不是第一次或表示同居。事情有合絆、障礙。戊看的是癸的性，癸看的是戊的錢。有錢的找性感的女孩，性感的女孩愛嫁有錢的人。戊土也為誠實憨厚的人，賴漢娶嬌妻也是戊癸合。戊癸為利而合，也可以說是無情之和。測婚姻，為年齡差距大。測病，為多種病。測出行，必有他人他事牽連、有瓜葛。出行遇到衝格比較好。這個格，有吉有凶。癸為天網，戊為天武。你想做兵戈之事或你想變化，需要通過天網。它既有保護你的意思，也有箝制你的意思。此格，中間要有一個媒介即和事佬。如果門吉則吉；門兇枉費心機。就是說，在外界事物影響推動他的時候，雙方有合作的意思。如果門兇，則說明雙方合作沒有用，反而互相箝制，大家都乾不好。",
            "象意聯想：橋樑、金屋藏嬌、房子裡有衛生間、足療、濕土、濕泥巴。",
        ],
    ],
    己乙: [
        "地戶逢星",
        "凶",
        [
            "己+乙——墓神不明，戌為乙木之墓，己又為地戶，故名墓神不明，地戶逢星，宜遁跡隱形為利。此格不好，莊稼長在了墳地裡，長在了井裡，長在了地戶裡，表示這個事不明確。測事，不要去做，你自己都還沒有搞清楚。測疾病，不能確診，只是懷疑。測事，表示這個事還不清楚，沒有眉目，只看到了太陽的影子，沒有看到太陽。測投資，看不到市場的變化。測前途，前途渺茫，自己搞不清自己的位置。",
            "此格，一般做事拖拉，看不見光明，這本身就不是很好的事，沒有頭緒，卻還要去做。這個格局不宜進取。",
            "象意聯想：猶疑不決、作家、畫家、搞藝術的、搞策劃的、想老婆了、拉肚子。此方位有田園、菜園、公園、繩索電線亂成一團。",
        ],
    ],
    己丙: [
        "火悖地戶",
        "凶",
        [
            "己+丙——火悖地戶，己在天盤，丙在地盤，戌為火墓，己為地戶，陰陽顛倒，所以叫火悖地戶兇格。如果男人遇此格，容易冤冤相害。測合作，雙方合作不成功，反而遭一些麻煩事，不痛快的事。丙是太陽之火，落到井裡了，它不干啊，所以相互攻擊。測婚姻：女性測，腳踏兩隻船，張郎來了想李郎；男性測，到處沾花惹草、尋花問柳。測對手，則亂來，兩敗俱傷。",
            "此格表明會因為不正確的思想和行為，造成一些麻煩事。遇此格，主麻煩是非，由於私心而產生的問題，犯小人，且知道小人是誰。",
            "象意聯想：設想的計劃亂套了；肚裡窩火；思想混亂；腸炎；糊塗；此方位有花園、鍋爐房、廚房、陽台、飯店等。",
        ],
    ],
    己丁: [
        "朱雀入獄",
        "凶",
        [
            "己+丁——朱雀入獄，天盤甲戌己，地盤丁奇，因戌為火墓，丁奇為南方火，又名朱雀，所以叫朱雀入獄。就是丁火落到井裡了，但星星是埋不住的，表示開始時有曲折變化，但堅持下去就會有好的機遇。此格，道路是曲折的，前途是光明的。經過困難、曲折和磨難之後會有轉機，所以此格主文書詞訟，先曲後直，先兇後吉。不要冒進，不要急於求成，要緩一步才能成功。",
            "象意聯想：垃圾郵件；變壓器；土地官司。此方位有菜園子、有垃圾、陽台、電氣設備、電磁爐、茶壺等。",
        ],
    ],
    己戊: [
        "犬遇青龍",
        "平",
        [
            "己+戊——犬遇青龍，戌為犬，甲為龍，故名犬遇青龍。門吉為謀望遂意，上人見喜。若門兇，枉費心機。這體現了主客關係的吉凶，主要有八門的吉凶來決定的，因八門代表人事。此格遇吉門，主有貴人幫助，有了施展才華的機遇和新生事物的發生。己土本來是藏在地下的東西，現在放在了陽地上，有人要幫你了，你升值了，做好的肥料了。測投資，有人要給你出資。",
            "此格是一人得道雞犬升天，是個借雞下蛋沾光揩油的格局。己是明堂，天象是晴空萬里。戊是雲彩，在地成山。己+戊，事態明朗，叫犬遇青龍。狗騎龍，美是美，得有人幫你。所以，門吉則吉；門兇則兇。外界會影響到他倆的組合搭配，是遇到貴人相幫之意。但有時貴人也會變成小人，要看外面的情況。貴人得讒言，就會害你；得貴人美言，就助你。",
            "象意聯想：肚子大了、懷孕了、大肚和尚；臨值符彌勒佛；想錢了；脂肪瘤；此方位有陵園、有墳地、垃圾堆等。",
        ],
    ],
    己己: [
        "地戶逢鬼",
        "凶",
        [
            "己+己——地戶逢鬼，病者發兇或必死，百事不遂，暫不謀為，謀為則兇。陰土會陰土，見不得人的勾當，想美事，這個事還成不了。",
            "此格主暗中做事，不見陽光，而這個事情做不成功。貪欲太強，自私心重，做事無力，光做美夢。我理解這個格局就是花花腸子一大堆，偷雞不成蝕把米，聰明反被聰明誤。測疾病見鬼了，難好。測出行，路上坑坑洼窪。測人事，到處都是陷阱。",
            "象意聯想：墳頭很多；再三考慮；自私吝嗇；肚皮貼肚皮；此方位有墳地、垃圾場、地下室等。",
        ],
    ],
    己庚: [
        "刑格返名",
        "凶",
        [
            "己+庚——刑格返名，詞訟先動者不利，如臨陰星（凶星）則有謀害之情。庚為阻隔之神，所以不宜謀事。為什麼遇陰星有謀害之情？己為陰，本身就是陰謀，再遇陰星這個事情就更不透明了，被人暗中算計了。遇到庚，大多都是刑格。因為庚為天刑，是破壞性的。",
            "己+庚，就是破壞平靜的氣場。遇庚就是破壞性的。遇此格，測事，你不能先動。因為你先做，才出事。你不做則沒事。測疾病，多為受傷之意，有時皮膚受傷，有時精神受傷。是難受、彆扭、受傷害。遇此格想辦的事辦不成，那條路走不通，還得回來。",
            "象意聯想：想阻止而沒有阻止；裝垃圾的車；有不健康的想法；此方位有彎曲的大路；馬桶；路旁有垃圾堆等。",
        ],
    ],
    己辛: [
        "遊魂入墓",
        "凶",
        [
            "己+辛——遊魂入墓，易招陰邪鬼魅作祟。己為地戶，戌為午火之墓，辛主罪人，又主骸骨，墳墓裡有骨頭，主人鬼相親，住宅易遭陰氣。凡事需小心謹慎為妥，這就是兩個壞蛋湊到一起了，相互搗鬼，被人搗鬼。如果對方臨此格，這是你給人家搗鬼。測房子，不干淨，有陰氣、有鬼。遇此格，容易上當犯小人，陰人作祟，驚怪之事。用神臨此格，就是被小人或被自己不清晰的事情搗鬼或擾亂。這個格局，特別忌諱測房子。測房子，遇此格都有不良的陰性氣場、神鬼之類。測墳地，更需特別注意，如果是還沒使用的地時，遇此格說明以前這裡有墳。如果是已經安葬的墳墓，遇此格有可能別人要侵占這塊地做墳地。古書中講：遇此格被人借氣了。測人事則是犯小人，背後有人整你。",
            "測局己＋辛，見九地，主老鬼，辛主屍骨，己主墳墓。因辛為錯誤，骨頭是錯的。只遇己可能無事，因無骨，為空墳。",
            "象意聯想：想法錯了；拉肚子、腸炎；皮膚病；羊腸小道；想犯錯誤。此方位有土堆、菜園子、墳頭、有顆粒物、金屬擺件等。",
        ],
    ],
    己壬: [
        "地網高張",
        "凶",
        [
            "己+壬——地網高張，狡童佚女，姦情傷殺，凡事不吉，謀為不利。一陰一陽暗中衝克，逢衝必動，暗中的私慾要起變化了，沒有好事。己壬同宮，天罡與地煞誰也不服誰，表示爭鬥之事。測什麼事都代表要動。壬為天牢，這事難成功。動了也沒有好的結果。遇此格，容易犯小人。這也是個衝格。辰為天罡，戌為地煞，起爭執、口舌、鬥打、狡童佚女、狗叫蛇咬，沒好事。",
            "象意聯想：洗澡、上廁所、不想乾了、要走了、思想開小差。此方位有條彎曲的河流或不規則的湖泊，有動的物品等。",
        ],
    ],
    己癸: [
        "地刑玄武",
        "凶",
        [
            "己+癸——地刑玄武，男女疾病垂危，有囚獄詞訟之災。己土克癸水，癸水又在北方玄武之位，故名地刑玄武兇格。也不是什麼好事，癸、己都主有問題。癸主污穢之事，為天網，容易出犯法之事或容易有疾病發生。都是暗地裡的事，本身就是不正確的東西，會引起一些問題的發生。",
            "遇此格也主口舌是非，而且容易上當受騙。凡是陰配陰、陽配陽，都不是特別好，但最終體現在地支的刑衝合害上。己為地戶、癸為天網，也是暗昧之意。臨網必有口舌爭訟。",
            "象意聯想：想去廁所；想喝酒；拉肚子。此方位有坑、有廁所、有泥塘、有動的物品等。",
        ],
    ],
    庚乙: [
        "太白逢星",
        "凶",
        [
            "庚+乙——太白逢星，退吉進兇，謀為不利。為合格，男測女幫，女測男愛。測出行，有勾連之事。測舉事，受牽絆，則不宜動。測婚姻，兩口子吵架，互不干涉，誰也不管誰。遇此格，主留戀、牽絆，有合夥人，與異性合夥好。委曲求全，事就好辦。八字命盤遇庚+乙，或乙+庚“太白逢星，妻室常病”，因庚金刑克乙木，妻子身體不好。合格，利於合作，只要你處在委曲求全的狀態之下，合作就是愉快的。退而求其次，事就好辦。",
            "象意聯想：走彎路；曲折的歷程；夫妻在一起；金屬的藝術品；高明的醫生；過硬的繪畫藝術；鋼結構的門窗；橫梁彎了；窗子旁爬滿了爬牆虎；窗子旁，放著藝術品等。",
        ],
    ],
    庚丙: [
        "太白入熒",
        "凶",
        [
            "庚+丙——太白入熒，賊必來，為客進利，為主破財。佔賊賊必來，需防敵人來偷營，盜賊入室來搶劫，要固守為好。在實際運用中，如果求測之日干或年命即為庚，庚就是我方，此格就變為吉格了，必然為客進利，為主破財了。只要主動進攻、先發製人，就會有利於自己。測財，財來。女性遇此格，外面必有情人，有男人主動追你。測客人來不來，遇此格客人必來。測官司，官司要來了。測疾病，病來了。測店鋪，遇此格再遇玄武，易失竊。測婚姻遇到庚+丙、丙+庚：同床異夢、情感表裡不一，常常是三角戀愛或有情人牽連的符號。命盤“太白入瑩者，進，主先貧後富”，日干逢此格，只要積極主動去謀事，會先貧後富，逐步改變貧窮的狀態，富裕起來。",
            "象意聯想：丈夫做第三者了；鍋爐工；開車遇到了紅燈；賊來了；車禍；礦難；此方位有鍋爐、有化工設備、化工廠；窗子明亮。",
        ],
    ],
    庚丁: [
        "亭亭之格",
        "凶",
        [
            "庚+丁——亭亭之格，因私匿或男女關係起官司是非，門吉有救；門兇，事必兇。此格，就是金屋藏嬌、關係不正常。男性來測，有情人。女性來測，主此人是第三者。測事業，主因為一己私利出是非，損公肥私，被人告狀了，出事了。命盤“星逢太白，惟薄醜聲”是說命盤遇丁+庚或庚+丁，會出現婚外戀，使家中名聲不好。",
            "象意聯想：監視器；丈夫有情人；丁字路口；有危險了；停電了；電磁爐壞了；此方位有大型的金屬電力設備；有耀眼的剛性建築；窗子上有燈泡或電子設備。",
        ],
    ],
    庚戊: [
        "天乙伏宮",
        "凶",
        [
            "庚+戊——天乙伏宮，百事不可謀，大凶。唯一出路，也是換地方、換人。古人云：庚+戊、戊+庚，多成多敗，此地不比他地。由於甲與庚相衝，在甲當令旺相之時，庚金難免被囚，成多敗之勢，還是換地方、換人為好。遇到此格，主客不利，求人不在，等人不來。不是傷人就是傷錢。最怕測合作之事，測合作，準有倒霉事，誰測誰倒霉。這是個動格，不完善、不完美。最忌諱坐地求財，開公司、店鋪、當口，與夥伴搭檔幹不到一塊去，有小人，分贓不均，因錢的問題打仗，見利忘義。測婚姻逢庚+戊、戊+庚，主夫妻品行不佳，如：不講道理、有外遇、道德品質差等。",
            "象意聯想：路上有土堆；路斷了；換地方了；要換人了；面目全非；胃、癌。此方位有鐵塔、牆角、鐵柵欄、鋼強、水泥牆、有橫樑等。",
        ],
    ],
    庚己: [
        "官府刑格",
        "凶",
        [
            "庚+己——官府刑格，主有官司口舌，因官、訟被判，主牢、獄，百事不利。庚為阻隔、己為地戶，為醜土，即庚金的墓地，兩者相遇無論為主為客都不吉利。刑格就是難受、彆扭、心靈或肉體上受到傷害。己為私慾，想暗中傷害。這個難受是不情願的，是被別人拖累的。測婚姻為婚姻受傷；測合作，為互相傷害，官災橫禍。測身體身體受傷。測什麼，什麼受傷，什麼就起爭執。經商破財，出行患病，做事受阻、擰勁。求財遇到刑格和悖格，要儘早撤出，又主企業內部不團結。測婚姻遇到庚+己刑格或者悖格（天盤丙+地盤丙、己、壬、癸組合在一起，或天盤己辛壬癸+地盤丙，形成悖格，悖格就是做事無順序、出亂子），夫妻雙方脾氣暴烈，做事不計後果，易發生家庭暴力。",
            "象意聯想：水泥路面、路上有垃圾、路上遇到一條狗；床下很亂、環衛車；道路不平、路面有坑；此方位有廢鐵堆、廢水泥堆、門窗旁垃圾多。",
        ],
    ],
    庚庚: [
        "太白同宮",
        "凶",
        [
            "庚+庚——太白同宮，又名戰格，官災橫禍。兄弟或同輩朋友相衝撞，意見不一。這個格，伏不住，打仗，仇人相見分外眼紅。測工作，遇到此格，肯定動，他坐不安穩的。逢庚就打架、爭執、爭鬥。測合夥，幹不成，打的頭破血流。測婚姻，兩男爭女。測求財，競爭激烈。測公司，主內部亂套，內憂外患，要重組了。這個格局利客不利主，不利於呆著靜守，而是要積極行動、敢於戰鬥和攻擊，才能克敵制勝。誰先動誰有利。命盤庚+庚，主兄弟雷攻，必主客相鬥，與兄弟姐妹同事合夥人爭鬥、相互攻擊。衝格，戰格。最不利合作，合作必打架。老人來求測，時干見庚＋庚，主兩兒子打架，不合。",
            "象意聯想：兩車相撞、車禍、警匪片、兩個丈夫、上下舖、骨頭斷了；此方位有兩條路、路上有關卡、收費站；此方位有兩個窗子。接起來的房子。",
        ],
    ],
    庚辛: [
        "白虎幹格",
        "凶",
        [
            "庚+辛——白虎幹格，不宜遠行，遠行車折馬傷，求財更為大凶，諸事有災殃，時間越長越兇。庚辛金都是虎，一山不容二虎。最怕動，一動就出事。測出行要小心傷災。辦事容易摔跟頭。也主打架受傷，因衝動打鬥之事。",
            "象意聯想：骨裂；拉肚子；車出問題了；床壞了；關節炎；丈夫老出錯；仇人失誤了。此方位的大路路不平、有壞損；一條大路，一條小路；路邊堆放著碎石塊；門窗一大一小。",
        ],
    ],
    庚壬: [
        "移盪格",
        "凶",
        [
            "庚+壬——移盪格，上格又名小格。金化水流，主遠行迷失道路，男女音信難通、變動、外出。壬水主流動，庚金為阻隔，故遠行道路迷失，男女音信難通。從主客關係來講，利於客。逢此格必動。測工作，有變動之象，但是一般是崗位的調動、單位內部的調整。測運氣，身心不安、勞心勞力，是來回的跑，談業務的。庚+壬為小格，指這個變動的範圍不大，是本地。主憂患，主奔波勞累，不安定、求謀不遂。出行有阻，但堵車堵不住。測婚姻，遇庚+壬，庚+癸：婚後分居，常常配偶一方在家，獨守空房，如兩地分居或配偶經常出差不回家等，因而也代表鰥寡孤獨。若庚處衰地，再逢凶星凶神兇門，則夫妻一方可能早亡，無法白頭偕老。測消息是否真實，如果景門遇庚+壬，也為消息不真實。命盤遇庚+壬“小格者，暫時清貧”，如果能審時度勢，及時改變自己的處境，經過奮鬥也能富裕。",
            "象意聯想：丈夫要出差了、翻車了、車掉水溝裡了、賊跑了、仇人遛了、此方位有車站港口、碼頭；此方位有水管、窗簾。",
        ],
    ],
    庚癸: [
        "大格",
        "凶",
        [
            "庚+癸——大格，因寅申相衝，庚為道路，故多主車禍，行人不至，官司不止，生育母子具傷，婚姻易鰥寡孤獨。主大動，衝的力量大。大格者,萍跡四害，就是跑到外地去了。如果格局組合好，為去外地創業，到外地發展去了或為高官、為大領導服務的人。若格局衰，是給人打工的。測工作，不是經常出差跑業務的，就是要調動工作了。等人不來，求人不在，經商破財，出行車毀馬死，只宜撲捉死犯。命盤“大格者，萍跡四海”，主一生漂泊不定，四海為家。",
            "象意聯想：車陷到坑里了；丈夫是酒鬼；丈夫上廁所了；此方位有儲運罐、水管、金屬管道、下水道等。",
        ],
    ],
    辛乙: [
        "白虎猖狂",
        "凶",
        [
            "辛+乙——白虎猖狂，家敗人亡（分家、婚散、破產），出行有驚恐，遠行多災殃，尊長不喜，車船俱傷。測婚姻，離散，主因男人，是男人主動離婚，把家拆散。測疾病，病更猖狂了。測求財代表小問題，惹出了大麻煩。但測投資、舉事，是可以做的。為動格，利主不利客。修造、交易大凶。命盤遇“白虎猖狂，凶頑之輩”，說明此人凶狠頑固，不是善良人。",
            "象意聯想：歪點子；挑老婆的毛病；為女人犯罪；此方位有鐵絲網、小樹結果實了、開花了、有手鐲、項鍊發在了這裡。",
        ],
    ],
    辛丙: [
        "干合悖師",
        "凶",
        [
            "辛+丙——幹合悖師，熒惑出現，佔雨無，佔晴旱，佔事必因財致訟。門吉則無事；門兇，則事兇。測事，是在合作中出現亂子。本來兩個人關係好，是合作夥伴，但後來打官司出現糾紛了。遇此格，只要合作，肯定出口舌官司是非。",
            "象意聯想：同謀犯、罪；被j察抓了；闖紅燈、此方位有飯店、廚房、電廠、金屬加工廠、電熱器等。",
        ],
    ],
    辛丁: [
        "獄神得奇",
        "吉",
        [
            "辛+丁——獄神得奇，經商求財獲利倍增，囚人逢天赦釋免，辦其他事，也會有意外的收穫。如果犯了錯誤，也會免於處分。坐牢獄的囚犯，也會獲得赦免。此格，不利於婚姻，主第三者插足或是犯錯誤。辛想犯錯誤，丁給他糾正。男的是個敗家子，女的給他把持，浪子回頭金不換。丁有希望、解救之意，遇此格，被絆之事獲得釋解。乙、丙、丁都是奇，都是希望，但它們的層次是不一樣的。臨乙，受委屈才能成功；臨丙，是亂中取勝；臨丁，是直達的希望。辛+乙：此人進去了，判緩刑，表示有奇蹟，但未能完全解脫，還得判刑。辛+丙：也進去了，雖然沒有被判，但被打的腿斷胳膊折，因為亂子出來了。辛+丁：雙規進去了，但沒事，出現了奇蹟，很快就被釋放了。",
            "象意聯想：近視眼、肺部手術、食管開刀、此方位是個小路口、此方位有電話、電器等。",
        ],
    ],
    辛戊: [
        "困龍被傷",
        "凶",
        [
            "辛+戊——困龍被傷，主官司破財，屈抑守分尚可，妄動則帶來禍殃。由於子午相衝，掙到手的錢，也容易花掉，有不吉的一面。只要辛與戊在一起必破財。測運氣，不好，正身陷困境之象，沒錢了。測什麼事，這個事受傷、受困，不能自撥。此格，為沒事找事，妄動必破財，不動就不破財。此格，是因為自己的錯誤導致的經濟危機或事情的失敗。庚金一般代表的是外界帶來的不良後果與影響；而辛金則是自己內部或因為內因造成的不良影響。",
            "象意聯想：靠足療掙錢；經濟問題；牆壞了；罰款；二手房；牆面不平、牆上鑲的是瓷磚等。",
        ],
    ],
    辛己: [
        "入獄自刑",
        "凶",
        [
            "辛+己——入獄自刑，辛為罪人，戌為午火之墓，故為入獄自刑，主奴僕背主，有苦訴訟難伸。就是說遇此格，錯誤都是因為自己的私慾造成的，是自己找的麻煩事，自釀的苦酒自己喝，有理也難辨。遇此格千萬別幫人，幫了變仇人。別與人合作，主心裡有苦難言，受委屈卻無處發洩。相當於農夫與蛇的故事，他恩將仇報，是你自己的錯誤造成的，因此是奴欺主。測墳地風水遇此格，前面有更大的墳山或建築物離墳頭太近了。",
            "象意聯想：青春痘、皮膚病、粉刺、皮膚粗糙、錯誤的想法、墳地、口誤；小路上到處是垃圾；路過菜園子；窗子旁是垃圾桶。",
        ],
    ],
    辛庚: [
        "白虎出力",
        "凶",
        [
            "辛+庚——白虎出力，刀刃相交，主客相殘，遜讓退步則安，強勁血濺衣衫。就是兩個老虎栓在一起，沒好事、主傷災、鬥打。遇此格，宜靜不宜動。逢動必出災。此格不利合作，不利主動去做，越強行去做越倒霉。此格是因自己的錯誤，引來了外界的影響導致更大的問題發生。",
            "象意聯想：路上遇阻；車禍、鎖壞了；小路連接大路；丈夫犯z；路上有障礙物、此方位有門窗，門上鎖了等。",
        ],
    ],
    辛辛: [
        "伏吟天庭",
        "凶",
        [
            "辛+辛——伏吟天庭，公廢私就，訟獄自羅罪名。此格主為事自破，進退不果，是一大堆錯誤在一起，這些錯誤都是自己造成的，怨不得別人。主毛病多多、漏洞百出。測罪人，是慣犯、二進宮。",
            "象意聯想：二進宮、自責、同樣的問題一再發生、門窗有毛病、此方位是一條崎嶇的小路等。",
        ],
    ],
    辛壬: [
        "兇蛇入獄",
        "凶",
        [
            "辛+壬——兇蛇入獄，因為壬為凶蛇，辛為牢獄，故名。兩男爭女，一貨售兩家、訟獄不息，先動失理，利主不利客。此格主犯罪、犯錯誤。遇此格最容易出現婚外戀、三角戀，而且是被兩者同時發現了，引起爭鬥。壬水主纏繞，多數是兩男爭一女，多指男女關係引起的口舌是非。女的來測，主腳踩兩隻船。男的來測，則是破壞人家的家庭。測事，則表示發生三角連鎖官司，牽連多人多面，是因為自己的過失，導致的競爭或同時受到了多方面的影響。",
            "象意聯想：一座小橋、花錢如流水、流動資金、因貪污而入獄、風流成性。此方位有車站、碼頭等。有鐘錶、手錶、玩具模型等。",
        ],
    ],
    辛癸: [
        "天牢華蓋",
        "凶",
        [
            "辛+癸——天牢華蓋，日月失明，誤入天網，動止乖張。辛為白虎、癸為地網，此格又叫虎投地網格。遇此格是指走錯路了，是自己判斷失誤造成的。一失足成千古恨，牢獄是非，倒霉事就出來了。遇此格，測生意，不能幹，判斷失誤。",
            "象意聯想：腿腳出問題；此方位有沼澤地、有坑、有地位低、濕地、池塘、有酒瓶子、廁所、下水道等。",
        ],
    ],
    壬乙: [
        "小蛇得勢",
        "吉",
        [
            "壬+乙——小蛇得勢，女人柔順，男人通達。測孕育生子、祿馬光華，出門有車坐。是在憂愁之中突然遇到了別人的幫助。遇此格，宜曲中求，不能直截了當的去辦，要以柔克剛就好，別急躁。",
            "象意聯想：拐彎的河流、道路曲折、門變形了、人流很多的街道、漂亮的窗簾、藝術大門、長髮飄逸等。",
        ],
    ],
    壬丙: [
        "水蛇入火",
        "凶",
        [
            "壬+丙——水蛇入火，壬丙相衝克，故主官災刑禁，絡繹不絕，主兩敗俱傷，為客不利。遇此格，主口舌是非麻煩一大堆，忙中出亂子，越急越出亂子。越想幹越亂，為客不利。",
            "象意聯想：太陽能熱水器、溫泉、溫水、水晶球、此方位有圓形的湖泊或水池、紅窗簾、透光的門窗。",
        ],
    ],
    壬丁: [
        "干合蛇刑",
        "平",
        [
            "壬+丁——幹合蛇刑，文書牽連，貴人匆匆，男吉女兇。因天盤壬水為陽為男，遇丁奇相合，自然為吉。而地盤丁，為陰為女，上有天羅壬水蓋頭，不吉。此格為合格，利於合作、談判。遇此格，本來是要出亂子的，因為有機遇使亂子平息了。",
            "象意聯想：有私心了、歪主意、非分之想、有貓膩、在外面有情人、走錯道了、要做手術了、流產了、此方位河流交匯或道路交匯；此方位有連體的門窗或熱水器、水管交織在一起等。",
        ],
    ],
    壬戊: [
        "小蛇化龍",
        "吉",
        [
            "壬+戊——小蛇化龍，男人發達，女產嬰童，做事要防耗散。測企業，企業發展要上新台階。測事業運氣，要轉運了。測前途，是提升之象。測疾病不吉，小病要變大病了。此格，利於投資，遇貴人，有人提攜幫助你，或者找到了強大的支撐因素。此格，風水好環境好，依山傍水見平川。",
            "象意聯想：流動商販、商人、在流動中賺錢、要搬家了、水上建築；此方位有河堤、水壩、橋樑、道路堵塞、浴盆、游泳池、水管堵了。",
        ],
    ],
    壬己: [
        "反吟蛇刑",
        "凶",
        [
            "壬+己——反吟蛇刑，主官司敗訴，大禍將至，順守為吉，妄動必兇。己壬相遇鬥訟場，壬丙相逢是非多。動格，是一對冤家，口舌是非，因為想好事，出現的矛盾，鬧出的官司。這個局最好不要動，不然容易掉進別人設計的陷阱裡、被人陷害。",
            "象意聯想：擁擠的人流、車道、火車的硬座、流水不暢、水路彎彎、此方位有水池；水中的淤泥。",
        ],
    ],
    壬庚: [
        "太白擒蛇",
        "凶",
        [
            "壬+庚——太白擒蛇，因庚為太白，壬為蛇；主刑獄公平，立判邪正，難以進展，為做事有阻之象。測學習，遇此格，老師有水平，能分清是非。測事也是邪正分明。總體上算是個吉格，是變化中的阻隔，可以融通，雖然有難度，但會發生好的變化。命盤遇此格，做政客、做科研、做教師比較好。一般都有正確的主見，不被其他事物或不利因素所迷惑，能夠看清方向。對方臨此格，你騙不了人家。如六合臨此格，測婚姻或合作，找這樣的中介比較好，中立、公正、秉公辦事。",
            "象意聯想：客車、出租車、抗洪、換丈夫、公平、河流上有閘口、河道堵塞、立交橋、河上有橋、門窗不常開、上鎖了等。",
        ],
    ],
    壬辛: [
        "騰蛇相纏",
        "凶",
        [
            "壬+辛——騰蛇相纏，縱得吉門，亦不能安。如有謀望，被人欺騙。遇此格，麻煩事一大堆，解決不了，到處都是，內憂外患，沒完沒了，沒有正經事，但很棘手、纏人。測消息，若日干、時干、景門宮中遇到壬+辛格局，說明消息是道聽途說、添油加醋、被人欺瞞，不可聽信。",
            "象意聯想：走錯路了、路岔口、項鍊丟了、河改道了、門窗關的不嚴、門窗有問題等。",
        ],
    ],
    壬壬: [
        "天獄自刑",
        "凶",
        [
            "壬+壬——天獄自刑或蛇入地羅，壬為天羅又名天獄，辰辰自刑。遇此格，主求謀無成，禍患起於內部，諸事主破敗，外人纏繞，內事索索。如遇吉門吉星，尚可緩解困頓的處境。此格主亂套了，內憂外患，主事因勾連越變越亂，亂七八糟，沒有秩序的亂。癸+癸，是你不動就沒事，但壬+壬，不管你動不動，它都找你，難以解決，找不到一個源頭和突破口。",
            "象意聯想：洪水、浴室、大雨磅礴、海浪滔滔。此方位有寬廣的河流、街道、廣場、車水馬龍人來人往不停息、門窗開闊、浴室很大等。",
        ],
    ],
    壬癸: [
        "天羅地網",
        "凶",
        [
            "壬+癸——主有家醜外揚之事發生；門吉星兇，反福為禍。此格又叫天羅逢地網，諸事不利。陽水在上，陰水在下，兩水相遇，陰陽交合；玄武水又主曖昧之事，主醜事。如果門吉，尚可謂風流男女。如果星兇，說明本質上壞，且本性難改，故必然反福為禍，因男女曖昧之事招來兇災。遇此格，說明事情還沒做，問題就一大堆了，矛盾就暴露出來了，主要是事物內部的問題。測公司，內部有不可告人的事，想貪便宜的事。測家庭，有不好的事情發生。測婚姻，亂搞。測求財，不是正當的生意。 “外清而內濁”，只要把自己的事情搞清楚了，外邊一般比較清晰。",
            "象意聯想：遊客、飲料廠、洗澡堂、此方位河流混濁骯髒、街道凌亂不平、窗戶不干淨、衛生間太髒了、上水下水攪在了一起、廚房與衛生間太近了等。",
        ],
    ],
    癸乙: [
        "華蓋逢星",
        "吉",
        [
            "癸+乙——華蓋逢星，貴人祿位，常人平安。癸為地網，但高者可為華蓋。癸水雖然多為凶的符號，但癸得日奇相助，故對癸水來說為吉。如果得吉門，則貴人祿位，常人平安。如果得兇門，自然就兇了。遇此格，性格含蓄，做事內斂好，別太露鋒芒，要悄悄的辦。此格，也主希望被網罩住了，有才難伸。",
            "象意聯想：洗頭房、洗頭、此方位有池塘、水草、低窪地、煤氣管線、淋浴器、水龍頭、下水道拐彎了。",
        ],
    ],
    癸丙: [
        "華蓋悖師",
        "凶",
        [
            "癸+丙——華蓋悖師，貴賤逢之皆不利，唯上人見喜。只有修養高超，能屈能伸，善於因勢利導的上等人物才能變不利為有利，反怒為喜。遇此格，易犯小人，忌諱女人參與。遇此格，利主不利客，一動就有亂子事。",
            "象意聯想：紅眼病、熱水器、腳發炎。此方位有圓形水池、熱水管線、消防系統、地下熱能、暖氣、滅火器等。",
        ],
    ],
    癸丁: [
        "騰蛇夭矯",
        "凶",
        [
            "癸+丁——騰蛇夭矯，文書官司，火焚也逃不掉，虛驚不寧。合作必散伙，主口舌官司、爭鬥。測出行、合作，有是非，非打架不可。乘船、坐車有船翻車毀之險。測病，問題重了。測女人，母老虎。測男人，不講理，陰毒小人。測水，水開了。測風水，家宅不寧。測婚姻，是一個吵鬧的天干組合。男子預測，妻子絮叨吵囔。女子預測，丈夫口舌是非多。命盤遇“螣蛇夭矯，毒心小人”此人心底貪毒。 “失時者目盲耳聵，乘氣者火焚傷身”是說命盤遇丁+癸，癸+丁的格局，處死墓絕的狀態，前者（丁+癸）眼睛不好，如近視眼、青光眼、失明等；後者（癸+丁）耳朵不好，如耳聾、耳背等；如果格局特別旺相的狀態，還要防止火災、水災等損傷身體。乙、丙、丁三奇遇到六儀，都為凶中有吉之象，但各有缺陷：丁遇到癸，就完了。丙遇到壬，力量馬上消失。乙遇到辛，最兇。這些大凶之格，不能化解。",
            "象意聯想：近視眼、此方位有星羅棋布的池塘或污水遍布、水道縱橫、下水井、陰溝、廁所等。",
        ],
    ],
    癸戊: [
        "天乙合會",
        "吉",
        [
            "癸+戊——天乙合會，吉門宜求財，婚姻喜美，吉人讚助成合。若門兇迫制，反禍官非。此格也是個合格，有投資、錢財方面的合作之事。臨驚門，合作打官司。遇此格，與他人他事有牽連。",
            "象意聯想：子宮增生、做足療的。牆邊有污水池、污水井、酒壇子、湯盆、水缸等。",
        ],
    ],
    癸己: [
        "華蓋地戶",
        "凶",
        [
            "癸+己——華蓋地戶，男女測之，音信皆阻，躲災避難方為吉。小衝格，不利於客，私慾幻想多。你安靜、等待、退守、觀看、等待就沒有事，就應吉。但不管做什麼事，只要動了，都有不利。純陰不生，純陽不長。單相思，辦不成。",
            "象意聯想：垃圾、發酵了、酒箱子、醋罈子。此方位有垃圾、髒水、濕地、發酵物、廁所等。",
        ],
    ],
    癸庚: [
        "太白入網",
        "凶",
        [
            "癸+庚——太白入網，主以暴力爭訟，自邏罪責。由於寅申相衝相刑，所以凡事無成，吉事也易成空。遇此格，主鬥打爭鬥之事，相衝突，是因衝突、衝動造成的。庚是仇人，逢衝必亂，幹什麼都有難度，有別人來搗亂、破壞。",
            "象意聯想：要打架了。道路不平、路積水了。門窗髒了。窗台上有水珠。",
        ],
    ],
    癸辛: [
        "網蓋天牢",
        "凶",
        [
            "癸+辛——網蓋天牢，主官司敗訴，死罪難逃。測病，亦大凶。落巽宮，易出牢獄之災。遇到六儀擊刑，主牢獄或傷災。小孩遇此格，犯錯誤，不愛出門。遇此格最好不要動，利靜不利動、一動就被套。",
            "象意聯想：腎結石、吸毒、此方位有釀造廠、小路積水、變質的飲料等。",
        ],
    ],
    癸壬: [
        "復見騰蛇",
        "凶",
        [
            "癸+壬——復見騰蛇，癸水、壬水均為水蛇，主嫁娶重婚，後嫁無子，不保年華。遇此格，主此事一再不成功。以前做過這事，現在又去想，但實現不了，表示重複之象，老想不能實現的事，沒有結果。",
            "象意聯想：流竄犯、跑業務的、小雨轉大雨。此方位河流縱橫、街道車水馬龍、此方位黑暗、漏雨、雙層窗簾、洗手間等。",
        ],
    ],
    癸癸: [
        "天網四張",
        "凶",
        [
            "癸+癸——天網四張，主行人失伴，病訟皆傷。天網四張不可謀事，只宜退避。如果強行謀事，不僅無成，還會帶來兇災。古人講：“天網四張不可當，此時用事有災殃。若是有人強出者，立便身軀見血光”。又說：如果落入1,2,3,4宮為網低，受困更重，最好退避忍耐為上，以等待時機。如果落6,7,8,9宮為網高，可匍匐而出，故尚可小心謹慎謀事，以逐步改變受困之境遇。遇此格—利靜不利動。出行結伴主失散，還容易得病。遇伏吟，不宜動。一動，就出事。如果此格臨馬星或九天，你不讓他動，他肯定也動，一動就倒霉，然後後悔。此格，遇到擊刑，也主牢獄、傷災。遇此格，自己獨立出行、獨立行事，一般沒有大問題。就怕多人出行以及合作做事，則必然出問題。庚+庚，癸+癸，一合作就出事。遇到此格，切忌結伴出行，若結伴出行：一是自己生病；二是與同伴失去聯繫或分道揚鑣。二者必應其一。",
            "象意聯想：大眼睛、陰雨連綿、此方位是濕地、黑暗潮濕、霉氣味、廁所等。",
        ],
    ],
    丁乙: [
        "人遁吉格",
        "吉",
        [
            "丁+乙——人遁吉格，貴人加官進爵，常人婚姻財帛有喜.。 ”丁乙同宮，另續相親”.，乙主曲折變化，丁、乙都是陰乾，此格表明事物會有新的變化或者轉化。測婚姻，有新的變化，那可能是離婚了，或者在外面有新的女人了。測生意，可能有新的生意或者選擇新的合作夥伴。丁奇在天盤，乙奇在地盤，則必然是小妾受到丈夫的寵愛，在家中說了算，此格有煥然一新的新奇感覺。測婚姻不吉，不要老婆了。此格雖有點消極，但對於文書、合同方面的事情比較有利。測工作，為要調動、原來的工作不理想或保不住。丁+乙叫人遁吉格。在九遁中還有一個“人遁”，即天盤丁奇加休門加太陰，那個格局，也是謀為吉利。",
            "象意聯想：情人想結婚，拐彎的丁字路，藝術燈。此方位有開紅花的草、小樹；有首飾、造型漂亮的燈具、電話。測疾病，丁+乙落乾宮，腳趾彎曲或酸痛；落坎宮，陽痿、性冷漠；落艮宮，指甲變形；落震宮，舌頭中風、流口水；落巽宮，牙齒不齊；落離宮，冠心病；落坤宮，肚臍部位酸痛；落兌宮，說話不利索，牙齒不齊。",
        ],
    ],
    丁丙: [
        "星隨月轉",
        "吉",
        [
            "丁+丙——星隨月轉，貴人越級高升，常人樂極生悲，要忍、不然因小的不忍，而引起大的不幸。表示這個事情很難駕馭。這就是小馬拉大車，能力不夠，樂極生悲，這事看著挺好，但你如果不是有能力的貴人或有大貴人幫助的人，你駕馭不了，好事就變成壞事了，因此老百姓遇此格不吉，忘乎所以、得志便猖狂。如果你是有地位、有身份的人，有能力駕馭這事，這事就成為好事了。普通人遇此格，要保持冷靜、要收斂，不要做過頭的事，慎防物極必反，造成不幸。",
            "象意聯想：文章亂了，票據出麻煩了，情人還有他人。此方位有鍋爐、熱電廠、地勢高，有爐灶、電氣設備。測疾病丁+丙落乾宮，腳趾炎症；落坎宮，外陰紅腫瘙癢；落艮宮，指甲炎症；落震宮，舌頭髮炎；落巽宮，牙齦出血；落離宮，心肌炎；落坤宮，肚臍部位炎症；落兌宮，口腔炎、牙齦炎。",
        ],
    ],
    丁丁: [
        "奇入太陰",
        "吉",
        [
            "丁+丁——星奇入太陰，文書證件即至，喜事從心、萬事如意。星星之火可以燎原，群星點綴天空。丁+丁也表示幻想太多。測婚姻男朋友或女朋友多。測疾病不吉，有重複多次手術之象。其他格局伏吟，主不宜動，唯獨丁奇伏吟，仍然為吉。",
            "象意聯想：節日燈，組合燈，轉盤道，經常做第三者女人。此方位有尖狀類建築物、有燈具、電氣設備、香火等。測疾病：丁+丁落乾宮，腳氣、腳丁、有刺；落坎宮，外陰濕疣、刺癢；落艮宮，指甲夠有倒刺；落震宮，舌頭潰瘍；落巽宮，牙結石、牙周炎；落離宮，心肌梗塞；落坤宮，肚臍長瘡；落兌宮，口舌生瘡、牙齦腫痛。",
        ],
    ],
    丁戊: [
        "青龍轉光",
        "吉",
        [
            "丁+戊——青龍轉光，官人升遷，常人威昌。無論遇到多大困難，將來都會出現轉機。開始不好，後來好。諸如求婚、求學、求官等好事會更加順利。此格如果遇到入墓或兇門門迫其吉利的程度會大減，甚至招來是非。命盤日干丁+戊“青龍轉光，邑長縣令”，官運好。",
            "象意聯想：桌子上有檯燈、方形燈箱、裸女，牙齦腫脹。此方位有牆角、牆面反光、牆上有燈、路燈、電線桿。測疾病：丁+戊落乾宮，腳趾腫脹、發麻；落坎宮，外陰麻脹、肥厚；落艮宮，指尖發麻；落震宮，舌頭增厚；落巽宮，牙齦腫；落離宮，心臟肥大；落坤宮，臍部麻脹；落兌宮，牙齦腫。",
        ],
    ],
    丁己: [
        "火入勾陳",
        "凶",
        [
            "丁+己——火入勾陳，姦私仇怨，事因女人。星星掉到井裡了，看不到希望了。測事要小心女人或遭到女人小人、暗中做事之人在背後的搗鬼。看婚姻，可能是男性外面有女人引起了感情不和。遇此格，常常因個人的事情或私人的事情，出現意外或問題。",
            "象意聯想：證件過期了，燈泡壞了，做美容的（己為皮膚），闌尾手術、傷口、不檢點的女人。此方位有塑料、玻璃、瓷片、有垃圾、物品凌亂。測疾病，丁+己落乾宮，腳趾不干淨；落坎宮，外陰不潔。",
        ],
    ],
    丁庚: [
        "星奇受阻",
        "凶",
        [
            "丁+庚——星奇受阻，文書阻隔，行人必歸。測去幹事，停滯不前又回到了起點，就是這個事情不太好成，有阻力。測婚姻，有情人，但難以離婚，因為行人必歸，又回來了。此格，會回到起點上來。遇事，有需要迴避或退守之意。測信息，主文書阻隔、消息不通。",
            "象意聯想：十字路口、女人遇到了小偷、房間被隔開了。此方位有路口、鐵塔、有高樓、爐灶、電器等。測疾病丁+庚落乾宮，腳趾折斷了；落坎宮，外陰萎縮、硬皮症；落艮宮，手指疼痛；落震宮，舌硬、舌癌；落巽宮，牙結石、口腔病；落離宮，心髒病；落坤宮，臍部白斑；落兌宮，口腔病變。",
        ],
    ],
    丁辛: [
        "朱雀入獄",
        "凶",
        [
            "丁+辛——朱雀入獄，罪人失囚，官人失位。這個格表明幹事容易犯錯誤、出現問題。實際上，測領導是在其位不謀其政。丁為希望，辛為錯誤，希望變成錯誤了。對於求事而言，這個格不好，希望被轉化了，當官的要下台了。對於已經處於極地的人或地位極低的人，本來就在低谷，一轉化反而會好了，失囚，倒是好事。 (可見丁+丙—利貴人；丁+辛—利罪人)。測消息是否屬實，景門宮中逢丁+辛，消息失位，也不准確。",
            "象意聯想：女人引發問題、女人犯錯、愛花錢；手術有問題；眼疾。此方位有岔路或道路不平；有小型電器、金銀首飾、燈具等。測疾病，丁+辛落乾宮，腳趾骨刺；落坎宮，外陰濕疹；落艮宮，手指尖畸形；落震宮，舌瘡；落巽宮，牙結石；落離宮，心率不齊；落坤宮，臍部麻疹；落兌宮，舌部潰瘍。",
        ],
    ],
    丁壬: [
        "奇儀相合",
        "吉",
        [
            "丁+壬——奇儀相合，貴人恩詔，訴獄公平。測婚姻多為苟合、媾和。逢合格，測出行或者合作都是有牽連。此格測婚姻，未婚先同居，是淫蕩之合，表明肉體上的感受比較敏感一些，肉體享受比較多。測合作也非道義的合作，是不正常的合作，將來會出事。但一般說來，這還是吉格，主事情能成，有貴人輔助，訟獄公平。",
            "象意聯想：暖水瓶、洗浴室、水塔，門上有燈、情人要走。此方位有河口、溫泉、有電動設備等。測疾病丁+壬落乾宮，腳趾發脹流血；落坎宮，小便失禁；落艮宮，指骨錯位；落震宮，舌腫；落巽宮，牙齦出血；落離宮，高血壓、心髒病；落坤宮，肚脹；落兌宮，口腔出血。",
        ],
    ],
    丁癸: [
        "朱雀投江",
        "凶",
        [
            "丁+癸——朱雀投江，文書口舌是非，經官動府、詞訴不利，音信沉溺不到。如果測出行坐飛機，可能會出事故。測疾病，要命了。測什麼都是辦事難成，手續辦不下來。乘船，翻船。測賣貨，主貨物賣不出去，再便宜也沒人要，招惹口舌是非。測風水生門時干臨此格主家中口舌頻多。 “朱雀投江，刀筆書吏”命盤日干臨此格可能做法官、調解員。測婚姻，遇丁+癸，主婚後夫妻雙方易發生口舌，還要防媒人居心不良。",
            "象意聯想：暖水瓶、洗浴室、水塔；上廁所；近視眼。此方位有污水。電動設備等。測疾病丁+癸落乾宮，腳趾發炎；落坎宮，遺精盜汗；落艮宮，爛指甲；落震宮，舌潰瘍；落巽宮，牙齦感染；落離宮，心髒病；落坤宮，臍部濕疹；落兌宮口腔潰爛。",
        ],
    ],
    丙乙: [
        "日月並行",
        "吉",
        [
            "丙+乙 —— 日月並行，公謀私為皆為吉。一個比較劇烈，一個比較消極，事物的協調性就比較好，做事有張有弛的，丙火想出亂子，乙木陰柔的提醒，乙木不敢做的事情，丙火來做，這是個比較好的格局，利於合作、合夥、求謀。",
            "象意聯想：牽牛花、花開了、紅花、妻子有外遇、妻子是警察。此方位有熱力管線、有窗子、爐灶等。測疾病，丙+乙落乾宮，腳後跟疼；落坎宮，外生殖器畸形；落艮宮，背酸、消化不良；落震宮，心臟動脈狹窄；落巽宮，眼部中風、魚尾紋；落離宮，嘴歪眼斜；落坤宮，賁門或幽門狹窄；落兌宮，氣管狹窄。",
        ],
    ],
    丙丙: [
        "月奇悖師",
        "凶",
        [
            "丙+丙——月奇悖師，文書逼迫，破耗遺失，主單據、票證，不明遺失。此格是火上澆油。丙火就是麻煩亂子，性格暴躁、辦事容易偏激過火，丙+丙不就亂套了嗎?像熱鍋上的螞蟻，亂了方寸。此格雖然亂，但是伏吟，亂也沒有好法子的。拖拉、難受，因為丙火主文章、票據、單子、憑證，所以遇此格,常常是票據等不明遺失了，做會計工作的應特別注意。此格，凡是過猶不及，要防患於未然。",
            "象意聯想：窗戶明亮、向日葵園地、火警、消防隊、化工廠、熊熊烈火、加油站。此處有電氣設備、爐灶、地勢高、開闊地、廚房等。測疾病，丙+丙落乾宮，腳後跟炎症，頭髮熱；落坎宮，外生殖器炎症、瘙癢、經血；落艮宮，背部紅腫、拔火罐；落震宮，心肌炎；落巽宮，眼紅了；落離宮，眼紅腫、嘴發炎；落坤宮，賁門、幽門炎症；落兌宮，支氣管炎。",
        ],
    ],
    丙丁: [
        "星奇朱雀",
        "吉",
        [
            "丙+丁——星奇朱雀，貴人文書吉利，常人平靜安樂，得三吉門為天遁。此格不錯，太陽之火和星星之火到一起比較如意。但測病就不好，丙丁火都是炎症，代表心臟、眼睛、血液，代表手術。丙代表重症，丁代表局部炎症。這玩意要真是測病，麻煩也不小，發燒也能燒死。這格局，如果是女性測情人，這情人還有別的女人。丙+丁或丙+戊與生門同宮為天遁格，丁+休門+太陰，為人遁格，遇這兩個格，在較長時間內夫妻恩愛、相敬如賓。測風水，臨天遁，宅輿高大，遇人遁一團和氣。",
            "象意聯想：偷情；煤氣灶；腸炎、牙周炎。此處有電器、爐灶、燈具、發光物、熱氣設備等。測疾病丙+丁，落乾宮，腳後跟有骨刺；落坎宮，外生殖器濕疣；落艮宮，背部有炎症、腸炎；落震宮，心肌炎；落巽宮，眼紅了；落離宮，眼睛長疔、嘴部長疔；落坤宮，賁門幽門炎症；落兌宮，支氣管炎。",
        ],
    ],
    丙戊: [
        "飛鳥跌穴",
        "吉",
        [
            "丙+戊——飛鳥跌穴，事業可為，可謀大事，對好事大吉大利，如求婚、求財、考試、求官等，不用費多大力氣，就能成功。求財遇此格，財來了，到財庫了。測病遇此格，麻煩了，病到內部去了，不好去根了。飛鳥跌穴，此格重點在於這個”跌”字，跌，就是跌倒了這裡。測什麼，跌來了什麼。測打官司，要倒霉賠錢了。測出行，有返回之意。測婚姻遇丙+戊，戊+丙，男方為百里挑一的女婿，女方為華貴新娘。注意：此格遇到兇迫（兇門克宮）、墓、擊刑，則吉的程度會大減，甚至吉事不成，反而變兇。 “財官生旺，蓋因飛鳥跌穴”，命盤日干遇此格，必財官兩旺、榮華顯耀。測風水生門或時干臨丙+戊，主住宅雕樑畫棟、藏風聚氣，是官穩財聚的房子。",
            "象意聯想：牆上有紅壁燈、紅牆、紅房子、變壓器、路上有交警、窯廠、地勢高而開闊、牆邊有電氣設備等。測疾病丙+戊，落乾宮，象腿；落坎宮，外生殖器肥大；落艮宮，腸梗阻、背部麻痛；落震宮，心臟肥厚；落巽宮，眼腫；落離宮，眼腫，厚嘴唇；落坤宮，賁門幽門增厚；落兌宮，支氣管增生物。",
        ],
    ],
    丙己: [
        "火悖入刑",
        "凶",
        [
            "丙+己——火悖入刑，囚人刑杖，文書不行，吉門得吉，兇門轉兇。丙火比較盛烈，己土比較陰柔，它想掉到己土的陷阱裡還進不去，己土想纏繞丙火，還纏不住.，這種情況進退維谷，比較難受。丙為希望，己土為私慾，背後搗鬼、奸詐，遇到此格臨兇門表示表裡不一，表面一套、背後一套，表面為人師表，實際男盜女娼，一肚子壞水，是無恥的小人。遇此格，多是因為自私行為和幻想惹出的麻煩，但多數情況下出現的問題是能夠解決的。",
            "象意聯想：腸炎、垃圾桶、紅磚、圓形的坑、紅包（己為信封）、紅土地、熱氣包。此方位有紅色繩狀物等。生門+丙+己入死墓乘太陰，房子光線暗。測疾病，丙+己落乾宮，腳後跟有腳墊或皮質增厚；落坎宮，外生殖器有增生物、分泌物；落艮宮，腸炎、背後有疙瘩、瘡、瘤；落震宮，冠心病；落巽宮，腫眼泡、眼部生瘡；落離宮，額頭長包、眼疾；落坤宮，賁門幽門有潰爛處、咽炎；落兌宮，氣管增生物。",
        ],
    ],
    丙庚: [
        "熒入太白",
        "凶",
        [
            "丙+庚——熒入太白，賊必去。門戶破敗，盜賊耗失，事業亦兇。這是個動格，測什麼都是動的。測工作，要離職或調動、此人不想幹，主動的走。測出行，此人特別想去，你攔也攔不住。如果測求財，一般不是太有利，往往破財，但臨生門可以說要出去做生意，不能說是破財。如果測病，此格容易病情好轉。此格的要點是一個”去”字，就是主動的去。因為它是個陽幹，陽幹主主動。謀求好事，遇此格為大凶格。但如果測敵人、仇人、盜賊來不來，遇此格賊退去，自然就是吉利的了。商戰中，利主不利客，利退不利進，利於賣貨。但測命盤遇“熒入白者，退，主家業蕭條”，是講日干丙遇此格，如果不積極主動謀事，採取消極退讓的態度，則必然破家敗財。測風水如果生門時干逢此格，要防火災破財。",
            "象意聯想：國道、公車、執法部門的車、燈塔、電桿、槍戰、警匪片、警察抓賊、電線桿、明亮的窗子等。測疾病：丙+庚落乾宮骨折；落坎宮，外生殖器有癬或萎縮；落艮宮，背痛、白斑、皮膚病、小腸惡性病；落震宮，心肌梗塞；落巽宮，眼睛視力障礙；落離宮，白內障、眼盲；落坤宮，賁門幽門病變；落兌宮，呼吸困難、氣管受阻。",
        ],
    ],
    丙辛: [
        "日月相會",
        "吉",
        [
            "丙+辛——日月相會，謀事成就，病人不兇。丙辛合是權威之合，相互之間為利益、權勢而合作，遇到合格都是拖拖拉拉的事、合作的事，一個人幹不了的事。此格是在錯誤中互相利用，好像局面很亂，實際大局是穩定的。此格雖然合作中會出現一些問題，但這些問題能夠解決。利於合作、利於等待。不利於出行。遇此格,要看門，格局衰弱、遇兇門，則易犯錯誤。",
            "象意聯想：紅花、紅果、花生米、罰款、紅豆、第三者出問題；此方位小路高出地面。測疾病，丙+辛，落乾宮腳踝骨問題，腳墊；落坎宮，濕疹；落艮宮，背部手術、小腸疾病；落震宮，心臟瓣膜病；落巽宮，眼疾，增生物；落離宮，視力差，兔唇、說胡話；落坤宮，賁門幽門顆粒狀炎症；落兌宮，氣管炎、痰鳴。",
        ],
    ],
    丙壬: [
        "火入天羅",
        "凶",
        [
            "丙+壬——火入天羅，為客不利，是非頗多。壬丙相逢是非多，是一對矛盾.。這些麻煩都是因為外部原因導致的，並不是因為自己的失誤或錯誤造成的。這亂子中還有變化，釜底抽薪，越往前進亂子事越多。此格-為客不利，則不宜進。",
            "象意聯想：圓形的水池、血流成河、紅河、熱水、紅魚、巡警、巡邏艇；河上有紅色的漂浮物、熱水器、暖水瓶、圓形容水器、水塔。測疾病，丙+壬，落乾宮，腳踝骨酸脹；落坎宮，外生殖器有分泌物；落艮宮，背部有斑有痣、腸炎；落震宮，心髒病；落巽宮，眼部水腫；落離宮，哭、流淚、流口水；落坤宮，賁門幽門發漲；落兌宮，支氣管水腫。",
        ],
    ],
    丙癸: [
        "月奇地網",
        "凶",
        [
            "丙+癸——月奇地網，陰人害事，災禍頻生，凡事暗昧不明。指陰人、小人、看不見的人，搞一些破壞性的東西，也是指犯小人，背後有人搗鬼，招來災禍。遇到這樣的格局，要從內部找原因、找身邊人是否在搗亂。丙+丁，丙+壬癸臨傷門、死門、馬星等，煤氣管道或自來水管道易洩露。",
            "象意聯想：紅酒、葡萄酒、荷花塘、淫蕩、天羅地網、喜酒。有熱力管線、荷花池。測疾病丙+癸落乾宮，腳跟發麻、踝骨問題；落坎宮，外陰潰爛；落艮宮，腸炎、背部潰爛；落震宮，血液循環不暢；落巽宮，眼疾；落離宮，眼口生瘡；落坤宮，賁門幽門潰爛；落兌宮，支氣管炎。",
        ],
    ],
    乙乙: [
        "日奇伏吟",
        "凶",
        [
            "乙+乙——日奇伏吟，不宜見上級領導、貴人；求名求利及進取事不可求，只宜安分守己。乙木為希望，乙木又主曲折，都是陰乾，相互排斥，所以這類伏吟，就是曲折更多了。乙是日奇，測事，若遇到兩個，則進度不大，拐彎的事情多。測婚姻也好不了，就是希望太多了，個個就虛無縹緲。乙多出來一個，庚肯定也要多出來一個，所以伏吟主多婚或二婚。測人事方面，這事不是自己一個人幹的，因為多出來一個，是與別人合伙的，而且參與人多，伏住了，進展就慢。遇此格，測出行走不了或曲折多發。測出國，走不動，被纏住了。 “道路曲折，但並不是前途光明”。逢乙+乙，利主，宜靜不宜動，宜守不宜進。",
            "象意聯想：乙+乙，看成牽手、握手（乙為手）；親吻（乙為嘴）；頭髮厚長（乙為發）；兩個老婆（乙為妻）；戴著項鍊、打領帶（乙為脖子、乙為彎曲纏繞）；這個方位有花草、草坪、莊稼、植被等；有花卉或藝術品、繩子等。再如，測人，走路不直，是羅圈腿等。測疾病，乙+乙落乾宮，可能是腿部血管或神經相纏，腿部不能伸直；落坎宮，男性陽痿、輸精管狹窄或阻塞，女性輸卵管狹窄或阻塞等；落艮宮，手關節酸疼、變形，腿不直，結腸重疊等；落震宮，膽管狹窄；落巽宮食道不暢、神經錯亂、血管纏繞等；落離宮，腦血管狹窄；落坤宮，食道不暢、頸部神經、淋巴等病症；落兌宮，氣管狹窄等。",
        ],
    ],
    乙丙: [
        "奇儀順遂",
        "吉",
        [
            "乙+丙——奇儀順遂，吉星加官盡職，凶星夫妻反目離別。星代表一個人的先天秉性，這個格局是吉還是兇，取決於所臨之星是吉星還是凶星。乙木為陰木，丙為陽火：一陰一陽，絕妙搭配。乙為委屈，丙火為亂子。一個想出頭，一個怕出頭：二人融合，則奇儀順遂了。乙+丙，丙為權威，就是貴人多的意思，公開做有公開的貴人，暗中做有暗中的貴人。木火通明之象，就是有貴人扶持。但是女人測，特別是攤上凶星，第三者就要來了，作風不好。可以從丙的特徵來聯想。男人測，則他可能成為第三者。乙+丙—有好事，但這個好事是伴著亂子麻煩來的。乙+丙，臨吉星謀事多吉；臨凶星求謀不順，特別是不利於婚姻。",
            "象意聯想：床上舖的是紅被單（乙為床，丙主紅色）；找的老婆是帶小孩的（丙也為小男孩）；頭髮亂了，頭髮染紅了；拐彎的路上有紅燈（乙主彎曲）；女警察（丙主權柄，為警察）等。這個位置有開紅花的植物、有化工廠、熱電廠；有爐灶、暖氣片、火炕等。測疾病，乙+丙落乾宮表示腿部有炎症、燒傷、燙傷；落坎宮尿血、陰莖炎；落艮宮，結腸炎、手腳燒燙傷；落震宮，肝炎、膽囊炎；落巽宮，氣管炎、血管炎；落離宮腦神經炎；落坤宮，食道燙傷、食道炎；落兌宮，氣管炎、婦科炎症等。",
        ],
    ],
    乙丁: [
        "奇儀相佐",
        "吉",
        [
            "乙+丁——奇儀相佐，最利文書、考試，百事可為。為什麼？丁主文書、證件、希望、機遇、奇蹟，乙也是希望：三奇佔了兩奇，而丁是希望直達，所以測事會有奇蹟發生，有好的機遇。測年運，此年機遇多，希望大，易成功。測婚姻就易有第三者。女人測表示她可能成為別人的第三者。男人測，他有第三者或老婆不是原配。 “丁乙同宮，另續相親。乙奇在上，妻妾和諧；丁在乙上，妾幸夫心”。遇此格，主有新的機遇，有新的選擇。",
            "象意聯想：如抽煙的女人、老婆抽煙、桌子上有煙；發信息、打電話；檯燈；修家電；紅領巾；文字鍵盤；女人流、產、來例假了；此方位有紅花、有玫瑰、有電子產品、有電器等。測疾病，乙+丁，落乾宮，被銳器紮傷了、燙傷了、腿部疾病；落坎宮，尿血炎症、性器官炎症；落艮宮，腸炎、手上有刺；落震宮，肝炎、膽囊炎；落巽宮，膽管炎症、神經炎；落離宮，腦血管堵塞；落坤宮，食道炎、紮傷；落兌宮，氣管炎。",
        ],
    ],
    乙戊: [
        "陰害陽門",
        "凶",
        [
            "乙+戊——陰害陽門，利於陰人陰事，不利於陽人陽事，不利於辦公開的事情，利於女人，利於暗中行事。對於男人來講，如果遇到吉門尚可謀為，門兇或門迫：則破財傷人，此局,不利於做表面文章。乙+戊：戊為財，測來意可以看做為財而來或者為合作融資的事情而來等。要是測離婚：這個錢歸老婆了[乙木為女人，利陰害陽]。為什麼叫陰害陽門？戊土為陽門，天門，乙木來克制戊土，起壞作用。遇此格，要看門，門逢凶迫，財破人傷。遇到了這樣的格局怎麼辦？可以委託女人去辦；白天不做晚上做。男命遇到這樣的局，就不宜主動的去做，要等事情發生以後再出擊。",
            "象意聯想：挖土；挖掘機；子宮增生；女人是管錢的、女會計；戴手套；該出錢了（用手拿錢）；土炕、火炕；屋頂上有草等。此方位有綠色植物的庭院、牆頭不直、牆上有爬山虎、牆面上有藝術品等。測疾病，乙+戊落乾宮，腿腫脹、血管有增生物；落坎宮，前列腺增生、子宮肌瘤；落艮宮，腸梗阻、手腳麻木；落震宮，脂肪肝；落巽宮，氣管食管瘤、膽息肉；落離宮，腦神經麻痺；落坤宮，食道堵塞、麻痺；落兌宮，氣管增生物。",
        ],
    ],
    乙己: [
        "日奇入墓",
        "凶",
        [
            "乙+己——日奇入墓，被土暗昧、門兇事必兇。為什麼叫日奇入墓？甲戌己啊，乙木入戌墓，乙奇發揮不出它的作用。己為墳地、為陷阱，是把希望掉到陷阱裡，做什麼事情就都不好成功了！乙+己：己是被窩，是私慾，是幻想，就是躺在被窩裡想好事，真的讓他幹，他幹不成，也不去幹，是空想。遇此格，希望渺茫，也是希望不明確的含義。查病，病因不明。測事，希望渺茫。這個格局與剛才的乙+戊不利男人相反，是不利於女性做事，女性去了就倒霉。這個格局適合男性做事、白天做事。遇此格，要看門，門兇，事必兇。如果門吉，為有救。遇開門，為地遁吉格。 （乙+己遇開門為地遁：利隱蔽企圖、建立網點、策劃謀為、設計行事。探秘、伏藏、和談、求賢、交易、婚育吉。）測風水，遇地遁，主堅固穩重。測疾病遇地遁，病潛藏的深，有死亡的可能。",
            "象意聯想：坐沙發的女人、老婆不檢點、撿垃圾、做雕塑的、搞策劃的、寫信（己為信件）、小樹要死了、給莊稼施肥等。此方位有雜草或垃圾、有盆景花卉、凌亂。測疾病，乙+己落乾宮，腿腳部長有小疙瘩、血栓；落坎宮，念珠菌等；落艮宮，手腳長瘡、腸梗阻；落震宮，膽壁增厚、脂肪肝；落巽宮，膽息肉、神經麻痺；落離宮，腦神經錯亂；落坤宮，食道生瘡、噎住了；落兌宮，氣管瘤、子宮瘤。",
        ],
    ],
    乙庚: [
        "日奇被刑",
        "凶",
        [
            "乙+庚——日奇被刑，為爭訟財產，夫妻各懷私意。雖然乙庚合為夫妻，但陰在上陽在下，違反常規，庚金克乙木，故名日奇被刑。這是一個合格，逢合，就不是一個人幹的事情。乙庚雖然在同宮裡，但他們的落宮狀態不一樣，並不是步調一致的。出行逢此格，夫妻同去。不好走，有牽連。測調動，碰到這樣的格局，往往也是牽連的事情很多，工作難調。如果女性求測，乙+庚，一般說是問婚姻上的事情，婚姻上有矛盾。命盤出現這樣的格局，對妻子不利。如測戀愛，有可能是同居了。乙+庚測合作，也是各懷鬼胎。遇此格，有爭訟，各懷私意。",
            "象意聯想：夫妻在一起；女人走在路上；床上有床墊；女人在車上；女人開車；彎路上有個收費站。此方位有條彎曲的路、此方位有金屬橫梁、金屬門窗等。測疾病，乙+庚落乾宮腿部得硬皮症、牛皮癬；落坎宮，輸卵管輸精管病變堵塞；落艮宮，手掌癬、白斑、腸癌；落震宮，肝硬化、膽結石；落巽宮，膽惡性病、神經麻痺、氣管食道病變；落離宮，腦神經疼；落坤宮，食道癌；落兌宮，呼吸困難、氣管受阻、惡性病等。",
        ],
    ],
    乙辛: [
        "青龍逃走",
        "凶",
        [
            "乙+辛——青龍逃走，人亡財破，奴僕拐帶，六畜皆傷。測婚姻為女逃男。乙為女人，落到了辛金這個刀子上。辛金主錯誤，主問題，主變革。乙+辛：測什麼事都有問題發生。這是一個動格，不得不動，不能不動。兩個陰性的相排斥，同性力量大。此局，測婚姻，婚姻要動了，要變革了。測疾病：疾病要跑了，變好事了。測求財，龍逃走，破財了。這也是一個出走的代表符號，如調動、出差等。 “青龍逃走，懦弱之人，更主因妻成敗，而且駝背駝身”，命盤遇此格，男人必是性格軟弱、膽小怕事、沒主見、靠老婆支撐  家庭、且體矮駝背、相貌醜陋。這是一個兇格，百事皆兇，舉兵主客皆傷，經商破財，測婚婚散。乙+辛，如果遇到開休生三吉門之一，則為“雲遁”格局，宜於軍事、旅遊、修煉，宜於求雨。遇雲遁，臨事也不宜強求，暗中算計對方，對方不易發現。乙+己，乙+辛，丙+戊，丙+庚，丁+壬，丁+癸，再遇地盤值使門就是“三奇得使”吉格。三奇得使它只能是在事物大凶時，稍向好的方向轉化，而不至於大凶；在事物大吉時，能錦上添花罷了。看到乙+辛，臨上了地盤值使門，是兇中有吉，有能能轉危為安、化險為夷的機遇。測風水乙+辛，房子或院牆有破損的地方。遇雲遁，視線開闊。  經商遇到乙+辛，辛+乙，合作雙方或競爭雙方相互不信任。",
            "象意聯想：金屬床、手破了、腸炎、拉肚子、做手術、剪髮了；妻子犯錯誤、醫生出錯了、莊稼病了、有果實的樹、受傷了等。此方位有條小路、變形的門窗等。乙+辛臨驚門床舖有響動、睡不踏實或經常移動。測疾病，乙+辛落乾宮，腿受過傷、有顆粒物；落坎宮，輸卵管有小瘤、做過手術；落艮宮，腸部手術，小瘤子；落震宮，肝損傷、膽結石；落巽宮，膽結石、神經炎；落離宮，腦神經錯亂；落坤宮，咽炎、食道炎症；落兌宮，氣管炎、痰鳴。",
        ],
    ],
    乙壬: [
        "日奇天羅",
        "凶",
        [
            "乙+壬——日奇入天羅，尊婢悖亂，官訟是非，有人謀害之事。乙木為日奇，壬水是天牢，壬水本來是生乙木的，但是,因為它有牢、獄的性質，這樣乙+壬就如同入牢了，能力不好發揮，所以叫尊卑悖亂。可以斷他背後有小人搗鬼，這個事情要起變化了。因為壬水主流動，此格表示事物還沒有定局、還在變化。尊卑悖亂，搗鬼的人可能是他的手下或以前的下屬。測婚姻，可能是年齡差距大或差輩等。要點：尊卑悖亂，有人謀害。",
            "象意聯想：游泳、洗澡、女澡堂。臨玄武，跟人私奔了。釣魚、一條彎曲的河流；水稻田。有水管線、水龍頭等。床鋪下面潮濕或有下水管道。測疾病，乙+壬落乾宮，腿部血管曲張、流血；落坎宮，懷孕了、月經不調、尿床、尿頻；落艮宮，關節錯位、腸炎、消化不良；落震宮，肝腹水；落巽宮，膽管梗阻、血管破裂、食道潰爛；落離宮，神經脹痛；落坤宮，食道出血；落兌宮，支氣管水腫。",
        ],
    ],
    乙癸: [
        "日奇地網",
        "凶",
        [
            "乙+癸——日奇入地網，宜退不宜進，隱匿藏形，躲災避難為吉，此格局不利於進攻。癸水是髒水，是地網。網絡是癸水的性質之一，也是起於癸水為地網的含義。日奇撞到網裡了，不怎麼好。測病，病入網了，好不了。測財，財入網就是好事。抓賊，賊入網，跑不了。乙+癸：癸水就是有製約，是出於私慾的破耗，被人拖後腿了。乙+癸，妻子受委屈。宜退不宜進，不利進攻，躲災避難為吉。乙+癸遇開休生三吉門或落坎宮為“龍遁”，宜於水戰、修橋、鑿井。如測鑿井，此處必有甘泉。乙+癸臨玄武，大雨成災。",
            "象意聯想：撒網捕魚、下水道、酒鬼、腳扭傷了、青稞酒、菜湯、踩到瓜皮了、鞋櫃、手上有痣；此方位有荷塘、蘆葦地、濕地、有喜水的植物盆景等。床鋪下面潮濕或有下水管道。測疾病，乙+癸落乾宮，腿部皮炎、濕疹；落坎宮，婦科病；落艮宮，手部潰爛、腸炎；落震宮，膽積液、肝腹水；落巽宮，膽固醇高、氣管食道潰爛；落離宮，腦神經脹痛；落坤宮，食道出血；落兌宮，支氣管炎、痰阻。",
        ],
    ],
};