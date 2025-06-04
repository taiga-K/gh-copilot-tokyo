import React from 'react';
import { Code2 } from 'lucide-react';
import { Button } from '../ui/button';

/**
 * ヘッダーコンポーネント
 */
export const Header = () => (
  <header className="bg-background border-b border-border sticky top-0 z-50">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-foreground">GitHub Copilot Meetup Tokyo</span>
        </div>
        
        
        <Button variant="outline" className="hidden md:inline-flex">
          参加申込み
        </Button>
      </div>
    </div>
  </header>
);
