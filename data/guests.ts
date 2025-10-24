export interface Guest {
  id: number;
  name: string;
  email?: string;
  plusOne?: boolean;
  table?: string;
}

export const weddingGuests: Guest[] = [
  { id: 1, name: "Pastor & Pastor Mrs. Chidi Courage", email: "pastorchidicourage@email.com", plusOne: true, table: "High Table" },
  { id: 2, name: "Mr & Mrs. Engee Titus", email: "engetitus@gmail.com", plusOne: true, table: "Ministers" },
  { id: 3, name: "Mr & Mrs. Emmanuel Umeh", email: "emmanuelumeh@gmail.com", plusOne: true, table: "GIC Choba" },
  { id: 4, name: "Mr & Mrs. Success Omenihu", email: "successomenihu@gmail.com", plusOne: true, table: "High Table" },
  { id: 5, name: "Mr & Mrs. Eric Desmond", email: "ericdesmond@gmail.com", plusOne: true, table: "Pastors" },
  { id: 6, name: "George MacAlex", email: "georgemacalex@gmail.com", plusOne: true, table: "Groomsmen" },
  { id: 7, name: "Segun Aniye", email: "segunaniy@gmail.com", plusOne: false, table: "Groomsmen" },
  { id: 8, name: "Nengi Emmanuel", email: "nengiemmanuel@gmail.com", plusOne: false, table: "GIC Choba" },
  { id: 9, name: "Wisdom Chidozie", email: "wizzy@gmail.com", plusOne: false, table: "Friends Of the Groom" },
  { id: 10, name: "Blacqhub", email: "blacqhub@gmail.com", plusOne: false, table: "GIC Choba" },
  { id: 11, name: "Miss Emmanuel", email: "emmanuel@gmail.com", plusOne: false, table: "GIC Choba" },
  { id: 12, name: "Mr & Mrs. Olaoluwa Joshua", email: "olajosh@gmail.com", plusOne: true, table: "Friends Of the Groom" },
  { id: 13, name: "Mr Uhwetu", email: "uhwetu@gmail.com", plusOne: true, table: "Friends Of the Groom" },
  { id: 14, name: "Miss Chinelo", email: "chinelo@gmail.com", plusOne: false, table: "Friends of Groom" },
  { id: 15, name: "Sommy", email: "sommy@gmail.com", plusOne: false, table: "Friends of the Groom" },
  { id: 16, name: "Acho Obinna", email: "achoobinna@gmail.com", plusOne: false, table: "Friends of the Groom" },
  { id: 17, name: "Mr. Mayowa Obonch", email: "mayowaobonch@gmail.com", plusOne: false, table: "Friends of Groom" },
  { id: 18, name: "Mr. Clarence", email: "clarence@gmail.com", plusOne: false, table: "Friends of Groom" },
  { id: 19, name: "Mr. Tarilla Phillips", email: "tarilla@gmail.com", plusOne: true, table: "Friends of Groom" },
  { id: 20, name: "Mr. Endwell", email: "endwell@gmail.com", plusOne: false, table: "Friends of Groom" },
  { id: 21, name: "Mr. Phillips", email: "phillips@gmail.com", plusOne: false, table: "High Table" },
  { id: 22, name: "Mrs. MacAlex", email: "macalex@gmail.com", plusOne: false, table: "High Table" },
  { id: 23, name: "Mrs. Tehgah", email: "tehgah@gmail.com", plusOne: false, table: "High Table" },
  { id: 24, name: "Min. Amaka (zoe nation)", email: "amaka@gmail.com", plusOne: false, table: "Friends of Groom" },
  { id: 25, name: "Mr. Ken Ogeh", email: "kenogeh@gmail.com", plusOne: false, table: "GIC Choba" },
  { id: 26, name: "Mr. Jesam", email: "jesam@gmail.com", plusOne: false, table: "Groomsmen" },
  { id: 27, name: "Mr. Tega", email: "tega@gmail.com", plusOne: false, table: "Friends of Groom" },
  { id: 28, name: "Mr. Jonathan", email: "jonathan@gmail.com", plusOne: false, table: "Groomsmen" },
  { id: 29, name: "Mr. Bassey Iniobong", email: "iniobong@gmail.com", plusOne: false, table: "Groomsmen" },
  { id: 30, name: "Mr & Mrs. Kenneth Nwokocha", email: "kenneth@gmail.com", plusOne: true, table: "Family of the Groom" },
  { id: 31, name: "Mr. Moyo", email: "moyo@gmail.com", plusOne: false, table: "Friends of Groom" },
  { id: 32, name: "Auxceegyn", email: "auxceegyn@gmail.com", plusOne: false, table: "GIC Choba" },
  { id: 33, name: "Mr. Sotonye Agolia", email: "soso@gmail.com", plusOne: true, table: "GIC Choba" },
  { id: 34, name: "Mr. Mojeezy", email: "mojeezy@gmail.com", plusOne: false, table: "GIC Choba" },
  { id: 35, name: "Mr. Kingsley", email: "kingsley@gmail.com", plusOne: false, table: "Friends of Groom" },
  { id: 36, name: "El Chuks", email: "chuks@gmail.com", plusOne: false, table: "GIC Choba" },
  { id: 37, name: "Bryan MacAlex", email: "bryan@gmail.com", plusOne: false, table: "Friends of the Groom" },
  { id: 38, name: "Mr. Dayo", email: "dayo@gmail.com", plusOne: false, table: "GIC Choba" },
  { id: 39, name: "Miss Chidinma Ria", email: "chidinma@gmail.com", plusOne: false, table: "GIC Choba" },
  { id: 40, name: "Mr. Danee", email: "danee@gmail.com", plusOne: false, table: "Friends of Groom" },
  { id: 41, name: "Mr. Liadi Teslim", email: "ayo@gmail.com", plusOne: false, table: "Friends of Groom" },
  { id: 42, name: "Miss Kobo Medlyn", email: "kobomedlyn@gmail.com", plusOne: false, table: "GIC Choba" },
  { id: 43, name: "Miss. Homa", email: "homahandss@gmail.com", plusOne: false, table: "High Table" },
  { id: 44, name: "Evelyn Henry", email: "evelyn@gmail.com", plusOne: false, table: "Friends of the Bride" },
  { id: 45, name: "Blessing Goody", email: "blessing@gmail.com", plusOne: false, table: "Friends of Bride" },
  { id: 46, name: "Miss. Jewel", email: "jewel@gmail.com", plusOne: false, table: "Friends of Bride" },
  { id: 47, name: "Miss. Jenny", email: "jenny@gmail.com", plusOne: false, table: "Friends of Bride" },
  { id: 48, name: "Jessica", email: "jessica@gmail.com", plusOne: false, table: "Friends of Bride" },
  { id: 49, name: "Ruth", email: "ruth@gmail.com", plusOne: false, table: "Friends of Bride" },
  { id: 50, name: "Mrs. Chidinma", email: "chidinma@gmail.com", plusOne: false, table: "Friends of Bride" },
  { id: 51, name: "Benita", email: "benita@gmail.com", plusOne: false, table: "GIC Choba" },
  { id: 52, name: "Kuro Emmanuel", email: "kuro@gmail.com", plusOne: false, table: "GIC Choba" },
  { id: 53, name: "Diana Emmmanuel", email: "diana@gmail.com", plusOne: false, table: "GIC Choba" },
  { id: 54, name: "Mrs. Nancy Nwokocha", email: "tarilla@gmail.com", plusOne: false, table: "Family of Groom" },
  { id: 55, name: "Queeneth", email: "queeneth@gmail.com", plusOne: false, table: "Friends of Bride" },
  { id: 56, name: "Melissa", email: "melissa@gmail.com", plusOne: false, table: "Friends of Bride" },
  { id: 57, name: "Tina", email: "tina@gmail.com", plusOne: false, table: "Friends of Bride" },
];

export const searchGuests = (searchTerm: string): Guest[] => {
  if (!searchTerm.trim()) return [];
  
  const normalizedSearch = searchTerm.toLowerCase().trim();
  
  return weddingGuests.filter(guest => 
    guest.name.toLowerCase().includes(normalizedSearch)
  );
};
