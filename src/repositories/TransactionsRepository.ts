import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {

  }

  public create({title,value,type}): Transaction {
   const transactions = new Transaction({title,value,type});
  }
}

export default TransactionsRepository;
