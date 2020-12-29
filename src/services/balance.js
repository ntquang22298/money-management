import db from '../firebase';

const updateBalance = async (value) => {
  let time = new Date();
  let oldBalance = 0;
  let res = await db.collection('balance').orderBy('timestamp', 'desc').limit(1).get();
  res.forEach((doc) => {
    oldBalance += doc.data().amount;
  });
  let newBalance = await db.collection('balance').add({
    amount: oldBalance + value,
    date: time.getDate(),
    month: time.getMonth(),
    year: time.getFullYear(),
    timestamp: time,
  });
  return newBalance;
};
const getCurrentBalance = async () => {
  let total = 0;
  let res = await db.collection('balance').orderBy('timestamp', 'desc').limit(1).get();
  res.forEach((doc) => {
    total += doc.data().amount;
  });
  return total;
};
const getMonthlyBalance = async () => {
  let date = new Date();
  let res = await db
    .collection('balance')
    .where('timestamp', '>=', new Date(date.getFullYear(), date.getMonth(), 1))
    .where('timestamp', '<=', new Date(date.getFullYear(), date.getMonth() + 1, 0))
    .get();
  return res;
};

const getDailyBalance = async (date) => {
  let total = 0;

  let res = await db
    .collection('balance')
    .where('date', '==', date)
    .orderBy('timestamp', 'desc')
    .limit(1)
    .get();
  res.forEach((doc) => {
    total += doc.data().amount;
  });
  return total;
};
export default {
  updateBalance,
  getMonthlyBalance,
  getCurrentBalance,
  getDailyBalance,
};
