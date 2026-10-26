const places = { all: "ทุกที่", mall: "ห้าง", market: "ตลาด", school: "โรงเรียน", university: "มหาวิทยาลัย" };
const categories = [
  { id: "rice", label: "🍚 ข้าว", type: "food" },
  { id: "noodles", label: "🍜 เส้น", type: "food" },
  { id: "stirfry", label: "🍳 ตามสั่ง", type: "food" },
  { id: "curry", label: "🍲 แกง / ต้ม", type: "food" },
  { id: "salad", label: "🥗 ยำ / ตำ", type: "food" },
  { id: "snack", label: "🍟 ของกินเล่น", type: "food" },
  { id: "dessert", label: "🍧 ของหวาน", type: "food" },
  { id: "international", label: "🍕 นานาชาติ", type: "food" },
  { id: "tea", label: "🧋 ชา / กาแฟ", type: "drink" },
  { id: "juice", label: "🍊 น้ำผลไม้", type: "drink" },
  { id: "other", label: "💧 เครื่องดื่มอื่น ๆ", type: "drink" },
];
const placeSets = {
  everywhere: ["mall", "market", "school", "university"],
  street: ["market", "school", "university"],
  city: ["mall", "market", "university"],
  mall: ["mall", "university"],
  campus: ["school", "university"],
  drinks: ["mall", "market", "school", "university"],
};
const menu = (id, name, short, type, category, price, locationKey, emoji, description) => ({
  id, name, short, type, category, price, locations: placeSets[locationKey], emoji, description,
  image: `assets/${id}.jpg`,
});
const menus = [
  menu("basil", "ข้าวกะเพราไก่", "กะเพราไก่", "food", "rice", 60, "everywhere", "🍳", "เมนูสิ้นคิดที่อร่อยได้ทุกครั้ง เผ็ดนิด ๆ กินกับข้าวร้อน ๆ"),
  menu("fried-rice", "ข้าวผัดกุ้ง", "ข้าวผัดกุ้ง", "food", "rice", 70, "everywhere", "🍤", "ข้าวผัดหอมกระทะกับกุ้งและผัก กินง่าย อิ่มพอดี"),
  menu("chicken-rice", "ข้าวมันไก่", "ข้าวมันไก่", "food", "rice", 60, "street", "🍗", "ไก่นุ่ม ข้าวหอม น้ำจิ้มรสเด็ด เมนูคลาสสิกที่ไว้ใจได้"),
  menu("omelette-rice", "ข้าวไข่เจียว", "ข้าวไข่เจียว", "food", "rice", 45, "street", "🍳", "ง่าย ๆ แต่อร่อย ไข่เจียวฟูบนข้าวสวยร้อน ๆ"),
  menu("red-pork-rice", "ข้าวหมูแดง", "ข้าวหมูแดง", "food", "rice", 70, "street", "🍚", "หมูแดงราดน้ำฉ่ำ ๆ คู่ข้าวสวย กินแล้วอิ่มใจ"),
  menu("green-curry", "แกงเขียวหวานไก่", "แกงเขียวหวาน", "food", "rice", 85, "city", "🍛", "แกงไทยหอมกะทิ รสเข้มข้น กินคู่ข้าวสวยลงตัว"),
  menu("massaman", "มัสมั่นเนื้อ", "มัสมั่นเนื้อ", "food", "rice", 120, "mall", "🍛", "แกงเนื้อนุ่มหอมเครื่องเทศ รสละมุนและเข้มข้น"),
  menu("panang", "พะแนงไก่", "พะแนงไก่", "food", "rice", 85, "city", "🍛", "ไก่ในน้ำแกงพะแนงเข้มข้น หอมพริกแกง"),
  menu("pad-thai", "ผัดไทยกุ้งสด", "ผัดไทย", "food", "noodles", 80, "everywhere", "🍜", "เส้นผัดซอสรสกลมกล่อม กุ้งสด และถั่วคั่วหอม ๆ"),
  menu("pad-see-ew", "ผัดซีอิ๊ว", "ผัดซีอิ๊ว", "food", "noodles", 65, "street", "🍜", "เส้นใหญ่ผัดหอมกระทะกับผักคะน้า อิ่มสบาย"),
  menu("noodle-soup", "ก๋วยเตี๋ยวน้ำ", "ก๋วยเตี๋ยว", "food", "noodles", 60, "street", "🍜", "ซุปร้อน ๆ กับเส้นนุ่ม เลือกปรุงรสตามชอบ"),
  menu("khao-soi", "ข้าวซอยไก่", "ข้าวซอย", "food", "noodles", 90, "city", "🍜", "เส้นนุ่มกับน้ำแกงกะทิแบบเหนือ โรยเส้นกรอบ"),
  menu("drunken-noodles", "ผัดขี้เมา", "ผัดขี้เมา", "food", "noodles", 75, "city", "🌶️", "เส้นผัดรสจัด หอมใบกะเพราและพริกสด"),
  menu("tom-yum", "ต้มยำกุ้ง", "ต้มยำกุ้ง", "food", "curry", 120, "city", "🍲", "ต้มยำรสเปรี้ยวเผ็ด หอมสมุนไพรไทย"),
  menu("som-tam", "ส้มตำไทย", "ส้มตำ", "food", "salad", 50, "street", "🥗", "กรอบ แซ่บ เปรี้ยวหวาน ครบรสในจานเดียว"),
  menu("chicken-skewers", "ไก่ย่างเสียบไม้", "ไก่ย่าง", "food", "snack", 55, "street", "🍢", "ไก่ย่างหอม ๆ กินเล่นหรือกินคู่ข้าวก็อร่อย"),
  menu("egg-sandwich", "แซนด์วิชไข่", "แซนด์วิช", "food", "snack", 55, "campus", "🥪", "มื้อเบา ๆ ที่หยิบกินง่ายในวันที่รีบ"),
  menu("fries", "เฟรนช์ฟรายส์", "เฟรนช์ฟรายส์", "food", "snack", 79, "mall", "🍟", "มันฝรั่งทอดกรอบ เค็มนิด ๆ กินเพลิน"),
  menu("karaage", "ไก่ทอดคาราอาเกะ", "ไก่คาราอาเกะ", "food", "snack", 99, "mall", "🍗", "ไก่ทอดญี่ปุ่นกรอบนอกนุ่มใน เหมาะกับทุกมื้อ"),
  menu("burger", "เบอร์เกอร์ไก่", "เบอร์เกอร์ไก่", "food", "international", 129, "mall", "🍔", "ขนมปังนุ่ม ไก่ชิ้นโต อิ่มอร่อยแบบไม่ต้องคิดเยอะ"),
  menu("pizza", "พิซซ่ามาร์เกริต้า", "พิซซ่า", "food", "international", 199, "mall", "🍕", "ชีส มะเขือเทศ และโหระพาในพิซซ่าสไตล์อิตาเลียน"),
  menu("carbonara", "สปาเก็ตตี้คาโบนาร่า", "คาโบนาร่า", "food", "international", 179, "mall", "🍝", "พาสต้าเส้นนุ่มกับซอสครีมเข้มข้น"),
  menu("lasagne", "ลาซานญ่า", "ลาซานญ่า", "food", "international", 199, "mall", "🧀", "พาสต้าอบเป็นชั้น ๆ กับซอสและชีสยืด ๆ"),
  menu("sushi", "ซูชิ", "ซูชิ", "food", "international", 180, "mall", "🍣", "ข้าวปั้นญี่ปุ่นหลากหน้า เลือกคำโปรดได้เลย"),
  menu("tonkatsu", "ข้าวหมูทอดทงคัตสึ", "ทงคัตสึ", "food", "international", 145, "mall", "🍱", "หมูทอดกรอบ ๆ เสิร์ฟกับข้าวและซอสญี่ปุ่น"),
  menu("katsu-curry", "ข้าวแกงกะหรี่ไก่ทอด", "แกงกะหรี่", "food", "international", 150, "mall", "🍛", "ไก่ทอดกรอบกับแกงกะหรี่ญี่ปุ่นหอม ๆ"),
  menu("teriyaki", "ข้าวไก่เทอริยากิ", "ไก่เทอริยากิ", "food", "international", 120, "mall", "🍱", "ไก่ย่างซอสหวานเค็มสไตล์ญี่ปุ่น กินกับข้าวพอดี"),
  menu("thai-tea", "ชาไทยเย็น", "ชาไทย", "drink", "tea", 45, "drinks", "🧋", "ชาหอม ๆ หวานมัน เย็นชื่นใจ"),
  menu("iced-coffee", "กาแฟเย็น", "กาแฟเย็น", "drink", "tea", 55, "drinks", "☕", "เติมความสดชื่นและความตื่นตัวให้วันนี้"),
  menu("bubble-tea", "ชานมไข่มุก", "ชานมไข่มุก", "drink", "tea", 60, "city", "🧋", "ชานมหอมกับไข่มุกหนึบ ๆ เคี้ยวเพลิน"),
  menu("lemonade", "สตรอว์เบอร์รีเลมอนเนด", "เลมอนเนด", "drink", "juice", 50, "drinks", "🍓", "สตรอว์เบอร์รีกับเลมอน เปรี้ยวหวานสดชื่น"),
  menu("orange-juice", "น้ำส้ม", "น้ำส้ม", "drink", "juice", 45, "drinks", "🍊", "น้ำส้มรสสดใส ดื่มง่ายทุกเวลา"),
  menu("mango-smoothie", "สมูทตี้มะม่วง", "มะม่วงปั่น", "drink", "juice", 70, "city", "🥭", "มะม่วงปั่นเนื้อเนียน หวานเย็นเต็มแก้ว"),
  menu("water", "น้ำเปล่า", "น้ำเปล่า", "drink", "other", 15, "drinks", "💧", "ตัวเลือกเรียบง่าย สดชื่น และเข้ากับทุกมื้อ"),
  menu("iced-cocoa", "ช็อกโกแลต", "ช็อกโกแลต", "drink", "other", 50, "drinks", "🍫", "ช็อกโกแลตหอมเข้มข้น หวานมันแบบกำลังดี"),
];

