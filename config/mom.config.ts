export const saleConfig = {
    productPath: "mom-sales-page",

    productName: "หน้าเว็บปิดการขายสำหรับแม่ค้าออนไลน์",
    headline: "ลูกค้าทักมาเมื่อไหร่ ระบบช่วยขายให้ทันที",
    subHeadline:
        "ไม่ต้องตอบแชททั้งวัน ไม่ต้องพิมพ์ซ้ำ ๆ ระบบช่วยเก็บข้อมูลลูกค้าและส่งแจ้งเตือนให้อัตโนมัติ",

    benefits: [
        "ไม่ต้องเฝ้าจอทั้งวัน",
        "ไม่พลาดลูกค้าที่ทักมา",
        "เก็บชื่อ เบอร์ ที่อยู่ อัตโนมัติ",
        "ดูเป็นร้านมืออาชีพ น่าเชื่อถือ",
        "ใช้งานง่าย ไม่ต้องมีความรู้เทคนิค",
    ],

    features: [
        "หน้าเว็บสวย ดูน่าเชื่อถือ",
        "ฟอร์มกรอกข้อมูลง่าย ๆ สำหรับลูกค้า",
        "ส่งข้อมูลเข้า LINE หรือ Google Sheet ได้",
        "รองรับมือถือ 100%",
        "พร้อมใช้งานทันที",
    ],

    faqs: [
        {
            question: "แม่ค้าใช้ยากไหม?",
            answer:
                "ไม่ยากเลย แค่เปลี่ยนชื่อสินค้า ใส่รูป แล้วแชร์ลิงก์ให้ลูกค้า",
        },
        {
            question: "ต้องจ้างโปรแกรมเมอร์ดูแลไหม?",
            answer:
                "ไม่จำเป็น ระบบออกแบบมาให้ใช้งานง่ายและดูแลเองได้",
        },
        {
            question: "ถ้าไม่เก่งคอมพิวเตอร์ใช้ได้ไหม?",
            answer:
                "ได้แน่นอน ระบบถูกออกแบบให้เข้าใจง่ายสำหรับผู้เริ่มต้น",
        },
    ],

    images: [
        // "/images/mom-1.jpg",
        // "/images/mom-2.jpg",
        // "/images/mom-3.jpg",
        // "/images/mom-4.jpg",
        // "/images/mom-5.jpg",
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    ],

    price: "เริ่มต้นเพียง 3,900 บาท",
    ctaText: "เริ่มขายง่าย ๆ วันนี้",
};
export type SaleConfig = typeof saleConfig;