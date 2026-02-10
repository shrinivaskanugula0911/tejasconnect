import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Tejas Connect</h3>
            <p className="text-muted-foreground max-w-xs">
              Bridging the gap between academic learning and real-world startup experience through meaningful campus connections.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors duration-150">About</Link>
              </li>
              <li>
                <Link to="/?section=who" className="hover:text-accent transition-colors duration-150">Who We Serve</Link>
              </li>
              <li>
                <Link to="/?section=how" className="hover:text-accent transition-colors duration-150">How It Works</Link>
              </li>
              <li>
                <Link to="/?section=involved" className="hover:text-accent transition-colors duration-150">Get Involved</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:team@tejasconnect.in" className="hover:text-accent transition-colors duration-150">team@tejasconnect.in</a>
              </li>
              <li className="pt-4 mt-4 border-t border-border">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-150 text-sm">Twitter</a>
                <span className="text-border mx-2">•</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-150 text-sm">LinkedIn</a>
                <span className="text-border mx-2">•</span>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-150 text-sm">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 Tejas Connect. Built to connect, inspire, and empower.</p>
        </div>
      </div>
    </footer>
  );
}
