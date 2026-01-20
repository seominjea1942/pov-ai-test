export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f2426] py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-lg text-[#dae2e5] mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg text-[#dae2e5] mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
                  TiDB Cloud
                </a>
              </li>
              <li>
                <a href="#" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg text-[#dae2e5] mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg text-[#dae2e5] mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1f2426] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#acb9bf]">
            <p>
              © 2026 PingCAP. All rights reserved. TiDB and TiDB X are trademarks of PingCAP, Inc.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="https://twitter.com/pingcap" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
              Twitter
            </a>
            <a href="https://linkedin.com/company/pingcap" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/pingcap" className="text-[#acb9bf] hover:text-[#dae2e5] transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}