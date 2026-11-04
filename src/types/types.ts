export type Steps = {
    number: string
    title: string
    description: string
}
export type Reasons = {
    icon : "wallet" | "box" | "grid"
    tint : string
    title  :string
    description : string
}


export type Faqs = {
    question : string
    answer : string
}
export type FooterLink = {
  label: string;
  href: string;
};

export type PasswordFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
};
