const express = require('express');
const router = express.Router();
const cohere = require('cohere-ai');
cohere.init('NB2Eu5tMmeqWJC9PEAt59F5Bm7jAqj6QZYdWOfUI');

// Route to get an answer to the prompt
router.get('/:question', async (req, res) => {
    question = req.params.question;
    // Use Cohere NLP to generate response
    await (async () => {
        const response = await cohere.generate({ 
            prompt: question
        });
        let generatedResponse = `${response.body.generations[0].text}`;
        res.status(200).json({response: generatedResponse});
    })();
})

module.exports = router;