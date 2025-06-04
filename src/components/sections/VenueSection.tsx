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
            <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
              <p className="text-muted-foreground text-center p-4">詳細が決まり次第、公開いたします。しばらくお待ちください。</p>
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
                <p className="text-muted-foreground">{eventData.capacity}</p>
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
