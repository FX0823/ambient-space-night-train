# 年夜饭前的厨房：音频来源与处理记录

## 授权结论

所有第三方实录均来自 Freesound，素材页面标注为 **Creative Commons 0（CC0）**。远处电视、厨房空气、灶具低频和柔和蒸汽为本项目自行生成；电视层只使用原创文本的合成语音，不含真实电视节目、春晚、小品、歌曲、第三方人物对白或受版权保护的节目音频。视频原声未被提取或用于正式音轨。

## 独立音轨

### `gentle_simmer.mp3`

- 原始素材：simmering sauce
- 作者：bittermelonheart
- 来源：Freesound
- 页面：https://freesound.org/people/bittermelonheart/sounds/560564/
- License：CC0
- 原始时长：71.110 秒
- 最终时长：177.332 秒
- 处理：替换第一版偏细碎、容易被误听为油炸的汤锅录音；以三个轻微速度差异版本组合，段间 12 秒等功率交叉淡化；削弱 1.35 kHz 以上的持续滋滋高频，增强约 260 Hz 的湿润锅体与气泡感，并制作 12 秒环形首尾衔接。
- 裁剪：是
- 循环：是，适合网页循环
- 推荐默认音量：30%

### `kitchen_room_tone.mp3`

- 来源：本项目程序化生成
- 作者：山野来信项目
- License：项目自有
- 最终时长：120 秒
- 处理：多层低电平有色噪声构成室内空气，削弱高频；首尾 12 秒环形交叉淡化。
- 循环：是
- 推荐默认音量：8%

### `kitchen_hum.mp3`

- 来源：本项目程序化生成
- 作者：山野来信项目
- License：项目自有
- 最终时长：150 秒
- 处理：低频电器基频、微弱谐波和缓慢自然起伏；去除工业风扇式高频；首尾 12 秒环形交叉淡化。
- 循环：是
- 推荐默认音量：8%

### `steam_soft.mp3`

- 来源：本项目程序化生成
- 作者：山野来信项目
- License：项目自有
- 最终时长：120 秒
- 处理：低通后的宽带气流层配合很慢的强弱变化，不含强喷气；首尾 12 秒环形交叉淡化。
- 循环：是
- 推荐默认音量：1%

### `soft_chopping.wav`（另含两个网页变化版本）

- 原始素材：VEGETABLES CUTTING - 3
- 作者：SamuelGremaud
- 来源：Freesound
- 页面：https://freesound.org/people/SamuelGremaud/sounds/572433/
- License：CC0
- 原始时长：16.374 秒
- 最终时长：15.200 秒
- 变化版本：`soft_chopping_alt.wav` 16.159 秒；`soft_chopping_slow.wav` 14.348 秒
- 处理：低通、轻度动态控制、淡入淡出；两个变化版采用不同速度和不同高频衰减，避免每次事件完全相同。
- 15 分钟 Demo：5 段（0:45、3:05、5:45、8:55、12:50）
- 推荐：仅作为“厨房忙碌”组内事件

### `dish_washing.wav`（另含一个网页变化版本）

- 原始素材：doing the dishes.wav
- 作者：MarleneAyni
- 来源：Freesound
- 页面：https://freesound.org/people/MarleneAyni/sounds/569388/
- License：CC0
- 原始时长：93.496 秒
- 最终时长：22.500 秒
- 变化版本：`dish_washing_alt.wav` 26.200 秒
- 处理：从两个不同位置裁取，柔化水流和瓷器高频、压低明显碰撞并做淡入淡出。
- 15 分钟 Demo：3 段（1:55、6:50、11:10）

### `dish_clink.wav`（另含一个网页变化版本）