const state = { type: "all", location: "all", category: "all", budget: 150, spinning: false, rotation: 0, selected: null, visible: [], catalogLoading: true };
const $ = (selector) => document.querySelector(selector);
const wheel = $("#wheel");
const wheelLabels = $("#wheel-labels");
const spinButton = $("#spin-button");
const resultContent = $("#result-content");
const budgetInput = $("#budget-input");
const budgetSlider = $("#budget-slider");

function categoryName(id) { return categories.find((item) => item.id === id)?.label.replace(/^\S+\s/, "") || "ทุกหมวด"; }
function matches() {
  return menus.filter((item) =>
    (state.type === "all" || item.type === state.type) &&
    (state.location === "all" || item.locations.includes(state.location)) &&
    (state.category === "all" || item.category === state.category) &&
    (state.budget === null || item.price <= state.budget)
  );
}
function randomInt(max) { return Math.floor(Math.random() * max); }
function shuffled(items) { return [...items].sort(() => Math.random() - .5); }
function formatPrice(price) { return `฿${price.toLocaleString("th-TH")}`; }

function renderCategories() {
  const options = categories.filter((item) => state.type === "all" || item.type === state.type);
  if (state.category !== "all" && !options.some((item) => item.id === state.category)) state.category = "all";
  $("#category-options").innerHTML = [{ id: "all", label: "ทุกหมวด" }, ...options]
    .map((item) => `<button type="button" data-category="${item.id}" class="${state.category === item.id ? "is-selected" : ""}" aria-pressed="${state.category === item.id}">${item.label}</button>`)
    .join("");
}
function renderOptions() {
  document.querySelectorAll("[data-type]").forEach((button) => {
    const active = button.dataset.type === state.type;
    button.classList.toggle("is-selected", active); button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-location]").forEach((button) => {
    const active = button.dataset.location === state.location;
    button.classList.toggle("is-selected", active); button.setAttribute("aria-pressed", String(active));
  });
  renderCategories();
  document.querySelectorAll("[data-budget]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.budget === (state.budget === null ? "all" : String(state.budget)));
  });
  budgetInput.disabled = state.budget === null;
  budgetSlider.disabled = state.budget === null;
  budgetInput.value = state.budget === null ? "" : state.budget;
  if (state.budget !== null) budgetSlider.value = Math.min(300, Math.max(20, state.budget));
  const fill = state.budget === null ? 100 : (Number(budgetSlider.value) - 20) / 280 * 100;
  budgetSlider.style.setProperty("--fill", `${fill}%`);
}
function renderWheel(items, reset = true) {
  const visible = items.slice(0, 8);
  state.visible = visible;
  const colors = ["#ffe7ad", "#ffbf9e", "#d9edbe", "#ffe2c9", "#f8d0ae", "#d3e8db", "#f9ddb1", "#f7bfae"];
  wheel.style.transition = "none";
  if (reset) state.rotation = 0;
  wheel.style.transform = `rotate(${state.rotation}deg)`;
  if (!visible.length) {
    wheel.style.background = "#eeebe5";
    wheelLabels.innerHTML = "";
    return;
  }
  const section = 100 / visible.length;
  wheel.style.background = `conic-gradient(${visible.map((_, index) => `${colors[index]} ${index * section}% ${(index + 1) * section}%`).join(",")})`;
  const radius = Math.max(65, wheel.clientWidth * .345);
  wheelLabels.innerHTML = visible.map((item, index) =>
    `<div class="wheel-label" style="--angle:${(index + .5) * 360 / visible.length}deg;--counter-angle:${-(index + .5) * 360 / visible.length}deg;--negative-radius:-${radius}px"><i>${item.emoji}</i><span>${item.short}</span></div>`
  ).join("");
}
function emptyMarkup() {
  return `<div class="result-empty"><div class="empty-photo"><img src="assets/pad-thai.jpg" alt="ผัดไทย" /><span class="empty-photo-sticker">?</span></div><span class="result-mini-label">รอผลสุ่มอยู่</span><h3>มื้อนี้จะได้กินอะไรนะ?</h3><p>ตั้งค่าที่ชอบ แล้วกดหมุนวงล้อ เมนูพร้อมรูปภาพจะมาแสดงตรงนี้</p></div>`;
}
function renderResult(item) {
  if (!item) { resultContent.innerHTML = emptyMarkup(); return; }
  resultContent.innerHTML = `<div class="result-picked">
    <div class="result-image-wrap"><img src="${item.image}" alt="${item.name}" /><span class="result-price">${formatPrice(item.price)}</span></div>
    <div class="result-meta"><span>${item.type === "food" ? "🍽️ อาหาร" : "🥤 เครื่องดื่ม"}</span><span>${categoryName(item.category)}</span></div>
    <h3>${item.name}</h3><p>${item.description}</p>
    <div class="result-divider"></div><div class="result-actions"><button type="button" class="again-button" id="again-button">↻ สุ่มอีกครั้ง</button><button type="button" class="copy-button" id="copy-button">⧉ คัดลอกเมนู</button></div>
  </div>`;
  $("#again-button").addEventListener("click", spin);
  $("#copy-button").addEventListener("click", async (event) => {
    try {
      await navigator.clipboard.writeText(`${item.name} — ${formatPrice(item.price)}`);
      event.currentTarget.textContent = "✓ คัดลอกแล้ว";
      setTimeout(() => { if (event.currentTarget.isConnected) event.currentTarget.textContent = "⧉ คัดลอกเมนู"; }, 1800);
    } catch { event.currentTarget.textContent = "คัดลอกไม่ได้"; }
  });
}
function refresh() {
  renderOptions();
  const pool = matches();
  $("#match-count").textContent = `${pool.length} เมนู`;
  spinButton.disabled = pool.length === 0 || state.catalogLoading;
  spinButton.querySelector("span:nth-child(2)").textContent = "หมุนวงล้อเลย";
  wheel.setAttribute("aria-label", pool.length ? `วงล้อสุ่มเมนู ${pool.length} รายการ` : "ไม่มีเมนูที่ตรงเงื่อนไข");
  $("#spin-hint").innerHTML = state.catalogLoading ? "กำลังโหลดคลังเมนูไทย..." : pool.length ? `เลือกได้ <strong id="match-count-inline">${pool.length}</strong> เมนู กดปุ่มแล้วลุ้นกัน!` : "ไม่มีเมนูที่ตรงเงื่อนไข ลองเพิ่มงบหรือเปลี่ยนหมวดหมู่";
  if (!pool.length) {
    resultContent.innerHTML = `<div class="no-results"><span class="no-results-icon">🔎</span><h3>ยังไม่เจอเมนู</h3><p>ลองเพิ่มงบ หรือเลือก “ทุกหมวด” และ “ทุกที่” แล้วสุ่มใหม่</p></div>`;
  } else if (state.selected && pool.some((item) => item.id === state.selected.id)) {
    renderResult(state.selected);
  } else {
    state.selected = null; renderResult(null);
  }
  renderWheel(pool);
}
function spin() {
  if (state.spinning || state.catalogLoading) return;
  const pool = matches();
  if (!pool.length) return;
  const winner = pool[randomInt(pool.length)];
  const visible = shuffled([winner, ...shuffled(pool.filter((item) => item.id !== winner.id)).slice(0, 7)]);
  renderWheel(visible);
  const index = visible.findIndex((item) => item.id === winner.id);
  const center = (index + .5) * 360 / visible.length;
  const delta = (360 - center) % 360 + 360 * 6;
  state.spinning = true;
  spinButton.disabled = true;
  spinButton.querySelector("span:nth-child(2)").textContent = "กำลังสุ่ม...";
  $("#spin-hint").textContent = "ลุ้นเมนูที่ใช่ให้มื้อนี้ ✨";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    wheel.style.transition = reducedMotion ? "none" : "transform 4.5s cubic-bezier(.11,.8,.13,1)";
    state.rotation += delta;
    wheel.style.transform = `rotate(${state.rotation}deg)`;
  }));
  setTimeout(() => {
    state.spinning = false;
    state.selected = winner;
    renderResult(winner);
    wheel.setAttribute("aria-label", `วงล้อสุ่มได้ ${winner.name} ราคา ${winner.price} บาท`);
    spinButton.disabled = false;
    spinButton.querySelector("span:nth-child(2)").textContent = "หมุนอีกครั้ง";
    $("#spin-hint").textContent = "ยังไม่ถูกใจ? หมุนอีกครั้งได้เลย";
  }, reducedMotion ? 60 : 4550);
}

