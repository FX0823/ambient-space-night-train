# 蝉鸣午后老屋：声音设计与素材记录

## 输出

- `summer_cicadas.mp3`：6:38，44.1 kHz，双声道，192 kbps，无缝循环。
- `vintage_fan.mp3`：2:00，44.1 kHz，双声道，192 kbps，无缝循环。
- `crt_tv_static.mp3`：约 0:47.7，44.1 kHz，双声道，192 kbps，无缝循环。
- `old_room_tone.mp3`：1:00，44.1 kHz，双声道，192 kbps，无缝循环。
- `summer_leaves.mp3`：3:00，44.1 kHz，双声道，192 kbps，无缝循环。
- `summer_leaves_gust.wav`：7.000 秒；`summer_leaves_gust_alt.wav`：7.599 秒，44.1 kHz PCM；均为一次性树叶阵风事件。
- `summer-afternoon-15min-demo.mp3` 与 `summer-afternoon-15min-master.wav`：15:00。

## 素材与授权

| 最终文件 | 原始素材 | 来源 / 作者 | License | 原始时长 | 裁剪与循环 | 处理 | 默认音量 |
|---|---|---|---|---:|---|---|---:|
| `summer_cicadas.mp3` | Cicada during summer in South of France (1 hour) | [Freesound 536915](https://freesound.org/people/felix.blume/sounds/536915/) / felix.blume | CC0 1.0 | 60:00 | 使用官方 HQ 预览的前约 6:50；12 秒环形交叉淡化后铺成 15 分钟 | 110 Hz 高通、7.2 kHz 低通，约 4.3/6.1 kHz 分别削减，温和峰值压缩 | 35% |
| `summer_cicadas.mp3` 辅层 | Tokyo_Cicada.wav | [Freesound 483360](https://freesound.org/people/sound%20pro/sounds/483360/) / sound pro | CC0 1.0 | 0:23.075 | 3 秒环形交叉淡化，轻微改变速度，仅低比例混入 | 180 Hz 高通、6.5 kHz 低通、5 kHz 柔化 | 包含在蝉鸣主轨内 |
| `vintage_fan.mp3` | 本地程序生成的柔和老风扇低频与空气层 | 本项目生成 | 项目自有 | 2:00 | 原生 2 分钟连续音轨，无短片重复拼接 | 棕色空气层与 56/112 Hz 柔和电机谐波；极轻缓慢转动起伏；不含轴承敲击、启停或按钮声 | 25% |
| `crt_tv_static.mp3` | Analog CRT TV Electronic Static Noise | [Freesound 546047](https://freesound.org/people/grcekh/sounds/546047/) / grcekh | CC0 1.0 | 0:53.695 | 6 秒环形交叉淡化，铺成 15 分钟 | 90 Hz 高通、3.2 kHz 低通、2.2 kHz 削减 4 dB、温和压缩；无对白、音乐或换台声 | 13% |
| `old_room_tone.mp3` | 本地程序生成棕噪房间空气 | 本项目生成 | 项目自有 | 1:00 | 原始单元已做 8 秒环形交叉淡化；铺成 15 分钟 | 45 Hz 高通、3.8 kHz 低通，轻微 180 Hz 暖化 | 15% |
| `summer_leaves.mp3` | Leaves rustle in the wind | [Freesound 575380](https://freesound.org/people/Cinetony/sounds/575380/) / Cinetony | CC0 1.0 | 1:46.000 | 复用已验收的 15 分钟阵风编排，不是持续密集沙沙声 | 100 Hz 高通、2.8 kHz 低通、约 1.55 kHz 削减，温和压缩 | 7% |
| `summer_leaves_gust.wav` / `summer_leaves_gust_alt.wav` | Leaves rustle in the wind | [Freesound 575380](https://freesound.org/people/Cinetony/sounds/575380/) / Cinetony | CC0 1.0 | 1:46.000 | 从两个不同位置各取一段；不循环；Demo 在 3:30 和 10:30 各出现一次 | 120 Hz 高通、2.8–3.0 kHz 低通、约 1.45–1.5 kHz 削减、温和压缩和长淡入淡出 | 轻柔事件层 |

所有第三方素材页面均明确显示 Creative Commons 0。素材来自 Freesound 官方页面公开 HQ 预览；未从视频平台、影视作品或音乐平台提取声音。

## 15 分钟结构

- 0:00–3:00：蝉鸣、风扇和房间空气为主体；CRT 很轻。
- 3:30：第一阵窗外树叶轻风。
- 4:00–7:00：蝉鸣略降，树叶阵风略升。
- 7:10–8:30：CRT 雪花感轻微提高，期间无换台、对白或音乐。
- 10:30：第二阵不同的树叶轻动。
- 11:00–13:30：树叶阵风略升。
- 13:30–15:00：CRT 降低，回归蝉鸣、风扇和房间空气。

所有分段变化均使用 10 秒等功率交叉淡化。持续分轨采用较长无缝单元，避免网页同时加载五条 15 分钟文件；完整 Demo 与 WAV 母版仍为准确 15:00。

## 网页控制

- 用户可调：蝉鸣、老风扇、老电视。
- 系统内部：房间空气、树叶轻风。
- 事件层：两种树叶轻风，不显示长期滑块；睡前模式仅保留极轻存在感。

## 验收

- Demo：15:00、44.1 kHz、192 kbps，平均电平约 -33.9 dBFS，峰值约 -17.4 dBFS。
- WAV 与 MP3 均完成全文件解码，无损坏、削波或解码错误。
- 蝉鸣已削弱刺耳高频并控制突出峰值；CRT 已暗化并限制至 3.2 kHz 以下。
- 未加入音乐、人声旁白、电视对白、蛙鸣、换台声或弹珠声；风扇不再含持续周期性敲击。
