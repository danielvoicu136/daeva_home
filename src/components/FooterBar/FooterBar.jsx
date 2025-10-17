import React from 'react';

export default function FooterBar() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#071014] text-slate-300 py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm font-light">
        <div className="flex items-center gap-4 text-slate-400">
          <span>© {year} Amber Studio</span>
          <span className="opacity-60">|</span>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <span className="opacity-60">|</span>
          <a href="/cookie" className="hover:underline">Cookie Policy</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-slate-400 mr-2">Find us on</span>

          <nav className="flex items-center gap-2" aria-label="Social links">
            <ul className="flex items-center gap-2">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-orange-400 text-orange-400 hover:bg-orange-400/10 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.99h4.95V24H0V8.99zM7.47 8.99h4.75v2.07h.07c.66-1.25 2.28-2.57 4.7-2.57 5.03 0 5.96 3.31 5.96 7.62V24h-4.96v-7.47c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.95V24H7.47V8.99z"/>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-orange-400 text-orange-400 hover:bg-orange-400/10 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                    <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.055 1.963.24 2.42.405.59.214 1.01.47 1.45.91.44.44.695.86.91 1.45.165.457.35 1.25.405 2.42.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.963-.405 2.42-.214.59-.47 1.01-.91 1.45-.44.44-.86.695-1.45.91-.457.165-1.25.35-2.42.405-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.963-.24-2.42-.405-.59-.214-1.01-.47-1.45-.91-.44-.44-.695-.86-.91-1.45-.165-.457-.35-1.25-.405-2.42C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.055-1.17.24-1.963.405-2.42.214-.59.47-1.01.91-1.45.44-.44.86-.695 1.45-.91.457-.165 1.25-.35 2.42-.405C8.416 2.172 8.8 2.16 12 2.16zm0 1.8c-3.148 0-3.52.012-4.763.068-1.025.046-1.58.213-1.946.355-.498.18-.854.396-1.23.772-.376.376-.592.732-.772 1.23-.142.366-.309.92-.355 1.946-.056 1.243-.068 1.615-.068 4.763s.012 3.52.068 4.763c.046 1.025.213 1.58.355 1.946.18.498.396.854.772 1.23.376.376.732.592 1.23.772.366.142.92.309 1.946.355 1.243.056 1.615.068 4.763.068s3.52-.012 4.763-.068c1.025-.046 1.58-.213 1.946-.355.498-.18.854-.396 1.23-.772.376-.376.592-.732.772-1.23.142-.366.309-.92.355-1.946.056-1.243.068-1.615.068-4.763s-.012-3.52-.068-4.763c-.046-1.025-.213-1.58-.355-1.946-.18-.498-.396-.854-.772-1.23-.376-.376-.732-.592-1.23-.772-.366-.142-.92-.309-1.946-.355C15.52 3.972 15.148 3.96 12 3.96zM12 7.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm0 1.8a3 3 0 110 6 3 3 0 010-6zm5.025-2.7a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"/>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-orange-400 text-orange-400 hover:bg-orange-400/10 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07C1.86 17.04 5.89 21.18 10.63 21.9v-7.59H8.2v-2.25h2.43V9.97c0-2.4 1.43-3.72 3.62-3.72 1.05 0 2.15.19 2.15.19v2.36h-1.21c-1.19 0-1.56.74-1.56 1.5v1.8h2.66l-.43 2.25h-2.23v7.59c4.75-.72 8.78-4.86 8.78-9.83z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
