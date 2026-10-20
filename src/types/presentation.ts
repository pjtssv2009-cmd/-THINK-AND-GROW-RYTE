export type SlideId = 
  | 'slide-01' 
  | 'slide-02' 
  | 'slide-03' 
  | 'slide-04' 
  | 'slide-05' 
  | 'slide-06' 
  | 'slide-07' 
  | 'slide-08' 
  | 'slide-09' 
  | 'slide-10';

export interface SlideMeta {
  id: SlideId;
  index: number;
  slideNumber: string; // e.g. "01", "02"
  title: string;
  stageName: string;
  durationMin: number;
  headline: string;
  description: string;
  talkingPoints: string[];
}