- 原始素材：Ceramic Plate Sounds.wav
- 作者：bbrocer
- 来源：Freesound
- 页面：https://freesound.org/people/bbrocer/sounds/382648/
- License：CC0
- 原始时长：45.169 秒
- 最终时长：2.400 秒
- 变化版本：`dish_clink_alt.wav` 3.000 秒
- 处理：从两处不同轻碰声裁取，低通并控制瞬态峰值，使其像镜头外的摆盘而非贴耳碰撞。
- 15 分钟 Demo：9 次

### `pot_lid_detail.wav`

- 原始素材：Pot_Lid.mp3
- 作者：schoman3
- 来源：Freesound
- 页面：https://freesound.org/people/schoman3/sounds/507452/
- License：CC0
- 原始时长：0.707 秒
- 最终时长：2.000 秒（包含事件前后静音缓冲）
- 处理：削弱金属高频、控制峰值并增加短淡入淡出。
- 15 分钟 Demo：5 次

### `distant_tv_gala.mp3`

- 来源：本项目原创合成
- 作者：山野来信项目
- License：项目自有
- 最终时长：180 秒
- 处理：使用本机中文语音合成器朗读本项目原创的普通节庆主持文本，再做强低通、高通、速度变化、隔墙衰减、短反射和低音量处理；11 个短片段散布在三分钟循环中，片段之间只有极轻的 50 Hz 电视机电气底层。
- 内容确认：没有真实春晚、影视、综艺或歌曲素材；最终听感只能辨认“远处电视节目的人声起伏”，不应听清完整句子，也不再使用持续白噪/雪花声模拟电视。
- 循环：是
- 推荐默认音量：55%（网页“放空”组显示为 20%，内部按 2.75 比例联动；仅在短主持片段出现时接近厨房背景，片段之间仍很安静）

### `distant_fireworks.wav`（另含两个网页变化版本）

- 原始素材：sfx-distant-fireworks.flac
- 作者：Starscade
- 来源：Freesound
- 页面：https://freesound.org/people/Starscade/sounds/397251/
- License：CC0
- 原始时长：85.805 秒
- 最终时长：9.000 秒
- 变化版本：`distant_fireworks_alt.wav` 9.000 秒；`distant_fireworks_soft.wav` 9.000 秒
- 处理：从三个不同区段裁取；低通、压低峰值、淡入淡出，保留不同距离感。
- 15 分钟 Demo：5 次，均与爆竹错开

### `distant_firecrackers.wav`（另含一个网页变化版本）

- 原始素材：firecrackers.wav
- 作者：sbarncar
- 来源：Freesound
- 页面：https://freesound.org/people/sbarncar/sounds/121557/
- License：CC0
- 原始时长：6.083 秒
- 最终时长：6.204 秒
- 变化版本：`distant_firecrackers_alt.wav` 6.542 秒
- 处理：强低通、动态控制、短延迟/衰减制造隔窗和楼栋距离；在用户试听确认过轻后整体提高 4 dB，使快速爆竹节奏能够穿过锅声但仍保持远景。
- 15 分钟 Demo：7 段（第一段约 0:32），均与烟花错开

## 15 分钟成品

- `new-year-kitchen-15min-demo.mp3`：900.000 秒，44.1 kHz，双声道，192 kbps
- `new-year-kitchen-15min-master.wav`：900.000 秒，44.1 kHz，双声道，PCM 16-bit
- 综合响度：-28.1 LUFS
- True peak：-3.6 dBFS
- 静音检查：没有大于 1.5 秒、低于 -55 dBFS 的意外空白
- 最后一分钟：不安排切菜、洗碗或爆竹，只保留稳定厨房底层和很轻电视

## 网页控制

网页仅开放三组联动滑杆，同时继续保留所有独立音轨：

1. 厨房忙碌：炖锅、蒸汽、切菜、洗碗、碗碟、锅盖
2. 电视陪伴：远处模糊电视
3. 窗外年味：烟花、爆竹

厨房空气和灶具低频作为隐藏常驻层。睡前模式关闭切菜、洗碗、碗碟、锅盖和爆竹，只保留锅声、房间空气、远处电视与一次很轻的烟花。
