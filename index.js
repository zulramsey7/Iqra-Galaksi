const express = require('express');
const path = require('path');
const app = express();

// Hidangkan semua fail statik dari folder "public"
app.use(express.static(path.join(__dirname, 'public')));

// Route khas tanpa .html (optional, supaya URL jadi kemas)
app.get('/kuiz-angkasa-iqra', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'kuiz-angkasa-iqra.html'));
});

// Port automatik untuk Replit atau fallback ke 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
