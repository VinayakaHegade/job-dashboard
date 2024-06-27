interface CompanyInfoItemProps {
  label: string;
  value: string;
}

const CompanyInfoItem: React.FC<CompanyInfoItemProps> = ({ label, value }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm/[18.9px] font-medium text-neutral-550">{label}</label>
    <p className="text-base/[21.6px] text-neutral-750">{value}</p>
  </div>
);

export default CompanyInfoItem;
