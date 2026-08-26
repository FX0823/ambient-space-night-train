# 林间小屋声音设计与素材记录

## 场景目标

营造“人在温暖的林间木屋里安静待着”的空间感。窗外是柔和的小树林，室内有轻微炉火与木屋空气感，并以稀疏风铃、小动物脚步和猫呼噜作为生活细节。全程未加入音乐、人声旁白，也未修改视频素材。

## 最终输出

- 成品：`forest-cabin-15min.mp3`
- WAV 母版：`forest-cabin-15min-master.wav`
- 时长：15:00（900 秒）
- 采样率：44.1 kHz
- 声道：立体声
- MP3 码率：约 192 kbps
- MP3 SHA-256：`D00E3A0B7435549AA1AE451F3DD54261CA44FF7FFBF103FB0D5213C7C4FEF1C0`

## 素材与处理记录

| 最终文件名 | 原素材名称 | 来源与作者 | 授权 | 原始时长 | 裁剪/循环 | 主要处理 | 建议默认音量 |
|---|---|---|---|---:|---|---|---:|
| `forest_wind.mp3` | Leaves rustle in the wind | [Freesound](https://freesound.org/people/Cinetony/sounds/575380/) · Cinetony | CC0 | 1:46.000 | 取前 100 秒；8 秒交叉淡化，成品 1:32，可循环 | 高通 65 Hz、低通 3.6 kHz、轻压缩及响度整理 | 38% |
| `morning_birds.mp3` | Morning Birds | [Freesound](https://freesound.org/people/nick121087/sounds/342462/) · nick121087 | CC0 | 1:39.950 | 取前 90 秒；8 秒交叉淡化，成品 1:22，可循环 | 高通 180 Hz、低通 6.2 kHz、降低尖锐感 | 23% |
| `small_fireplace.mp3` | Fireplace Fire Crackling | [Freesound](https://freesound.org/people/RyanKingArt/sounds/717579/) · RyanKingArt | CC0 | 1:00.836 | 5 秒交叉淡化，成品 0:55，可循环 | 高通 55 Hz、低通 4 kHz、削弱爆裂峰值 | 18% |
| `cabin_room_tone.mp3` | 本地生成木屋空间底噪 | 本项目生成，无第三方素材 | 项目自有 | 1:08 生成源 | 8 秒交叉淡化，成品 1:00，可循环 | 棕噪声塑形，高通 45 Hz、低通 6.2 kHz，轻微 130 Hz 暖感 | 12% |
| `wind_chime.wav` | Wind Chime Gentle.mp3 | [Freesound](https://freesound.org/people/_natiKatz/sounds/530603/) · _natiKatz | CC0 / Public Domain | 0:32.024 | 截取 1.7–4.8 秒；不循环 | 只保留轻柔的分离铃声，淡入 0.35 秒、淡出 1.1 秒 | 4% |
| `forest_small_animal.wav` | Animal footsteps on dry leaves | [Freesound](https://freesound.org/people/melle_teich/sounds/628400/) · melle_teich | CC0 | 0:57.457 | 截取 15.8–20.0 秒；不循环 | 高频收敛、降低存在感，淡入 0.7 秒、淡出 1.3 秒 | 2% |
| `cat_purr.mp3` | Cat Purring (long/clear/loud) | [Freesound](https://freesound.org/people/JamesBradford/sounds/579898/) · JamesBradford | CC0 | 0:36.324 | 截取 8–24 秒；不循环 | 限制在 120 Hz–1.7 kHz，显著降低响度，4 秒淡入、5 秒淡出 | 3% |

所有第三方素材均选用 CC0，未使用授权不明确的录音。原始下载文件保存在 `sources/` 子目录，便于后续核验。

## 15 分钟结构

- 0:00–3:00：树叶轻风、木屋底噪、稀疏鸟鸣、很轻炉火。
- 3:03：第一次轻风铃。
- 4:00–6:00：炉火略微增强。
- 5:32：第二次轻风铃。
- 6:33：一次很轻的小动物踩叶细节。
- 8:01：第三次轻风铃。
- 9:00–11:00：树叶风轻微增强，鸟鸣减少。
- 11:07：第四次轻风铃。
- 12:00：一次低音量猫呼噜，长淡入淡出。
- 13:32：最后一次轻风铃。
- 14:00–15:00：鸟鸣减少，回归轻风、炉火与木屋底噪；末尾 10 秒缓慢淡出。

事件间隔经过错开，没有采用固定周期。

## 循环与混音

四条循环层均先制作独立无缝近似循环，再铺满 15 分钟：

- 树叶轻风：基础相对增益 1.35；9:00–11:00 提升至 1.55；14:00 后降至 1.18。
- 清晨鸟鸣：基础相对增益 1.25；9:00–11:00 降至 0.82；14:00 后降至 0.48。
- 小炉火：基础相对增益 1.10；4:00–6:00 提升至 1.30。
- 木屋底噪：相对增益 1.20，保持稳定。

事件层使用独立时间点触发，并带有较长淡入淡出，避免突然出现。总线只进行温和峰值限制，没有过度压缩。成品开头淡入 5 秒，结尾淡出 10 秒。

## 技术检查

- MP3 全文件解码检查通过，无解码错误。
- 15 分钟成品峰值约 -11.2 dBFS，没有削波。
- 不同时间段平均响度约 -27.7 至 -30.7 dBFS，事件不会突然跳响。
- 循环底层均使用交叉淡化，未检测到明显切口；仍建议最终以耳机和手机扬声器各试听一次。

## 后续网页分轨控制建议

适合开放连续音量调节/开关：

- `forest_wind.mp3`
- `morning_birds.mp3`
- `small_fireplace.mp3`
- `cabin_room_tone.mp3`

适合开放“事件开关 + 事件音量”，由程序随机触发：

- `wind_chime.wav`
- `forest_small_animal.wav`
- `cat_purr.mp3`

合并版仅用于直接试听和兜底播放；需要个性化控制时应使用上述独立音轨。

## 网页15分钟独立轨重构

- `forest_wind.mp3`、`small_fireplace.mp3`、`cabin_room_tone.mp3` 已分别重建为准确15:00。每条使用三个错位起点和约 ±0.4% 的轻微速度差，最后使用10秒等功率环形交叉淡化处理整段首尾；平均响度与旧版差不超过0.1 dB。
- `morning_birds.mp3` 已重建为准确15:00的不规则鸟鸣声景：从原82秒处理素材的不同位置选取8段，分别在0:12、1:35、3:30、5:30、7:35、9:50、12:00、13:55进入，并使用2秒淡入、3秒淡出。鸟鸣不再每82秒固定重播。
- 旧版92秒、82秒、55秒和60秒短循环均保留为 `*-v1-short-loop-backup.mp3`。
- 风铃、小动物脚步和猫呼噜仍是独立事件文件，本次未修改。
- 树叶风第二次修正：停用三层同源素材长期叠加方案，将潮汐感版本备份为 `forest_wind-v2-layered-tide-backup.mp3`；新版使用12个不同起点的约90秒片段顺序衔接，段间8秒等功率交叉淡化，并削弱300 Hz、轻微突出2.2 kHz叶片纹理。

## 清晨山林木屋第三版

- 炉火已从网页混音配置移除，不再营造冬季感；未加入汽笛、车辆或道路声音。
- 鸟鸣主轨来源：Pixabay《Birds》，作者 nektaria909 (Freesound)，原始时长 10:36，Pixabay Content License，https://pixabay.com/sound-effects/nature-birds-19624/ 。新版 15:00 只使用一次 20 秒长交叉淡化，并做 10 秒环形交叉淡化。
- 虫鸣来源一：Freesound《CICADAS - 9》，作者 SamuelGremaud，23.510 秒，CC0，https://freesound.org/people/SamuelGremaud/sounds/547473/ 。
- 虫鸣来源二：Freesound《CICADAS - 7》，作者 SamuelGremaud，40.147 秒，CC0，https://freesound.org/people/SamuelGremaud/sounds/543957/ 。
- 虫鸣来源三：Freesound《cicadas.wav》，作者 fraska2，42.192 秒，CC0，https://freesound.org/people/fraska2/sounds/434675/ 。三种虫鸣以 13 个不规则段落分布在 15 分钟中，分别淡入淡出，并保留为独立 `forest_insects.mp3`。
- 木板来源：Freesound《Creaking Wood 4 Steps》，作者 Rudmer_Rotteveel，5.825 秒，CC0，https://freesound.org/people/Rudmer_Rotteveel/sounds/502507/ 。仅截取一声柔和木板响，作为独立事件。
- 杯子来源：Freesound《Setting Down Cup》，作者 Nightflame，20.650 秒，CC0，https://freesound.org/people/Nightflame/sounds/397600/ 。截取两种不同杯子轻放声，分别作为独立事件。
- 窗帘来源：Freesound《curtain.wav》，作者 BraveFrog，2.000 秒，CC0，https://freesound.org/people/BraveFrog/sounds/347237/ 。作为低频率独立事件。
- 阵风轨使用已留档的森林风素材重新编排成 8 阵缓慢进出，每阵约 35–50 秒，中间留出真实安静段；低通至约 3.2 kHz，去除连续油炸般的叶片高频颗粒。
- 鸟鸣、虫鸣、阵风、木屋空气、风铃、木板、杯子和窗帘在网页中保持独立，不并轨。
