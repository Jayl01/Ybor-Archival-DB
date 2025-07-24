export interface Artifact {
  accession: string;
  title: string;
  description: string;
  personal_notes: string;
  subject: string[];
  location: string;
  date: string;
  createdBy: string;
  size: string;
  condition: string;
  status: string;
  donatedBy: string;
  image_links: string[];
  pdf_links: string[];
}

export function ToPrint()
{
  return null;
}
