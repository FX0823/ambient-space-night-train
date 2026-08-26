window.SCENES = [
  {
    id: "rain-study", name: "雨夜窗边书房",
    audioMode: "stems", tags: ["focus", "relax", "sleep"], featured: true,
    description: "窗外落着雨，屋里留一盏灯。坐下来，慢慢读一会儿书。",
    cover: "./assets/images/rain-study-cover.png", video: "./assets/video/rain-study-loop.mp4",
    fullMixAudio: "./assets/audio/rain-study-15min.mp3",
    tracks: [
      { id: "rain", name: "窗外雨声", url: "./assets/audio/rain-study/tracks/rain_window.mp3", kind: "loop", volume: 0.72, control: true },
      { id: "heater", name: "室内暖气", url: "./assets/audio/rain-study/tracks/room_heater.mp3", kind: "loop", volume: 0.35, control: false },
      { id: "cat", name: "猫叫", url: "./assets/audio/rain-study/tracks/cat_meow.mp3", kind: "event", volume: 0.55, control: true, times: [247, 621] },
      { id: "book", name: "翻书", url: "./assets/audio/rain-study/tracks/book_pages.mp3", kind: "event", volume: 0.7, control: true, times: [142, 317, 529, 764] },
      { id: "thunder", name: "远雷", url: "./assets/audio/rain-study/tracks/distant_thunder.mp3", kind: "event", volume: 0.62, control: true, times: [96, 408, 713] }
    ],
    presets: {
      focus: { rain: 0.72, heater: 0.34, cat: 0.2, book: 0.42, thunder: 0.25 },
      relax: { rain: 0.72, heater: 0.35, cat: 0.55, book: 0.7, thunder: 0.62 },
      sleep: { rain: 0.5, heater: 0.38, cat: 0.14, book: 0.16, thunder: 0.1 }
    }
  },
  {
    id: "snow-room", name: "雪窗暖屋",
    audioMode: "stems", tags: ["relax", "sleep"], featured: false,
    description: "窗外安静落雪，屋里暖意正好。慢一点，也没有关系。",
    cover: "./assets/images/snow-room-cover.png", video: "./assets/video/snow-room-loop-base.mp4",
    fullMixAudio: "./assets/audio/snow-room.mp3",
    tracks: [
      { id: "winter-wind", name: "窗外雪风", url: "./assets/audio/snow-room/tracks/winter_wind.mp3", kind: "loop", volume: 0.65, control: true },
      { id: "heater", name: "取暖器", url: "./assets/audio/snow-room/tracks/heater.mp3", kind: "loop", volume: 0.78, control: true },
      { id: "room", name: "室内空气", url: "./assets/audio/snow-room/tracks/room_ambience.mp3", kind: "loop", volume: 0.7, control: true },
      { id: "rocking-chair", name: "摇椅与生活细节", url: "./assets/audio/snow-room/tracks/rocking_chair.mp3", kind: "event", volume: 0.62, control: true, times: [182, 664] },
      { id: "kettle", name: "烧水", url: "./assets/audio/snow-room/tracks/kettle.mp3", kind: "event", volume: 0.62, control: false, times: [301, 779] },
      { id: "dog", name: "远处小狗", url: "./assets/audio/snow-room/tracks/dog_bark.mp3", kind: "event", volume: 0.5, control: false, times: [424] }
    ],
    presets: {
      focus: { "winter-wind": 0.62, heater: 0.82, room: 0.72, "rocking-chair": 0.25, kettle: 0.28, dog: 0.18 },
      relax: { "winter-wind": 0.68, heater: 0.74, room: 0.7, "rocking-chair": 0.58, kettle: 0.55, dog: 0.42 },
      sleep: { "winter-wind": 0.42, heater: 0.72, room: 0.62, "rocking-chair": 0.12, kettle: 0.08, dog: 0.04 }
    }
  },
  {
    id: "forest-cabin", name: "林间小屋",
    audioMode: "stems", tags: ["focus", "relax"], featured: false,
    description: "阳光穿过树叶，炉火轻轻燃着。听一会儿森林，也听一会儿自己。",
    cover: "./assets/images/forest-room.png", video: "./assets/video/forest-cabin-loop.mp4",
    fullMixAudio: "./assets/audio/forest-cabin/forest-cabin-15min.mp3",
    tracks: [
      { id: "wind", name: "树叶轻风", url: "./assets/audio/forest-cabin/forest_wind.mp3", kind: "loop", volume: 0.72, control: true },
      { id: "birds", name: "清晨鸟鸣", url: "./assets/audio/forest-cabin/morning_birds.mp3", kind: "loop", volume: 0.56, control: true },
      { id: "fire", name: "小炉火", url: "./assets/audio/forest-cabin/small_fireplace.mp3", kind: "loop", volume: 0.6, control: true },
      { id: "room", name: "木屋空气", url: "./assets/audio/forest-cabin/cabin_room_tone.mp3", kind: "loop", volume: 0.6, control: false },
      { id: "chime", name: "轻风铃", url: "./assets/audio/forest-cabin/wind_chime.wav", kind: "event", volume: 0.48, control: true, times: [183, 332, 481, 667, 812] },
      { id: "animal", name: "小动物脚步", url: "./assets/audio/forest-cabin/forest_small_animal.wav", kind: "event", volume: 0.34, control: false, times: [393] },
      { id: "cat", name: "猫呼噜", url: "./assets/audio/forest-cabin/cat_purr.mp3", kind: "event", volume: 0.42, control: false, times: [720] }
    ],
    presets: {
      focus: { wind: 0.72, birds: 0.38, fire: 0.62, room: 0.62, chime: 0.18, animal: 0.2, cat: 0.28 },
      relax: { wind: 0.7, birds: 0.56, fire: 0.58, room: 0.58, chime: 0.48, animal: 0.34, cat: 0.42 },
      sleep: { wind: 0.45, birds: 0.12, fire: 0.6, room: 0.56, chime: 0.08, animal: 0.1, cat: 0.3 }
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
      { id: "details", name: "车厢结构细节", url: "./assets/audio/night-train/carriage_details.mp3", kind: "loop", volume: 0.018, control: false },
      { id: "cup", name: "杯子与桌面", url: "./assets/audio/night-train/cup_detail.wav", kind: "event", volume: 0.34, control: true, times: [280, 710] },
      { id: "cough", name: "远处轻咳", url: "./assets/audio/night-train/cough_detail.wav", kind: "event", volume: 0.55, control: true, times: [430] }
    ],
    presets: {
      focus: { rail: 0.62, rumble: 0.18, carriage: 0.12, air: 0.004, details: 0.02, cup: 0.18, cough: 0.2 },
      relax: { rail: 0.55, rumble: 0.22, carriage: 0.12, air: 0.003, details: 0.018, cup: 0.34, cough: 0.55 },
      sleep: { rail: 0.34, rumble: 0.18, carriage: 0.15, air: 0, details: 0.01, cup: 0.06, cough: 0.06 }
    }
  }
];

