import React from 'react';

import { Button } from '../ui/button';

/**
 * 参加申込みセクション
 */
export const RegisterSection = () => {
  const handleRegistrationClick = () => {
    window.open('https://aiau.connpass.com/event/357272/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="register" className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Join Us!</h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          AIペアプログラミングの未来を一緒に探求しませんか？<br />
          皆様のご参加をお待ちしています！
        </p>
        
        <Button 
          size="lg" 
          variant="default" 
          className="font-bold px-12 py-4 text-xl mb-8"
          onClick={handleRegistrationClick}
        >
          今すぐ参加申込み
        </Button>
        
        <p className="text-blue-200 text-sm">
          ※ 参加費は無料です。事前申込みが必要となります。
        </p>
      </div>
    </section>
  );
};
