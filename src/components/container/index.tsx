export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center flex-1 p-6">
      <div className="w-[820px] pt-14">{children}</div>
    </div>
  );
}
