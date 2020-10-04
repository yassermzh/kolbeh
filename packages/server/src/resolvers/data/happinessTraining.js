const categories = [
  ,
  {
    id: "mindfulness",
    title: "ذهن‌اگاهی",
    description: "لذت بردن از زیبایی‌ها به کمک حواس پنجگانه",
    about: `ذﻫﻦ‌آﮔﺎﻫﯽ ﯾﻌﻨﯽ ﻫﻤﻪ ﺣﻮاﺳﻤﻮن ﺟﻤﻊ ﮐﺎری ﺑﺎﺷﻪ ﮐﻪ ﻫﻤﯿﻦ ﺣﺎﻟﺎ اﻧﺠﺎم ﻣﯿﺪﯾﻢ. اﯾﻦ ﻣﻬﺎرت ﮐﻤﮏ ﻣﯽ ﮐﻨﻪ از ﻟﺤﻈﻪ‌ﻫﺎﻣﻮن ﺑﯿﺸﺘﺮ ﻟﺬت ﺑﺒﺮﯾﻢ و ﺗﻤﺮﮐﺰﻣﻮن ﺑﯿﺸﺘﺮ ﺑﺸﻪ. ﭘﻨﺞ ﺗﻤﺮﯾﻦ ذﻫﻦ‌آﮔﺎﻫﯽ دارﯾﻢ ﮐﻪ ﻣﯽ‌ﺗﻮﻧﯽ اﻧﺠﺎم ﺑﺪی و در ﺟﻌﺒﻪ‌ت ﺑﺬاری. ﭘﺲ روی ﺗﻤﺮﯾﻨﺖ ﮐﻠﯿﮏ ﮐﻦ و ﺑﺰن ﺑﺮﯾﻢ :)`,
    exercises: [
      {
        id: "mindfulness-1",
        title: "زیبای خفته",
        description: `زﯾﺒﺎﯾﯽ‌ﻫﺎی زﯾﺎدی در ﻣﺤﯿﻂ اﻃﺮاف ﻣﺎ وﺟﻮد دارن ﮐﻪ ﻣﺎ ﻫﺮ روز ﺑﯽ دﻗﺖ از ﮐﻨﺎرﺷﻮن رد ﻣﯽ‌ﺷﯿﻢ. اﻣﺮوز ازت ﻣﯽ ﺧﻮام ﮐﻪ ذﻫﻦ‌آﮔﺎﻫﺎﻧﻪ ﺑﻪ اﻃﺮاﻓﺖ ﻧﮕﺎه ﮐﻨﯽ و ﯾﻪ ﭼﯿﺰی ﮐﻪ ﺑﻪ ﻧﻈﺮت زﯾﺒﺎﺳﺖ و از دﯾﺪﻧﺶ ﻟﺬت ﻣﯿﺒﺮی ﭘﯿﺪا ﮐﻨﯽ :)
ﺣﺎﻟﺎ اﺳﻤﺶ رو اﯾﻦ ﭘﺎﯾﯿﻦ ﺑﻨﻮﯾﺲ و اﮔﻪ دوﺳﺖ داری ﺗﻮﺻﯿﻔﺶ ﮐﻦ!
زﯾﺒﺎی ﺧﻔﺘﻪ ﺗﻮ در ﺟﻌﺒﻪ ذﻫﻦ‌آﮔﺎﻫﯿﺖ ﻣﯽ‌ﻣﻮﻧﻪ و ﻣﯽ‌ﺗﻮﻧﯽ ﻫﺮ وﻗﺖ دوﺳﺖ داﺷﺘﯽ ﺑﻪ ﺟﻌﺒﻪ‌ت زﯾﺒﺎﻫﺎی ﺟﺪﯾﺪی اﺿﺎﻓﻪ ﮐﻨﯽ. اﮔﻪ رو ﺟﻌﺒﻪ ﮐﻠﯿﮏ ﮐﻨﯽ ﻣﯽ‌ﺗﻮﻧﯽ ﻣﺤﺘﻮﯾﺎﺗﺶ رو ﺑﺒﯿﻨﯽ.`,
        order: 1,
      },
      {
        id: "mindfulness-2",
        title: "نوای خوش",
        description: `ﺻﺪاﻫﺎی زﯾﺒﺎی زﯾﺎدی در ﻣﺤﯿﻂ اﻃﺮاف ﻣﺎ وﺟﻮد دارن ﮐﻪ ﻣﺎ ﻫﺮ روز ﺑﯽ دﻗﺖ از ﮐﻨﺎرﺷﻮن رد ﻣﯽ‌ﺷﯿﻢ. اﻣﺮوز ازت ﻣﯽ‌ﺧﻮام ﮐﻪ ذﻫﻦ‌آﮔﺎﻫﺎﻧﻪ ﺑﻪ اﻃﺮاﻓﺖﮔﻮش ﮐﻨﯽ و ﯾﻪ ﭼﯿﺰی ﮐﻪ ﺧﻮش آﻫﻨﮕﻪ و از ﺷﻨﯿﺪﻧﺶﻟﺬت ﻣﯽ‌ﺑﺮی ﭘﯿﺪا ﮐﻨﯽ :) ﺣﺎﻟﺎ اﺳﻤﺶ رو اﯾﻦ ﭘﺎﯾﯿﻦ ﺑﻨﻮﯾﺲ و اﮔﻪ دوﺳﺖ داری ﺗﻮﺻﯿﻔﺶ ﮐﻦ! ﻧﻮای ﺧﻮش ﺗﻮ در ﺟﻌﺒﻪ ذﻫﻦ‌آﮔﺎﻫﯿﺖ ﻣﯽ‌ﻣﻮﻧﻪ و ﻣﯽ‌ﺗﻮﻧﯽ ﻫﺮ وﻗﺖ دوﺳﺖ داﺷﺘﯽ ﺑﻪ ﺟﻌﺒﻪ‌ ﻧﻮاﻫﺎی ﺟﺪﯾﺪی اﺿﺎﻓﻪ ﮐﻨﯽ.  اﮔﻪ رو ﺟﻌﺒﻪ ﮐﻠﯿﮏﮐﻨﯽ ﻣﯽ‌ﺗﻮﻧﯽ ﻣﺤﺘﻮﯾﺎﺗﺶ رو ﺑﺒﯿﻨﯽ.`,
        order: 2,
      },
      {
        id: "mindfulness-3",
        title: "نوازشگر",
        description: `ﺑﺎﻓﺖ ﻫﺎی زﯾﺎدی در ﻣﺤﯿﻂ اﻃﺮاف ﻣﺎ وﺟﻮد دارنﮐﻪ ﻣﺎ ﻫﺮ روز ﺑﯽ دﻗﺖ از ﮐﻨﺎرﺷﻮن رد ﻣﯽ‌ﺷﯿﻢ. اﻣﺮوز ازت ﻣﯽ‌ﺧﻮام ﮐﻪ ذﻫﻦ‌آﮔﺎﻫﺎﻧﻪ ﺑﻪ اﻃﺮاﻓﺖدﻗﺖ ﮐﻨﯽ و ﯾﻪ ﭼﯿﺰی ﮐﻪ ﺑﺎﻓﺘﺶ رو دوﺳﺖ داریو از ﻟﻤﺴﺶ ﻟﺬت ﻣﯽ‌ﺑﺮی ﭘﯿﺪا ﮐﻨﯽ :)  ﺣﺎﻟﺎ اﺳﻤﺶ رو اﯾﻦ ﭘﺎﯾﯿﻦ ﺑﻨﻮﯾﺲ و اﮔﻪ دوﺳﺖداری ﺗﻮﺻﯿﻔﺶ ﮐﻦ! ﻧﻮازﺷﮕﺮ ﺗﻮ در ﺟﻌﺒﻪ ذﻫﻦ‌آﮔﺎﻫﯿﺖ ﻣﯽ‌ﻣﻮﻧﻪو ﻣﯽ‌ﺗﻮﻧﯽ ﻫﺮ وﻗﺖ دوﺳﺖ داﺷﺘﯽ ﺑﻪ ﺟﻌﺒﻪ‌تﺑﺎﻓﺖ‌ﻫﺎی ﺟﺪﯾﺪی اﺿﺎﻓﻪ ﮐﻨﯽ.  اﮔﻪ رو ﺟﻌﺒﻪ ﮐﻠﯿﮏﮐﻨﯽ ﻣﯽ‌ﺗﻮﻧﯽ ﻣﺤﺘﻮﯾﺎﺗﺶ رو ﺑﺒﯿﻨﯽ.`,
        order: 3,
      },
      {
        id: "mindfulness-4",
        title: "خوشبو",
        description: `ﻋﻄﺮﻫﺎی زﯾﺎدی در ﻣﺤﯿﻂ اﻃﺮاف ﻣﺎ وﺟﻮد دارن ﮐﻪ ﻣﺎ ﻫﺮ روز ﺑﯽ دﻗﺖ از ﮐﻨﺎرﺷﻮن رد ﻣﯽ‌ﺷﯿﻢ. اﻣﺮوز ازت ﻣﯽ‌ﺧﻮام ﮐﻪ ذﻫﻦ‌آﮔﺎﻫﺎﻧﻪ ﺑﻪ اﻃﺮاﻓﺖ دﻗﺖ ﮐﻨﯽ و ﯾﻪ ﭼﯿﺰی ﮐﻪ ﻋﻄﺮش رو دوﺳﺖ داری و از ﺑﻮ ﮐﺮدﻧﺶ ﻟﺬت ﻣﯽ‌ﺑﺮی ﭘﯿﺪا ﮐﻨﯽ :)  ﺣﺎﻟﺎ اﺳﻤﺶ رو اﯾﻦ ﭘﺎﯾﯿﻦ ﺑﻨﻮﯾﺲ و اﮔﻪ دوﺳﺖ داری ﺗﻮﺻﯿﻔﺶ ﮐﻦ!  ﺧﻮﺷﺒﻮی ﺗﻮ در ﺟﻌﺒﻪ ذﻫﻦ‌آﮔﺎﻫﯿﺖ ﻣﯽ‌ﻣﻮﻧﻪ و ﻣﯽ‌ﺗﻮﻧﯽ ﻫﺮ وﻗﺖ دوﺳﺖ داﺷﺘﯽ ﺑﻪ ﺟﻌﺒﻪ‌ت ﻋﻄﺮﻫﺎی ﺟﺪﯾﺪی اﺿﺎﻓﻪ ﮐﻨﯽ.  اﮔﻪ رو ﺟﻌﺒﻪ ﮐﻠﯿﮏ ﮐﻨﯽ ﻣﯽ‌ﺗﻮﻧﯽ ﻣﺤﺘﻮﯾﺎﺗﺶ رو ﺑﺒﯿﻨﯽ.`,
        order: 4,
      },
      {
        id: "mindfulness-5",
        title: "خوش طعم",
        description: `ﻣﺰه‌ﻫﺎی زﯾﺎدی وﺟﻮد دارن ﮐﻪ ﻣﺎ ﺑﯽ‌دﻗﺖ از ﮐﻨﺎرﺷﻮن رد ﻣﯽ‌ﺷﯿﻢ. اﻣﺮوز ازت ﻣﯽ‌ﺧﻮام ﮐﻪ ذﻫﻦ‌آﮔﺎﻫﺎﻧﻪ ﯾﻪ ﭼﯿﺰی ﮐﻪ ﻣﺰه‌ش رو دوﺳﺖ داری اﻧﺘﺨﺎب ﮐﻨﯽ و ﺑﻪ آراﻣﯽ ﻣﺰه ﻣﺰه ﮐﻨﯽ. ﻃﻌﻤﯽ ﮐﻪ ﻣﺰه ﮐﺮدی رو اﯾﻦ ﭘﺎﯾﯿﻦ ﺑﻨﻮﯾﺲ و اﮔﻪ دوﺳﺖ داری ﺗﻮﺻﯿﻔﺶ ﮐﻦ:) ﺧﻮش ﻃﻌﻢ ﺗﻮ در ﺟﻌﺒﻪ ذﻫﻦ‌آﮔﺎﻫﯿﺖ ﻣﯽ‌ﻣﻮﻧﻪ و ﻣﯽ‌ﺗﻮﻧﯽ ﻫﺮ وﻗﺖ دوﺳﺖ داﺷﺘﯽ ﺑﻪ ﺟﻌﺒﻪ‌ت ﻃﻌﻢ ﻫﺎی ﺟﺪﯾﺪی اﺿﺎﻓﻪ ﮐﻨﯽ. اﮔﻪ رو ﺟﻌﺒﻪ ﮐﻠﯿﮏ ﮐﻨﯽ ﻣﯽ‌ﺗﻮﻧﯽ ﻣﺤﺘﻮﯾﺎﺗﺶ رو ﺑﺒﯿﻨﯽ.`,
        order: 5,
      },
    ],
  },
  {
    id: "optimism",
    title: "مثبت‌اندیشی",
    description: "یافتن خوبی‌ها در دل اتفاقات ناخوشایند",
    about: `ما انتخاب می کنیم به چه چیزهایی توجه کنیم. ما می‌تونیم انتخاب کنیم که چیزها رو مثبت ببینم یا منفی. ما می‌تونیم جوري فکر کنیم و روی چیزايي تمرکز کنیم كه احساسمون رو بهتر كنن. يعني رییس فکرامون باشیم و کنترل شون رو در دست بگیریم `,
    exercises: [
      {
        id: "optimism-1",
        title: "من مثبت",
        description: `به حرف‌هایی که در مورد خودت تو ذهنت میگی فکر کن!
گاهی در شرایط سخت ما حرف های خوبی به خودمون نمی‌گیم.مثلا ممکنه وقتی تنهاییم به خودمون بگیم من دوست داشتنی نیستم. یکی از حرف‌های منفی که اخیرا به خودت گفتی رو پیدا کن و سعی کن تبدیلش کنی به جمله‌ای مثبت. مثلا من دوست داشتنی هستم حتی اگه گاهی تنها بمونم. حالا جمله مثبتت رو این پایین بنویس`,
        order: 1,
      },
      {
        id: "optimism-2",
        title: "دیگران مثبت",
        description: `به حرف‌هایی که در مورد دیگران تو ذهنت میگی فکر کن! 
گاهی در شرایط سخت ما حرف های خوبی در مورد دیگران نمی‌گیم. مثلا ممکنه وقتی دوستمون چواب سلاممون رو  نمیده بگیم از عمد به من بی اعتنایی کرد. یکی از حرف‌های منفی که اخیرا تو ذهنت در مورد دیگران گفتی  رو پیدا کن و سعی کن تبدیلش کنی به جمله‌ای مثبت. مثلا احتمالا اون متوجه من نشده حالا جمله مثبتت رو این پایین بنویس`,
        order: 2,
      },
      {
        id: "optimism-3",
        title: "دنیای مثبت",
        description: `به حرف‌هایی که در مورد زندگی تو ذهنت میگی فکر کن! 
گاهی در شرایط سخت ما حرف های خوبی در مورد زندگی به خودمون نمی‌گیم. مثلا ممکنه وقتی تنهاییم  در ذهنمون بگیم زندگی خیلی غم انگیزه یکی از حرف‌های منفی که اخیرا به خودت در مورد زندگی گفتی رو پیدا کن و سعی کن تبدیلش کنی به جمله‌ای مثبت. مثلا چیزهای خوبی هم داره که بتونم با اون ها خودم رو سرگرم کنم. حالا جمله مثبتت رو این پایین بنویس`,
        order: 3,
      },
      {
        id: "optimism-4",
        title: "نشانه مثبت",
        description:
          "یکی از چیزایی که بهمون کمک میکنه تمرین‌های مثبت بینی رو بیشتر انجام بدیم، اینه که یک وسیله‌ای رو انتخاب کنیم که با دیدنش یاد مثبت اندیشی بیوفتیم و کانال فکرمون رو بذاریم رو مثبت بینی. این نشونه هر چیزی می‌تونه باشه، از سه دونه سنگ بگیر تا نقاشی تا مجسمه تا هر چیز دیگه. نشانه مثبت بینی تو چی میتونه باشه این پایین بنویس",
        order: 4,
      },
      {
        id: "optimism-5",
        title: "شعار مثبت",
        description: `انتخاب یک شعار برای مثبت بینی خیلی وقت‌ها می‌تونه موقع ناراحتی به مثبت اندیشی ما کمک کنه. مثلا شعار مثبت اندیشی کلبه اینه که » درسته که الان خیلی ناراحتم ولی می تونم مثبت‌تر هم فکر کنم.`,
        order: 5,
      },
    ],
  },
  {
    id: "forgiveness",
    title: "کلید بخشش",
    description: "پذیرش و گذشتن از اشتباهات و نقص‌ها",
    about:
      "بخشش یعنی مهربانی کردن با کسی که با ما نامهربان بوده است. یعنی احترام گذاشتن به کسی که به ما بی احترامی کرده است. ما وقتی انتخاب می کنیم ببخشیم یعنی تصمیم میگیریم با کسی که سخاوتمند نبوده سخاوتمند باشیم. بخشش یک مهارت است که با تمرین به دست می‌آید و باعث شادی و آرامش ما می‌شود.",
    exercises: [
      {
        id: "forgiveness-1",
        title: "بخشش من",
        description: `بیا تمرین بخشش رو با مرور خاطراتمون شروع کنیم. آخرین باری که کار اشتباهی انجام دادی و بخشیده شدی کی بوده؟ وقتی بخشیده شدی چه احساسی داشتی؟ کسی که تو رو بخشیده با این که کارت رو دوست نداشته ولی انتخاب کرده که با تو مهربون باشه. حالا اسم کسی رو که تو رو بخشیده این پایین بنویس و اگه دوست داری می تونی یه جمله قشنگ براش بنویسی`,
        order: 1,
      },
      {
        id: "forgiveness-2",
        title: "بخشش دوستانم",
        description: `دوستان ما گاهی خواسته یا ناخواسته ما را ناراحت می کنند. به دوستانت فکر کن کدام رفتار دوستت هست که خیلی آزارت داده و هنوز نبخشیدیش؟ می تونی انتخاب کنی که رفتار دوستت رو ببخشی چون باعث میشه آرومتر بشی و ناراحتیت کمتر شه. یادت باشه بخشیدن به معنی فراموش کردن نیست، بلکه در ذهنت می گی من تصمیم گرفتم بخشیدن رو انتخاب کنم تا آرامش بیشتری داشته باشم. رفتاری که می خوای ببخشی رو این پایین بنویس`,
        order: 2,
      },
      {
        id: "forgiveness-3",
        title: "بخشش غیر دوستان",
        description: `بیگانه‌ها هم گاهی خواسته یا ناخواسته ما را ناراحت می کنند.کدوم رفتار دیگران هست که خیلی آزارت داده و هنوز نبخشیدیش؟ می تونی انتخاب کنی که رفتار او را ببخشی چون باعث میشه آرومتر بشی و ناراحتیت کمتر شه. یادت باشه بخشیدن به معنی فراموش کردن نیست، بلکه در ذهنت می گی من تصمیم گرفتم بخشیدن رو انتخاب کنم تا آرامش بیشتری داشته باشم.رفتاری که می خوای ببخشی رو این پایین بنویس`,
        order: 3,
      },
      {
        id: "forgiveness-4",
        title: "شاه کلید بخشش",
        description: `گاهی برای این که بتونیم تمرین بخشش رو منظم‌تر انجام بدیم مشخص کردن یک نشانه می تونه بهمون یادآوری کنه. من پیشنهاد می‌کنم یک شیء را به عنوان شاه کلید بخششت انتخاب کنی و جلوی چشمت در اتاقت بذاری تا با دیدنش یادت بیاد که بخشش رو انتخاب کنی و تمرینش کنی.شاه کلیدی که انتخاب کردی چیه ؟ این پایین بنویس`,
        order: 4,
      },
      {
        id: "forgiveness-5",
        title: "صندوقچه بخشش",
        description: `برای اینکه متوجه پیشرفتت در بخشش بشی و از این مهارتت لذت بیشتری ببری، من پیشنهاد می کنم یه صندوقچه کوچولو درست کنی و هر رفتاری رو که می بخشی روی کاغذ بنویسی و داخلش بندازی این صندوقچه در واقع نشون دهنده گنج مهر و بخشش توست. صندوقچه‌ای که می خوای بسازی چه شکلی هست؟ این پایین بنویس`,
        order: 5,
      },
    ],
  },
  {
    id: "connection",
    title: "ارتباط دلنشین",
    description: "داشتن ارتباط خوشایند با دیگران",
    about: `ما به ارتباط برقرار کردن احتیاج داریم و ارتباط باعث میشه از هم برای مشکلاتمون کمک بگیریم، از همدیگه چیزی یاد  بگیریم و یا با هم خوش بگذرونیم.ارتباط برقرار کردن همیشه ساده نیست و یه راههایی وجود داره که کمک می کنه ما ارتباط دلنشینتری با دیگران برقرار کنیم`,
    exercises: [
      {
        id: "connection-1",
        title: "دوست دلنشین",
        description: `کمی به رفتار دوستانت فکر کن. ببین از دوستی با کدومشون خیلی لذت می‌بری. دوستت چه ویژگی های خوبی داره که باعث شده تو از دوستیش لذت ببری؟
کدوم یکی از این ویژگی ها رو خودت هم داری؟ این پایین یک ویژگی خوب خودت و یک ویژگی خوب دوستت رو بنویس`,
        order: 1,
      },
      {
        id: "connection-2",
        title: "ابراز احساس",
        description: `دوستی و ارتباط گاهی هم اختلاف نظر و ناراحتی داره. آخرین باری که از دست دوستت ناراحت شدی رو به  یاد بیار. چه احساسی پیدا کرده بودی؟ غمگین؟ عصبانی؟ دلخور؟  یکی از کارایی که کمک می کنه ارتباطمون خوب بمونه اینه که وقتی از دوستمون می رنجیم اول از همه احساسمون رو بهش بگیم. مثلا بگیم من دلخورم.  این پایین احساسی که داشتی رو بنویس. این اولین قدم برای حل اختلافه `,
        order: 2,
      },
      {
        id: "connection-3",
        title: "بیان فکر",
        description: `آخرین باری که از دست دوستت ناراحت شدی رو به یاد بیار. فکرت چی بود؟ ما گاهی به جای بیان فکرمون به طرف مقابل حمله می کنیم. یکی از کارایی که کمک می کنه ارتباطمون خوب بمونه اینه که وقتی از دوستمون می رنجیم بعد از بیان احساسمون فکری که در ذهنمون میگذره رو بیان کنیم. مثلا بگیم من دلخورم و فکر می کنم رفتارت منصفانه نبود.  این پایین فکری که داشتی رو بنویس. این دومین قدم برای حل اختلافه`,
        order: 3,
      },
      {
        id: "connection-4",
        title: "پیام بدن",
        description: `میدونی که ما با بدنمون هم با دیگران ارتباط برقرار می کنیم؟ مثلا وقتی خوشحال یا ناراحتیم چهره مون به دیگران  میگه که چه حالی داریم یا حالت دستامون وقتی عصبانی هستیم ممکنه با دیگران صحبت کنه. برای اینکه با پیام بدن بیشتر آشنا بشی به همراه خانواده یه علامت دست یا صورت برای بیان عصبانیت انتخاب کنین که وقتی از دست هم عصبانی میشید ازش استفاده کنید. علامت رمز عصبانیتتون رو این پایین بنویس`,
        order: 4,
      },
      {
        id: "connection-5",
        title: "لحن دلنشین",
        description: `میدونی که لحن صحبت کردن ما می تونه روی ارتباطمون با دیگران تاثیر بذاره؟ مثلا وقتی عصبانی هستیم ممکنه داد بزنیم و  حرفمون رو بیان کنیم یا وقتی نگرانیم ممکنه صدامون بلرزه. در ارتباط دلنشین مهمه که ما به لحن صحبتمون دقت کنیم و سعی کنیم آرام و مطمئن صحبت کنیم. به لحن اطرافیانت دقت کن. کی لحن آرام و مطمئنی داره این پایین اسمش رو بنویس`,
        order: 5,
      },
    ],
  },
  {
    id: "empathy",
    title: "همدلی",
    description: "درک و توجه به احساسات دیگران",
    exercises: [],
  },
  {
    id: "kindness",
    title: "مهربانی",
    description: "کمک و مهربانی با همه موجودات",
    exercises: [],
  },
  {
    id: "gratitude",
    title: "سپاسگزاری",
    description: "توجه و قدردانی از موهبت‌های زدنگی",
    exercises: [],
  },
  {
    id: "awe",
    title: "شگفتی",
    description: "پیدا کردن احساس شگفتی در زندگی",
    exercises: [],
  },
  {
    id: "resilience",
    title: "تاب‌آوری",
    description: "تمرین صبوری در مقابل سختی‌ها",
    exercises: [],
  },
  {
    id: "self-compassion",
    title: "مهربانی با خود",
    description: "دوست داشتن خود با تمام ویژگی‌ها",
    exercises: [],
  },
].map(({ id, title, about, exercises, description }) => ({
  id: `${id}`,
  title,
  description,
  about,
  image: { url: `/static/images/happiness-category-${id}.png` },
  exercises: exercises || [],
}));

export default {
  categories,
};
