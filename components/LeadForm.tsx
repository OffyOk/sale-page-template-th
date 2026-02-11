"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitLead, type LeadData } from "@/lib/submitLead";

type LeadFormProps = {
  productName: string;
  ctaText: string;
  slug: string;
};

type FormErrors = {
  name?: string;
  phone?: string;
  address?: string;
};

const initialData = {
  name: "",
  phone: "",
  address: "",
};

export function LeadForm({ productName, ctaText, slug }: LeadFormProps) {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "กรุณากรอกชื่อ";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "กรุณากรอกเบอร์โทร";
    }

    if (!formData.address.trim()) {
      nextErrors.address = "กรุณากรอกที่อยู่";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!validate()) {
      return;
    }

    const payload: LeadData = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      address: formData.address.trim(),
      productName,
      slug,
      submittedAt: new Date().toISOString(),
    };

    try {
      setIsSubmitting(true);
      await submitLead(payload);
      setSuccessMessage("ส่งข้อมูลเรียบร้อย ทีมงานจะติดต่อกลับโดยเร็วที่สุด");
      setFormData(initialData);
      setErrors({});
    } catch {
      setErrorMessage("ไม่สามารถส่งข้อมูลได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="bg-slate-100 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900">พร้อมเริ่มเพิ่มยอดขายแล้วหรือยัง</CardTitle>
            <p className="text-slate-600">กรอกข้อมูลให้ครบ ทีมงานพร้อมดูแลและแนะนำขั้นตอนที่เหมาะกับธุรกิจของคุณ</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="space-y-2">
                <Label htmlFor="name">ชื่อ</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  placeholder="ชื่อผู้ติดต่อ"
                  aria-invalid={Boolean(errors.name)}
                  required
                />
                {errors.name ? <p className="text-sm text-red-600">{errors.name}</p> : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">เบอร์โทร</Label>
                <Input
                  id="phone"
                  name="phone"
                  inputMode="tel"
                  value={formData.phone}
                  onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                  placeholder="เบอร์โทรที่ติดต่อได้"
                  aria-invalid={Boolean(errors.phone)}
                  required
                />
                {errors.phone ? <p className="text-sm text-red-600">{errors.phone}</p> : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">ที่อยู่</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={(event) => setFormData((prev) => ({ ...prev, address: event.target.value }))}
                  placeholder="ที่อยู่สำหรับการติดต่อหรือจัดส่ง"
                  aria-invalid={Boolean(errors.address)}
                  rows={4}
                  required
                />
                {errors.address ? <p className="text-sm text-red-600">{errors.address}</p> : null}
              </div>

              <Button type="submit" size="lg" className="h-12 w-full rounded-xl text-base font-semibold" disabled={isSubmitting}>
                {isSubmitting ? "กำลังส่งข้อมูล..." : ctaText}
              </Button>

              {successMessage ? <p className="text-sm font-medium text-emerald-700">{successMessage}</p> : null}
              {errorMessage ? <p className="text-sm font-medium text-red-700">{errorMessage}</p> : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}