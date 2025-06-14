import React from 'react';
import { MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { eventData } from '../../data/eventData';

/**
 * 会場情報セクション
 */
export const VenueSection = () => (
  <section id="venue" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Venue Information</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          オフラインとオンラインのハイブリッド開催を予定しております。<br />
          現地参加の方もリモート参加の方も、ぜひご参加ください。
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              会場
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium mb-4">{eventData.venue}</p>
            <div className="aspect-video bg-muted rounded-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827519795025!2d139.7720139157606!3d35.68118698019426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889df18580a81%3A0x73055a602d3866f4!2z5p2x5Lqs5pel5pys5qmL44K_44Ov44O8IDI3Rg!5e0!3m2!1sja!2sjp!4v1579066993435!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border:0 }}
                allowFullScreen={true}
                loading="lazy"
                title="会場マップ"
              ></iframe>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>〒103-6027 東京都中央区日本橋2-7-1 東京日本橋タワー 27階</p>
              <p className="mt-2">アクセス：東京メトロ銀座線・東西線、都営地下鉄浅草線：「日本橋駅」B6出口直通</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold flex items-center">
              <Users className="w-5 h-5 mr-2 text-primary" />
              参加情報
            </h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="font-medium">参加費</p>
                <p className="text-muted-foreground">{eventData.fee}</p>
              </div>
              <div>
                <p className="font-medium">定員</p>
                <p className="text-muted-foreground whitespace-pre-line">{eventData.capacity}</p>
              </div>
              <div>
                <p className="font-medium">参加方法</p>
                <p className="text-muted-foreground">事前申込制（先着順）</p>
              </div>
              <div>
                <p className="font-medium">オンライン参加</p>
                <p className="text-muted-foreground">YouTube Liveで配信予定です。<br />視聴リンクは申込者に当日までにお送りします。</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);
