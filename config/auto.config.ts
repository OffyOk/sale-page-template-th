export const saleConfig = {
    productPath: "auto-sales-page",
    productName: "ระบบปิดการขายอัตโนมัติ 24 ชม.",
    headline: "เปลี่ยนแชททุกข้อความ ให้กลายเป็นยอดขายอัตโนมัติ",
    subHeadline:
        "ระบบ Sale Page + Automation ที่ช่วยคุณเก็บลีด ตอบกลับ และส่งข้อมูลเข้า CRM โดยไม่ต้องเฝ้าหน้าจอ",

    benefits: [
        "ลดเวลาตอบแชทซ้ำ ๆ ได้มากกว่า 80%",
        "ไม่พลาดลูกค้า แม้ทักมาตอนตี 3",
        "เก็บข้อมูลลูกค้าเข้า Google Sheet อัตโนมัติ",
        "เชื่อมต่อ LINE / n8n / CRM ได้ทันที",
        "พร้อมขยายระบบเมื่อธุรกิจโตขึ้น",
    ],

    features: [
        "ฟอร์มเก็บข้อมูลลูกค้าอัตโนมัติ",
        "ส่งข้อมูลเข้า Webhook ได้ทันที",
        "รองรับ SEO และการยิงโฆษณา",
        "รองรับมือถือ 100%",
        "โครงสร้างพร้อมต่อยอดเป็น Funnel เต็มระบบ",
    ],

    faqs: [
        {
            question: "ต้องมีความรู้เทคนิคไหม?",
            answer:
                "ไม่จำเป็น ระบบถูกออกแบบให้ใช้งานง่าย พร้อมคู่มือและโครงสร้างที่พร้อมใช้งานทันที",
        },
        {
            question: "สามารถต่อกับระบบอื่นได้ไหม?",
            answer:
                "ได้ รองรับการเชื่อมต่อ n8n, Google Sheet, LINE Notify และระบบ Automation อื่น ๆ",
        },
        {
            question: "เหมาะกับใคร?",
            answer:
                "เหมาะกับเจ้าของธุรกิจออนไลน์ที่ต้องการลดเวลาทำงานซ้ำ ๆ และเพิ่มยอดขายแบบอัตโนมัติ",
        },
    ],

    images: [
        // "/images/auto-1.jpg",
        // "/images/auto-2.jpg",
        // "/images/auto-3.jpg",
        // "/images/auto-4.jpg",
        // "/images/auto-5.jpg",
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    ],

    price: "เริ่มต้นเพียง 4,900 บาท",
    ctaText: "เริ่มใช้งานระบบอัตโนมัติวันนี้",
};
export type SaleConfig = typeof saleConfig;