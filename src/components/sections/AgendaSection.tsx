import React from 'react';
import { Timetable } from './Timetable'; // Import the new Timetable component

/**
 * アジェンダセクション
 */
export const AgendaSection = () => (
  <section id="agenda" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Event Agenda</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          AIペアプログラミングに関する様々なトピックを取り上げます。
          基調講演からライトニングトークまで、充実したコンテンツをお届けします。
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto"> {/* Increased max-width for better table display */}
        <Timetable />
      </div>
    </div>
  </section>
);
