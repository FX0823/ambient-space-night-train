const scenes = Array.isArray(window.SCENES) ? window.SCENES : [];

const els = {
  home: document.querySelector("#homeView"),
  featured: document.querySelector("#featuredCard"),
  recentSection: document.querySelector("#recentSection"),
  recentList: document.querySelector("#recentList"),
  favoritesSection: document.querySelector("#favoritesSection"),
  favoritesList: document.querySelector("#favoritesList"),
  categories: document.querySelector("#categorySections"),
  allSpaces: document.querySelector("#allSpacesButton"),
  library: document.querySelector("#libraryView"),
  libraryGrid: document.querySelector("#libraryGrid"),
  libraryBack: document.querySelector("#libraryBackButton"),
  player: document.querySelector("#playerView"),
  video: document.querySelector("#sceneVideo"),
  ambient: document.querySelector("#mediaAmbient"),
  playerName: document.querySelector("#playerSceneName"),
  entry: document.querySelector("#entryGate"),
  entryName: document.querySelector("#entryName"),
  entryDescription: document.querySelector("#entryDescription"),
  enter: document.querySelector("#enterButton"),
  back: document.querySelector("#backButton"),
  favorite: document.querySelector("#favoriteButton"),
  play: document.querySelector("#playButton"),
  timerButton: document.querySelector("#timerButton"),
  timerLabel: document.querySelector("#timerLabel"),
  soundButton: document.querySelector("#soundButton"),
  timerPanel: document.querySelector("#timerPanel"),
  soundPanel: document.querySelector("#soundPanel"),
  presets: document.querySelector("#presetButtons"),
  tracks: document.querySelector("#trackControls"),
  ended: document.querySelector("#endedState"),
  restart: document.querySelector("#restartButton"),
  endedHome: document.querySelector("#endedHomeButton"),
  toast: document.querySelector("#toast")
};

const presetNames = { focus: "专注", relax: "放空", sleep: "睡前" };
const RECENT_STORAGE_KEY = "ambient-space:recent-scenes";
const FAVORITES_STORAGE_KEY = "ambient-space:favorite-scenes";
const categoryDefinitions = [
  { tag: "focus", title: "适合专注", mark: "◎" },
  { tag: "relax", title: "适合放空", mark: "◌" },
  { tag: "sleep", title: "适合睡前", mark: "☾" }
];
const state = {
  scene: null,
  entered: false,
  playing: false,
  nodes: new Map(),
  values: new Map(),
  enabled: new Map(),
  activePreset: "relax",
  timerEndsAt: null,
  timerId: null,
  sceneClock: 0,
  sceneCycle: 0,
  lastTick: 0,
  triggered: new Set(),
  fade: 1,
  hideId: null,
  toastId: null
};

