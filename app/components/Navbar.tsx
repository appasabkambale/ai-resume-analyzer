import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center fixed top-6 left-0 z-50 px-4">
      <nav className="navbar group">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-surface-700/80 flex items-center justify-center border border-white/5 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="url(#logo-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38d9f5" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <p className="text-xl font-bold text-gradient tracking-wide">RESUMIND</p>
        </Link>
        <Link to="/upload" className="primary-button group/btn flex items-center gap-2 w-fit !rounded-full !px-5 !py-2.5 text-sm font-medium">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:-translate-y-0.5 transition-transform">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          Upload Resume
        </Link>
      </nav>
    </div>
  )
}

export default Navbar