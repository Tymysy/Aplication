const Model = document.querySelector("#InM").value
const HorserPower = document.querySelector("#InHP").value
const Price = document.querySelector("#InP").value
const Year = document.querySelector("#InY").value
const CreateBtn = document.querySelector("#CreateBtn")


CreateBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch('/add_car/', {
        method: 'POST',
        headers: { 'X-CSRFToken': '{{ csrf_token }}' },
        body: JSON.stringify({
            model: formData.get('model'),
            power: formData.get('power'),
            price: formData.get('price'),
            year: formData.get('year'),
        })
    })
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('car-container');
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML = `
            <i id="announ-icon" class="bi bi-car-front"></i><p>Model: ${data.model}</p>
            <i id="announ-icon" class="bi bi-p-circle"></i><p>HorserPower: ${formData.get('power')} hp </p>
            <i id="announ-icon" class="bi bi-tag"></i><p>Price: ${formData.get('price')} $</p>
            <i id="announ-icon" class="bi bi-calendar2"></i><p>Year: ${formData.get('year')}</p>
        `;
        container.appendChild(newCard);
    });
});