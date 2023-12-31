const Transaction = require('../../Models/Shopacc/Transaction');

class TransactionController {
    async create(transactionData) {
        try {
          // Tạo giao dịch mới trong cơ sở dữ liệu bằng cách sử dụng phương thức create của Transaction
          const createdTransaction = await Transaction.create(transactionData);
          return { success: true, message: 'Transaction created successfully', transaction: createdTransaction };
        } catch (error) {
          console.error('Error creating transaction:', error);
          return { success: false, message: 'An error occurred while creating transaction' };
        }
      }
      async TransactionByIdAccount(req, res) {
        try {
            const { id_account } = req.params;

            // Thực hiện truy vấn database để lấy danh sách các acc game theo id_account
            const accGames = await Transaction.findAll({
                where: {
                    id_account: id_account,
                },
            });

            // Kiểm tra nếu không tìm thấy acc game nào, trả về mã lỗi 404
            if (!accGames || accGames.length === 0) {
                return res.status(404).json({ message: 'Không tìm thấy danh sách acc game cho id_account này.' });
            }

            // Trả về danh sách acc game nếu tìm thấy
            return res.json(accGames);
        } catch (error) {
            console.error('Error fetching acc game by id_account:', error);
            return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình xử lý.' });
        }
    }

    
}

module.exports = new TransactionController();