import React, { useState, useEffect } from 'react';
import { Rss, ExternalLink, Calendar, Info } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/card';

interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

// Fallback data for demonstration when RSS feed is not accessible
const fallbackUpdates: RSSItem[] = [
  {
    title: "GitHub Copilot: 新しいコード提案機能の追加",
    link: "https://github.blog/changelog/",
    pubDate: "2024-01-15T10:00:00Z",
    description: "GitHub Copilotがより高精度なコード提案を行うための新機能が追加されました。機械学習モデルの改善により、より文脈に適したコード生成が可能になります。"
  },
  {
    title: "Copilot Chat: IDE統合の改善",
    link: "https://github.blog/changelog/",
    pubDate: "2024-01-10T09:30:00Z",
    description: "Visual Studio CodeとJetBrains IDEでのCopilot Chat機能が大幅に改善されました。よりスムーズな対話型開発体験を提供します。"
  },
  {
    title: "GitHub Copilot for Business: セキュリティ機能強化",
    link: "https://github.blog/changelog/",
    pubDate: "2024-01-05T14:15:00Z",
    description: "企業向けGitHub Copilotにおいて、コード提案のセキュリティ検証機能が強化されました。より安全な開発環境を提供します。"
  }
];

/**
 * GitHub Copilot更新情報セクション
 */
export const CopilotUpdatesSection = () => {
  const [updates, setUpdates] = useState<RSSItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // GitHub Copilot RSS FeedのURL
        const rssUrl = 'https://github.blog/changelog/label/copilot/feed/';
        
        // CORSプロキシを使用してRSSフィードを取得
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;
        
        const response = await fetch(proxyUrl, {
          headers: {
            'Accept': 'application/json',
          }
        });
        
        if (!response.ok) {
          throw new Error('RSSフィードの取得に失敗しました');
        }
        
        const data = await response.json();
        
        if (!data.contents) {
          throw new Error('RSSデータが空です');
        }
        
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data.contents, 'text/xml');
        
        // パースエラーをチェック
        const parseError = xmlDoc.querySelector('parsererror');
        if (parseError) {
          throw new Error('RSSのパースに失敗しました');
        }
        
        // RSS項目を解析
        const items = xmlDoc.querySelectorAll('item');
        const rssItems: RSSItem[] = Array.from(items).slice(0, 5).map(item => {
          const title = item.querySelector('title')?.textContent || '';
          const link = item.querySelector('link')?.textContent || '';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          const description = item.querySelector('description')?.textContent || '';
          
          return {
            title: title.trim(),
            link: link.trim(),
            pubDate: pubDate.trim(),
            description: description.trim()
          };
        });
        
        if (rssItems.length === 0) {
          throw new Error('RSS項目が見つかりませんでした');
        }
        
        setUpdates(rssItems);
      } catch (err) {
        console.error('RSS取得エラー:', err);
        setError('RSS取得に失敗しました。フォールバックデータを表示しています。');
        setUpdates(fallbackUpdates);
        setUsingFallback(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRSSFeed();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const truncateDescription = (description: string, maxLength: number = 150) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  return (
    <section id="copilot-updates" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Rss className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">GitHub Copilot Updates</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            GitHub Copilotの最新アップデート情報をリアルタイムで取得しています。<br />
            新機能や改善点をいち早くキャッチして、開発効率を向上させましょう。
          </p>
          {usingFallback && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-blue-700">
                <Info className="w-4 h-4" />
                <span className="text-sm">
                  デモデータを表示中 | RSS監視は本番環境で動作します
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          {loading && (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-4 text-muted-foreground">更新情報を取得中...</p>
            </div>
          )}

          {!loading && updates.length === 0 && !error && (
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-center">
                  現在、表示する更新情報がありません。
                </p>
              </CardContent>
            </Card>
          )}

          {!loading && updates.length > 0 && (
            <div className="space-y-6">
              {updates.map((update, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold leading-tight">
                        {update.title}
                      </h3>
                      <a
                        href={update.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
                        title="詳細を確認"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    {update.pubDate && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(update.pubDate)}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    {update.description && (
                      <p className="text-muted-foreground">
                        {truncateDescription(update.description)}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
              
              <div className="text-center pt-6">
                <a
                  href="https://github.blog/changelog/label/copilot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  すべての更新情報を確認
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};