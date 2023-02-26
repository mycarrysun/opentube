export interface Video {
  title: string;
  description: string;
  id: string;
  views: string;
  uploaded_at: string;
  channel: {
    id: string;
    name: string;
  }
}
