export interface Ayat {
  id: number;
  bn: {
    text: string;
    reference: string;
  };
  en: {
    text: string;
    reference: string;
  };
}

export const QURAN_AYATS: Ayat[] = [
  { 
    id: 1, 
    bn: { text: "আমরা কেবল আপনারই ইবাদত করি এবং কেবল আপনারই সাহায্য চাই।", reference: "সূরা আল-ফাতিহা (১): ৫" },
    en: { text: "It is You we worship and You we ask for help.", reference: "Surah Al-Fatihah (1): 5" }
  },
  { 
    id: 2, 
    bn: { text: "তোমরা সত্যকে মিথ্যার সাথে মিশিয়ে দিও না এবং জেনেশুনে সত্য গোপন করো না।", reference: "সূরা আল-বাকারা (২): ৪২" },
    en: { text: "And do not mix the truth with falsehood or conceal the truth while you know [it].", reference: "Surah Al-Baqarah (2): 42" }
  },
  { 
    id: 3, 
    bn: { text: "তোমরা মানুষের সাথে সদালাপ করবে (সুন্দরভাবে কথা বলবে)।", reference: "সূরা আল-বাকারা (২): ৮৩" },
    en: { text: "And speak to people good [words].", reference: "Surah Al-Baqarah (2): 83" }
  },
  { 
    id: 4, 
    bn: { text: "অতএব তোমরা আমাকে স্মরণ করো, আমিও তোমাদের স্মরণ করব।", reference: "সূরা আল-বাকারা (২): ১৫২" },
    en: { text: "So remember Me; I will remember you.", reference: "Surah Al-Baqarah (2): 152" }
  },
  { 
    id: 9, 
    bn: { text: "আল্লাহ কাউকে তার সাধ্যাতীত কোনো কাজের ভার দেন না।", reference: "সূরা আল-বাকারা (২): ২৮৬" },
    en: { text: "Allah does not charge a soul except [with that within] its capacity.", reference: "Surah Al-Baqarah (2): 286" }
  },
  { 
    id: 16, 
    bn: { text: "তুমি বিষণ্ণ হয়ো না, নিশ্চয়ই আল্লাহ আমাদের সাথে আছেন।", reference: "সূরা আত-তাওবাহ (৯): ৪০" },
    en: { text: "Do not grieve; indeed Allah is with us.", reference: "Surah At-Tawbah (9): 40" }
  },
  { 
    id: 18, 
    bn: { text: "জেনে রেখো, আল্লাহর জিকিরেই কলব বা অন্তর প্রশান্ত হয়।", reference: "সূরা আর-রাদ (১৩): ২৮" },
    en: { text: "Unquestionably, by the remembrance of Allah hearts are assured.", reference: "Surah Ar-Ra'd (13): 28" }
  },
  { 
    id: 29, 
    bn: { text: "নিশ্চয়ই কষ্টের সাথেই স্বস্তি রয়েছে।", reference: "সূরা আল-ইনশিরাহ (৯৪): ৬" },
    en: { text: "Indeed, with hardship [will be] ease.", reference: "Surah Al-Inshirah (94): 6" }
  },
];

export const TEAM_MEMBERS = {
  advisors: [
    { bn: "হারুন অর রশিদ", en: "Harun Or Rashid" },
    { bn: "মিজানুর রহমান (বাবলু)", en: "Mizanur Rahman (Bablu)" }
  ],
  leadership: [
    { name_bn: "মো: রায়হান কবির শাওন", name_en: "Md. Raihan Kabir Shaon", role_bn: "চেয়ারম্যান", role_en: "Chairman" },
    { name_bn: "মো: ফিরোজ মিলন", name_en: "Md. Firoz Milon", role_bn: "ভাইস চেয়ারম্যান", role_en: "Vice Chairman" },
    { name_bn: "মো: আমির হোসেন", name_en: "Md. Amir Hossain", role_bn: "মেন্টর", role_en: "Mentor" }
  ],
  sections: [
    { 
      title_bn: "আইটি & মিডিয়া, প্রচার বিভাগ", 
      title_en: "IT, Media & PR Department",
      members: [
        { bn: "মো: রিফাত", en: "Md. Rifat" },
        { bn: "মো: তূরজো", en: "Md. Turjo" }
      ] 
    },
    { 
      title_bn: "অর্থ বিভাগ", 
      title_en: "Finance Department",
      members: [
        { bn: "মো: নুর আলম", en: "Md. Nur Alam" },
        { bn: "মো: শাকিল আহমেদ", en: "Md. Shakil Ahmed" }
      ] 
    },
    { 
      title_bn: "কার্যনির্বাহী সদস্য", 
      title_en: "Executive Members",
      members: [
        { bn: "মো: নাইম বাবু", en: "Md. Naim Babu" },
        { bn: "মো: রায়হান কবির(আ: হাকিম)", en: "Md. Raihan Kabir (Abdul Hakim)" },
        { bn: "মো: ইউসুফ আহমেদ রাজু", en: "Md. Yusuf Ahmed Raju" },
        { bn: "মো: বায়জিদ বোস্তামি", en: "Md. Bayzid Bostami" }
      ] 
    }
  ]
};

