# มื้อนี้จุ่ม — GitHub Pages

เว็บวงล้อสุ่มอาหารและเครื่องดื่มแบบ static มี **126 เมนู** ใช้ HTML, CSS และ JavaScript เปิดได้โดยไม่ต้องติดตั้งแพ็กเกจหรือใช้ฐานข้อมูล

## เผยแพร่บน GitHub Pages

1. สร้าง repository ใหม่บน GitHub เช่น `mue-nee-jum` (บัญชี GitHub Free ใช้ Pages กับ repository สาธารณะ)
2. ใน Terminal ที่โฟลเดอร์โปรเจกต์นี้ เชื่อม repository และ push ไฟล์ที่ commit แล้ว:

   ```sh
   git remote add origin https://github.com/USERNAME/mue-nee-jum.git
   git push -u origin main
   ```

   เปลี่ยน `USERNAME` เป็นชื่อบัญชี GitHub ของคุณ และใช้ URL ของ repository ที่สร้างจริง
3. ใน repository ไปที่ **Settings → Pages**
4. ที่ **Build and deployment → Source** เลือก **Deploy from a branch** แล้วเลือก **main** และ **/(root)** จากนั้นกด **Save**
5. เว็บจะอยู่ที่ `https://USERNAME.github.io/REPOSITORY/` โดยเปลี่ยน `USERNAME` และ `REPOSITORY` เป็นของคุณ

ไฟล์ CSS, JavaScript และรูปภาพใช้ path แบบสัมพัทธ์ จึงทำงานได้ที่ URL ใต้ชื่อ repository โดยไม่ต้องแก้โค้ด

## ทดสอบในเครื่อง

เปิด Terminal ในโฟลเดอร์นี้ แล้วรัน:

```sh
python3 -m http.server 8000
```

เปิด `http://localhost:8000/` ในเบราว์เซอร์

## เนื้อหา

- `index.html` — หน้าเว็บ
- `styles.css` — รูปแบบหน้าจอและวงล้อ
- `app.js` — เมนู ตัวกรอง งบ และการสุ่ม
- `data/thai-menus.json` — เมนูไทยเพิ่มเติม 91 รายการที่เว็บโหลดเมื่อเปิดหน้า
- `assets/` — รูปภาพเมนูและ `logo-final.svg` สำหรับโลโก้หัวเว็บและไอคอนแท็บ
- `credits.html` — ที่มาข้อมูลและเครดิตภาพ
- `.nojekyll` — ให้ GitHub Pages เสิร์ฟไฟล์ static โดยตรง

รายชื่อเมนูไทยเพิ่มเติมคัดเลือกจาก [List of Thai dishes](https://en.wikipedia.org/wiki/List_of_Thai_dishes) และเก็บไว้ใน JSON เพื่อให้ GitHub Pages ใช้งานได้อย่างเสถียร เว็บไม่ได้ดึงสถิติการกินของผู้ใช้หรือข้อมูลราคาปัจจุบัน ราคาและสถานที่เป็นค่าประมาณที่แก้ได้ใน `app.js` และ `data/thai-menus.json` ดูที่มาภาพใน `credits.html`
