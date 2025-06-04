import React from 'react';

import { Button } from '../ui/button';
import { toast } from 'sonner';

/**
 * 参加申込みセクション
 */
export const RegisterSection = () => {
  const handleRegistrationClick = () => {
    toast("現在準備中です", {
      description: "参加申込みの詳細については、近日中にお知らせいたします。",
      duration: 4000,
    });
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
