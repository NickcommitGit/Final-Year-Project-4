 // app.post('/submit-answers', (req, res) => {
    //     const { answers } = req.body;
    
    //     if (!answers || !Array.isArray(answers)) {
    //         return res.status(400).json({ success: false, message: 'Invalid answers format.' });
    //     }
    
    //     const questionIds = answers.map((a) => a.id);
    //     const userAnswers = answers.reduce((acc, curr) => {
    //         acc[curr.id] = curr.answer;
    //         return acc;
    //     }, {});
    
    //     const sql = 'SELECT id, correct_option, explanation FROM questions WHERE id IN (?)';
    //     db.query(sql, [questionIds], (err, results) => {
    //         if (err) {
    //             console.error('Error fetching answers:', err);
    //             return res.status(500).json({ success: false, message: 'Error calculating score.' });
    //         }
    
    //         let score = 0;
    //         const correctAnswers = {};
    //         const explanations = {};
    
    //         results.forEach((q) => {
    //             correctAnswers[q.id] = q.correct_option;
    //             explanations[q.id] = q.explanation;
    //             if (userAnswers[q.id] === q.correct_option) {
    //                 score++;
    //             }
    //         });
    
    //         res.json({ success: true, score, totalQuestions: results.length, correctAnswers, explanations });
    //     });
    // });
    