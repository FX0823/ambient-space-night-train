# 海边小城房间：声音设计与素材记录

## 输出

- `distant_ocean_waves.mp3`：约 8:13.955，44.1 kHz，双声道，192 kbps，无缝循环。
- `soft_sea_breeze.mp3`：3:00，44.1 kHz，双声道，192 kbps，无缝循环。
- `seaside_room_tone.mp3`：2:00，44.1 kHz，双声道，192 kbps，无缝循环。
- `curtain_rustle.wav`：3.500 秒，44.1 kHz PCM，不循环。
- `coastal_town_ambience.mp3`：2:00，44.1 kHz，双声道，192 kbps，无缝循环。
- `scooter_pass.wav`：21.000 秒；`scooter_pass_alt.wav`：约 20.303 秒，44.1 kHz PCM，不循环。
- `distant_seabirds.wav` / `distant_seabirds_alt.wav`：各 7.000 秒，44.1 kHz PCM，不循环。
- `coastal-room-15min-demo.mp3` 与 `coastal-room-15min-master.wav`：15:00。

## 素材与授权

| 最终文件 | 原始素材 | 来源 / 作者 | License | 原始时长 | 裁剪与循环 | 处理 | 推荐默认音量 |
|---|---|---|---|---:|---|---|---:|
| `distant_ocean_waves.mp3` | Gentle Shoreline Waves - Generative Ambient (loopable) | [Freesound 852844](https://freesound.org/people/kkenny101/sounds/852844/) / kkenny101 | CC0 1.0 | 8:13.954 | 保留作者制作的完整原生无缝结构；网页循环 | 65 Hz 高通、4.8 kHz 低通、削弱 180 Hz 与 3.3 kHz、温和压缩较大浪峰，使距离后退至二楼房间外 | 45% |
| `soft_sea_breeze.mp3` | 本地程序生成的粉红噪声空气层 | 本项目生成 | 项目自有 | 3:12 生成单元 | 12 秒首尾等功率环形交叉淡化，输出 3:00 无缝单元 | 90 Hz 高通、1.7 kHz 低通、缓慢非周期音量起伏；无麦克风风噪和啸叫 | 20% |
| `seaside_room_tone.mp3` | 本地程序生成的棕噪房间空气 | 本项目生成 | 项目自有 | 2:12 生成单元 | 12 秒首尾等功率环形交叉淡化，输出 2:00 无缝单元 | 45 Hz 高通、2.2 kHz 低通、轻微 180 Hz 暖化 | 15% |
| `curtain_rustle.wav` | Soft Fabric Rustle | [Freesound 850705](https://freesound.org/people/IENBA/sounds/850705/) / IENBA | CC0 1.0 | 0:12.476 | 截取 1.2–4.7 秒；不循环；Demo 出现 4 次 | 180 Hz 高通、3.8 kHz 低通、削弱 1.8 kHz 摩擦感、长淡入淡出 | 低频事件，约 5%–10% 存在感 |
| `coastal_town_ambience.mp3` | A yard with distant city rumble, occasionally construction noise, light wind and birds | [Freesound 477655](https://freesound.org/people/Fonoport/sounds/477655/) / Fonoport | CC0 1.0 | 21:19.099 | 使用官方 HQ 预览前 2:12；12 秒环形交叉淡化，输出 2:00 无缝单元 | 90 Hz 高通、2.4 kHz 低通、压低突发声并限制动态，保持远景小城感 | 5% |
| `scooter_pass.wav` / `scooter_pass_alt.wav` | Motorcycle pass by, distant, nighttime, village | [Freesound 844927](https://freesound.org/people/petruchio_ru/sounds/844927/) / petruchio_ru | CC0 1.0 | 1:49.555 | 截取 77.5–98.5 秒的完整远近经过；不循环；Demo 在 3:30 与 10:30 各一次 | 75–80 Hz 高通、2.25–2.6 kHz 低通、削弱发动机低频；第二次轻微加速、反转声像并更远 | 事件约 5% |
| `distant_seabirds.wav` / `distant_seabirds_alt.wav` | Seagulls distant.wav | [Freesound 537854](https://freesound.org/people/Ambientsoundapp/sounds/537854/) / Ambientsoundapp | CC0 1.0 | 0:30.017 | 分别截取 1–8 秒与 17–24 秒；不循环；Demo 在 6:30 与 13:00 各一次 | 450–500 Hz 高通、4.7–5.2 kHz 低通、削弱约 3 kHz 尖锐感、长淡入淡出 | 事件约 2%–3% |

所有第三方素材页面均明确显示 Creative Commons 0。使用的是 Freesound 官方 HQ 预览；未从视频平台、影视作品或音乐平台提取声音。

## 15 分钟结构

- 0:00–3:00：远处海浪、柔和海风和房间空气为主体；1:20 有一次很轻的纱帘声。
- 3:30：第一辆远处电动车从远到近再离开。
- 4:00–6:30：恢复海浪、海风、房间空气；5:10 有一次纱帘轻动。
- 6:30：第一组很远的海鸟声。
- 7:00–10:00：海风轻微提高，海浪保持稳定；8:40 有一次纱帘轻动。
- 10:30：第二辆更远、速度略有不同的电动车经过。
- 11:00–13:00：回到较安静的海浪、房间空气和轻风。
- 13:00：第二组不同的远处海鸟；13:50 有最后一次纱帘轻动。
- 13:30–15:00：回归海浪、海风和房间空气，安静结束。

海风强弱变化使用 10 秒等功率交叉淡化。持续分轨采用较长无缝单元，避免网页同时加载多条 15 分钟音频造成卡顿；完整 Demo 与 WAV 母版为准确 15:00。

## 网页控制

- 用户可调：海浪、海风、小城声音。
- 系统内部：房间空气、纱帘、电动车、海鸟。
- 专注模式降低事件；放空模式保留完整生活感；睡前模式关闭电动车，仅保留极轻海鸟和纱帘。

## 验收

- 海浪保留自然变化，但较大浪峰已温和压低；没有近距离浪花爆裂和低频轰鸣。
- 海风被限制在 1.7 kHz 以下，没有呼啸、尖锐啸叫或麦克风风噪。
- 电动车 2 次，海鸟 2 次，纱帘 4 次；均使用长淡入淡出，不突然跳出。
- 未加入音乐、人声旁白、清晰对话、鸣笛或密集车流。
- 整体声像保持“人在房间里听远处海面”，不是站在岸边或礁石旁。