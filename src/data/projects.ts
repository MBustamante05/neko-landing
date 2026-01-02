export interface Project {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Lemon Boy",
    imageUrl:
      "https://images.unsplash.com/vector-1738669102413-96028dc8da23?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lemon Boy by Penguins",
  },
  {
    id: 2,
    title: "Butterfly",
    imageUrl:
      "https://images.unsplash.com/photo-1617791160588-241658c0f566?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Butterfly by MIlad Fakurian",
  },
  {
    id: 3,
    title: "Texture Sky",
    imageUrl:
      "https://images.unsplash.com/photo-1629277152917-966a1f1705cd?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Texture Sky by Simon Lee",
  },
  {
    id: 4,
    title: "Toilet Paper",
    imageUrl:
      "https://images.unsplash.com/photo-1530533718754-001d2668365a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Toilet Paper by Planet Volumes",
  },
];
