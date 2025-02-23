interface CustomProgressProps {
  value: number;
  className?: string;
}

export function CustomProgress({
  value = 0,
  className = "",
}: CustomProgressProps) {
  return (
    <div
      className={`w-full h-2 bg-gray-200 rounded-full ${className}`}
      data-oid="zh46vg7"
    >
      <div
        className="h-full bg-primary rounded-full transition-all duration-300"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
        data-oid="et2i_cs"
      />
    </div>
  );
}