function readRecentVisits() {
  try {
    const value = JSON.parse(localStorage.getItem(RECENT_STORAGE_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch (_) {
    return [];
  }
}

function recordVisit(sceneId) {
  const visits = readRecentVisits().filter((item) => item.sceneId !== sceneId);
  visits.unshift({ sceneId, lastVisitedAt: new Date().toISOString() });
  try {
    localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(visits.slice(0, 20)));
  } catch (_) {}
}

function readFavorites() {
  try {
    const value = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch (_) {
    return [];
  }
}

function isFavorite(sceneId) {
  return readFavorites().includes(sceneId);
}

function updateFavoriteButton() {
  const active = Boolean(state.scene && isFavorite(state.scene.id));
  els.favorite.classList.toggle("is-active", active);
  els.favorite.setAttribute("aria-pressed", String(active));
  els.favorite.setAttribute("aria-label", active ? "取消收藏当前场景" : "收藏当前场景");
}

function toggleFavorite() {
  if (!state.scene) return;
  const favorites = readFavorites();
  const active = favorites.includes(state.scene.id);
  const next = active ? favorites.filter((id) => id !== state.scene.id) : [state.scene.id, ...favorites];
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(next));
  } catch (_) {}
  updateFavoriteButton();
  showToast(active ? "已取消收藏" : "已收藏这个空间");
}
function relativeVisitTime(value) {
  const elapsed = Date.now() - new Date(value).getTime();
  if (!Number.isFinite(elapsed) || elapsed < 60000) return "刚刚";
  const hours = Math.floor(elapsed / 3600000);
  if (hours < 1) return `${Math.floor(elapsed / 60000)} 分钟前`;
  if (hours < 24) return `${hours} 小时前`;
  const days = Math.floor(hours / 24);
  return days === 1 ? "昨天" : `${days} 天前`;
}

function featuredCardMarkup(scene) {
  if (!scene) return "";
  return `<button class="featured-card" type="button" data-scene-id="${scene.id}" aria-label="进入${scene.name}">
    <img src="${scene.cover}" alt="" loading="eager" />
    <span class="featured-shade"></span>
    <span class="featured-copy"><strong>${scene.name}</strong><span>${scene.description}</span><em>进入这个空间&nbsp; →</em></span>
  </button>`;
}

function stateCardMarkup(scene) {
  return `<button class="state-card" type="button" data-scene-id="${scene.id}" aria-label="进入${scene.name}">
    <span class="state-card-image"><img src="${scene.cover}" alt="" loading="lazy" /><span></span></span>
    <strong>${scene.name}</strong><small>${scene.description}</small>
  </button>`;
}

function recentCardMarkup(scene, visitedAt) {
  return `<button class="recent-card" type="button" data-scene-id="${scene.id}" aria-label="再次进入${scene.name}">
    <img src="${scene.cover}" alt="" loading="lazy" /><span class="recent-shade"></span>
    <span><strong>${scene.name}</strong><small>◷&nbsp; ${relativeVisitTime(visitedAt)}</small></span>
  </button>`;
}

function renderLibrary() {
  els.libraryGrid.innerHTML = scenes.map((scene) => `<button class="library-card" type="button" data-scene-id="${scene.id}" aria-label="进入${scene.name}">
    <span><img src="${scene.cover}" alt="" loading="lazy" /></span>
    <strong>${scene.name}</strong><small>${scene.description}</small>
  </button>`).join("");
}

function renderHome() {
  const featured = scenes.find((scene) => scene.featured) || scenes[0];
  els.featured.innerHTML = featuredCardMarkup(featured);

  const recent = readRecentVisits()
    .map((visit) => ({ ...visit, scene: scenes.find((scene) => scene.id === visit.sceneId) }))
    .filter((visit) => visit.scene)
    .slice(0, 3);
  els.recentSection.hidden = recent.length === 0;
  els.recentList.innerHTML = recent.map((visit) => recentCardMarkup(visit.scene, visit.lastVisitedAt)).join("");

  const favorites = readFavorites()
    .map((id) => scenes.find((scene) => scene.id === id))
    .filter(Boolean);
  els.favoritesSection.hidden = favorites.length === 0;
  els.favoritesList.innerHTML = favorites.map(stateCardMarkup).join("");

  els.categories.innerHTML = categoryDefinitions.map((category) => {
    const matches = scenes.filter((scene) => (scene.tags || []).includes(category.tag));
    if (!matches.length) return "";
    return `<section class="home-section category-section" aria-labelledby="category-${category.tag}">
      <div class="section-heading"><div><span class="section-mark" aria-hidden="true">${category.mark}</span><h2 id="category-${category.tag}">${category.title}</h2></div></div>
      <div class="horizontal-cards state-cards">${matches.map(stateCardMarkup).join("")}</div>
    </section>`;
  }).join("");
  renderLibrary();
}

function makeAudio(url, loop = false) {
  const audio = new Audio(url);
  audio.preload = "auto";
  audio.loop = loop;
  audio.playsInline = true;
  return audio;
}

function buildAudio(scene) {
  disposeAudio();
  const definitions = scene.audioMode === "stems" && scene.tracks.length
    ? scene.tracks
    : [{ id: "master", name: "主环境", url: scene.fullMixAudio, kind: "loop", volume: 0.9, control: true }];

  definitions.forEach((track) => {
    const audio = makeAudio(track.url, track.kind === "loop");
    audio.addEventListener("error", () => showToast(`${track.name}暂时无法加载`));
    state.nodes.set(track.id, { track, audio });
    state.values.set(track.id, track.volume ?? 0.7);
    state.enabled.set(track.id, true);
  });
  applyPreset("relax", false);
}

function disposeAudio() {
  state.nodes.forEach(({ audio }) => {
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
  });
  state.nodes.clear();
  state.values.clear();
  state.enabled.clear();
  state.triggered.clear();
}

function applyVolumes() {
  state.nodes.forEach(({ audio }, id) => {
    const value = state.enabled.get(id) ? (state.values.get(id) ?? 0) : 0;
    audio.volume = Math.max(0, Math.min(1, value * state.fade));
  });
}

function renderSoundControls() {
  const scene = state.scene;
  if (!scene) return;
  const controlled = [...state.nodes.values()].filter(({ track }) => track.control !== false);
  els.presets.innerHTML = Object.keys(scene.presets || {}).map((key) =>
    `<button type="button" data-preset="${key}" class="${state.activePreset === key ? "is-active" : ""}">${presetNames[key] || key}</button>`
  ).join("");
  els.tracks.innerHTML = controlled.map(({ track }) => {
    const value = Math.round((state.values.get(track.id) ?? 0) * 100);
    const on = state.enabled.get(track.id);
    return `<div class="track-row ${on ? "" : "is-muted"}" data-track-row="${track.id}">
      <div class="track-meta"><button type="button" class="track-toggle" data-track-toggle="${track.id}" aria-pressed="${on}"><span></span></button><label for="track-${track.id}">${track.name}</label><output>${value}%</output></div>
      <input id="track-${track.id}" data-track-range="${track.id}" type="range" min="0" max="100" value="${value}" aria-label="${track.name}音量" />
    </div>`;
  }).join("");
}

function applyPreset(key, rerender = true) {
  const preset = state.scene?.presets?.[key];
  if (!preset) return;
  Object.entries(preset).forEach(([id, value]) => {
    if (state.values.has(id)) state.values.set(id, value);
  });
  state.activePreset = key;
  applyVolumes();
  if (rerender) renderSoundControls();
}

function selectScene(scene) {
  stopSpace(true);
  state.scene = scene;
  state.entered = false;
  state.sceneClock = 0;
  state.sceneCycle = 0;
  state.fade = 1;
  state.timerEndsAt = null;
  state.triggered.clear();
  els.home.hidden = true;
  els.library.hidden = true;
  els.player.hidden = false;
  els.player.classList.remove("is-entered", "is-playing", "ui-hidden");
  els.entry.hidden = false;
  els.ended.hidden = true;
  els.playerName.textContent = scene.name;
  els.entryName.textContent = scene.name;
  els.entryDescription.textContent = scene.description;
  els.video.poster = scene.cover;
  els.video.src = scene.video;
  els.video.muted = true;
  els.video.loop = true;
  els.video.playsInline = true;
  els.ambient.style.backgroundImage = `url("${scene.cover}")`;
  els.video.load();
  els.video.play().catch(() => {});
  buildAudio(scene);
  renderSoundControls();
  updateFavoriteButton();
  updateTimerUi();
  document.title = `${scene.name} · 山野来信`;
}

async function playSpace() {
  if (!state.scene || !state.entered) return;
  const promises = [els.video.play()];
  state.nodes.forEach(({ track, audio }) => {
    if (track.kind === "loop" || (audio.currentTime > 0 && !audio.ended)) {
      audio.volume = 0;
      promises.push(audio.play());
    }
  });
  const results = await Promise.allSettled(promises);
  state.playing = true;
  applyVolumes();
  state.lastTick = performance.now();
  els.player.classList.add("is-playing");
  els.play.setAttribute("aria-label", "暂停");
  if (results.every((result) => result.status === "rejected")) {
    state.playing = false;
    els.player.classList.remove("is-playing");
    showToast("浏览器阻止了播放，请再轻触一次");
  }
  wakeControls();
}

function pauseSpace({ pauseVideo = true } = {}) {
  state.nodes.forEach(({ audio }) => audio.pause());
  if (pauseVideo) els.video.pause();
  state.playing = false;
  els.player.classList.remove("is-playing");
  els.play.setAttribute("aria-label", "播放");
  wakeControls();
}

function stopSpace(reset = false) {
  clearTimer(false);
  pauseSpace();
  state.nodes.forEach(({ audio }) => {
    audio.pause();
    if (reset) {
      try { audio.currentTime = 0; } catch (_) {}
    }
  });
  if (reset) {
    state.sceneClock = 0;
    state.sceneCycle = 0;
    state.triggered.clear();
  }
}

function enterSpace() {
  state.entered = true;
  recordVisit(state.scene.id);
  els.entry.hidden = true;
  els.ended.hidden = true;
  els.player.classList.add("is-entered");
  playSpace();
}

function showHome(updateHash = true) {
  stopSpace(true);
  disposeAudio();
  els.video.pause();
  els.video.removeAttribute("src");
  els.video.load();
  state.scene = null;
  state.entered = false;
  closePanels();
  els.player.hidden = true;
  els.library.hidden = true;
  els.home.hidden = false;
  renderHome();
  document.title = "山野来信 · Ambient Space";
  if (updateHash && location.hash) history.pushState(null, "", location.pathname + location.search);
}

function showLibrary(updateHash = true) {
  stopSpace(true);
  disposeAudio();
  els.video.pause();
  els.video.removeAttribute("src");
  els.video.load();
  state.scene = null;
  state.entered = false;
  closePanels();
  renderLibrary();
  els.player.hidden = true;
  els.home.hidden = true;
  els.library.hidden = false;
  document.title = "全部空间 · 山野来信";
  if (updateHash) location.hash = "view=library";
}

function route() {
  const params = new URLSearchParams(location.hash.replace(/^#/, ""));
  if (params.get("view") === "library") {
    showLibrary(false);
    return;
  }
  const scene = scenes.find((item) => item.id === params.get("scene"));
  if (scene) selectScene(scene);
  else showHome(false);
}

function setTimer(minutes) {
  if (!minutes) {
    clearTimer();
    showToast("已设为不定时");
    closePanels();
    return;
  }
  state.timerEndsAt = Date.now() + minutes * 60 * 1000;
  if (!state.timerId) state.timerId = window.setInterval(tick, 250);
  updateTimerUi();
  closePanels();
  showToast(`将在 ${minutes} 分钟后安静下来`);
}

function clearTimer(resetFade = true) {
  if (state.timerId) window.clearInterval(state.timerId);
  state.timerId = null;
  state.timerEndsAt = null;
  if (resetFade) {
    state.fade = 1;
    applyVolumes();
  }
  updateTimerUi();
}

function updateTimerUi() {
  if (!els.timerLabel) return;
  document.querySelectorAll("[data-timer]").forEach((button) => {
    const minutes = Number(button.dataset.timer);
    const selected = !state.timerEndsAt ? minutes === 0 : Math.abs((state.timerEndsAt - Date.now()) / 60000 - minutes) < 0.1;
    button.classList.toggle("is-active", selected);
  });
  if (!state.timerEndsAt) {
    els.timerLabel.textContent = "定时";
    return;
  }
  const seconds = Math.max(0, Math.ceil((state.timerEndsAt - Date.now()) / 1000));
  els.timerLabel.textContent = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

function finishTimer() {
  if (state.timerId) window.clearInterval(state.timerId);
  state.timerId = null;
  state.timerEndsAt = null;
  state.fade = 0;
  applyVolumes();
  pauseSpace();
  els.ended.hidden = false;
  els.player.classList.remove("ui-hidden");
  els.timerLabel.textContent = "定时";
}

function tick() {
  if (state.timerEndsAt) {
    const remaining = (state.timerEndsAt - Date.now()) / 1000;
    state.fade = remaining <= 30 ? Math.max(0, remaining / 30) : 1;
    applyVolumes();
    updateTimerUi();
    if (remaining <= 0) {
      finishTimer();
      return;
    }
  }

  if (!state.playing) return;
  const now = performance.now();
  const delta = Math.min(5, Math.max(0, (now - state.lastTick) / 1000));
  state.lastTick = now;
  if (!delta) return;
  const previous = state.sceneClock;
  let next = previous + delta;
  if (next >= 900) {
    triggerEvents(previous, 900, state.sceneCycle);
    next %= 900;
    state.sceneCycle += 1;
    triggerEvents(0, next, state.sceneCycle);
  } else {
    triggerEvents(previous, next, state.sceneCycle);
  }
  state.sceneClock = next;
}

function triggerEvents(from, to, cycle) {
  state.nodes.forEach(({ track, audio }, id) => {
    if (track.kind !== "event" || !state.enabled.get(id)) return;
    (track.times || []).forEach((time) => {
      const key = `${cycle}:${id}:${time}`;
      if (time > from && time <= to && !state.triggered.has(key)) {
        state.triggered.add(key);
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    });
  });
}

function togglePanel(panel) {
  const willOpen = panel.hidden;
  closePanels();
  panel.hidden = !willOpen;
  els.timerButton.setAttribute("aria-expanded", String(panel === els.timerPanel && willOpen));
  els.soundButton.setAttribute("aria-expanded", String(panel === els.soundPanel && willOpen));
  wakeControls();
}

function closePanels() {
  els.timerPanel.hidden = true;
  els.soundPanel.hidden = true;
  els.timerButton.setAttribute("aria-expanded", "false");
  els.soundButton.setAttribute("aria-expanded", "false");
}

function wakeControls() {
  if (!state.scene) return;
  els.player.classList.remove("ui-hidden");
  window.clearTimeout(state.hideId);
  if (state.entered && els.timerPanel.hidden && els.soundPanel.hidden && els.ended.hidden) {
    state.hideId = window.setTimeout(() => els.player.classList.add("ui-hidden"), 4200);
  }
}

function showToast(text) {
  window.clearTimeout(state.toastId);
  els.toast.textContent = text;
  els.toast.classList.add("is-visible");
  state.toastId = window.setTimeout(() => els.toast.classList.remove("is-visible"), 2400);
}

renderHome();
function handleSceneSelection(event) {
  const card = event.target.closest("[data-scene-id]");
  if (card) location.hash = `scene=${card.dataset.sceneId}`;
}
els.home.addEventListener("click", handleSceneSelection);
els.library.addEventListener("click", handleSceneSelection);
els.allSpaces.addEventListener("click", () => showLibrary());
els.libraryBack.addEventListener("click", () => showHome());
els.enter.addEventListener("click", enterSpace);
els.back.addEventListener("click", () => showHome());
els.favorite.addEventListener("click", toggleFavorite);
els.endedHome.addEventListener("click", () => showHome());
els.restart.addEventListener("click", () => {
  state.fade = 1;
  state.sceneClock = 0;
  state.sceneCycle = 0;
  state.triggered.clear();
  state.nodes.forEach(({ audio }) => { try { audio.currentTime = 0; } catch (_) {} });
  els.ended.hidden = true;
  playSpace();
});
els.play.addEventListener("click", () => state.playing ? pauseSpace() : playSpace());
els.timerButton.addEventListener("click", () => togglePanel(els.timerPanel));
els.soundButton.addEventListener("click", () => togglePanel(els.soundPanel));
document.querySelectorAll("[data-close-panel]").forEach((button) => button.addEventListener("click", closePanels));
els.timerPanel.addEventListener("click", (event) => {
  const button = event.target.closest("[data-timer]");
  if (button) setTimer(Number(button.dataset.timer));
});
els.presets.addEventListener("click", (event) => {
  const button = event.target.closest("[data-preset]");
  if (button) applyPreset(button.dataset.preset);
});
els.tracks.addEventListener("input", (event) => {
  const range = event.target.closest("[data-track-range]");
  if (!range) return;
  state.values.set(range.dataset.trackRange, Number(range.value) / 100);
  state.activePreset = "";
  const row = range.closest(".track-row");
  row.querySelector("output").textContent = `${range.value}%`;
  els.presets.querySelectorAll("button").forEach((button) => button.classList.remove("is-active"));
  applyVolumes();
});
els.tracks.addEventListener("click", (event) => {
  const button = event.target.closest("[data-track-toggle]");
  if (!button) return;
  const id = button.dataset.trackToggle;
  const enabled = !state.enabled.get(id);
  state.enabled.set(id, enabled);
  if (!enabled) state.nodes.get(id)?.audio.pause();
  button.setAttribute("aria-pressed", String(enabled));
  button.closest(".track-row").classList.toggle("is-muted", !enabled);
  applyVolumes();
});
document.addEventListener("pointermove", wakeControls, { passive: true });
document.addEventListener("pointerdown", wakeControls, { passive: true });
document.addEventListener("keydown", (event) => {
  if (!state.scene) return;
  wakeControls();
  if (event.code === "Space" && state.entered && els.ended.hidden) {
    event.preventDefault();
    state.playing ? pauseSpace() : playSpace();
  }
  if (event.code === "Escape") {
    if (!els.timerPanel.hidden || !els.soundPanel.hidden) closePanels();
    else showHome();
  }
});
window.addEventListener("hashchange", route);
window.addEventListener("beforeunload", () => {
  stopSpace();
  disposeAudio();
});
window.setInterval(tick, 400);
route();
