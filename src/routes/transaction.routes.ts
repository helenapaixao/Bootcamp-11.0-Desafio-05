import { Router } from 'express';

import CreateTransactionService from '../services/CreateTransactionService';
import TransactionsRepository from '../repositories/TransactionsRepository';

// import TransactionsRepository from '../repositories/TransactionsRepository';
// import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

 const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
   const transaction = transactionsRepository.all();

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const {title,value, type} = request.body;
    const transaction = CreateTransactionService(transactionsRepository);
    return response.json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
