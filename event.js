function generateEvent() {
  const eventType = document.getElementById('eventInput').value.toLowerCase();
  const resultDiv = document.getElementById('result');

  const nameLibrary = {
      "ulang tahun": ["Ulang Tahun yang Meriah!", "Pesta Ulang Tahun yang Seru", "Perayaan yang Meriah"],
      "pernikahan": ["Selamanya Bersama", "Negeri Ajaib Pernikahan", "Bahagia Selamanya"],
      "seminar": ["Pusat Pengetahuan", "Obrolan Berwawasan", "Seminar Profesional"],
      "anniversary": ["Momen Berkesan", "Gala Ulang Tahun", "Perayaan Cinta"]
  };

  const themeLibrary = {
      "ulang tahun": ["Tema Kartun", "Tema Superhero", "Tema Pelangi"],
      "pernikahan": ["Tema Rustic", "Tema Vintage", "Tema Elegant"],
      "seminar": ["Tema Modern", "Tema Minimalis", "Tema Profesional"],
      "anniversary": ["Tema Romantis", "Tema Chic", "Tema Garden Party"]
  };

  // Object gambar ilustrasi
  const imageLibrary = {
      "ulang tahun": "https://images.unsplash.com/photo-1596495577886-6efb2b06fc7c?auto=format&fit=crop&w=400&q=80",
      "pernikahan": "https://images.unsplash.com/photo-1509320161257-5e4c8f97b4b6?auto=format&fit=crop&w=400&q=80",
      "seminar": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
      "anniversary": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
  };

  if (nameLibrary[eventType]) {
      const names = nameLibrary[eventType].map(name => `<li>${name}</li>`).join('');
      const themes = themeLibrary[eventType].map(theme => `<li>${theme}</li>`).join('');
      const imgSrc = imageLibrary[eventType]; // ambil URL gambar sesuai acara

      resultDiv.innerHTML = `
          <h3>Rekomendasi Nama Acara:</h3>
          <ul>${names}</ul>
          <h3>Rekomendasi Tema Acara:</h3>
          <ul>${themes}</ul>
          <h3>Ilustrasi Acara:</h3>
          <img src="${imgSrc}" alt="${eventType}" style="max-width:400px; border-radius:10px;">
      `;
  } else {
      resultDiv.innerHTML = `<p>Maaf, jenis acara "${eventType}" belum tersedia. Coba: Ulang Tahun, Pernikahan, Seminar, Anniversary.</p>`;
  }
}
