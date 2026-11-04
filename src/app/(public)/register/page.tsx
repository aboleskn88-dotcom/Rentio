import RegisterForm from "@/components/auth/RegisterForm";

export const metadata = { title: "ثبت‌نام | رنتیو" };

export default function RegisterPage() {
  return (
    <section className="px-6 py-14">
      <RegisterForm />
    </section>
  );
}