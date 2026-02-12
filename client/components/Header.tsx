import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-150">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F57d9ad027eda4a5381433d555f15e3ef%2F85423baee08f4b96b5be72c0fbd1d7d5"
            alt="Tejas Connect Logo"
            className="h-10 object-contain"
            style={{ width: '30px' }}
          />
          <span className="text-1x1 font-agale text-[#7F2CF6]">tejas</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link to="/about" className="text-foreground hover:text-accent transition-colors duration-150">About</Link>
          <Link to="/?section=who" className="text-foreground hover:text-accent transition-colors duration-150">Who</Link>
          <Link to="/?section=how" className="text-foreground hover:text-accent transition-colors duration-150">How</Link>
          <Link to="/?section=involved" className="text-foreground hover:text-accent transition-colors duration-150">Get Involved</Link>
        </nav>
      </div>
    </header>
  );
}
