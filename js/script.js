document.addEventListener('DOMContentLoaded', () => {
    const messages = [
    "Hoy cumplimos 2 meses mi pequeña Daniela, y han sido los meses más bonitos de mi vida.",
    "Feliz 2 meses mi chaparrita hermosa, gracias por hacer mi vida más feliz.",
    "Bb, 2 meses contigo y siento que te amo más cada día.",
    "Mi Dani preciosa, gracias por estos 2 meses tan especiales.",
    "Mi corazón está feliz porque hoy celebramos 2 meses juntos amor.",
    "Pequeña, estos 2 meses contigo han sido mágicos.",
    "Chaparrita linda, 2 meses contigo y quiero muchos más.",
    "Bb hermosa, cada día contigo es un regalo.",
    "Dani, gracias por estos 2 meses de amor y felicidad.",
    "Mi corazón, celebrar 2 meses contigo es lo mejor.",
    "Amor, 2 meses a tu lado y ya no imagino mi vida sin ti.",
    "Pequeña preciosa, estos 2 meses solo son el comienzo.",
    "Chaparrita, gracias por llenar mi vida de amor.",
    "Bb, 2 meses y mi amor por ti sigue creciendo.",
    "Dani hermosa, estos 2 meses han sido perfectos.",
    "Mi corazón está agradecido por tenerte.",
    "Amor mío, 2 meses contigo y quiero toda una vida.",
    "Pequeña linda, gracias por cada momento juntos.",
    "Chaparrita hermosa, contigo todo es más bonito.",
    "Bb preciosa, 2 meses de puro amor contigo.",
    "Dani, eres la mejor parte de estos 2 meses.",
    "Mi corazón, contigo cada día vale la pena.",
    "Amor, gracias por estos 2 meses tan especiales.",
    "Pequeña, eres mi felicidad diaria.",
    "Chaparrita linda, celebrar 2 meses contigo me hace muy feliz.",
    "Bb, contigo el tiempo pasa volando.",
    "Dani hermosa, quiero celebrar muchos meses más contigo.",
    "Mi corazón late fuerte por ti.",
    "Amor mío, estos 2 meses han sido increíbles.",
    "Pequeña, eres mi razón para sonreír.",
    "Chaparrita, gracias por estos momentos tan lindos.",
    "Bb, contigo todo se siente perfecto.",
    "Dani preciosa, te amo más cada día.",
    "Mi corazón está feliz de tenerte.",
    "Amor, contigo quiero seguir sumando meses.",
    "Pequeña hermosa, estos 2 meses son solo el inicio.",
    "Chaparrita linda, eres lo mejor que me ha pasado.",
    "Bb preciosa, contigo todo es amor.",
    "Dani, eres mi persona favorita.",
    "Mi corazón siempre te elige a ti.",
    "Amor mío, gracias por estos 2 meses maravillosos.",
    "Pequeña, contigo soy muy feliz.",
    "Chaparrita hermosa, te amo demasiado.",
    "Bb, eres mi alegría diaria.",
    "Dani linda, contigo quiero seguir celebrando.",
    "Mi corazón, contigo encontré felicidad.",
    "Amor, eres mi lugar favorito.",
    "Pequeña preciosa, gracias por estar conmigo.",
    "Chaparrita, estos 2 meses han sido hermosos.",
    "Bb Dani, te amo y quiero muchos meses más contigo."
    ];

    const messageElement = document.getElementById('message');
    const btn = document.getElementById('btn');

    function getRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }


    btn.addEventListener('click', () => {
        messageElement.textContent = getRandomMessage();
    });
});