# 夜行列车声音设计与素材记录

## 场景目标

中国老式夜行列车的车厢内部：稳定、温暖、怀旧、安静且适合长时间聆听。独立持续轨不含人声、广播、鸣笛或强烈刹车声；完整试听只稀疏加入经远距化处理的生活细节与广播。

## 成品

- 旧混合试听已退出正式资产，备份为 `night-train-15min-demo-legacy-with-voice-backup.mp3`
- 独立铁轨节奏：`rail_clicks.mp3`（14:56.81，MP3，44.1 kHz，双声道，192 kbps）
- 铁轨 WAV 母版：`rail_clicks_master.wav`（14:56.81，PCM 16-bit，44.1 kHz，双声道）
- 时长：900.05 秒（MP3 编码层面的约 0.05 秒尾部静音）
- 参数：44.1 kHz、双声道、192 kbps
- 新素材版完整试听响度：约 -24.6 LUFS，LRA 约 1.5 LU，真峰值约 -8.3 dBFS
- 隧道事件：`train_tunnel_event.wav`，7.0 秒，44.1 kHz / 16-bit / 双声道
- 所有核心层均保留独立文件，供网页动态混音。

## 配套视频

- `night-train-visual-15min-7x3.mp4`：15:00，720×960，24 fps，H.264，仅含画面，共 21,600 帧。
- 视频 1 累计 10:30，占 70%；视频 2 累计 4:30，占 30%。
- 时间结构：视频 1 3:30 → 视频 2 1:30；该五分钟章节重复三次。
- 两条短视频分别先制成带 1 秒环形交叉淡化的循环单元，长段内部不使用碎片式切镜。
- 六个长段连接处使用半秒暗场；成品首尾也经过暗场，可连续循环。
- 视频无音轨；轮轨、低频、车厢、风与生活事件继续保持独立。
- 早先误做的 20 秒碎片版已备份为 `night-train-visual-20s-backup.mp4`，不作为成品。
- 从原始视频提取的音频仅用于分析：参考轮轨间隔约 0.47～0.51 秒、频谱重心约 1.24～1.30 kHz。

## 分轨规则

- `rail_clicks.mp3` 与 `rail_clicks_master.wav` 只含轮轨接缝声，不混入车厢、风、人声或生活事件。
- 持续环境音分别保留为 `train_low_rumble.mp3`、`carriage_room_tone.mp3`、`window_air_motion.mp3` 和 `carriage_details.mp3`。
- 正式生活事件只保留 `cup_detail.wav` 和 `cough_detail.wav`；广播已移至 `optional-events/train_announcement_detail.wav`，不参与默认播放。
- 不再提供默认合并试听；视频、轮轨和其他环境音均由网页分别加载。

## 素材与授权

