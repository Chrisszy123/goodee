export interface Guest {
  id: number;
  name: string;
  email?: string;
  plusOne?: boolean;
  table?: number;
}

export const weddingGuests: Guest[] = [
  { id: 1, name: "Pastor C", email: "pastorchidicourage@email.com", plusOne: true, table: 1 },
  { id: 2, name: "Goodluck Bassey", email: "bassygoodluck@email.com", plusOne: false, table: 2 },
  // { id: 3, name: "Michael Brown", email: "michael.brown@email.com", plusOne: true, table: 1 },
  // { id: 4, name: "Emily Davis", email: "emily.davis@email.com", plusOne: false, table: 3 },
  // { id: 5, name: "David Wilson", email: "david.wilson@email.com", plusOne: true, table: 2 },
  // { id: 6, name: "Jessica Miller", email: "jessica.miller@email.com", plusOne: false, table: 4 },
  // { id: 7, name: "Robert Taylor", email: "robert.taylor@email.com", plusOne: true, table: 3 },
  // { id: 8, name: "Lisa Anderson", email: "lisa.anderson@email.com", plusOne: false, table: 4 },
  // { id: 9, name: "Christopher Thomas", email: "christopher.thomas@email.com", plusOne: true, table: 5 },
  // { id: 10, name: "Amanda Jackson", email: "amanda.jackson@email.com", plusOne: false, table: 5 },
  // { id: 11, name: "Matthew White", email: "matthew.white@email.com", plusOne: true, table: 6 },
  // { id: 12, name: "Jennifer Harris", email: "jennifer.harris@email.com", plusOne: false, table: 6 },
  // { id: 13, name: "Daniel Martin", email: "daniel.martin@email.com", plusOne: true, table: 7 },
  // { id: 14, name: "Ashley Thompson", email: "ashley.thompson@email.com", plusOne: false, table: 7 },
  // { id: 15, name: "James Garcia", email: "james.garcia@email.com", plusOne: true, table: 8 },
  // { id: 16, name: "Michelle Martinez", email: "michelle.martinez@email.com", plusOne: false, table: 8 },
  // { id: 17, name: "Andrew Robinson", email: "andrew.robinson@email.com", plusOne: true, table: 9 },
  // { id: 18, name: "Stephanie Clark", email: "stephanie.clark@email.com", plusOne: false, table: 9 },
  // { id: 19, name: "Joshua Rodriguez", email: "joshua.rodriguez@email.com", plusOne: true, table: 10 },
  // { id: 20, name: "Nicole Lewis", email: "nicole.lewis@email.com", plusOne: false, table: 10 },
  // { id: 21, name: "Ryan Lee", email: "ryan.lee@email.com", plusOne: true, table: 11 },
  // { id: 22, name: "Samantha Walker", email: "samantha.walker@email.com", plusOne: false, table: 11 },
  // { id: 23, name: "Kevin Hall", email: "kevin.hall@email.com", plusOne: true, table: 12 },
  // { id: 24, name: "Rachel Allen", email: "rachel.allen@email.com", plusOne: false, table: 12 },
  // { id: 25, name: "Brandon Young", email: "brandon.young@email.com", plusOne: true, table: 13 }
];

export const searchGuests = (searchTerm: string): Guest[] => {
  if (!searchTerm.trim()) return [];
  
  const normalizedSearch = searchTerm.toLowerCase().trim();
  
  return weddingGuests.filter(guest => 
    guest.name.toLowerCase().includes(normalizedSearch)
  );
};
