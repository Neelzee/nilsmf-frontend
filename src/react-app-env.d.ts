/// <reference types="react-scripts" />

declare global {
  type Article = {
    id?: number;
    title: string;
    path: string;
    images: string[];
    created: Date;
    edited?: Date;
    tags: string[];
  };
}
