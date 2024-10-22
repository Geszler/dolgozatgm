import './style.css'
import './node_modules/bootstrap/dist/css/bootstrap.min.css'

document.addEventListener('DOMContentLoaded', () => {
    const kepUrlInput = document.getElementById('kep-url');
    const betuMeretInput = document.getElementById('betu-meret');
    const sorkozInput = document.getElementById('sorkoz');
    const betuSzinInput = document.getElementById('betu-szin');
    const kepValtasGomb = document.getElementById('kep-valtas');
    const kepElonezet = document.getElementById('kep-elonezet');
    const szovegElonezet = document.getElementById('szoveg-elonezet');

    const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum lacus vel eros feugiat, et aliquet purus luctus. Sed suscipit odio in nisl lacinia malesuada. Nulla facilisi. Integer vel orci et risus gravida efficitur. Morbi ultrices, lorem eu volutpat fringilla, nisi libero hendrerit dui, vitae fermentum metus nisl sit amet purus. Sed malesuada dictum est, vel euismod nisi egestas a.`;

    szovegElonezet.innerText = loremIpsum;

    kepUrlInput.addEventListener('change', () => {
        kepElonezet.src = kepUrlInput.value;
    });

    betuMeretInput.addEventListener('input', () => {
        szovegElonezet.style.fontSize = `${betuMeretInput.value}pt`;
    });

    sorkozInput.addEventListener('input', () => {
        szovegElonezet.style.lineHeight = sorkozInput.value;
    });

    betuSzinInput.addEventListener('input', () => {
        szovegElonezet.style.color = betuSzinInput.value;
    });

});