| 最终文件 | 原始素材 | 来源 / 作者 | 授权 | 原始时长 | 处理 | 循环 | 建议默认占比 |
|---|---|---|---|---:|---|---|---:|
| `train_low_rumble.mp3` | 130804 Train, interior rumble rattle buzzing VIA rail | [Freesound](https://freesound.org/people/TRP/sounds/715677/) / TRP | CC0 1.0 | 3:09.507 | 取 20–160 秒；高通 35 Hz、低通 700 Hz、轻微低频增益、压缩、响度归一 | 10 秒交叉淡化无缝循环 | 38% |
| `rail_clicks.mp3` | Train Track Joints Slow (Loop) | [Freesound](https://freesound.org/people/KayleRustone/sounds/474977/) / KayleRustone | CC0 1.0 | 0:17.620 | 只保留轮轨接缝声；裁切为环形单元，尾部与头部 1.5 秒等功率交叉淡化；参考配套视频将速度提高约 8%，轮轨冲击间隔约 0.52 秒；频谱重心约 1.34 kHz；频谱降噪与温和扩展压低持续背景；削减 520 Hz 和 1.65 kHz 的人声感拖尾；中频轮轨增强并柔化高频、温和压缩与限峰 | 60 个参考节奏单元，14:56.81；无首尾淡出 | 独立主轨 |
| `carriage_room_tone.mp3` | Room Tone, Soft Ventilation | [Freesound](https://freesound.org/people/Kinoton/sounds/393574/) / Kinoton | CC0 1.0 | 0:40.823 | 高通 55 Hz、低通 4.2 kHz、轻微暖化和压缩 | 8 秒交叉淡化无缝循环 | 18% |
| `window_air_motion.mp3` | 本地程序化粉红噪声 | 本项目生成 | 项目自有生成素材 | 1:08 | 高通 160 Hz、低通 2.3 kHz、19 秒缓慢起伏 | 8 秒交叉淡化无缝循环 | 10% |
| `carriage_details.mp3` | in the train（同源的高频车厢结构细节） | [Freesound](https://freesound.org/people/rucisko/sounds/164766/) / rucisko | CC0 1.0 | 1:00.656 | 取 5–60 秒；高通 260 Hz、低通 4.3 kHz、强峰值控制 | 5 秒交叉淡化无缝循环 | 7% |
| `cup_detail.wav` | putting down a mug on a table.wav | [Freesound](https://freesound.org/people/squidge316/sounds/404922/) / squidge316；页面注明录制/编辑 Luigi Pangaro | CC0 1.0 | 0:00.943 | 高通 150 Hz、低通 5.2 kHz、压低瞬态、长淡入淡出并补静音 | 不循环；15 分钟内两次 | 3%（事件参考） |
| `cough_detail.wav` | Polite coughing | [Freesound](https://freesound.org/people/TurboFool/sounds/561013/) / TurboFool | CC0 1.0 | 0:06.400 | 高通 180 Hz、低通 2.8 kHz、大幅降音量、极轻短回声与淡入淡出，模拟远处乘客 | 不循环；15 分钟内一次 | 极轻事件 |
| `train_announcement_detail.wav` | Train Station PA announcements China | [Freesound](https://freesound.org/people/mycompasstv/sounds/474614/) / mycompasstv | CC0 1.0 | 约 0:15.37 | 300 Hz–2.4 kHz 带限、大幅降音量、轻微空间反射与长淡入淡出，模拟隔着车厢听见的远处广播 | 不循环；15 分钟内一次 | 极轻事件 |
| `train_tunnel_event.wav` | 由本项目列车低频与铁轨轨组合处理 | 派生自上述 CC0 素材 | CC0 派生 | 7.0 秒 | 低通、低频增厚、极轻 55 ms 回响、1.2 秒淡入与 1.8 秒淡出 | 不循环；事件触发 | 系统事件 |

下载并加工的是 Freesound 官方页面提供的 HQ 预览文件；上表原始格式与时长以素材页面记录为准。所有外部素材均确认标注为 CC0 1.0；授权不明确的候选素材未使用。

## 独立轨处理结果

- `train_low_rumble.mp3`：130 秒；适合长期循环；车厢内部低频主底层。
- `rail_clicks.mp3`：890 秒（14:50）；192 kbps；适合 15～60 分钟循环；另保留 `rail_clicks_master.wav`。旧 50 秒版本备份为 `rail_clicks-v1-backup.mp3`，上一版风噪较重的长轨备份为 `rail_clicks-v2-windy-backup.mp3`。
- `carriage_room_tone.mp3`：32 秒；适合长期循环；让整体听感保持在车厢内部。
- `window_air_motion.mp3`：60 秒；适合长期循环；仅提供隔窗移动感。
- `carriage_details.mp3`：50 秒；可循环，但建议由系统低音量混入。
- `cup_detail.wav`：2.5 秒；只作稀疏事件，不循环。
- `cough_detail.wav`：约 6.49 秒；只作一次远处生活细节，不循环。
- `optional-events/train_announcement_detail.wav`：约 15.49 秒；已退出正式播放，仅保留为可恢复素材。
- `train_tunnel_event.wav`：7 秒；只在隧道视频事件发生时触发，不循环。

## 默认混音与预设

新素材版默认以轮轨为主：铁轨约 55%，低频车体约 22%，室内空气约 10%，窗外风约 0.2%，机械细节约 2%。咳嗽、杯子和广播均为稀疏事件，不计入持续层比例。这里是相对听感参考，不是线性振幅直接相加。

| 模式 | 低频 | 铁轨 | 空气 | 窗外风 | 细节 |
|---|---:|---:|---:|---:|---:|
| 专注 | 42 | 26 | 24 | 2 | 6 |
| 放空 | 48 | 18 | 26 | 2 | 6 |
| 睡前 | 55 | 10 | 30 | 0～1 | 4（生活事件建议关闭或极轻） |

## 15 分钟 Demo 时间结构

- 全程：列车低频为主，轻铁轨与室内空气稳定铺底；窗外风层降至近乎不可察觉。
- 2:25：一次极轻、远处且带限的车站广播。
- 4:40：第一次极轻杯子/桌面细节。
- 7:10：一次远处轻咳。
- 11:50：第二次更轻杯子/桌面细节。
- 本版不加入隧道事件，避免额外轰鸣与风压干扰。
- 开头 5 秒淡入，末尾 10 秒淡出。

## 隧道事件接入建议

进入隧道时叠加播放 `train_tunnel_event.wav`，同时在约 1.2 秒内降低 `window_air_motion`，轻微提高 `train_low_rumble` 与 `rail_clicks`；驶出时在约 1.8 秒内恢复。事件文件当前为 7 秒。拿到隧道视频的准确时长后，应按视频时间轴调整尾部淡出，而不是硬切音频。

## 网页开放层级建议

建议开放给用户：

- 列车低频 `train_low_rumble.mp3`
- 铁轨规律 `rail_clicks.mp3`
- 车厢空气 `carriage_room_tone.mp3`
- 窗外空气 `window_air_motion.mp3`

建议作为系统内部层：

- 机械细节 `carriage_details.mp3`
- 杯子事件 `cup_detail.wav`
- 隧道事件 `train_tunnel_event.wav`

## 接缝检查

所有持续层都采用首尾旋转加交叉淡化处理，算法检查未发现硬切或解码错误；15 分钟 MP3 已完成全文件解码验证。新版 `rail_clicks.mp3` 还完成了 14:50 全文件解码、逐分钟动态、每秒峰值、高频残留与首尾样本连续性检查：新版综合响度约 -27.2 LUFS，真峰值约 -11.7 dBTP，LRA 约 5.2 LU；与上一版相比，180 Hz 以下能量下降约 6～7 dB，650 Hz～3 kHz 轮轨清晰频段提高约 3 dB；首尾 1 秒 RMS 仅相差约 0.002 dB，边界跳变约 -38.8 dBFS。正式上线前仍建议由用户使用耳机和手机扬声器各做一次主观试听。










## 夜行列车生活层增强版

- 轮轨主轨保留原有节奏与晃动，从无损母版重新处理：在约 2.4 kHz 削减 2.2 dB、约 4.3 kHz 削减 4 dB，7 kHz 以上低通，并使用温和峰值压缩降低个别尖锐撞击。平均响度由约 -26.2 dB 调整为 -26.3 dB，峰值由约 -6.7 dB 降至 -7.8 dB。旧版备份为 `rail_clicks-v7-sharp-backup.mp3` 和 `rail_clicks-master-v7-sharp-backup.wav`。
- `distant_horn.wav` 来源：Freesound《Train Horn》，作者 sama66，原始时长 8.750 秒，CC0，https://freesound.org/people/sama66/sounds/539919/ 。带限、增加远处回声并做长淡出；15 分钟内 3 次。
- `sliding_door.wav` 来源：Freesound《Train/Container - Sliding Door》，作者 Bowesy，原始时长 3.648 秒，CC0，https://freesound.org/people/Bowesy/sounds/522127/ 。削弱金属尖峰并压低音量；15 分钟内 4 次。
- `corridor_footsteps.wav` 来源：Freesound《STEPS IN CORRIDOR.wav》，作者 colo777，原始时长 13.003 秒，CC0，https://freesound.org/people/colo777/sounds/251435/ 。带限、压低并加入极轻空间反射；15 分钟内 5 次。
- `seat_shift_1.wav`、`seat_shift_2.wav`、`seat_shift_3.wav` 来源：Freesound《062710_fabric.wav》，作者 moxobna，原始时长 1:14.545，CC0，https://freesound.org/people/moxobna/sounds/100343/ 。从三个不同位置截取，模拟座椅与衣料活动；合计 9 次。
- 杯子事件由 2 次增至 5 次；远处轻咳由 1 次增至 3 次并重新校准响度。未加入清晰对话或广播。
- 共 29 个生活事件，平均约每 31 秒出现一个，类别相互错开；每一类保持独立音轨，未与轮轨主轨并轨。
- `night-train-v8-preview.mp3` 为 15 分钟合成试听文件，仅用于验收；网页版仍使用独立分轨。试听版平均响度约 -31.0 dBFS，峰值约 -12.4 dBFS，完整解码通过。

## 多实录轮轨自然节奏版

- rail_clicks.mp3 改为混合四条不同的 CC0 火车实录：train-interior-trp.mp3（3:09）、train-rhythm-rucisko.mp3（1:00）、night-train-inside-tineidae.mp3（0:25）与 track-joints-kaylerustone.mp3（0:17）。作者、原始页面与授权见本文件前述对应条目。
- 15 分钟主轨由六个约 160 秒的长段组成；每段使用不同起点与混合比例，并加入约 ±1.5% 的缓慢速度差异，使轮轨保持稳定前进感但不形成固定 BPM。
- 长段之间使用 10 秒等功率交叉淡化，首尾另做 10 秒环形交叉淡化；未使用一小段音效首尾硬接的做法。
- 对约 3 kHz 的金属锐度做衰减，并在约 6.2 kHz 低通；随后校准感知响度，使轮轨仍为主层但比旧版柔和。
- rail_clicks_master.wav 与 rail_clicks.mp3 均为 15:00；MP3 为 44.1 kHz、192 kbps。night-train-v9-preview.mp3 为包含独立生活事件分轨的 15 分钟验收试听版。

## 轮轨主导低沙沙版

- 根据试听反馈，上一版多实录叠加时把实录中的连续宽频底噪一同累积，造成沙沙声掩盖轮轨。
- 新版移除 train-interior-trp.mp3 的持续叠加；以 track-joints-kaylerustone.mp3 为清晰主层，night-train-inside-tineidae.mp3 与 train-rhythm-rucisko.mp3 仅作为较低的节奏变化层。
- 三条素材分别制作无缝循环单元；高通约 420–500 Hz、低通约 3.4–3.8 kHz，并使用降噪与扩展门压低持续底噪、保留轮轨瞬态。
- 仍采用六个 160 秒长段、约 ±1.8% 的轻微速度变化、10 秒段间及首尾等功率交叉淡化。600 Hz 以下持续能量较上一版降低约 4 dB，轮轨清晰频段相对靠前。
- rail_clicks.mp3 和 rail_clicks_master.wav 均为 15:00；night-train-v10-preview.mp3 为完整分轨合成试听。上一版备份为 rail_clicks-v9-multirecord-windy-backup.mp3。
