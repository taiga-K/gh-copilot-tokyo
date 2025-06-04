import React from 'react';
import { Code2 } from 'lucide-react';

/**
 * フッターコンポーネント
 */
export const Footer = () => (
  <footer className="bg-background border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-foreground">GitHub Copilot Meetup Tokyo</span>
        </div>
        <p className="text-muted-foreground mb-4">
          Powered by the community, for the community
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://discord.gg/GatQE7wGvK" className="text-muted-foreground hover:text-foreground transition-colors">
            Discord
          </a>
          <a href="https://x.com/taiga_kk322" className="text-muted-foreground hover:text-foreground transition-colors">
            X(旧Twitter)
          </a>
        </div>
      </div>
    </div>
  </footer>
);
