import { AboutProps } from '@/types';
import React from 'react';
import Events from '../components/About/Events';
import Card from '../components/About/Card';

export default function About({
  title,
  description,
  image,
  subtitle,
  keyPoints,
  eventsTitle,
  events,
}: AboutProps) {
  return (
    <section className="px-4 pt-8" id="about">
      <h1 className="my-8 text-center font-butler text-[32px] font-normal">{title}</h1>
      <Card image={image} body={description} subtitle={subtitle} keyPoints={keyPoints}></Card>
      <Events title={eventsTitle} events={events}></Events>
    </section>
  );
}