$("#type-options").addEventListener("click", (event) => {
  const button = event.target.closest("[data-type]");
  if (!button || state.spinning) return;
  state.type = button.dataset.type; state.category = "all"; state.selected = null; refresh();
});
$("#location-options").addEventListener("click", (event) => {
  const button = event.target.closest("[data-location]");
  if (!button || state.spinning) return;
  state.location = button.dataset.location; state.selected = null; refresh();
});
$("#category-options").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button || state.spinning) return;
  state.category = button.dataset.category; state.selected = null; refresh();
});
$("#budget-presets").addEventListener("click", (event) => {
  const button = event.target.closest("[data-budget]");
  if (!button || state.spinning) return;
  state.budget = button.dataset.budget === "all" ? null : Number(button.dataset.budget);
  state.selected = null; refresh();
});
budgetInput.addEventListener("input", () => {
  if (state.spinning || budgetInput.value === "") return;
  state.budget = Math.max(0, Math.min(9999, Number(budgetInput.value) || 0));
  state.selected = null; refresh();
});
budgetInput.addEventListener("change", () => {
  if (budgetInput.value === "") { state.budget = 0; state.selected = null; refresh(); }
});
budgetSlider.addEventListener("input", () => {
  if (state.spinning) return;
  state.budget = Number(budgetSlider.value); state.selected = null; refresh();
});
spinButton.addEventListener("click", spin);
document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !["INPUT", "BUTTON", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault(); spin();
  }
});
window.addEventListener("resize", () => {
  if (!state.spinning) {
    renderWheel(state.visible, false);
  }
});
refresh();
fetch("data/thai-menus.json")
  .then((response) => {
    if (!response.ok) throw new Error(`Menu data HTTP ${response.status}`);
    return response.json();
  })
  .then((items) => {
    if (!Array.isArray(items)) throw new Error("Menu data must be an array");
    const known = new Set(menus.map((item) => item.id));
    for (const item of items) {
      if (item && typeof item.id === "string" && typeof item.name === "string" &&
          typeof item.price === "number" && Array.isArray(item.locations) &&
          typeof item.image === "string" && !known.has(item.id)) {
        menus.push(item); known.add(item.id);
      }
    }
  })
  .catch((error) => console.error("โหลดคลังเมนูไทยไม่สำเร็จ", error))
  .finally(() => {
    state.catalogLoading = false;
    $("#catalog-total").textContent = menus.length;
    refresh();
  });
