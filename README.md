# 智慧藥管家（智慧用藥盒子 AI）

管理全家人的門診與用藥：每日服藥打卡、庫存警告、回診與領藥提醒、拍藥袋 AI 辨識。

**線上使用**：https://kftseng2oo1.github.io/medbox/

## 主要功能
- **今日用藥**：依時段（飯前、飯中、飯後、睡前、空腹…）列出，打卡後自動扣庫存
- **藥箱**：全部／進行中／庫存警告／已完成篩選
- **月曆**：回診日、可領藥日（慢性處方箋第幾次領藥）
- **📷 拍照辨識**：拍藥袋或處方，AI 自動填入藥品資料
- **多人管理**：自己、父親、母親、祖父母等，各自有個人資料
- **通知**：Email（本人或緊急聯絡人）、LINE（用 LINE 登入取得 userId）

## 技術與依賴
- 單檔 HTML PWA（`index.html` 內含全部 HTML/CSS/JS），`manifest.json` + `sw.js` 提供安裝到主畫面與離線快取。
- 後端：`arcar.kftseng2oo1.workers.dev`（AI 辨識、`/send-email`、`/send-email-to`、`/send-line`、`/line-profile`）
- LINE LIFF SDK
- 本機資料：`mm_medications`、`mm_profile`、`mm_current_user`、`mm_user_*`
