type Post = {
  slug: string;
  title: string;
  createdAt: string;
  description?: string;
  thumbnail?: string;
  authorIds?: number[];
  editorIds?: number[];
};