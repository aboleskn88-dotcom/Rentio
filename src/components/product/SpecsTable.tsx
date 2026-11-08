type Spec = { label: string; value: string };

export default function SpecsTable({
  specs,
  minDays,
}: {
  specs: Spec[];
  minDays: number;
}) {
  const rows: Spec[] = [
    ...specs,
    { label: "حداقل مدت اجاره", value: `${minDays.toLocaleString("fa-IR")} روز` },
  ];

  return (
    <section className="rounded-[18px] border border-[#E3E8E6] bg-white p-6">
      <h2 className="mb-2 text-lg font-bold">مشخصات</h2>
      <dl>
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex justify-between gap-4 border-b border-[#E3E8E6] py-3 text-sm last:border-b-0"
          >
            <dt className="text-[#5B6778]">{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}