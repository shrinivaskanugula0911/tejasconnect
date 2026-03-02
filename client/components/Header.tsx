import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-150">
          <img
            src="/tejas-connect-logo.png"
            alt="Tejas Connect Logo"
            className="h-16 md:h-16 object-contain"
          />
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
