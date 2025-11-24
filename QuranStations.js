/*  QuranStations.js – قائمة إذاعات القرآن الكريم للمشايخ
 *  جاهز للرفع على GitHub أو الاستخدام مباشرة
 */

const Stations = [
  { id: "1", name: "الحصري", radio_url: "https://server03.quran-uni.com:7007/;*.mp3", name_en: "Al-Husary", category: "قرآن كريم", category_en: "Quran" },
  { id: "2", name: "المنشاوي", radio_url: "https://server03.quran-uni.com:7036/;*.mp3", name_en: "Al-Minshawi", category: "قرآن كريم", category_en: "Quran" },
  { id: "3", name: "البنا", radio_url: "https://server03.quran-uni.com:7010/;*.mp3", name_en: "Al-Banna", category: "قرآن كريم", category_en: "Quran" },
  { id: "4", name: "مصطفى إسماعيل", radio_url: "https://server03.quran-uni.com:7132/;*.mp3", name_en: "Mustafa Ismail", category: "قرآن كريم", category_en: "Quran" },
  { id: "5", name: "عبد الباسط", radio_url: "https://server03.quran-uni.com:7000/;*.mp3", name_en: "Abdel Baset", category: "قرآن كريم", category_en: "Quran" }
];

if (typeof module !== "undefined") { module.exports = Stations; }
