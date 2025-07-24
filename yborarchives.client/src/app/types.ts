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
  condition: 'Excellent' | 'Very Good' | 'Medium' | 'Damaed' | 'Unusable';
  status: string;
  donatedBy: string;
  image_link: string;
  pdf_link: string;
}

export function ToPrint()
{
  return null;
}
