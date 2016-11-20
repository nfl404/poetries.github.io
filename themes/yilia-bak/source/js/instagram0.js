define([], function (){

	var _collection = [];
	var _count = 0;

	var insData = [{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11429225_720390118073037_768409912_n.jpg","text":"大雨之后","y":2015,"m":6},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11420780_1012574008772885_1569805305_n.jpg","text":"一脸无辜的王尼玛大哥，从肚腩来看，果然是正品？","y":2015,"m":6},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11252784_879698105429690_2109453469_n.jpg","text":"感觉迷上风筝了。有次做梦，想到一根根拉伸向上的线，像是在钓空中的鱼。而一个技术娴熟的“渔夫”，收杆时是这么干净利落。","y":2015,"m":6},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11267410_925161560884785_371811288_n.jpg","text":"起飞","y":2015,"m":6},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11375982_491190547696110_2013240096_n.jpg","text":"小萝莉不愿回家，跟奶奶说：“再让我玩会，明天要学钢琴，后天要学跳舞，就来不了这儿玩了。”","y":2015,"m":6},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11252751_1444216632541093_1558227860_n.jpg","text":"风雨欲来","y":2015,"m":5},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11226595_701075516681953_1354085958_n.jpg","text":"野生海带","y":2015,"m":5},{"src":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e15/11142212_609961145801361_1913577076_n.jpg","text":"要回去啦，再见北流河","y":2015,"m":4},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/11049421_1375007652828983_401355534_n.jpg","text":"灵芝get√","y":2015,"m":4},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11137852_1649834698581861_1050691792_n.jpg","text":"这里的清明是个很重要的节日，子孙们都会回来，跋山涉水，竹排渡江，荒山寻路，凭集体的记忆寻找列祖列宗的宝地，寄哀思，也求福德。一路上可以听他们唠叨旧事，也有超级靠谱的风水科普","y":2015,"m":4},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/11055751_1573536912901494_1683773508_n.jpg","text":"为了部落","y":2015,"m":4},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/11055897_1407191599597961_1763496348_n.jpg","text":"在清明的山路遇到了天然松香","y":2015,"m":4},{"src":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e15/11123665_1542600796003839_1576473443_n.jpg","text":"如果你飞得像月亮这么高，就不会搁浅在树上","y":2015,"m":3},{"src":"https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e15/11008101_1593505510894691_369067449_n.jpg","text":"喜欢这个季节的天空，你找个草坪一躺，飞机，风筝，鸟儿就都在上边，天气好时还能看到白天的月亮","y":2015,"m":3},{"src":"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/10958252_1405701033068537_2023890854_n.jpg","text":"很多东西随着慢慢长大，变得不像小时候那样盼望热切，比如巧克力麦当劳薯片雪糕。只有对担子粉的爱永远不变的说…","y":2015,"m":2},{"src":"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/10832246_413065338853260_183697882_n.jpg","text":"据说是一年一度考验演技的时候…","y":2015,"m":2},{"src":"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/10268927_436139166536328_1377561628_n.jpg","text":"锈迹斑斑的香炉","y":2015,"m":2},{"src":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e15/11008343_410508022446936_713236389_n.jpg","text":"回老家了，小时候跟我打过玻璃珠的小伙伴们呢？你们一个在北京，一个在安徽，一个在澳洲，一个我都不知道了…但你们看到玻璃珠的时候，要想起我来啊","y":2015,"m":2},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10932550_620643038062978_1729442807_n.jpg","text":"草地上遗落的鞋子","y":2015,"m":1},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/891532_1563899373855738_1180535181_n.jpg","text":"有位很久没联系的朋友寄来明信片，说：我很少看到海，正如你没见过几次雪","y":2015,"m":1},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10005439_338105566394046_854247264_n.jpg","text":"深夜总是灵感乍现的最佳时期，只是几个设计方案都没法使自己满意。累了打开窗看到天上有个大月亮，只想用图章工具把它干掉。","y":2015,"m":1},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10903312_693622147425934_1766884651_n.jpg","text":"面朝大海冬暖花开","y":2015,"m":1},{"src":"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/10914460_1546003772305181_1301162053_n.jpg","text":"分享日常不正常生活照一张","y":2015,"m":1},{"src":"https://scontent.cdninstagram.com/hphotos-xta1/t51.2885-15/e15/10903277_832760670116494_255352239_n.jpg","text":"其实我想，那些古老的渔民们，每天看着海岸线的日落日出，肯定是有人想过地球是圆的。而“想法”与“证明”之间，却跨越了一整条麦哲伦航道","y":2015,"m":1},{"src":"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/924083_1539057536347062_2062767438_n.jpg","text":"鱼山鱼海中，只有你，肯安静的趴在65厘米厚的亚克力板子上与我合影，大丑鱼","y":2015,"m":1},{"src":"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/10890944_765121966897759_2039585477_n.jpg","text":"新年单人旅行走起。其实从九洲港码头开始，珠海并没有给人很惊喜的感觉，包括盛名之下的沿海风光与渔女雕塑。倒是交通不通畅，从轮渡到公交都给我带来了许多麻烦。直到，晚上吃烤生蚝的第一口，我又觉得什么事情都是可以原谅的……","y":2015,"m":1},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10899183_999582293404177_745539859_n.jpg","text":"2014年最后的阳光","y":2014,"m":12},{"src":"https://scontent.cdninstagram.com/hphotos-xat1/t51.2885-15/e15/10894909_702627706517406_1277557620_n.jpg","text":"最后一节吉他课结束后，马路上那风一直吹，才感觉南方的冬天终于是来了。其实吉他在冬天会有许多神奇的事情。比如琴弦如肌肉一样因冷而紧绷，发出比以往沉闷的低语；而空旷的大教室里，如有其他同伴拨响和弦，手中本已按灭的琴弦又会因共鸣微微颤动。像有生命一样。","y":2014,"m":12},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10831989_483313928477468_40906631_n.jpg","text":"有棵丑树，我经常去看，又胖又歪，秃得可笑。在变冷的一天，它突然就开花了。冬天的花我知道得很少，南方没有梅花，那就是异木棉了","y":2014,"m":12},{"src":"https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e15/10784965_1518537748403855_176956695_n.jpg","text":"通灵之术！","y":2014,"m":11},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10735195_1505939246340704_1984926778_n.jpg","text":"现场气氛果然不一样，马上就可以看到小伞在大哥胯下疯狂输出…是时候来首选一记薇恩了","y":2014,"m":11},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10747711_429336373885590_422028037_n.jpg","text":"有朋友跟我说，挪威的森林根本看不下去；又有朋友说，看这书一发不可收拾。差别好大呀！我倒觉得有个简单的方法：翻到开篇的这几个字，如果心中一紧，那就说明这本书适合你，否则请弃之","y":2014,"m":11},{"src":"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/10735112_730529873702428_413107753_n.jpg","text":"天下的小饼干遇到我，貌似就只有一种下场！！","y":2014,"m":10},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11251074_365441270314698_1015057085_n.jpg","text":"越来越认生了，到步行街买衣服，找到比较适合的，却因为店员太过热情…跑了出来。闹市中居然藏有一古庙，还是这里自在，漫天神佛只是笑笑，不理物我，无论喜悲。对了我来这干嘛","y":2014,"m":3},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11380079_1581430378786145_504181803_n.jpg","text":"爬山的好处:强身健体，磨砺意志，开阔胸怀…坏处是:没有wifi。","y":2014,"m":3},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11330604_837683999618217_506172540_n.jpg","text":"又见回南天","y":2014,"m":3},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11273047_110162449318540_1639646034_n.jpg","text":"老妈说，今天要我送个礼物！离家万里，只好迅速开发出这个app，摇后就会播放我唱的真的爱你。可惜她说摇后没反应，后来才知道，她拿的ipad在摇…但我是真的爱你","y":2014,"m":3},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11375356_908792249164254_112740693_n.jpg","text":"今天下雨，的士司机都不肯理我。头上路灯光芒遥不可及，脚下路面棱角冰冷鲜明","y":2014,"m":3},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11357539_388432694679963_1281450994_n.jpg","text":"起风吧，明天。喜欢偏冷的日子，假如是春天，假如是风大，太完美了","y":2014,"m":3},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11311124_1611430865770700_1482115931_n.jpg","text":"腾讯的凌晨四点半。第一次在此过夜，听着耳熟不能详的歌，看着平静不微笑的人。然后记起，家里打来被我按掉的电话，忘了回","y":2014,"m":3},{"src":"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/1741772_1426622784247263_147777246_n.jpg","text":"从前有一座腾讯大厦，里面有一个老程序员，在跟一个小程序员讲故事。讲的什么故事呢？从前有一座腾讯大厦…在这种递归函数的紧密封装中，小程序员喊道:我不听！不要剧透啊！用这种方式，他break了出去！星夜逃奔，敛影潜形。现在我觉得自己似乎是个英雄…虽然这错觉只有一瞬","y":2014,"m":3},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/1737225_591794970889160_1849235580_n.jpg","text":"“不能吃太胖喔，会被杀掉的！”","y":2014,"m":2},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/1741200_451260698337036_577792061_n.jpg","text":"今晚，已经看到两个小女生在问，这里有《九云梦》吗？","y":2014,"m":2},{"src":"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/926536_828142997203682_1319760676_n.jpg","text":"看着一场雨由远及近的淋湿院子，太漂亮","y":2014,"m":7},{"src":"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/923702_252705761596555_721784545_n.jpg","text":"归来却空空的行囊  那故乡的云  那故乡的风  啦啦啦啦啦 啦啦啦。","y":2014,"m":7},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10549755_708603639175850_2095584541_n.jpg","text":"在今年第一个狂风大作的早上，回家去","y":2014,"m":7},{"src":"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/928307_1442957109299429_297849354_n.jpg","text":"98年，世界杯第一次在我脑中留下记忆，和爸，围着那台很小的tcl。今天，爸还打电话给我，让我别看太晚影响到明天工作，但我知道他自己也会去看的。是的，我们爱足球，今生今世","y":2014,"m":7},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10488451_303926969784787_1278259348_n.jpg","text":"这几天深圳的天空很美，无论晴雨","y":2014,"m":7},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/10362316_1434933843444633_1187384207_n.jpg","text":"“往事依稀浑似梦，都随风雨到心头”——梅表姐","y":2014,"m":6},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/10471930_507725875994902_393186392_n.jpg","text":"navy blue","y":2014,"m":6},{"src":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e15/10454011_484872768311603_738380027_n.jpg","text":"今天我遇到一朵枯玫瑰。她只是枯萎，从未凋零。","y":2014,"m":6},{"src":"https://scontent.cdninstagram.com/hphotos-xta1/t51.2885-15/e15/923661_248502122024084_2086692261_n.jpg","text":"上届卫冕冠军被打成筛子的…是热火…","y":2014,"m":6},{"src":"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/10424605_774238262594769_78480252_n.jpg","text":"我和大神的差距——web工程师的自我修养","y":2014,"m":6},{"src":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e15/10387796_255697041300477_753213015_n.jpg","text":"突然发现我还是挺喜欢大晴天的","y":2014,"m":5},{"src":"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/10005623_779769878723970_627922376_n.jpg","text":"单人旅行走起！开心","y":2014,"m":5},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10358172_1495900567292387_640174442_n.jpg","text":"不久就可以吃了","y":2014,"m":5},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10369281_674379822637848_233362820_n.jpg","text":"黄昏时分","y":2014,"m":5},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/928251_430572373746575_786910314_n.jpg","text":"大雨倾城","y":2014,"m":5},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10358301_256481271142988_1088114034_n.jpg","text":"今天路过公园，一朵玉兰掉在身边。想起小时候陪伴我的三棵树，两棵木棉，一棵玉兰。当然玉兰这名字是后来才知道的，记忆里的那朵永远叫做香花。三年级的某天放学，这三棵树一并倒下了。","y":2014,"m":5},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10296597_1413560715589179_392570057_n.jpg","text":"雨中深大。雨季再来不再来。","y":2014,"m":5},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10299642_561366610636165_721929935_n.jpg","text":"say hey to may","y":2014,"m":5},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10268965_1446530205590326_114108738_n.jpg","text":"故事中的小黄花","y":2014,"m":5},{"src":"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/10261258_711820055527911_220271949_n.jpg","text":"谢谢亲们的蛋糕和礼物;谢谢我们始终用“同学”来称呼彼此。","y":2014,"m":4},{"src":"https://scontent.cdninstagram.com/hphotos-xat1/t51.2885-15/e15/10249356_695726313802446_881680057_n.jpg","text":"处女座老榕树","y":2014,"m":4},{"src":"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/10268929_597082527053970_1060360934_n.jpg","text":"放风筝的人们","y":2014,"m":4},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10268941_490697914386538_1148834228_n.jpg","text":"现在我的状态，像极了一只被推上战场僵尸","y":2014,"m":4},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10254195_545488182236276_1930978882_n.jpg","text":"这几天我耳边是都是这样的话语:1、“就是敲敲键盘，挺清闲的哈！”2、“别太挑剔，给个一两千就先做着”3、“什么？你那一碗粉要十二块钱？！”我回深圳了，几天的清静生活，谢谢乡亲们的招待。","y":2014,"m":4},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/917572_539124756205696_1549712749_n.jpg","text":"good luck","y":2014,"m":4},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/927273_657564254280429_578859844_n.jpg","text":"瓦上花开","y":2014,"m":4},{"src":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e15/10175316_650834874981595_1358429831_n.jpg","text":"好吧，这是一艘船","y":2014,"m":4},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/926422_245144379006241_1254093305_n.jpg","text":"石表山，思罗河，四年后的清明我又来到了这儿","y":2014,"m":4},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/891289_302574849898688_205313988_n.jpg","text":"清明，一路向西","y":2014,"m":4},{"src":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e15/10175309_510867459023322_1700312549_n.jpg","text":"清明一回到家，老妈就开始炫耀她试验种的豆芽。愿君多采撷，此物最好吃？","y":2014,"m":4},{"src":"https://scontent.cdninstagram.com/hphotos-xta1/t51.2885-15/e15/10012487_604746702952671_676907736_n.jpg","text":"转角遇到戏台，耳熟却不知道是哪一出了。想起爷爷以前的二胡与杨琴，自己精削细磨的琴竹，还有他组织的“菊山楼”粤剧队，真是一晃好些年。今年清明，一定回去。","y":2014,"m":3},{"src":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e15/1171265_389602547845527_1588547561_n.jpg","text":"这本书超赞！好书好书好书","y":2014,"m":3},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11376491_1614984048759908_413209146_n.jpg","text":"四五点写程序太累，就不写了。不告诉任何人，跑到这个立交桥底，我已来过好几回。这里有一棵白色的紫荆花，满墙爬山虎，和刚放学的小朋友，出去，右拐，再右拐，转角可以遇到你，我的肉夹馍…","y":2014,"m":3},{"src":"https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e15/10725177_573652486072155_1401604216_n.jpg","text":"一个人，一支口琴，一片海，一瓶酒","y":2014,"m":10},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10724868_302191016652312_2097904817_n.jpg","text":"《论夜归，打的，以及发票的正确用法》","y":2014,"m":10},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10731727_461314204008708_386749273_n.jpg","text":"童年真好。我以后一定不要跟孩子说：希望你快高长大这种傻话…","y":2014,"m":10},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10616983_1382591478697855_2107473552_n.jpg","text":"我的好朋友——超级高冷超级磨人的丝瓜","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/925287_1464119273867077_427071626_n.jpg","text":"沉眠的店主失眠的狗。想起大学的最后时光，宿舍24小时都有人醒着，自由的人生，自由的酒和曲终人散，大家通常没有另一半，没有钱，没有忧愁，爽成狗","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/925284_1534308033454310_855505111_n.jpg","text":"如果他是程序员…\nvar date = lifetime;\rif(rotate(mountain, water, stupa)){ /*return nextLifetime;*/ return meetyou(journey);\r}","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10666267_1550871771803214_2074300649_n.jpg","text":"听着山寨的民谣电子乐，看着美好的姑娘。功德无量。","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/10693244_734401199942901_1572709880_n.jpg","text":"弥里塘太宁静。在这我一直想起每一个被深圳车水马龙声吵醒的早晨，真是光辉的岁月","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10693771_1517437541834868_665867908_n.jpg","text":"进藏。天空挂满着云，黑的白的都有。云朵转眼飘散，它却依然是蓝色。","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xta1/t51.2885-15/e15/10693822_497709657032441_1125408654_n.jpg","text":"“音浪太强不晃会被撞到地上…”","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/10683941_796597910390683_12441123_n.jpg","text":"陌生的朋友，愿下次再能与你们相聚在丽江love wine & half。我无法融解你悲观现实的想法，你也无法说服我旅行并不是逃避。但这都很有意思。只是想起以前有个人叫我不能喝太多的酒，一想到这个呀我就越喝越多","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10661142_164227523747936_1526737465_n.jpg","text":"玉龙雪山","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/10661182_550889531706942_2043749716_n.jpg","text":"以前想去丽江，但去过的人都灌输着你也许会失望的观念，因而甚至不敢动身。这是一种“怕”。有时候真得自己去看看才会了然。第一天在丽江，民谣吉他缓缓流过商业化的街道，原来没有惊喜，也没有失望，一切刚刚好。","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10520334_1523531751215211_1344090061_n.jpg","text":"我注定要回到老路上","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xta1/t51.2885-15/e15/10693390_547748238660649_761529890_n.jpg","text":"彩云之南","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10693650_837768039589771_1793184733_n.jpg","text":"云南，向往已久的地方","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e15/914812_1529561143923493_1662159287_n.jpg","text":"QQ同时在线人数破2亿纪念，作为一颗小小螺丝钉，名字正好镶到企鹅的大嘴巴上。这时觉得有一丝光荣，一种努力被实化的错觉；然后又有点不舒服，感觉此时的自己，和名字身边的人一样。可我想要的就是不一样。","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10644019_368509079979549_2085033896_n.jpg","text":"陪伴一定得是件漫长的事呵。和奶奶在一起的中秋节。","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10684161_918887498139099_2081383304_n.jpg","text":"中秋和家人一起去看孔明灯，热闹而安逸，这是小城市的美好。","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e15/10683828_327931784041264_894089329_n.jpg","text":"老家的葡萄藤，从我初中时就挂在这，再见已是十一年","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/10666028_872988212713750_1345360858_n.jpg","text":"家里橄榄熟了，盐渍，暴晒，蘸蜜，简直人间美味!","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10665501_1452353738387652_2075798065_n.jpg","text":"在一场太阳雨里回到家中","y":2014,"m":9},{"src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/10654876_610857929023752_364709543_n.jpg","text":"在书店的晚上终于把新专反复听完。太柔了…打一星两星的人肯定是真爱粉，这点有人敢怀疑？我不是，打四星！停不下来，直到书店响起:深圳即将入眠。但22点还是深圳的早晨呀","y":2014,"m":8},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10644013_777642448965989_544517718_n.jpg","text":"慢三的华尔兹，大篇幅的爵士即兴。感觉生活得太浮躁。也太安逸。","y":2014,"m":8},{"src":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e15/924456_1471485796442896_1699836323_n.jpg","text":"好久没看话剧，这部果然没让人失望。导演太会讲故事了，1024个赞","y":2014,"m":8},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10607913_692632367472666_1829853902_n.jpg","text":"纵有一万种悲伤的美丽，也比不过这段。","y":2014,"m":8},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10611052_1466241683635233_830264506_n.jpg","text":"在书城里看到的<后会无期>分镜图。电影那么美，分镜是这样，这就是现实~","y":2014,"m":8},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10617144_829548960388746_1611410337_n.jpg","text":"如果你从北京来看我，我会很感动;如果你像光，从太阳那头过来，我不以为然。因为光到地球只要8.3分钟。我们经常错用代价来衡量情感","y":2014,"m":8},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10453953_542161702576881_1621059386_n.jpg","text":"相聚总有时:)","y":2014,"m":8},{"src":"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/925559_1482425071996009_1940959046_n.jpg","text":"随便走走，发现世界还是很美好的。当拥有美好事物时，经常习惯性的熟视无睹;当努力抓住你想要的东西时，它又可能瞬间破碎。但依旧需要不妥协。","y":2014,"m":7},{"src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10554006_501929086608023_917623457_n.jpg","text":"荔枝——我心目中的水果之王（有之一）","y":2014,"m":7},{"src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10576105_624878090953161_638111947_n.jpg","text":"高中时代最新款的mp4，现已成了老古董","y":2014,"m":7},{"src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10570119_332808380211109_125412512_n.jpg","text":"台风来临时，刚好会是暑假。但我已没有暑假。","y":2014,"m":7}];

	var render = function(data){

		var ulTmpl = "";

		for(var em in data){
			var liTmpl = "";
			for(var i=0,len=data[em].srclist.length;i<len;i++){
				
				liTmpl += '<li>\
								<div class="img-box">\
									<a class="img-bg" rel="example_group" href="'+data[em].srclist[i]+'" title="'+data[em].text[i]+'"></a>\
									<img lazy-src="'+data[em].srclist[i]+'" alt="">\
								</div>\
							</li>';
			}
			ulTmpl = '<section class="archives album"><h1 class="year">'+data[em].year+'<em>'+data[em].month+'月</em></h1>\
				<ul class="img-box-ul">'+liTmpl+'</ul>\
				</section>'+ ulTmpl;
		}
		$(ulTmpl).appendTo($(".instagram"));

		$(".instagram").lazyload();
		
		$("a[rel=example_group]").fancybox();
	}

	var replacer = function(str){
		var arr = str.split("/");
		return "/assets/ins/"+arr[arr.length-1];
	}

	var ctrler = function(data){
		var imgObj = {};
		for(var i=0,len=data.length;i<len;i++){
			var y = data[i].y;
			var m = data[i].m;
			var src = replacer(data[i].src);
			var text = data[i].text;
			var key = y+""+((m+"").length == 1?"0"+m : m);
			if(imgObj[key]){
				imgObj[key].srclist.push(src);
				imgObj[key].text.push(text);
			}else{
				imgObj[key] = {
					year:y,
					month:m,
					srclist:[src],
					text:[text]
				}
			}
		}
		render(imgObj);
	}

	var getList = function(){
		//$(".open-ins").html("图片来自instagram，正在加载中…");
		$(".open-ins").html("图片来自instagram，点此访问");
		ctrler(insData);
	}
	

	return {
		init:function(){
			getList();
		}
	}
});