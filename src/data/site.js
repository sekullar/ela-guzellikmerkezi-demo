// Tüm içerik burada. Telefon, adres ve saatleri kendi bilgilerinle değiştir.
export const site = {
  name: 'Elâ Güzellik Atölyesi',
  whatsapp: '905000000000', // ülke koduyla, başında + olmadan
  phone: '0500 000 00 00',
  address: 'Örnek Mah. Güzel Sk. No: 1, İlçe / Şehir',
  hours: [['Pazartesi – Cumartesi', '10.00 – 19.00'], ['Pazar', 'Kapalı']],
  instagram: 'https://instagram.com/',
}

export const services = [
  { id: 'cilt', title: 'Cilt bakımı', time: 'Yaklaşık 60 dk', text: 'Cilt analiziyle başlar. Temizlik, peeling ve nem maskesi cildin ihtiyacına göre seçilir; her seansta ne yapıldığını anlatırız.' },
  { id: 'lazer', title: 'Lazer epilasyon', time: 'Bölgeye göre 15–60 dk', text: 'Tüm cilt tiplerine uygun cihazlarla, konforlu ve planlı seanslar. İlk görüşmede cilt ve tüy yapına göre seans planı çıkarırız.' },
  { id: 'kas', title: 'Kaş ve kirpik', time: 'Yaklaşık 45 dk', text: 'Yüz hatlarına uygun kaş şekli, kirpik lifting ve laminasyon. Doğal görünüm hedefimiz.' },
  { id: 'nail', title: 'Manikür ve pedikür', time: 'Yaklaşık 75 dk', text: 'Bakım, kalıcı oje ve nail art. Malzemeler kişiye özel açılır, aletler her müşteri için sterilize edilir.' },
  { id: 'sac', title: 'Saç bakımı', time: 'Yaklaşık 90 dk', text: 'Kök ve saç derisi analizine dayalı bakım, keratin ve onarım uygulamaları.' },
  { id: 'spa', title: 'Masaj ve spa', time: '45 veya 60 dk', text: 'Rahatlatıcı ve lenf drenaj masajı. Sakin ışık, sıcak havlu ve sessizlik.' },
]

export const principles = [
  ['Önce dinleriz', 'İlk beş dakika sizin ne istediğinize ayrılır. Öneri ondan sonra gelir.'],
  ['Az ama doğru ürün', 'Cildinize gereksiz bir şey sürmeyiz. Her ürünün neden kullanıldığını söyleriz.'],
  ['Hijyen görünür olsun', 'Sterilizasyon ve tek kullanımlık malzemeleri gözünüzün önünde açarız.'],
]

export const gallery = [
  { title: 'Işıltılı cilt', variant: 'arch', colors: ['#C98FA0', '#E3B873', '#2B1830'] },
  { title: 'Sakin bir an', variant: 'dunes', colors: ['#B5C7A5', '#F3EEF5', '#C98FA0'] },
  { title: 'Taze çiçek', variant: 'bloom', colors: ['#E3B873', '#C98FA0', '#F3EEF5'] },
  { title: 'Gece bakımı', variant: 'arch', colors: ['#2B1830', '#C98FA0', '#E3B873'] },
  { title: 'Yeşil ritüel', variant: 'bloom', colors: ['#B5C7A5', '#2B1830', '#F3EEF5'] },
]
