import React from 'react';
import { Zap, Brain, Code2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { eventData } from '../../data/eventData';

/**
 * Aboutセクション
 */
export const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">About This Event</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {eventData.description}
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardContent className="pt-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">実践的な知識共有</h3>
            <p className="text-muted-foreground">
              GitHub Copilotを活用した実際の開発経験や、効率的なプロンプト設計、AIとの協業テクニックなど、すぐに実践できる知識を共有します。
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">最新トレンドの探求</h3>
            <p className="text-muted-foreground">
              AIを活用した開発の最新トレンドや、GitHub Copilotの新機能、将来の可能性について議論し、テクノロジーの最前線を探ります。
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">コミュニティ形成</h3>
            <p className="text-muted-foreground">
              同じ興味を持つ開発者との出会いや、アイデア交換を通じて、AIペアプログラミングのコミュニティを形成します。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);
