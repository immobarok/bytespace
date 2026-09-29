export interface CourseCardProps {
  id?: string | number;
  title: string;
  author: string;
  rating: number;
  price: number;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  studentCount: number;
  avatars: string[];
}
