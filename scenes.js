window.SCENES = [
  {
    id: "rain-study", name: "雨夜窗边书房",
    audioMode: "stems", tags: ["focus", "relax", "sleep"], featured: true,
    description: "窗外落着雨，屋里留一盏灯。坐下来，慢慢读一会儿书。",
    cover: "./assets/images/rain-study-cover.png", video: "./assets/video/rain-study-loop.mp4",
    fullMixAudio: "./assets/audio/rain-study-15min.mp3",
    tracks: [
      { id: "rain", name: "窗外雨声", url: "./assets/audio/rain-study/tracks/rain_window.mp3", kind: "loop", volume: 0.72, control: true },
      { id: "heater", name: "室内暖气", url: "./assets/audio/rain-study/tracks/room_heater.mp3", kind: "loop", volume: 0.78, control: true },
      { id: "cat", name: "猫叫", url: "./assets/audio/rain-study/tracks/cat_meow.mp3", kind: "event", volume: 0.55, control: true, times: [94, 418, 704] },
      { id: "book", name: "翻书", url: "./assets/audio/rain-study/tracks/book_pages.mp3", kind: "event", volume: 0.7, control: true, times: [18, 82, 149, 218, 294, 371, 449, 532, 618, 707, 795, 872] },
      { id: "thunder", name: "远雷", url: "./assets/audio/rain-study/tracks/distant_thunder.mp3", kind: "event", volume: 0.62, control: true, times: [50, 165, 260, 390, 505, 650, 750, 835] }
    ],
    presets: {
      focus: { rain: 0.72, heater: 0.68, cat: 0.2, book: 0.42, thunder: 0.25 },
      relax: { rain: 0.72, heater: 0.78, cat: 0.55, book: 0.7, thunder: 0.62 },
      sleep: { rain: 0.5, heater: 0.84, cat: 0.14, book: 0.16, thunder: 0.1 }
    }
  },
  {
    id: "snow-room", name: "雪窗暖屋",
    audioMode: "stems", tags: ["relax", "sleep"], featured: false,
    description: "窗外安静落雪，屋里暖意正好。慢一点，也没有关系。",
    cover: "./assets/images/snow-room-cover.png", video: "./assets/video/snow-room-loop-base.mp4",
    fullMixAudio: "./assets/audio/snow-room.mp3",
    tracks: [
      { id: "winter-wind", name: "窗外雪风", url: "./assets/audio/snow-room/tracks/window_snow_texture.mp3", kind: "loop", volume: 0.58, control: true },
      { id: "heater", name: "室内取暖器", url: "./assets/audio/snow-room/tracks/heater.mp3", kind: "loop", volume: 0.5, control: true },
      { id: "wood", name: "木质摇椅", url: "./assets/audio/snow-room/tracks/wood_creak.mp3", kind: "event", volume: 0.78, control: true, times: [25, 198, 430, 690, 852] },
      { id: "kettle", name: "烧开水", url: "./assets/audio/snow-room/tracks/kettle_boil_clear.mp3", kind: "event", volume: 0.42, control: true, times: [72, 332, 615, 805] },
      { id: "cup", name: "杯子轻放", url: "./assets/audio/snow-room/tracks/cup_detail.mp3", kind: "event", volume: 0.32, control: true, times: [122, 385, 568, 748] },
      { id: "dog", name: "远处小狗", url: "./assets/audio/snow-room/tracks/dog_bark.mp3", kind: "event", volume: 0.62, control: true, times: [270, 665] }
    ],
    presets: {
      focus: { "winter-wind": 0.52, heater: 0.42, wood: 0.42, kettle: 0.28, cup: 0.2, dog: 0.16 },
      relax: { "winter-wind": 0.58, heater: 0.5, wood: 0.78, kettle: 0.42, cup: 0.32, dog: 0.62 },
      sleep: { "winter-wind": 0.3, heater: 0.54, wood: 0.1, kettle: 0.06, cup: 0.06, dog: 0.02 }
    }
  },
  {
    id: "forest-cabin", name: "林间小屋",
    audioMode: "stems", tags: ["focus", "relax"], featured: false,
    description: "清晨的阳光穿过树叶，鸟鸣从窗外传来。木屋慢慢醒来，空气清爽而安静。",
    cover: "./assets/images/forest-room.png", video: "./assets/video/forest-cabin-loop.mp4",
    fullMixAudio: "./assets/audio/forest-cabin/forest-cabin-15min.mp3",
    tracks: [
      { id: "birds", name: "清晨鸟鸣", url: "./assets/audio/forest-cabin/morning_birds.mp3", kind: "loop", volume: 0.68, control: true },
      { id: "insects", name: "林间虫鸣", url: "./assets/audio/forest-cabin/forest_insects.mp3", kind: "loop", volume: 0.42, control: true },
      { id: "wind", name: "阵阵树风", url: "./assets/audio/forest-cabin/forest_wind.mp3", kind: "loop", volume: 0.42, control: true },
      { id: "room", name: "木屋空气", url: "./assets/audio/forest-cabin/cabin_room_tone.mp3", kind: "loop", volume: 0.45, control: false },
      { id: "chime", name: "轻风铃", url: "./assets/audio/forest-cabin/wind_chime.wav", kind: "event", volume: 0.44, control: true, times: [96, 302, 515, 741, 875] },
      { id: "wood", name: "木板轻响", url: "./assets/audio/forest-cabin/cabin_wood_creak.wav", kind: "event", volume: 0.24, control: true, times: [65, 248, 426, 697, 842] },
      { id: "cup", name: "杯子轻放", url: "./assets/audio/forest-cabin/cabin_cup.wav", kind: "event", volume: 0.3, control: true, times: [139, 588] },
      { id: "cup-alt", name: "杯子轻碰", url: "./assets/audio/forest-cabin/cabin_cup_alt.wav", kind: "event", volume: 0.26, control: false, times: [335, 779] },
      { id: "curtain", name: "窗帘轻动", url: "./assets/audio/forest-cabin/cabin_curtain.wav", kind: "event", volume: 0.18, control: false, times: [25, 450] },
      { id: "animal", name: "小动物脚步", url: "./assets/audio/forest-cabin/forest_small_animal.wav", kind: "event", volume: 0.34, control: false, times: [393] },
      { id: "cat", name: "猫呼噜", url: "./assets/audio/forest-cabin/cat_purr.mp3", kind: "event", volume: 0.42, control: false, times: [720] }
    ],
    presets: {
      focus: { birds: 0.56, insects: 0.3, wind: 0.32, room: 0.42, chime: 0.16, wood: 0.14, cup: 0.16, "cup-alt": 0.14, curtain: 0.1, animal: 0.16, cat: 0.2 },
      relax: { birds: 0.68, insects: 0.42, wind: 0.42, room: 0.45, chime: 0.44, wood: 0.24, cup: 0.3, "cup-alt": 0.26, curtain: 0.18, animal: 0.34, cat: 0.42 },
      sleep: { birds: 0.16, insects: 0.16, wind: 0.2, room: 0.48, chime: 0.06, wood: 0.05, cup: 0.05, "cup-alt": 0.04, curtain: 0.04, animal: 0.08, cat: 0.22 }
    }
  },
  {
    id: "summer-afternoon-room", name: "蝉鸣午后老屋",
    audioMode: "stems", tags: ["focus", "relax", "sleep"], featured: false,
    description: "蝉鸣落在窗外，老风扇慢慢转着。像小时候暑假里一个安静、昏昏欲睡的下午。",
    cover: "./assets/images/summer-afternoon-room-cover.jpg",
    video: "./assets/video/summer-afternoon-room/summer-afternoon-room.mp4",
    fullMixAudio: "./assets/audio/summer-afternoon-room/summer-afternoon-15min-demo.mp3",
    tracks: [
      { id: "cicadas", name: "夏日蝉鸣", url: "./assets/audio/summer-afternoon-room/summer_cicadas.mp3", kind: "loop", volume: 0.35, control: true },
      { id: "fan", name: "老式风扇", url: "./assets/audio/summer-afternoon-room/vintage_fan.mp3", kind: "loop", volume: 0.25, control: true },
      { id: "television", name: "老电视雪花", url: "./assets/audio/summer-afternoon-room/crt_tv_static.mp3", kind: "loop", volume: 0.13, control: true },
      { id: "room", name: "老屋空气", url: "./assets/audio/summer-afternoon-room/old_room_tone.mp3", kind: "loop", volume: 0.15, control: false },
      { id: "leaves", name: "窗外树叶", url: "./assets/audio/summer-afternoon-room/summer_leaves.mp3", kind: "loop", volume: 0.07, control: false },
      { id: "leaves-gust", name: "树叶阵风", url: "./assets/audio/summer-afternoon-room/summer_leaves_gust.wav", kind: "event", volume: 0.42, control: false, times: [210] },
      { id: "leaves-gust-alt", name: "树叶轻动", url: "./assets/audio/summer-afternoon-room/summer_leaves_gust_alt.wav", kind: "event", volume: 0.46, control: false, times: [630] }
    ],
    presets: {
      focus: { cicadas: 0.25, fan: 0.35, television: 0.05, room: 0.2, leaves: 0.1, "leaves-gust": 0.18, "leaves-gust-alt": 0 },
      relax: { cicadas: 0.35, fan: 0.25, television: 0.15, room: 0.15, leaves: 0.07, "leaves-gust": 0.42, "leaves-gust-alt": 0.46 },
      sleep: { cicadas: 0.15, fan: 0.4, television: 0.08, room: 0.25, leaves: 0.07, "leaves-gust": 0.08, "leaves-gust-alt": 0.06 }
    }
  },
  {
    id: "coastal-room", name: "海边小城房间",
    audioMode: "stems", tags: ["focus", "relax", "sleep"], featured: false,
    description: "坐在二楼的小房间里，海浪从远处传来，纱帘偶尔被海风轻轻带动。",
    cover: "./assets/images/coastal-room-cover.jpg",
    video: "./assets/video/coastal-room/coastal-room.mp4",
    fullMixAudio: "./assets/audio/coastal-room/coastal-room-15min-demo.mp3",
    tracks: [
      { id: "waves", name: "远处海浪", url: "./assets/audio/coastal-room/distant_ocean_waves.mp3", kind: "loop", volume: 0.45, control: true },
      { id: "breeze", name: "柔和海风", url: "./assets/audio/coastal-room/soft_sea_breeze.mp3", kind: "loop", volume: 0.20, control: true },
      { id: "town", name: "小城声音", url: "./assets/audio/coastal-room/coastal_town_ambience.mp3", kind: "loop", volume: 0.05, control: true },
      { id: "room", name: "房间空气", url: "./assets/audio/coastal-room/seaside_room_tone.mp3", kind: "loop", volume: 0.15, control: false },
      { id: "curtain", name: "纱帘轻动", url: "./assets/audio/coastal-room/curtain_rustle.wav", kind: "event", volume: 0.48, control: false, times: [75, 250, 340, 470, 590, 710, 860] },
      { id: "scooter", name: "远处电动车", url: "./assets/audio/coastal-room/scooter_pass.wav", kind: "event", volume: 0.34, control: false, times: [205, 755] },
      { id: "scooter-alt", name: "电动车经过", url: "./assets/audio/coastal-room/scooter_pass_alt.wav", kind: "event", volume: 0.36, control: false, times: [500] },
      { id: "seabirds", name: "远处海鸟", url: "./assets/audio/coastal-room/distant_seabirds.wav", kind: "event", volume: 0.82, control: false, times: [140, 650] },
      { id: "seabirds-alt", name: "远处海鸟轻鸣", url: "./assets/audio/coastal-room/distant_seabirds_alt.wav", kind: "event", volume: 0.78, control: false, times: [390, 820] }
    ],
    presets: {
      focus: { waves: 0.45, breeze: 0.15, town: 0.05, room: 0.25, curtain: 0.25, scooter: 0.12, "scooter-alt": 0.12, seabirds: 0.25, "seabirds-alt": 0.20 },
      relax: { waves: 0.45, breeze: 0.25, town: 0.10, room: 0.15, curtain: 0.40, scooter: 0.34, "scooter-alt": 0.36, seabirds: 0.82, "seabirds-alt": 0.78 },
      sleep: { waves: 0.55, breeze: 0.10, town: 0.03, room: 0.25, curtain: 0.18, scooter: 0, "scooter-alt": 0, seabirds: 0.08, "seabirds-alt": 0.06 }
    }
  },
  {
    id: "new-year-kitchen", name: "年夜饭前的厨房",
    audioMode: "stems", tags: ["focus", "relax", "sleep"], featured: false,
    description: "除夕夜的厨房热气腾腾，锅里慢慢咕嘟着。家人在镜头外备菜，客厅的电视和窗外年味远远陪着。",
    cover: "./assets/images/new-year-kitchen-cover.jpg",
    video: "./assets/video/new-year-kitchen/new-year-kitchen.mp4",
    fullMixAudio: "./assets/audio/new-year-kitchen/new-year-kitchen-15min-demo.mp3",
    controlGroups: [
      { id: "kitchen", name: "厨房忙碌", volume: 0.60, members: { simmer: 0.50, steam: 0.017, chopping: 0.82, "chopping-alt": 0.82, "chopping-slow": 0.86, washing: 0.74, "washing-alt": 0.74, clink: 0.96, "clink-alt": 0.96, lid: 0.90 } },
      { id: "television", name: "电视陪伴", volume: 0.20, members: { tv: 2.75 } },
      { id: "festive", name: "窗外年味", volume: 0.20, members: { fireworks: 4, "fireworks-alt": 4, "fireworks-soft": 4, firecrackers: 5, "firecrackers-alt": 5 } }
    ],
    tracks: [
      { id: "simmer", name: "炖锅咕嘟", url: "./assets/audio/new-year-kitchen/gentle_simmer.mp3", kind: "loop", volume: 0.30, control: false },
      { id: "room", name: "厨房空气", url: "./assets/audio/new-year-kitchen/kitchen_room_tone.mp3", kind: "loop", volume: 0.08, control: false },
      { id: "hum", name: "灶具低频", url: "./assets/audio/new-year-kitchen/kitchen_hum.mp3", kind: "loop", volume: 0.08, control: false },
      { id: "steam", name: "柔和蒸汽", url: "./assets/audio/new-year-kitchen/steam_soft.mp3", kind: "loop", volume: 0.01, control: false },
      { id: "tv", name: "远处电视", url: "./assets/audio/new-year-kitchen/distant_tv_gala.mp3", kind: "loop", volume: 0.55, control: false },
      { id: "chopping", name: "镜头外切菜", url: "./assets/audio/new-year-kitchen/soft_chopping.wav", kind: "event", volume: 0.50, control: false, times: [45, 535] },
      { id: "chopping-alt", name: "切菜变化", url: "./assets/audio/new-year-kitchen/soft_chopping_alt.wav", kind: "event", volume: 0.50, control: false, times: [185, 770] },
      { id: "chopping-slow", name: "稍慢切菜", url: "./assets/audio/new-year-kitchen/soft_chopping_slow.wav", kind: "event", volume: 0.52, control: false, times: [345] },
      { id: "washing", name: "水槽洗碗", url: "./assets/audio/new-year-kitchen/dish_washing.wav", kind: "event", volume: 0.44, control: false, times: [115, 670] },
      { id: "washing-alt", name: "洗碗变化", url: "./assets/audio/new-year-kitchen/dish_washing_alt.wav", kind: "event", volume: 0.44, control: false, times: [410] },
      { id: "clink", name: "碗碟轻碰", url: "./assets/audio/new-year-kitchen/dish_clink.wav", kind: "event", volume: 0.58, control: false, times: [20, 245, 465, 650, 835] },
      { id: "clink-alt", name: "盘子轻放", url: "./assets/audio/new-year-kitchen/dish_clink_alt.wav", kind: "event", volume: 0.60, control: false, times: [95, 315, 585, 730] },
      { id: "lid", name: "锅盖细节", url: "./assets/audio/new-year-kitchen/pot_lid_detail.wav", kind: "event", volume: 0.55, control: false, times: [75, 280, 500, 625, 805] },
      { id: "fireworks", name: "远处烟花", url: "./assets/audio/new-year-kitchen/distant_fireworks.wav", kind: "event", volume: 0.78, control: false, times: [210, 690] },
      { id: "fireworks-alt", name: "烟花远响", url: "./assets/audio/new-year-kitchen/distant_fireworks_alt.wav", kind: "event", volume: 0.80, control: false, times: [360, 825] },
      { id: "fireworks-soft", name: "很远烟花", url: "./assets/audio/new-year-kitchen/distant_fireworks_soft.wav", kind: "event", volume: 0.72, control: false, times: [540] },
      { id: "firecrackers", name: "远处爆竹", url: "./assets/audio/new-year-kitchen/distant_firecrackers.wav", kind: "event", volume: 0.82, control: false, times: [32, 305, 625, 815] },
      { id: "firecrackers-alt", name: "更远爆竹", url: "./assets/audio/new-year-kitchen/distant_firecrackers_alt.wav", kind: "event", volume: 0.78, control: false, times: [155, 470, 720] }
    ],
    presets: {
      focus: { kitchen: 0.55, television: 0.08, festive: 0.10, room: 0.10, hum: 0.09, chopping: 0.30, "chopping-alt": 0.26, "chopping-slow": 0.30, washing: 0.26, "washing-alt": 0.24, clink: 0.30, "clink-alt": 0.30, lid: 0.26, fireworks: 0.32, "fireworks-alt": 0.30, "fireworks-soft": 0.34, firecrackers: 0.16, "firecrackers-alt": 0.14 },
      relax: { kitchen: 0.60, television: 0.20, festive: 0.20, room: 0.08, hum: 0.08 },
      sleep: { kitchen: 0.45, television: 0.08, festive: 0.05, room: 0.12, hum: 0.10, chopping: 0, "chopping-alt": 0, "chopping-slow": 0, washing: 0, "washing-alt": 0, clink: 0, "clink-alt": 0, lid: 0, fireworks: 0, "fireworks-alt": 0, "fireworks-soft": 0.16, firecrackers: 0, "firecrackers-alt": 0 }
    }
  },
  {
    id: "afternoon-shop", name: "午后小卖部",
    audioMode: "stems", tags: ["focus", "relax", "sleep"], featured: false,
    description: "坐在敞着门的老小卖部里，风扇慢慢吹着，树荫下有鸟虫鸣，巷口偶尔传来孩子和自行车的声音。",
    cover: "./assets/images/afternoon-shop-cover.jpg",
    video: "./assets/video/afternoon-shop/afternoon-shop.mp4",
    fullMixAudio: "./assets/audio/afternoon-shop/afternoon-shop-15min-demo.mp3",
    controlGroups: [
      { id: "fan", name: "风扇", volume: 0.34, members: { "shop-fan": 1 } },
      { id: "freezer", name: "冰柜", volume: 0.24, members: { "freezer-hum": 1 } },
      { id: "birds", name: "鸟鸣", volume: 0.14, members: { "shop-birds": 1 } },
      { id: "insects", name: "虫鸣", volume: 0.10, members: { "shop-insects": 1 } },
      { id: "street", name: "街道", volume: 0.24, members: { "street-bed": 0.33, leaves: 0.29, scooter: 1, bicycle: 1, bell: 0.63, "bell-alt": 0.58 } },
      { id: "life", name: "生活细节", volume: 0.30, members: { "shop-radio": 0.17, children: 1, "children-alt": 1, bottle: 0.67, plastic: 1, coin: 0.83 } }
    ],
    tracks: [
      { id: "freezer-hum", name: "冰柜低频", url: "./assets/audio/afternoon-shop/shop_freezer_hum.mp3", kind: "loop", volume: 0.24, control: false },
      { id: "shop-fan", name: "老式风扇", url: "./assets/audio/afternoon-shop/old_shop_fan.mp3", kind: "loop", volume: 0.34, control: false },
      { id: "street-bed", name: "社区空气", url: "./assets/audio/afternoon-shop/afternoon_street.mp3", kind: "loop", volume: 0.08, control: false },
      { id: "leaves", name: "树叶微风", url: "./assets/audio/afternoon-shop/street_leaves_breeze.mp3", kind: "loop", volume: 0.07, control: false },
      { id: "shop-radio", name: "远处收音机", url: "./assets/audio/afternoon-shop/distant_shop_radio.mp3", kind: "loop", volume: 0.05, control: false },
      { id: "shop-birds", name: "午后鸟鸣", url: "./assets/audio/afternoon-shop/shop_birds.mp3", kind: "loop", volume: 0.14, control: false },
      { id: "shop-insects", name: "夏日虫鸣", url: "./assets/audio/afternoon-shop/shop_insects.mp3", kind: "loop", volume: 0.10, control: false },
      { id: "scooter", name: "远处电动车", url: "./assets/audio/afternoon-shop/scooter_pass.wav", kind: "event", volume: 0.24, control: false, times: [200, 790] },
      { id: "bicycle", name: "自行车经过", url: "./assets/audio/afternoon-shop/scooter_pass_alt.wav", kind: "event", volume: 0.24, control: false, times: [560] },
      { id: "children", name: "远处孩子玩耍", url: "./assets/audio/afternoon-shop/distant_children.wav", kind: "event", volume: 0.34, control: false, times: [150, 740] },
      { id: "children-alt", name: "巷口孩子声音", url: "./assets/audio/afternoon-shop/distant_children_alt.wav", kind: "event", volume: 0.32, control: false, times: [450] },
      { id: "bell", name: "自行车铃", url: "./assets/audio/afternoon-shop/bicycle_bell.wav", kind: "event", volume: 0.15, control: false, times: [196, 786] },
      { id: "bell-alt", name: "自行车铃变化", url: "./assets/audio/afternoon-shop/bicycle_bell_alt.wav", kind: "event", volume: 0.14, control: false, times: [556] },
      { id: "bottle", name: "玻璃瓶轻碰", url: "./assets/audio/afternoon-shop/glass_bottle_clink.wav", kind: "event", volume: 0.20, control: false, times: [390, 705] },
      { id: "plastic", name: "包装袋轻响", url: "./assets/audio/afternoon-shop/plastic_bag_rustle.wav", kind: "event", volume: 0.30, control: false, times: [340, 630] },
      { id: "coin", name: "柜台硬币", url: "./assets/audio/afternoon-shop/counter_coin.wav", kind: "event", volume: 0.25, control: false, times: [630.5] }
    ],
    presets: {
      focus: { fan: 0.38, freezer: 0.26, birds: 0.10, insects: 0.07, street: 0.15, life: 0.10 },
      relax: { fan: 0.34, freezer: 0.24, birds: 0.14, insects: 0.10, street: 0.24, life: 0.30 },
      sleep: { fan: 0.42, freezer: 0.32, birds: 0.04, insects: 0.03, street: 0.06, life: 0 }
    }
  },
  {
    id: "night-train", name: "夜行列车",
    audioMode: "stems", tags: ["focus", "relax", "sleep"], featured: false,
    description: "坐在缓慢前行的夜班列车里，听轮轨规律经过，也听见车厢偶尔的生活声。",
    cover: "./assets/images/night-train-cover.jpg",
    video: "./assets/video/night-train/night-train-visual-15min-7x3.mp4",
    tracks: [
      { id: "rail", name: "轮轨节奏", url: "./assets/audio/night-train/rail_clicks.mp3", kind: "loop", volume: 0.55, control: true },
      { id: "rumble", name: "列车低频", url: "./assets/audio/night-train/train_low_rumble.mp3", kind: "loop", volume: 0.22, control: true },
      { id: "carriage", name: "车厢空气", url: "./assets/audio/night-train/carriage_room_tone.mp3", kind: "loop", volume: 0.12, control: true },
      { id: "air", name: "窗外空气", url: "./assets/audio/night-train/window_air_motion.mp3", kind: "loop", volume: 0.003, control: true },
      { id: "details", name: "车厢结构细节", url: "./assets/audio/night-train/carriage_details.mp3", kind: "loop", volume: 0.045, control: false },
      { id: "horn", name: "远处汽笛", url: "./assets/audio/night-train/distant_horn.wav", kind: "event", volume: 0.65, control: true, times: [205, 520, 865] },
      { id: "door", name: "车厢滑门", url: "./assets/audio/night-train/sliding_door.wav", kind: "event", volume: 0.4, control: true, times: [155, 375, 600, 805] },
      { id: "steps", name: "走廊脚步", url: "./assets/audio/night-train/corridor_footsteps.wav", kind: "event", volume: 0.72, control: true, times: [55, 225, 395, 565, 775] },
      { id: "seat-1", name: "座椅衣料", url: "./assets/audio/night-train/seat_shift_1.wav", kind: "event", volume: 0.65, control: false, times: [25, 345, 665] },
      { id: "seat-2", name: "乘客轻动", url: "./assets/audio/night-train/seat_shift_2.wav", kind: "event", volume: 0.72, control: false, times: [95, 415, 735] },
      { id: "seat-3", name: "衣料轻响", url: "./assets/audio/night-train/seat_shift_3.wav", kind: "event", volume: 0.78, control: false, times: [185, 505, 825] },
      { id: "cup", name: "杯子与桌面", url: "./assets/audio/night-train/cup_detail.wav", kind: "event", volume: 0.72, control: true, times: [120, 300, 485, 680, 845] },
      { id: "cough", name: "远处轻咳", url: "./assets/audio/night-train/cough_detail.wav", kind: "event", volume: 0.8, control: true, times: [270, 540, 750] }
    ],
    presets: {
      focus: { rail: 0.62, rumble: 0.18, carriage: 0.12, air: 0.004, details: 0.04, horn: 0.28, door: 0.22, steps: 0.4, "seat-1": 0.34, "seat-2": 0.38, "seat-3": 0.4, cup: 0.42, cough: 0.35 },
      relax: { rail: 0.55, rumble: 0.22, carriage: 0.12, air: 0.003, details: 0.045, horn: 0.65, door: 0.4, steps: 0.72, "seat-1": 0.65, "seat-2": 0.72, "seat-3": 0.78, cup: 0.72, cough: 0.8 },
      sleep: { rail: 0.34, rumble: 0.18, carriage: 0.15, air: 0, details: 0.015, horn: 0.08, door: 0.07, steps: 0.1, "seat-1": 0.1, "seat-2": 0.1, "seat-3": 0.1, cup: 0.08, cough: 0.08 }
    }
  }
];
