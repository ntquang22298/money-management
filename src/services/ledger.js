import { types } from '../consts/ledger';
import db from '../firebase';

const addLedger = async (ledger) => {
  let res = await db.collection('ledger').add({
    source: ledger.source,
    target: ledger.target ? ledger.target : '',
    amount: ledger.amount,
    type: ledger.type,
    expenseType: ledger.expenseType ? ledger.expenseType : '',
    description: ledger.description ? ledger.description : '',
    date: ledger.date,
    month: ledger.month,
    year: ledger.year,
    timestamp: new Date(),
  });
  return res;
};
const getAllLedgers = async (type) => {
  let date = new Date();
  let res = await db
    .collection('ledger')
    .where('type', '==', type)
    .where('timestamp', '>=', new Date(date.getFullYear(), date.getMonth(), 1))
    .where('timestamp', '<=', new Date(date.getFullYear(), date.getMonth() + 1, 0))
    .get();
  return res;
};
const getAllSaving = async () => {
  let date = new Date();
  let res = await db
    .collection('ledger')
    .where('type', '==', types.SAVING)
    .where('year', '==', date.getFullYear())
    .get();
  return res;
};
const getLatesLedgers = async () => {
  let res = await db.collection('ledger').limit(4).orderBy('timestamp', 'desc').get();
  return res;
};
const getLatesExpense = async () => {
  let res = await db
    .collection('ledger')
    .where('type', '==', types.DEBIT)
    .limit(4)
    .orderBy('timestamp', 'desc')
    .get();
  return res;
};
const getTodayExpense = async () => {
  let res = await db
    .collection('ledger')
    .where('type', '==', types.DEBIT)
    .where('year', '==', new Date().getFullYear())
    .where('month', '==', new Date().getMonth())
    .where('date', '==', new Date().getDate())
    .get();
  return res;
};
export default {
  getAllSaving,
  addLedger,
  getAllLedgers,
  getLatesLedgers,
  getTodayExpense,
  getLatesExpense,
};