export const PROJECTS = [
  {
    id: 1,
    bn: {
      category: "শিক্ষা",
      title: "অসহায় শিশুদের শিক্ষা",
      description: "আর্থিক সংকটে থাকা শিশুদের মানসম্মত শিক্ষা নিশ্চিত করা এবং তাদের সুন্দর ভবিষ্যৎ তৈরি করা।"
    },
    en: {
      category: "Education",
      title: "Education for Underprivileged Children",
      description: "Ensuring quality education for children in financial crisis and building a beautiful future for them."
    },
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    bn: {
      category: "কর্মসংস্থান",
      title: "বেকারদের কর্মসংস্থান",
      description: "দক্ষতা উন্নয়ন ও ক্ষুদ্র ঋণের মাধ্যমে বেকার যুবক-যুবতীদের আত্মনির্ভরশীল করে তোলা।"
    },
    en: {
      category: "Employment",
      title: "Employment for the Unemployed",
      description: "Making unemployed youths self-reliant through skill development and micro-credits."
    },
    image: "https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    bn: {
      category: "দাওয়াহ",
      title: "নব মুসলিমদের সহায়তা",
      description: "নতুন ইসলাম গ্রহণকারী ভাই-বোনদের ধর্মীয় ও সামাজিক ভাবে সহযোগিতা করা।"
    },
    en: {
      category: "Dawah",
      title: "Support for New Muslims",
      description: "Assisting brothers and sisters who have recently accepted Islam religiously and socially."
    },
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    bn: {
      category: "পরিবেশ",
      title: "বৃক্ষরোপণ কর্মসূচি",
      description: "প্রকৃতি রক্ষায় দেশব্যাপী ফলজ ও বনজ বৃক্ষরোপণের মাধ্যমে সবুজ বিপ্লব আনা।"
    },
    en: {
      category: "Environment",
      title: "Tree Plantation Program",
      description: "Bringing a green revolution through nationwide fruit and forest tree plantation to protect nature."
    },
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    bn: {
      category: "জরুরি সহায়তা",
      title: "গরিব মানুষের সেবা",
      description: "খাদ্য, বস্ত্র ও চিকিৎসা সেবার মাধ্যমে আর্তমানবতার পাশে দাঁড়ানো।"
    },
    en: {
      category: "Emergency Aid",
      title: "Service to the Poor",
      description: "Standing by humanity through food, clothing, and medical services."
    },
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
  }
];

export const IMPACTS = [
  { bn: { label: "প্রতিষ্ঠাতা সদস্য", value: "১১" }, en: { label: "Founding Members", value: "11" }, icon: "Users" },
  { bn: { label: "স্বেচ্ছাসেবী", value: "২০+" }, en: { label: "Volunteers", value: "20+" }, icon: "Heart" },
  { bn: { label: "পরিবারকে সহায়তা", value: "৫০০+" }, en: { label: "Families Supported", value: "500+" }, icon: "HelpingHand" },
  { bn: { label: "প্রজেক্ট সম্পন্ন", value: "১০+" }, en: { label: "Projects Completed", value: "10+" }, icon: "CheckCircle" }
];

export const DONATION_METHODS = [
  { type: "Bkash", number: "01340686723", emoji: "🟥", color: "bg-[#E2136E]" },
  { type: "Nagad", number: "01340686723", emoji: "🟧", color: "bg-[#F7941D]" },
  { type: "Rocket", number: "01340686723", emoji: "🟪", color: "bg-[#8C3494]" }
];
