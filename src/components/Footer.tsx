export function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-semibold text-gray-900">Aureva</p>
          <p className="text-sm text-gray-500 mt-1">
            Building practical AI products.
          </p>
        </div>
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Aureva. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
