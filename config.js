/* GK 成吉思汗全館集點系統 | 正式版 Firebase 連線設定
 * Firebase 專案：gk-points-production
 * GitHub 正式版：Shane-sketch-create/gk-points-production
 * 注意：Firebase Web 設定並非管理員密碼；實際權限由 Authentication 與 Firestore Rules 控制。
 */
window.GK_CONFIG = {
  firebase: {
    apiKey: "AIzaSyDODVFumge3-D0TqMaC-F1ImqkRnco2-jU",
    authDomain: "gk-points-production.firebaseapp.com",
    projectId: "gk-points-production",
    storageBucket: "gk-points-production.firebasestorage.app",
    messagingSenderId: "226156321067",
    appId: "1:226156321067:web:e488040112d8700e9f8d6e"
  },
  campaignId: "gk-thanksgiving-2026",
  campaignName: "成吉思汗感謝祭",
  branches: ["蘆洲", "新莊", "三重", "林口", "中壢", "台中", "台北"],
  demoStorageKey: "gk_production_demo_v1"
};
