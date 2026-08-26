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
      { id: "marbles", name: "玻璃弹珠", url: "./assets/audio/summer-afternoon-room/glass_marbles.wav", kind: "event", volume: 0.30, control: false, times: [210] },
      { id: "marbles-alt", name: "弹珠轻滚", url: "./assets/audio/summer-afternoon-room/glass_marbles_alt.wav", kind: "event", volume: 0.34, control: false, times: [630] }
    ],
    presets: {
      focus: { cicadas: 0.25, fan: 0.35, television: 0.05, room: 0.2, leaves: 0.1, marbles: 0.1, "marbles-alt": 0 },
      relax: { cicadas: 0.35, fan: 0.25, television: 0.15, room: 0.15, leaves: 0.07, marbles: 0.3, "marbles-alt": 0.34 },
      sleep: { cicadas: 0.15, fan: 0.4, television: 0.08, room: 0.25, leaves: 0.07, marbles: 0, "marbles-alt": 0 }
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
