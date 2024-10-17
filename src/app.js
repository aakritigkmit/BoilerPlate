const {computeResult,
   retrieveCalculationHistory,deleteOperationById,
   resetCalculationHistory
} = require('../services/operation.service.js');

const performOperation = async (req, res) => {
    const email = req.headers['email'];
    console.log(email);
    const payload = req.body;

    try {
        const result = await
         computeResult(payload,email);
        res.status(201).json({ result });
    } catch (error) {
        console.error('Error performing operation:', error);
        res.status(400).json({ error: 'An error occurred while performing the operation.' });
    }
};
