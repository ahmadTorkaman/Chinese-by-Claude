/* ========================================
   道德經 · Dao De Jing Practice App
   Chapter Data
   
   To add more chapters, simply add new objects
   to the chapters array following the same format.
   ======================================== */

const chapters = [
  {
    number: 1,
    title: "The Way",
    titleChinese: "道",
    lines: [
      {
        classical: "道可道",
        pinyin: "dào kě dào",
        modern: "可以说出来的道",
        english: "The Way that can be spoken",
        characters: [
          { char: "道", pinyin: "dào", meaning: "way, path, principle" },
          { char: "可", pinyin: "kě", meaning: "can, able to" },
          { char: "道", pinyin: "dào", meaning: "to speak, to tell" }
        ]
      },
      {
        classical: "非常道",
        pinyin: "fēi cháng dào",
        modern: "不是永恒的道",
        english: "is not the eternal Way",
        characters: [
          { char: "非", pinyin: "fēi", meaning: "not, non-" },
          { char: "常", pinyin: "cháng", meaning: "constant, eternal" },
          { char: "道", pinyin: "dào", meaning: "way, path" }
        ]
      },
      {
        classical: "名可名",
        pinyin: "míng kě míng",
        modern: "可以叫出来的名",
        english: "The name that can be named",
        characters: [
          { char: "名", pinyin: "míng", meaning: "name" },
          { char: "可", pinyin: "kě", meaning: "can, able to" },
          { char: "名", pinyin: "míng", meaning: "to name, to call" }
        ]
      },
      {
        classical: "非常名",
        pinyin: "fēi cháng míng",
        modern: "不是永恒的名",
        english: "is not the eternal name",
        characters: [
          { char: "非", pinyin: "fēi", meaning: "not, non-" },
          { char: "常", pinyin: "cháng", meaning: "constant, eternal" },
          { char: "名", pinyin: "míng", meaning: "name" }
        ]
      },
      {
        classical: "无名天地之始",
        pinyin: "wú míng tiān dì zhī shǐ",
        modern: "无名是天地的开始",
        english: "The nameless is the origin of heaven and earth",
        characters: [
          { char: "无", pinyin: "wú", meaning: "without, nothing" },
          { char: "名", pinyin: "míng", meaning: "name" },
          { char: "天", pinyin: "tiān", meaning: "heaven, sky" },
          { char: "地", pinyin: "dì", meaning: "earth, ground" },
          { char: "之", pinyin: "zhī", meaning: "of (possessive particle)" },
          { char: "始", pinyin: "shǐ", meaning: "beginning, origin" }
        ]
      },
      {
        classical: "有名万物之母",
        pinyin: "yǒu míng wàn wù zhī mǔ",
        modern: "有名是万物的母亲",
        english: "The named is the mother of all things",
        characters: [
          { char: "有", pinyin: "yǒu", meaning: "have, exist" },
          { char: "名", pinyin: "míng", meaning: "name" },
          { char: "万", pinyin: "wàn", meaning: "ten thousand, myriad" },
          { char: "物", pinyin: "wù", meaning: "thing, object" },
          { char: "之", pinyin: "zhī", meaning: "of (possessive particle)" },
          { char: "母", pinyin: "mǔ", meaning: "mother" }
        ]
      },
      {
        classical: "故常无欲以观其妙",
        pinyin: "gù cháng wú yù yǐ guān qí miào",
        modern: "所以常常没有欲望，以便观察道的奥妙",
        english: "Thus, always without desire, one observes its subtlety",
        characters: [
          { char: "故", pinyin: "gù", meaning: "therefore, thus" },
          { char: "常", pinyin: "cháng", meaning: "always, constantly" },
          { char: "无", pinyin: "wú", meaning: "without" },
          { char: "欲", pinyin: "yù", meaning: "desire, want" },
          { char: "以", pinyin: "yǐ", meaning: "in order to" },
          { char: "观", pinyin: "guān", meaning: "observe, view" },
          { char: "其", pinyin: "qí", meaning: "its" },
          { char: "妙", pinyin: "miào", meaning: "subtlety, wonder" }
        ]
      },
      {
        classical: "常有欲以观其徼",
        pinyin: "cháng yǒu yù yǐ guān qí jiào",
        modern: "常常有欲望，以便观察道的边界",
        english: "Always with desire, one observes its manifestations",
        characters: [
          { char: "常", pinyin: "cháng", meaning: "always" },
          { char: "有", pinyin: "yǒu", meaning: "have" },
          { char: "欲", pinyin: "yù", meaning: "desire" },
          { char: "以", pinyin: "yǐ", meaning: "in order to" },
          { char: "观", pinyin: "guān", meaning: "observe" },
          { char: "其", pinyin: "qí", meaning: "its" },
          { char: "徼", pinyin: "jiào", meaning: "boundary, manifestation" }
        ]
      }
    ]
  },
  {
    number: 8,
    title: "Water",
    titleChinese: "水",
    lines: [
      {
        classical: "上善若水",
        pinyin: "shàng shàn ruò shuǐ",
        modern: "最高的善像水一样",
        english: "The highest good is like water",
        characters: [
          { char: "上", pinyin: "shàng", meaning: "upper, highest, supreme" },
          { char: "善", pinyin: "shàn", meaning: "good, virtue, excellence" },
          { char: "若", pinyin: "ruò", meaning: "like, as if" },
          { char: "水", pinyin: "shuǐ", meaning: "water" }
        ]
      },
      {
        classical: "水善利万物而不争",
        pinyin: "shuǐ shàn lì wàn wù ér bù zhēng",
        modern: "水善于帮助万物而不与之争",
        english: "Water benefits all things and does not compete",
        characters: [
          { char: "水", pinyin: "shuǐ", meaning: "water" },
          { char: "善", pinyin: "shàn", meaning: "good at, skilled in" },
          { char: "利", pinyin: "lì", meaning: "benefit, profit" },
          { char: "万", pinyin: "wàn", meaning: "ten thousand, myriad" },
          { char: "物", pinyin: "wù", meaning: "things, beings" },
          { char: "而", pinyin: "ér", meaning: "and, yet, but" },
          { char: "不", pinyin: "bù", meaning: "not" },
          { char: "争", pinyin: "zhēng", meaning: "compete, contend" }
        ]
      },
      {
        classical: "处众人之所恶",
        pinyin: "chǔ zhòng rén zhī suǒ wù",
        modern: "它处于众人所厌恶的地方",
        english: "It dwells in places that the masses disdain",
        characters: [
          { char: "处", pinyin: "chǔ", meaning: "dwell, stay, be in" },
          { char: "众", pinyin: "zhòng", meaning: "multitude, masses" },
          { char: "人", pinyin: "rén", meaning: "people, person" },
          { char: "之", pinyin: "zhī", meaning: "of (possessive)" },
          { char: "所", pinyin: "suǒ", meaning: "that which" },
          { char: "恶", pinyin: "wù", meaning: "hate, dislike, disdain" }
        ]
      },
      {
        classical: "故几于道",
        pinyin: "gù jī yú dào",
        modern: "所以最接近于道",
        english: "Therefore it is close to the Way",
        characters: [
          { char: "故", pinyin: "gù", meaning: "therefore, thus" },
          { char: "几", pinyin: "jī", meaning: "nearly, almost, close to" },
          { char: "于", pinyin: "yú", meaning: "to, at, in" },
          { char: "道", pinyin: "dào", meaning: "the Way, Dao" }
        ]
      }
    ]
  },
  {
    number: 81,
    title: "True Words",
    titleChinese: "信言",
    lines: [
      {
        classical: "信言不美",
        pinyin: "xìn yán bù měi",
        modern: "真实的话不华丽",
        english: "Truthful words are not beautiful",
        characters: [
          { char: "信", pinyin: "xìn", meaning: "trust, truth, sincerity" },
          { char: "言", pinyin: "yán", meaning: "words, speech" },
          { char: "不", pinyin: "bù", meaning: "not" },
          { char: "美", pinyin: "měi", meaning: "beautiful, elegant" }
        ]
      },
      {
        classical: "美言不信",
        pinyin: "měi yán bù xìn",
        modern: "华丽的话不真实",
        english: "Beautiful words are not truthful",
        characters: [
          { char: "美", pinyin: "měi", meaning: "beautiful" },
          { char: "言", pinyin: "yán", meaning: "words" },
          { char: "不", pinyin: "bù", meaning: "not" },
          { char: "信", pinyin: "xìn", meaning: "truthful, trustworthy" }
        ]
      },
      {
        classical: "善者不辩",
        pinyin: "shàn zhě bù biàn",
        modern: "善良的人不争辩",
        english: "The good do not argue",
        characters: [
          { char: "善", pinyin: "shàn", meaning: "good, virtuous" },
          { char: "者", pinyin: "zhě", meaning: "one who, person" },
          { char: "不", pinyin: "bù", meaning: "not" },
          { char: "辩", pinyin: "biàn", meaning: "argue, debate" }
        ]
      },
      {
        classical: "辩者不善",
        pinyin: "biàn zhě bù shàn",
        modern: "争辩的人不善良",
        english: "Those who argue are not good",
        characters: [
          { char: "辩", pinyin: "biàn", meaning: "argue, debate" },
          { char: "者", pinyin: "zhě", meaning: "one who" },
          { char: "不", pinyin: "bù", meaning: "not" },
          { char: "善", pinyin: "shàn", meaning: "good" }
        ]
      },
      {
        classical: "知者不博",
        pinyin: "zhī zhě bù bó",
        modern: "有智慧的人不卖弄学问",
        english: "The wise do not show off their learning",
        characters: [
          { char: "知", pinyin: "zhī", meaning: "know, wise" },
          { char: "者", pinyin: "zhě", meaning: "one who" },
          { char: "不", pinyin: "bù", meaning: "not" },
          { char: "博", pinyin: "bó", meaning: "extensive, show off learning" }
        ]
      },
      {
        classical: "博者不知",
        pinyin: "bó zhě bù zhī",
        modern: "卖弄学问的人没有智慧",
        english: "Those who show off are not wise",
        characters: [
          { char: "博", pinyin: "bó", meaning: "extensive, showy" },
          { char: "者", pinyin: "zhě", meaning: "one who" },
          { char: "不", pinyin: "bù", meaning: "not" },
          { char: "知", pinyin: "zhī", meaning: "know, wise" }
        ]
      }
    ]
  }
];

/* ========================================
   HOW TO ADD MORE CHAPTERS:
   
   Copy this template and fill in the data:
   
   {
     number: CHAPTER_NUMBER,
     title: "English Title",
     titleChinese: "中文",
     lines: [
       {
         classical: "古文",
         pinyin: "pinyin with tones",
         modern: "现代汉语翻译",
         english: "English translation",
         characters: [
           { char: "字", pinyin: "zì", meaning: "character meaning" },
           // ... more characters
         ]
       },
       // ... more lines
     ]
   }
   
   ======================================== */
