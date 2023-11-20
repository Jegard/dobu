export default function Layout({ children }) {
  return (
    <main className="relative min-h-screen bg-white sm:px-5 lg:px-8">
      <div className="relative sm:pb-16 sm:pt-8">{children}</div>
    </main>
  );
}
