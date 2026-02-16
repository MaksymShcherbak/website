export interface Project {
  title: string;
  imgs: GalleryImage[];
  website: string | null;
  repo: string | null;
  tags: string[];
  tech: string[];
  description: string;
  points: string[];
}

export interface GalleryImage {
  name: string; 
  src: string;
}

export interface Skills {
  soft: string[];
  hard: string[];
  tech: string[];
}

import projectData from "../data/projects.json";
export const projects = projectData as Project[];

import skillData from "../data/skills.json";
export const skills = skillData as Skills;

import iconMappingData from "../data/icons.json";
export const iconMapping = iconMappingData as Record<string, string>;