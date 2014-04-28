angular.module('app', ["angles", "ngTouch", "ui.bootstrap"]);

function AppCtrl($scope) {
    $scope.selected = 'pBH';
    $scope.indexer = 0;
    $scope.autoselect = undefined;
    $scope.autoselect = function(val1, val2) {
        $scope.selected = val1;
        $scope.indexer = val2;
         $scope.c1 = false;
         $scope.c2 = false;
         $scope.c3 = false;
         $scope.c4 = false;
        
   };   

$scope.data = [
{n:'pBH',c:'Blackwater and Hawley',spare1:0,spare2:0,spare3:0,spare4:0,pop:4473,area:1164.9,density:3.8,males:2273,females:2200,hholds:1833,ph1o65:207,ownO:693,ownM:810,share:17,rentS:61,rentP:236,rentF:16,ph1:467,ph2:706,ph3:291,ph4:267,ph5:78,ph6:18,ph7:5,ph8:1,ttw:3391,ttwWfh:225,ttwT:126,ttwB:36,ttwC:1765,ttwP:88,ttwF:129,care0:4057,care1:281,care2:55,care3:80,health4:2235,health3:1616,health2:463,health1:125,health0:34,lth0:242,lth1:349,lth2:3882,hhd0:976,hhd1:605,hhd2:221,hhd3:28,hhd4:3,ou2:885,ou1:550,oc0:351,oc1:38,oc2:9,car0:171,car1:681,car2:705,car3:276,carT:3019,ea:3391,eaT:2543,eaTft:416,eaTpt:1590,eaSe:363,r1052:83,r1053:91,eiT:848,eiR:560,eiS:86,eiH:108,eiD:41,eiO:53},
{n:'pB',c:'Bramshill',spare1:0,spare2:0,spare3:0,spare4:0,pop:133,area:902.23,density:0.1,males:72,females:61,hholds:57,ph1o65:2,ownO:24,ownM:15,share:0,rentS:4,rentP:4,rentF:10,ph1:17,ph2:22,ph3:7,ph4:7,ph5:4,ph6:0,ph7:0,ph8:0,ttw:107,ttwWfh:10,ttwT:4,ttwB:1,ttwC:43,ttwP:0,ttwF:13,care0:120,care1:8,care2:2,care3:3,health4:67,health3:56,health2:8,health1:1,health0:1,lth0:3,lth1:9,lth2:121,hhd0:35,hhd1:15,hhd2:7,hhd3:0,hhd4:0,ou2:30,ou1:10,oc0:17,oc1:0,oc2:0,car0:5,car1:16,car2:19,car3:17,carT:125,ea:107,eaT:77,eaTft:11,eaTpt:48,eaSe:13,r1052:3,r1053:2,eiT:30,eiR:18,eiS:4,eiH:7,eiD:1,eiO:0},
{n:'pCC',c:'Church Crookham',spare1:0,spare2:0,spare3:0,spare4:0,pop:8479,area:909.98,density:9.3,males:4100,females:4379,hholds:3237,ph1o65:337,ownO:1212,ownM:1392,share:4,rentS:122,rentP:489,rentF:18,ph1:697,ph2:1134,ph3:548,ph4:589,ph5:209,ph6:48,ph7:10,ph8:2,ttw:5917,ttwWfh:291,ttwT:235,ttwB:58,ttwC:3138,ttwP:153,ttwF:228,care0:7700,care1:573,care2:84,care3:122,health4:4650,health3:2803,health2:766,health1:209,health0:51,lth0:407,lth1:681,lth2:7391,hhd0:1868,hhd1:985,hhd2:350,hhd3:31,hhd4:3,ou2:1505,ou1:1138,oc0:536,oc1:54,oc2:4,car0:218,car1:1134,car2:1390,car3:495,carT:5583,ea:5917,eaT:4459,eaTft:828,eaTpt:2726,eaSe:582,r1052:138,r1053:185,eiT:1458,eiR:859,eiS:193,eiH:248,eiD:87,eiO:71},
{n:'pC',c:'Crondall',spare1:0,spare2:0,spare3:0,spare4:0,pop:1770,area:1674.49,density:1.1,males:850,females:920,hholds:711,ph1o65:89,ownO:282,ownM:244,share:8,rentS:115,rentP:54,rentF:8,ph1:156,ph2:304,ph3:106,ph4:92,ph5:35,ph6:12,ph7:4,ph8:2,ttw:1243,ttwWfh:110,ttwT:68,ttwB:6,ttwC:538,ttwP:21,ttwF:34,care0:1616,care1:116,care2:13,care3:25,health4:971,health3:586,health2:166,health1:39,health0:8,lth0:91,lth1:148,lth2:1531,hhd0:400,hhd1:217,hhd2:80,hhd3:14,hhd4:0,ou2:389,ou1:216,oc0:93,oc1:11,oc2:2,car0:42,car1:205,car2:337,car3:127,carT:1318,ea:1243,eaT:841,eaTft:150,eaTpt:423,eaSe:210,r1052:38,r1053:20,eiT:402,eiR:234,eiS:46,eiH:79,eiD:19,eiO:24},
{n:'pCV',c:'Crookham Village',spare1:0,spare2:0,spare3:0,spare4:0,pop:4037,area:437.56,density:9.2,males:1978,females:2059,hholds:1596,ph1o65:78,ownO:375,ownM:847,share:29,rentS:84,rentP:253,rentF:8,ph1:363,ph2:555,ph3:273,ph4:309,ph5:72,ph6:21,ph7:1,ph8:2,ttw:2909,ttwWfh:177,ttwT:161,ttwB:15,ttwC:1757,ttwP:71,ttwF:81,care0:3762,care1:206,care2:20,care3:49,health4:2511,health3:1213,health2:260,health1:44,health0:9,lth0:94,lth1:181,lth2:3762,hhd0:1075,hhd1:403,hhd2:108,hhd3:10,hhd4:0,ou2:689,ou1:519,oc0:347,oc1:37,oc2:4,car0:55,car1:570,car2:768,car3:203,carT:2789,ea:2909,eaT:2393,eaTft:434,eaTpt:1509,eaSe:322,r1052:55,r1053:73,eiT:516,eiR:213,eiS:91,eiH:147,eiD:35,eiO:30},
{n:'pD',c:'Dogmersfield',spare1:0,spare2:0,spare3:0,spare4:0,pop:279,area:766.94,density:0.4,males:139,females:140,hholds:118,ph1o65:9,ownO:60,ownM:40,share:1,rentS:2,rentP:12,rentF:3,ph1:17,ph2:71,ph3:9,ph4:16,ph5:1,ph6:4,ph7:0,ph8:0,ttw:213,ttwWfh:18,ttwT:18,ttwB:1,ttwC:76,ttwP:8,ttwF:2,care0:239,care1:30,care2:6,care3:4,health4:155,health3:82,health2:32,health1:8,health0:2,lth0:13,lth1:29,lth2:237,hhd0:71,hhd1:36,hhd2:8,hhd3:3,hhd4:0,ou2:91,ou1:17,oc0:8,oc1:2,oc2:0,car0:5,car1:19,car2:67,car3:27,carT:249,ea:213,eaT:132,eaTft:18,eaTpt:70,eaSe:37,r1052:4,r1053:3,eiT:81,eiR:54,eiS:6,eiH:13,eiD:2,eiO:6},
{n:'pEH',c:'Elvetham Heath',spare1:0,spare2:0,spare3:0,spare4:0,pop:5183,area:174.73,density:29.7,males:2576,females:2607,hholds:1839,ph1o65:31,ownO:222,ownM:1041,share:142,rentS:92,rentP:332,rentF:10,ph1:284,ph2:583,ph3:339,ph4:491,ph5:112,ph6:24,ph7:3,ph8:3,ttw:3559,ttwWfh:227,ttwT:343,ttwB:12,ttwC:2047,ttwP:90,ttwF:114,care0:4938,care1:190,care2:19,care3:36,health4:3518,health3:1398,health2:221,health1:31,health0:15,lth0:81,lth1:177,lth2:4925,hhd0:1365,hhd1:377,hhd2:84,hhd3:11,hhd4:2,ou2:876,ou1:602,oc0:319,oc1:35,oc2:7,car0:54,car1:645,car2:990,car3:150,carT:3126,ea:3559,eaT:3013,eaTft:440,eaTpt:2049,eaSe:368,r1052:92,r1053:64,eiT:546,eiR:146,eiS:107,eiH:226,eiD:27,eiO:40},
{n:'pE',c:'Eversley',spare1:0,spare2:0,spare3:0,spare4:0,pop:1653,area:1262.11,density:1.3,males:807,females:846,hholds:622,ph1o65:52,ownO:221,ownM:283,share:4,rentS:56,rentP:49,rentF:9,ph1:116,ph2:245,ph3:76,ph4:129,ph5:45,ph6:7,ph7:1,ph8:3,ttw:1192,ttwWfh:124,ttwT:38,ttwB:2,ttwC:647,ttwP:27,ttwF:34,care0:1488,care1:121,care2:17,care3:27,health4:934,health3:539,health2:140,health1:34,health0:6,lth0:69,lth1:127,lth2:1457,hhd0:362,hhd1:196,hhd2:58,hhd3:5,hhd4:1,ou2:348,ou1:176,oc0:85,oc1:12,oc2:1,car0:20,car1:172,car2:284,car3:146,carT:1280,ea:1192,eaT:924,eaTft:172,eaTpt:486,eaSe:213,r1052:23,r1053:30,eiT:268,eiR:136,eiS:37,eiH:66,eiD:12,eiO:17},
{n:'pEW',c:'Ewshot',spare1:0,spare2:0,spare3:0,spare4:0,pop:635,area:170.68,density:3.7,males:296,females:339,hholds:232,ph1o65:22,ownO:117,ownM:90,share:0,rentS:11,rentP:11,rentF:3,ph1:37,ph2:95,ph3:43,ph4:40,ph5:16,ph6:1,ph7:0,ph8:0,ttw:463,ttwWfh:40,ttwT:32,ttwB:1,ttwC:210,ttwP:10,ttwF:4,care0:560,care1:60,care2:6,care3:9,health4:364,health3:188,health2:67,health1:9,health0:7,lth0:38,lth1:44,lth2:553,hhd0:157,hhd1:63,hhd2:11,hhd3:1,hhd4:0,ou2:170,ou1:39,oc0:22,oc1:1,oc2:0,car0:4,car1:50,car2:98,car3:80,carT:527,ea:463,eaT:314,eaTft:53,eaTpt:172,eaSe:72,r1052:4,r1053:13,eiT:149,eiR:91,eiS:19,eiH:33,eiD:3,eiO:3},
{n:'pF',c:'Fleet',spare1:0,spare2:0,spare3:0,spare4:0,pop:21858,area:1305.97,density:16.7,males:10845,females:11013,hholds:9003,ph1o65:1166,ownO:3677,ownM:3546,share:84,rentS:623,rentP:999,rentF:74,ph1:2320,ph2:3349,ph3:1355,ph4:1472,ph5:394,ph6:103,ph7:5,ph8:5,ttw:15675,ttwWfh:928,ttwT:1092,ttwB:121,ttwC:7331,ttwP:347,ttwF:824,care0:19834,care1:1517,care2:197,care3:310,health4:11649,health3:7354,health2:2224,health1:491,health0:140,lth0:1172,lth1:1897,lth2:18789,hhd0:5150,hhd1:2671,hhd2:1013,hhd3:157,hhd4:12,ou2:4550,ou1:2657,oc0:1586,oc1:188,oc2:22,car0:986,car1:3319,car2:3478,car3:1220,carT:14497,ea:15675,eaT:11464,eaTft:2158,eaTpt:6797,eaSe:1738,r1052:363,r1053:408,eiT:4211,eiR:2623,eiS:493,eiH:681,eiD:222,eiO:192},
{n:'pG',c:'Greywell',spare1:0,spare2:0,spare3:0,spare4:0,pop:237,area:345.12,density:0.7,males:118,females:119,hholds:99,ph1o65:16,ownO:37,ownM:26,share:0,rentS:7,rentP:25,rentF:4,ph1:25,ph2:36,ph3:19,ph4:13,ph5:5,ph6:1,ph7:0,ph8:0,ttw:167,ttwWfh:10,ttwT:9,ttwB:3,ttwC:90,ttwP:0,ttwF:8,care0:205,care1:27,care2:1,care3:4,health4:145,health3:61,health2:22,health1:8,health0:1,lth0:11,lth1:20,lth2:206,hhd0:62,hhd1:24,hhd2:11,hhd3:2,hhd4:0,ou2:58,ou1:32,oc0:9,oc1:0,oc2:0,car0:5,car1:35,car2:38,car3:21,carT:179,ea:167,eaT:128,eaTft:26,eaTpt:77,eaSe:24,r1052:1,r1053:0,eiT:39,eiR:17,eiS:6,eiH:11,eiD:5,eiO:0},
{n:'pHW',c:'Hartley Wintney',spare1:0,spare2:0,spare3:0,spare4:0,pop:4999,area:2180.92,density:2.3,males:2415,females:2584,hholds:2139,ph1o65:353,ownO:804,ownM:721,share:5,rentS:322,rentP:255,rentF:32,ph1:595,ph2:847,ph3:265,ph4:289,ph5:109,ph6:27,ph7:5,ph8:2,ttw:3585,ttwWfh:241,ttwT:216,ttwB:15,ttwC:1605,ttwP:80,ttwF:170,care0:4486,care1:384,care2:43,care3:86,health4:2761,health3:1524,health2:549,health1:131,health0:34,lth0:293,lth1:447,lth2:4259,hhd0:1152,hhd1:625,hhd2:297,hhd3:63,hhd4:2,ou2:1093,ou1:626,oc0:368,oc1:47,oc2:5,car0:255,car1:725,car2:874,car3:285,carT:3451,ea:3585,eaT:2517,eaTft:464,eaTpt:1401,eaSe:486,r1052:96,r1053:70,eiT:1068,eiR:658,eiS:115,eiH:188,eiD:57,eiO:50},
{n:'pHe',c:'Heckfield',spare1:0,spare2:0,spare3:0,spare4:0,pop:339,area:1257.12,density:0.3,males:172,females:167,hholds:128,ph1o65:7,ownO:30,ownM:33,share:0,rentS:17,rentP:39,rentF:9,ph1:26,ph2:52,ph3:22,ph4:17,ph5:7,ph6:2,ph7:0,ph8:2,ttw:260,ttwWfh:29,ttwT:12,ttwB:0,ttwC:107,ttwP:10,ttwF:30,care0:305,care1:22,care2:4,care3:8,health4:200,health3:102,health2:28,health1:6,health0:3,lth0:11,lth1:21,lth2:307,hhd0:71,hhd1:43,hhd2:13,hhd3:1,hhd4:0,ou2:73,ou1:34,oc0:18,oc1:1,oc2:2,car0:8,car1:35,car2:53,car3:32,carT:253,ea:260,eaT:199,eaTft:25,eaTpt:127,eaSe:36,r1052:5,r1053:6,eiT:61,eiR:34,eiS:8,eiH:13,eiD:3,eiO:3},
{n:'pH',c:'Hook',spare1:0,spare2:0,spare3:0,spare4:0,pop:7770,area:942.13,density:8.2,males:3842,females:3928,hholds:3012,ph1o65:286,ownO:915,ownM:1390,share:71,rentS:297,rentP:320,rentF:19,ph1:650,ph2:1027,ph3:572,ph4:569,ph5:166,ph6:24,ph7:4,ph8:0,ttw:5629,ttwWfh:374,ttwT:414,ttwB:29,ttwC:2826,ttwP:122,ttwF:301,care0:7071,care1:511,care2:67,care3:121,health4:4444,health3:2475,health2:654,health1:155,health0:42,lth0:339,lth1:508,lth2:6923,hhd0:1908,hhd1:746,hhd2:315,hhd3:41,hhd4:2,ou2:1588,ou1:886,oc0:488,oc1:44,oc2:6,car0:264,car1:1026,car2:1276,car3:446,carT:5085,ea:5629,eaT:4354,eaTft:780,eaTpt:2606,eaSe:661,r1052:137,r1053:170,eiT:1275,eiR:686,eiS:218,eiH:260,eiD:57,eiO:54},
{n:'pLS',c:'Long Sutton',spare1:0,spare2:0,spare3:0,spare4:0,pop:683,area:945.97,density:0.7,males:362,females:321,hholds:185,ph1o65:9,ownO:56,ownM:45,share:2,rentS:21,rentP:21,rentF:40,ph1:33,ph2:65,ph3:36,ph4:36,ph5:13,ph6:2,ph7:0,ph8:0,ttw:448,ttwWfh:34,ttwT:24,ttwB:0,ttwC:138,ttwP:9,ttwF:60,care0:628,care1:44,care2:5,care3:6,health4:446,health3:182,health2:45,health1:6,health0:4,lth0:16,lth1:32,lth2:635,hhd0:130,hhd1:37,hhd2:17,hhd3:1,hhd4:0,ou2:93,ou1:62,oc0:24,oc1:6,oc2:0,car0:8,car1:59,car2:82,car3:36,carT:350,ea:448,eaT:284,eaTft:45,eaTpt:168,eaSe:55,r1052:7,r1053:9,eiT:164,eiR:38,eiS:99,eiH:19,eiD:1,eiO:7},
{n:'pM',c:'Mattingley',spare1:0,spare2:0,spare3:0,spare4:0,pop:583,area:1030.61,density:0.6,males:300,females:283,hholds:225,ph1o65:20,ownO:107,ownM:81,share:0,rentS:14,rentP:19,rentF:4,ph1:37,ph2:98,ph3:33,ph4:37,ph5:17,ph6:3,ph7:0,ph8:0,ttw:437,ttwWfh:37,ttwT:25,ttwB:0,ttwC:203,ttwP:9,ttwF:17,care0:514,care1:52,care2:2,care3:15,health4:326,health3:184,health2:54,health1:14,health0:5,lth0:26,lth1:43,lth2:514,hhd0:145,hhd1:55,hhd2:23,hhd3:2,hhd4:0,ou2:153,ou1:49,oc0:19,oc1:2,oc2:2,car0:12,car1:47,car2:94,car3:72,carT:491,ea:437,eaT:309,eaTft:53,eaTpt:158,eaSe:82,r1052:5,r1053:11,eiT:128,eiR:76,eiS:20,eiH:24,eiD:7,eiO:1},
{n:'pO',c:'Odiham',spare1:0,spare2:0,spare3:0,spare4:0,pop:5616,area:2342.06,density:2.4,males:3025,females:2591,hholds:1929,ph1o65:233,ownO:610,ownM:505,share:7,rentS:253,rentP:520,rentF:34,ph1:428,ph2:718,ph3:326,ph4:339,ph5:88,ph6:24,ph7:3,ph8:3,ttw:4148,ttwWfh:245,ttwT:140,ttwB:38,ttwC:1581,ttwP:81,ttwF:874,care0:5216,care1:316,care2:33,care3:51,health4:3269,health3:1771,health2:452,health1:94,health0:30,lth0:180,lth1:398,lth2:5038,hhd0:1182,hhd1:532,hhd2:177,hhd3:37,hhd4:1,ou2:839,ou1:706,oc0:343,oc1:36,oc2:5,car0:161,car1:759,car2:778,car3:231,carT:3099,ea:4148,eaT:3356,eaTft:494,eaTpt:2313,eaSe:394,r1052:76,r1053:79,eiT:792,eiR:451,eiS:82,eiH:179,eiD:40,eiO:40},
{n:'pR',c:'Rotherwick',spare1:0,spare2:0,spare3:0,spare4:0,pop:564,area:822.76,density:0.7,males:282,females:282,hholds:202,ph1o65:20,ownO:87,ownM:83,share:0,rentS:8,rentP:23,rentF:1,ph1:34,ph2:82,ph3:33,ph4:41,ph5:11,ph6:1,ph7:0,ph8:0,ttw:426,ttwWfh:44,ttwT:33,ttwB:1,ttwC:169,ttwP:3,ttwF:47,care0:512,care1:43,care2:1,care3:8,health4:327,health3:174,health2:52,health1:6,health0:5,lth0:20,lth1:38,lth2:506,hhd0:138,hhd1:47,hhd2:15,hhd3:2,hhd4:0,ou2:141,ou1:46,oc0:14,oc1:1,oc2:0,car0:5,car1:50,car2:89,car3:58,carT:435,ea:426,eaT:307,eaTft:42,eaTpt:186,eaSe:64,r1052:3,r1053:12,eiT:119,eiR:57,eiS:22,eiH:33,eiD:5,eiO:2},
{n:'pSW',c:'South Warnborough',spare1:0,spare2:0,spare3:0,spare4:0,pop:607,area:1084.76,density:0.6,males:300,females:307,hholds:246,ph1o65:18,ownO:102,ownM:77,share:1,rentS:32,rentP:31,rentF:3,ph1:51,ph2:99,ph3:44,ph4:38,ph5:10,ph6:4,ph7:0,ph8:0,ttw:469,ttwWfh:49,ttwT:18,ttwB:4,ttwC:217,ttwP:4,ttwF:16,care0:539,care1:52,care2:8,care3:8,health4:319,health3:212,health2:60,health1:13,health0:3,lth0:25,lth1:47,lth2:535,hhd0:154,hhd1:69,hhd2:23,hhd3:0,hhd4:0,ou2:161,ou1:55,oc0:26,oc1:4,oc2:0,car0:6,car1:66,car2:115,car3:59,carT:499,ea:469,eaT:332,eaTft:65,eaTpt:165,eaSe:81,r1052:15,r1053:6,eiT:137,eiR:81,eiS:19,eiH:29,eiD:1,eiO:7},
{n:'pW',c:'Winchfield',spare1:0,spare2:0,spare3:0,spare4:0,pop:664,area:705.09,density:0.9,males:353,females:311,hholds:246,ph1o65:15,ownO:95,ownM:98,share:2,rentS:18,rentP:30,rentF:3,ph1:41,ph2:118,ph3:46,ph4:28,ph5:6,ph6:7,ph7:0,ph8:0,ttw:529,ttwWfh:52,ttwT:45,ttwB:2,ttwC:224,ttwP:7,ttwF:8,care0:615,care1:40,care2:2,care3:7,health4:332,health3:240,health2:80,health1:8,health0:4,lth0:45,lth1:61,lth2:558,hhd0:158,hhd1:74,hhd2:14,hhd3:0,hhd4:0,ou2:161,ou1:53,oc0:29,oc1:2,oc2:1,car0:4,car1:76,car2:112,car3:54,carT:492,ea:529,eaT:360,eaTft:67,eaTpt:188,eaSe:83,r1052:10,r1053:12,eiT:169,eiR:71,eiS:9,eiH:20,eiD:30,eiO:39},
{n:'pY',c:'Yateley',spare1:0,spare2:0,spare3:0,spare4:0,pop:20471,area:1100.4,density:18.6,males:10069,females:10402,hholds:7851,ph1o65:745,ownO:2884,ownM:3770,share:29,rentS:559,rentP:564,rentF:45,ph1:1567,ph2:2781,ph3:1486,ph4:1405,ph5:456,ph6:128,ph7:16,ph8:12,ttw:15320,ttwWfh:682,ttwT:407,ttwB:219,ttwC:8444,ttwP:466,ttwF:544,care0:18632,care1:1338,care2:194,care3:307,health4:10456,health3:7360,health2:2089,health1:459,health0:107,lth0:947,lth1:1565,lth2:17959,hhd0:4269,hhd1:2480,hhd2:960,hhd3:132,hhd4:10,ou2:3910,ou1:2505,oc0:1259,oc1:156,oc2:21,car0:568,car1:2623,car2:3299,car3:1361,carT:13889,ea:15320,eaT:11569,eaTft:2415,eaTpt:6676,eaSe:1610,r1052:412,r1053:456,eiT:3751,eiR:2322,eiS:493,eiH:521,eiD:236,eiO:179}
];
 
$scope.cpink= "#f33e6f";
$scope.cblue= "#69D2E7";
$scope.hgreen= "#7ECBA2";
$scope.horange= "#fac090";
$scope.hred= "#C99391";
$scope.hblue= "#81b9da";
var lblr = ["0-20","21-40","41-60","61-80","80+"];
var grn = $scope.hgreen
$scope.chart = [[ {value: $scope.data[0].females, color:$scope.hred},{value: $scope.data[0].males, color:$scope.hblue}],[ {value: $scope.data[1].females, color:$scope.hred},{value: $scope.data[1].males, color:$scope.hblue}],[ {value: $scope.data[2].females, color:$scope.hred},{value: $scope.data[2].males, color:$scope.hblue}],[ {value: $scope.data[3].females, color:$scope.hred},{value: $scope.data[3].males, color:$scope.hblue}],[ {value: $scope.data[4].females, color:$scope.hred},{value: $scope.data[4].males, color:$scope.hblue}],[ {value: $scope.data[5].females, color:$scope.hred},{value: $scope.data[5].males, color:$scope.hblue}],[ {value: $scope.data[6].females, color:$scope.hred},{value: $scope.data[6].males, color:$scope.hblue}],[ {value: $scope.data[7].females, color:$scope.hred},{value: $scope.data[7].males, color:$scope.hblue}],[ {value: $scope.data[8].females, color:$scope.hred},{value: $scope.data[8].males, color:$scope.hblue}],[ {value: $scope.data[9].females, color:$scope.hred},{value: $scope.data[9].males, color:$scope.hblue}],[ {value: $scope.data[10].females, color:$scope.hred},{value: $scope.data[10].males, color:$scope.hblue}],[ {value: $scope.data[11].females, color:$scope.hred},{value: $scope.data[11].males, color:$scope.hblue}],[ {value: $scope.data[12].females, color:$scope.hred},{value: $scope.data[12].males, color:$scope.hblue}],[ {value: $scope.data[13].females, color:$scope.hred},{value: $scope.data[13].males, color:$scope.hblue}],[ {value: $scope.data[14].females, color:$scope.hred},{value: $scope.data[14].males, color:$scope.hblue}],[ {value: $scope.data[15].females, color:$scope.hred},{value: $scope.data[15].males, color:$scope.hblue}],[ {value: $scope.data[16].females, color:$scope.hred},{value: $scope.data[16].males, color:$scope.hblue}],[ {value: $scope.data[17].females, color:$scope.hred},{value: $scope.data[17].males, color:$scope.hblue}],[ {value: $scope.data[18].females, color:$scope.hred},{value: $scope.data[18].males, color:$scope.hblue}],[ {value: $scope.data[19].females, color:$scope.hred},{value: $scope.data[19].males, color:$scope.hblue}],[ {value: $scope.data[20].females, color:$scope.hred},{value: $scope.data[20].males, color:$scope.hblue}]];
$scope.options = { segmentShowStroke : false, animationSteps : 50, animationEasing : "easeOutQuart"} ;

$scope.bchart = [
{labels : lblr,datasets : [{fillColor : grn,data : [922,1205,1236,939,171]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [19,23,51,36,4]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [2315,1963,2331,1505,365]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [424,270,530,434,112]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [1208,1161,1229,386,53]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [48,48,82,92,9]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [1753,1950,1199,261,20]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [445,339,555,268,46]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [145,80,220,147,43]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [4995,4951,6150,4598,1164]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [59,39,88,38,13]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [1154,941,1516,1113,275]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [86,76,105,64,8]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [2104,1745,2497,1155,269]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [313,101,172,90,7]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [138,94,184,148,19]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [1364,1918,1324,802,208]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [138,118,192,99,17]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [140,92,222,139,14]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [125,153,229,143,14]}]},
{labels : lblr,datasets : [{fillColor : grn,data : [5180,4611,6103,4029,548]}]}
];
$scope.befaults = {scaleOverlay : false,scaleLineColor : "rgba(0,0,0,0)",scaleLineWidth : 0,scaleShowLabels : true,scaleLabel : "<%=value%>", scaleFontFamily : "source-sans-pro", scaleFontSize : 13,scaleFontStyle : "itallic",scaleFontColor : "#666",scaleShowGridLines : false,scaleGridLineColor : "rgba(0,0,0,0)",scaleGridLineWidth : 0,barShowStroke : false,barStrokeWidth : 0,barValueSpacing : 1,barDatasetSpacing : 1,animationSteps : 50,animationEasing : "easeOutQuart"};
};
!function(e,t){function n(e,t){for(var n=e.className.split(/\s+/),i=n.length,l=0;i>l;l++)if(n[l]===t){n.splice(l,1);break}i===n.length&&n.push(t),e.className=n.join(" ")}var i=t.getElementById("layout"),l=t.getElementById("menu"),a=t.getElementById("menuLink");a.onclick=function(e){var t="active";e.preventDefault(),n(i,t),n(l,t),n(a,t)}}(this,this.document);            
