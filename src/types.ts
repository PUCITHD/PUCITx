export interface Lecture {
  title: string;
  runtime: string;
  description: string;
  videoID: string;
}

export interface CourseSummary {
  title: string;
  description: string;
  lecturer: string;
  lectures: number;
  slug: string;
}

export interface CourseDetail {
  title: string;
  description: string;
  lecturer: string;
  lectures: Lecture[];
}

export interface CoursesResponse {
  courses: CourseSummary[];
}
