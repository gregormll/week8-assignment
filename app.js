document.getElementById('awesomeButton').addEventListener('click', function() {
        const awesomeList = document.getElementById('awesomeList');
        awesomeList.innerHTML = ''; // Clear previous items
        for (let i = 0; i < 10; i++) {
            const listItem = document.createElement('div');
            listItem.className = 'awesome-item';
            listItem.textContent = 'I am awesome!';
            awesomeList.appendChild(listItem);
        }
    });