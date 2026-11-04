import LoginForm from "../../../components/auth/LoginForm";

export const metadata = { title: "ورود | اجاره‌گاه" };

export default function LoginPage() {
  return (
    <section className="px-6 py-14">
      <LoginForm />
    </section>
  );
}