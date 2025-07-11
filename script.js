const outputDiv = document.getElementById('output');
const loader = document.getElementById('loader');

// 🥓  fetch data
async function fetchBaconData() {
  loader.classList.remove('hidden');
  outputDiv.innerHTML = '';

  try {
    const response = await fetch('http://localhost:4000/api/bacon');
    const result = await response.json();

    if (result.message === 'success man') {
      const paragraphs = result.data;
      outputDiv.innerHTML = paragraphs.map(p => `<p class="text-gray-800 leading-relaxed">${p}</p>`).join('');
    } else {
      outputDiv.innerHTML = `<p class="text-red-500">Failed to fetch bacon text.</p>`;
    }
  } catch (error) {
    console.error(error);
    outputDiv.innerHTML = `<p class="text-red-500">An error occurred while fetching data.</p>`;
  } finally {
    loader.classList.add('hidden');
  }
}
