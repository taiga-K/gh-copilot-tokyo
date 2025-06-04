import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { eventData } from '../../data/eventData';
import { toast } from 'sonner';

/**
 * ヒーローセクション
 */
export const HeroSection = () => {
  const handleRegistrationClick = () => {
    toast("現在準備中です", {
      description: "参加申込みの詳細については、近日中にお知らせいたします。",
      duration: 4000,
    });
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute right-1/4 bottom-1/4 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {eventData.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            GitHub Copilotの可能性を探求する<br />
            エンジニアのためのコミュニティイベント
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center text-blue-100">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{eventData.date}</span>
            </div>
            <div className="flex items-center text-blue-100">
              <Clock className="w-5 h-5 mr-2" />
              <span>{eventData.time}</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            variant="default" 
            className="font-bold"
            onClick={handleRegistrationClick}
          >
            参加申込み
          </Button>
        </div>
      </div>
    </section>
  );
};
