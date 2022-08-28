const express=require('express')
const router=express.Router();
const transactionController=require('../Controllers/transaction.controller')

router.post('/add',transactionController.addTransaction)
router.post('/edit',transactionController.editTransaction)
router.get('/',transactionController.listTransaction)
router.post('/list',transactionController.listTransactionUser)
router.get('/category',transactionController.listCategory)
router.get('/category/expense',transactionController.listExpense)
router.get('/category/income',transactionController.listIncome)

module.exports=router;