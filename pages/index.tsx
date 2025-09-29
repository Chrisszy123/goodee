import { useState } from 'react';
import { Guest, searchGuests } from '../data/guests';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Guest[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    
    const results = searchGuests(searchTerm);
    setSearchResults(results);
    setHasSearched(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (!e.target.value.trim()) {
      setSearchResults([]);
      setHasSearched(false);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Destiny & Goodluck's Wedding
          </h1>
          <p className={styles.subtitle}>
            October 25th, 2025 • Exquis Event Center
          </p>
          <div className={styles.hearts}>💕</div>
        </div>

        <div className={styles.searchSection}>
          <h2 className={styles.searchTitle}>Guest List Validation</h2>
          <p className={styles.searchDescription}>
            Please enter your name to confirm your invitation
          </p>
          
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Enter your full name..."
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              Search
            </button>
          </form>

          {hasSearched && (
            <div className={styles.results}>
              {searchResults.length > 0 ? (
                <div className={styles.successResults}>
                  <div className={styles.successIcon}>✅</div>
                  <h3 className={styles.successTitle}>Welcome!</h3>
                  <p className={styles.successMessage}>
                    We found you on our guest list:
                  </p>
                  {searchResults.map((guest) => (
                    <div key={guest.id} className={styles.guestCard}>
                      <h4 className={styles.guestName}>{guest.name}</h4>
                      <div className={styles.guestDetails}>
                        <p><strong>Table:</strong> {guest.table}</p>
                        {guest.plusOne && (
                          <p><strong>Plus One:</strong> ✓ Allowed</p>
                        )}
                      </div>
                    </div>
                  ))}
                  <p className={styles.welcomeText}>
                    We can't wait to celebrate with you! 🎉
                  </p>
                </div>
              ) : (
                <div className={styles.errorResults}>
                  <div className={styles.errorIcon}>❌</div>
                  <h3 className={styles.errorTitle}>Not Found</h3>
                  <p className={styles.errorMessage}>
                    We couldn't find "{searchTerm}" on our guest list.
                  </p>
                  <p className={styles.errorHelp}>
                    Please check the spelling or contact us if you believe this is an error.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className={styles.info}>
          <div className={styles.infoCard}>
            <h3>Wedding Details</h3>
            <p><strong>Date:</strong> October 25th, 2025</p>
            <p><strong>Time:</strong> 2:00 PM</p>
            <p><strong>Venue:</strong> Exquis Event Center</p>
            <p><strong>Address:</strong> Exquis Event Center, Eliozu, Port Harcourt, Rivers State</p>
          </div>
          
          <div className={styles.infoCard}>
            <h3>Contact Information</h3>
            <p><strong>Bride:</strong> Destiny Sunday</p>
            <p><strong>Groom:</strong> Bassey Goodluck</p>
            <p><strong>Wedding Planner:</strong> 07041145112</p>
            <p><strong>Email:</strong> bassygoodluck@email.com</p>
          </div>
        </div>
      </main>
    </div>
  );
}
