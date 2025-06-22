export default function Box({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-gray-800 p-3 rounded-lg shadow-md w-24 h-16 flex items-center justify-center ${
        className || ''
      }`}
    >
      {children}
    </div>
  );
}
