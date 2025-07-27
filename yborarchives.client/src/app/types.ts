export interface Artifact {
  Accession: string;
  Title: string;
  Description: string;
  PersonalNotes: string;
  SubjectHeadings: string[];
  Location: string;
  Date: string;
  CreatedBy: string;
  Size: string;
  Condition: string;
  Status: string;
  DonatedBy: string;
  ImageLinks: string[];
  PdfLinks: string[];
}

export function ToPrint()
{
  return null;
}
