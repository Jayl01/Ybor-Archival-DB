import { Artifact } from "./types";

export class Data {

  // this is just a temporary example. will be replaced by api call 
  public data: Artifact[] = [
    /*{
      "Accession": "0",
      "Title": "test",
      "Location": "RO_BB1",
      "SubjectHeadings": "Food, Markets, Medicine",
      "Description": "Small glass bottle without a cap.GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG",
      "Date": "1950s",
      "CreatedBy": "Glass Bottleworks",
      "Size": "2\"x6\"",
      "Condition": "Bad",
      "Status": "Donated",
      "DonatedBy": "John Doe",
      "PersonalNotes": "Broken at the neck of the bottle",
      "Acquisitions": [],
      "Attachments": [],
      Images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_1tq1C29xUImDGvIsx01T9E7Z6yLyD--1w&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDLERXiIT9-kSikgAj-wKTG_N5yNO9GOFIIQ&s"]
    },*/
    {
      "Accession": "2025.01.001",
      "Title": "Glass Bottle",
      "Location": "RO_BB1",
      "SubjectHeadings": "Food, Markets, Medicine",
      "Description": "Small glass bottle without a cap.",
      "Date": "1950s",
      "CreatedBy": "Glass Bottleworks",
      "Size": "2\"x6\"",
      "Condition": "Bad",
      "Status": "Donated",
      "DonatedBy": "John Doe",
      "PersonalNotes": "Broken at the neck of the bottle",
      "Acquisitions": [],
      "Attachments": [],
      "Images": []
    },
    {
      "Accession": "2025.01.002",
      "Title": "Oral History - John Doe",
      "Location": "RO_BB1",
      "SubjectHeadings": "Oral History, Italian History",
      "Description": "Oral history recording",
      "Date": "May 22 1999",
      "CreatedBy": "Ybor City Museum Society",
      "Size": "30 minutes",
      "Condition": "Fair",
      "Status": "Donated",
      "DonatedBy": "John Doe",
      "PersonalNotes": "[mp3]",
      "Acquisitions": [],
      "Attachments": [],
      "Images": []
    },
    {
      "Accession": "2025.01.003",
      "Title": "Handwritten Dairy of a Woman's Life",
      "Location": "RO_BB1",
      "SubjectHeadings": "Manuscript",
      "Description": "Women of Ybor, Spanish Culture",
      "Date": "Handwritten dairy from the years of 1910-1915 about her life, job, and marriage in Ybor.",
      "CreatedBy": "1910s",
      "Size": "Jane Doe",
      "Condition": "62 pgs",
      "Status": "Fair ",
      "DonatedBy": "Donated",
      "PersonalNotes": "[pdf]",
      "Acquisitions": ["Jane Doe"],
      "Attachments": [],
      "Images": []
    },
    {
      "Accession": "2025.01.004",
      "Title": "Baseball Signed by Al Lopez",
      "Location": "RO_BB1",
      "SubjectHeadings": "Baseball in Tampa Bay, Al Lopez, Spanish History",
      "Description": "Baseball signed by major league player Al Lopez.",
      "Date": "1950",
      "CreatedBy": "Rawlings",
      "Size": "9\" circ.",
      "Condition": "Excellent",
      "Status": "Donated ",
      "DonatedBy": "Al Lopez",
      "PersonalNotes": "",
      "Acquisitions": [],
      "Attachments": [],
      "Images": []
    },
    {
      "Accession": "2025.01.005",
      "Title": "Painting of Ybor Street",
      "Location": "RO_BB1",
      "SubjectHeadings": "Art, Painting, Ybor City Streets",
      "Description": "Acrylic painting of ybor city street.",
      "Date": "2010s",
      "CreatedBy": "Arnold Martinez",
      "Size": "10\"x5\"",
      "Condition": "Excellent",
      "Status": "Donated",
      "DonatedBy": "Arnold Martinez",
      "PersonalNotes": "",
      "Acquisitions": [],
      "Attachments": [],
      "Images": []
    },
    {
      "Accession": "2025.01.006",
      "Title": "Wooden Cigar Mold",
      "Location": "RO_BB1",
      "SubjectHeadings": "Cigar Industry, Cuban Culture",
      "Description": "Tabletop cigar mold designed to fit 30 cigars",
      "Date": "Early 1900s",
      "CreatedBy": "Perfecto Garcia Bros.",
      "Size": "24\"x3\"",
      "Condition": "Fair ",
      "Status": "Donated",
      "DonatedBy": "John Doe",
      "PersonalNotes": "",
      "Acquisitions": [],
      "Attachments": [],
      "Images": ["https://img.freepik.com/free-psd/closeup-partially-smoked-cigar_191095-81614.jpg", "https://t3.ftcdn.net/jpg/01/15/15/80/360_F_115158009_RSXCLoEYhSWdOQpPkg2GTnlVH1feSlik.jpg", "https://mshanken.imgix.net/cao/bolt/2019-02/10-things-graphic-1600.jpg?w=900&q=72"]
    },
    {
      "Accession": "2025.01.007",
      "Title": "Spanish Madre\u00f1as",
      "Location": "RO_BB1",
      "SubjectHeadings": "Spanish Culture, Asturian Culture,\nShoes",
      "Description": "Wooden clog-like overshoes from Asturias Spain",
      "Date": "1930s",
      "CreatedBy": "N/A",
      "Size": "13\"",
      "Condition": "Good",
      "Status": "Donated",
      "DonatedBy": "N/A",
      "PersonalNotes": "",
      "Acquisitions": [],
      "Attachments": [],
      "Images": []
    },
    {
      "Accession": "2025.01.008",
      "Title": "WPA Blueprints for House",
      "Location": "RO_BB1",
      "SubjectHeadings": "WPA, Architecture",
      "Description": "Two - story residence for Blueprints and Architecture notes from BB Architects",
      "Date": "May 25 1935",
      "CreatedBy": "BB Architects",
      "Size": "48\"'x24\"",
      "Condition": "Bad",
      "Status": "Donated",
      "DonatedBy": "John Doe",
      "PersonalNotes": "",
      "Acquisitions": [],
      "Attachments": [],
      "Images": []
    },
    {
      "Accession": "2025.01.009",
      "Title": "Centro Asturiano Membership Card Book",
      "Location": "RO_BB1",
      "SubjectHeadings": "Spanish Culture, Mutual Aid Societies",
      "Description": "Small booklet display a picture and the information of a Centro Asturiano member.",
      "Date": "1930s",
      "CreatedBy": "Centro Asturianp",
      "Size": "2\"x4\"",
      "Condition": "Poor",
      "Status": "Donated",
      "DonatedBy": "John Doe",
      "PersonalNotes": "Very delicate, binding fragile",
      "Acquisitions": [],
      "Attachments": [],
      "Images": []
    },
    {
      "Accession": "2025.01.010",
      "Title": "2021 Annual Cigar Heritage Festival Poster",
      "Location": "RO_BB1",
      "SubjectHeadings": "Cigar Industry, Ybor City Festivals",
      "Description": "Medium sized poster to promote the 2021 Annual Cigar Heritage Festival",
      "Date": "2021",
      "CreatedBy": "Ybor City Museum Society, Cigar Heritage Festival",
      "Size": "18\"x24\"",
      "Condition": "Good",
      "Status": "Donated",
      "DonatedBy": "John Doe",
      "PersonalNotes": "",
      "Acquisitions": [],
      "Attachments": [],
      "Images": []
    },
    {
      "Accession": "2025.01.011",
      "Title": "Burgert Brothers photograph of women at work in the cigar industry",
      "Location": "RO_BB1",
      "SubjectHeadings": "Art & Artists, Cigar Industry, Burgert Brothers",
      "Description": "Black and white mage of three women working in an Ybor cityt cigar factory.",
      "Date": "1930s",
      "CreatedBy": "Burgert Bros Tampa",
      "Size": "8\" x 10\"",
      "Condition": "Good",
      "Status": "Donated",
      "DonatedBy": "John Doe",
      "PersonalNotes": "",
      "Acquisitions": [],
      "Attachments": [],
      "Images": []
    },
    {
      "Accession": "2025.01.012",
      "Title": "Krewe of Ybor Recods",
      "Location": "RO_BB1",
      "SubjectHeadings": "Krewe, Ybor Culture",
      "Description": "Documents about membership information for the Krewe of Ybor",
      "Date": "2000",
      "CreatedBy": "Krewe of Ybor",
      "Size": "N/A",
      "Condition": "Fair",
      "Status": "Donated",
      "DonatedBy": "John Doe",
      "PersonalNotes": "",
      "Acquisitions": [],
      "Attachments": [],
      "Images": []
      }
  ];

  constructor() {
  }

  // this method will take in an artifact, which may or may not be new, to be put in the database
  public updateArtifact(artifact: Artifact) {
    console.log("the following will be updated to the database", artifact);
  }

  public getNewArticle(): Artifact {
    return {
      "Accession": "",
      "Title": "",
      "Location": "",
      "SubjectHeadings": "",
      "Description": "",
      "Date": "",
      "Size": "",
      "Condition": "",
      "Status": "",
      "DonatedBy": "",
      "CreatedBy": "",
      "PersonalNotes": "",
      "Acquisitions": [],
      "Attachments": [],
      "Images": [],
    }
  }
}
