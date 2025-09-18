import * as SQLite from "expo-sqlite";

let db;

export const initDB = async () => {
  if (!db) {
    db = await SQLite.openDatabaseAsync("app.db");
  }

  // await db.execAsync(`
  //   DROP TABLE IF EXISTS transactions;
  //   DROP TABLE IF EXISTS features;
  //   DROP TABLE IF EXISTS card;
  // `);

  // Create tables
  await db.execAsync(`
  DROP TABLE IF EXISTS transactions;
  DROP TABLE IF EXISTS features;
  DROP TABLE IF EXISTS card;
  DROP TABLE IF EXISTS user;

  CREATE TABLE transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    icon TEXT,
    title TEXT,
    description TEXT,
    amount TEXT
  );

  CREATE TABLE features (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    icon TEXT
  );

  CREATE TABLE card (
    cardNumber TEXT,
    balance TEXT
  );

  CREATE TABLE user (
    name TEXT,
    email TEXT
  );
`);

  return db;
};

// Seed DB with dummy data
export const seedDB = async () => {
  const txCount = await db.getAllAsync("SELECT COUNT(*) as count FROM transactions");
  if (txCount[0].count === 0) {
    await db.runAsync(
      "INSERT INTO transactions (icon, title, description, amount) VALUES (?, ?, ?, ?)",
      ["SpotifyIcon", "Spotify", "Monthly Subscription", "-$15.00"]
    );
    await db.runAsync(
      "INSERT INTO transactions (icon, title, description, amount) VALUES (?, ?, ?, ?)",
      ["PaypalIcon", "Paypal", "Earnings", "$25.00"]
    );
  }

  const featCount = await db.getAllAsync("SELECT COUNT(*) as count FROM features");
  if (featCount[0].count === 0) {
    await db.runAsync("INSERT INTO features (title, icon) VALUES (?, ?)", ["Transfer", "TransferIcon"]);
    await db.runAsync("INSERT INTO features (title, icon) VALUES (?, ?)", ["Pay", "PayIcon"]);
    await db.runAsync("INSERT INTO features (title, icon) VALUES (?, ?)", ["Top Up", "TopUpIcon"]);
    await db.runAsync("INSERT INTO features (title, icon) VALUES (?, ?)", ["Withdraw", "WithdrawIcon"]);
  }

  const cardCount = await db.getAllAsync("SELECT COUNT(*) as count FROM card");
  if (cardCount[0].count === 0) {
    await db.runAsync(
      "INSERT INTO card (cardNumber, balance) VALUES (?, ?)",
      ["6219-8619-2594-3430", "63,000.00"]
    );
  }

  const user = await db.getAllAsync("SELECT COUNT(*) as count FROM user");
  if (user[0].count === 0) {
    await db.runAsync(
      "INSERT INTO user (name, email) VALUES (?, ?)",
      ["Raisa Adriana", "raisaandriana@gmail.com"]
    );
  }
};

// Fetch transactions
export const getTransactions = async () => {
  return await db.getAllAsync("SELECT * FROM transactions");
};

// Fetch features
export const getFeatures = async () => {
  return await db.getAllAsync("SELECT * FROM features");
};

// Fetch CardInfo
export const getCardInfo = async () => {
  return await db.getAllAsync("SELECT * FROM card")
}

// Fetch CardInfo
export const getUserInfo = async () => {
  return await db.getAllAsync("SELECT * FROM user")
}