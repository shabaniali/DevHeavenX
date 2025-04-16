export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center flex-1 p-5">
      <div className="max-w-[820px] w-full pt-3">{children}</div>
    </div>
  );
}
