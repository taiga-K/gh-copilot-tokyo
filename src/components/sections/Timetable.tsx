import React from 'react';
import { eventData } from '../../data/eventData';
import { Button } from '../ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'; // Corrected import path

export const Timetable = () => {
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">時間</TableHead>
            <TableHead className="w-[100px]">所要時間</TableHead>
            <TableHead>セッション内容</TableHead>
            <TableHead className="text-right">発表者</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eventData.agenda.map((session, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{session.time}</TableCell>
              <TableCell>{session.duration}</TableCell>
              <TableCell>{session.title}</TableCell>
              <TableCell className="text-right">{session.speaker || '-'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 p-3 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          ※ タイムテーブルは変更される可能性があります
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <Button 
          asChild
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded-lg text-lg transition-colors"
        >
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdZd-ZgRhgc3gbew9zkS1YH1s6byjlne3S6IiNfFiDPxbQplg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            公募LTに応募する
          </a>
        </Button>
      </div>
    </div>
  );
};
