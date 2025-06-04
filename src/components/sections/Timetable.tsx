import React from 'react';
import { eventData } from '../../data/eventData';
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
  );
};
