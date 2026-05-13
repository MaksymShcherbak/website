interface LocalizedText {
  en: string;
  cz: string;
}

export interface Project {
  title: LocalizedText;
  imgs: GalleryImage[];
  website: string | null;
  repo: string | null;
  tags: string[];
  tech: string[];
  description: LocalizedText;
  points: LocalizedText[];
}

export interface GalleryImage {
  name: LocalizedText;
  src: string;
}

export interface Skills {
  soft: LocalizedText[];
  hard: LocalizedText[];
  tech: string[];
}

import projectData from "../data/projects.json";
export const projects = projectData as Project[];

import skillData from "../data/skills.json";
export const skills = skillData as Skills;

import iconMappingData from "../data/icons.json";
export const iconMapping = iconMappingData as Record<string, string>;