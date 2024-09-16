import { db } from './db.js';

async function testConnection() {
  try {
    const result = await db.query('SELECT NOW()');
    console.log('Connected to the database:', result);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

testConnection();
