import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-200/70 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-row justify-between items-center mb-2 md:mb-6">
          {/* Logo */}
          <p className="text-2xl font-bold text-blue-600">
            <span className="text-black">Burn</span>Analyze
          </p>
        </div>
        <div className="border-t border-gray-700 pt-6 flex flex-row justify-between items-start md:items-center text-xs">
          {/* Copyright */}
          <div className="flex text-slate-950 items-center space-x-3 mb-2 md:mb-0 text-[0.8rem] md:text-sm">
            <p>© 2025 BurnAnalyze Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}