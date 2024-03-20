# next-auth-prisma-postgresql
next-auth-prisma-postgresql

## next-auth-prisma-postgresql: การรับรองความถูกต้องแบบเต็มรูปแบบสำหรับแอป Next.js ที่ใช้ Prisma PostgreSQL

### บทนำ

Next.js เป็นเฟรมเวิร์ก JavaScript ที่ได้รับความนิยมสำหรับการสร้างแอปพลิเคชันเว็บแบบโต้ตอบ Next-auth เป็นไลบรารีการรับรองความถูกต้องแบบโอเพนซอร์สที่สามารถเพิ่มการรับรองความถูกต้องที่ครอบคลุมและง่ายต่อการใช้ให้กับแอป Next.js Prisma เป็นออร์มที่ทำให้การทำงานกับฐานข้อมูล PostgreSQL นั้นง่ายขึ้น

บทความนี้จะแนะนำวิธีใช้ next-auth-prisma-postgresql เพื่อติดตั้งและกำหนดค่าระบบการรับรองความถูกต้องแบบเต็มรูปแบบสำหรับแอป Next.js ที่ใช้ Prisma PostgreSQL

### ข้อกำหนดเบื้องต้น

* แอป Next.js
* ฐานข้อมูล PostgreSQL
* Node.js เวอร์ชัน 18 ขึ้นไป
* Prisma CLI

### การติดตั้ง

ติดตั้งแพ็คเกจ next-auth-prisma-postgresql:

```sh
npm install next-auth-prisma-postgresql
```

### การกำหนดค่า

สร้างไฟล์ `[...nextauth].js` ในไดเรกทอรี `app/api/auth/` และเพิ่มโค้ดต่อไปนี้:

```js
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  database: process.env.DATABASE_URL,
  session: {
    strategy: "jwt",
  },
});
```

* **GOOGLE_CLIENT_ID** และ **GOOGLE_CLIENT_SECRET** ควรถูกตั้งค่าเป็นข้อมูลประจำตัวของแอป Google ของคุณ
* **DATABASE_URL** ควรตั้งค่าเป็นสตริงการเชื่อมต่อฐานข้อมูล PostgreSQL ของคุณ

### การรันแอป

รันแอป Next.js ของคุณด้วยคำสั่งต่อไปนี้:

```sh
npm run dev
```

### การทดสอบ

ไปที่หน้า `http://localhost:3000/api/auth/signin` ในเบราว์เซอร์เพื่อลงชื่อเข้าใช้ด้วยบัญชี Google

### ข้อสรุป

next-auth-prisma-postgresql ทำให้คุณสามารถติดตั้งและกำหนดค่าระบบการรับรองความถูกต้องแบบเต็มรูปแบบได้อย่างง่ายดายสำหรับแอป Next.js ที่ใช้ Prisma PostgreSQL ด้วยการกำหนดค่าที่ยืดหยุ่นและการรวมเข้ากับโซเชียลมีเดีย คุณสามารถสร้างประสบการณ์การลงชื่อเข้าใช้ที่ราบรื่นและปลอดภัยสำหรับผู้ใช้ของคุณได้