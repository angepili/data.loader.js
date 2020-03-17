import './demo.scss';
import './assets/logo.svg';
import './assets/pixel.svg';
import DataLoader,{ Options } from './data.loader';

const Opt : Options = {
    endpoint : 'https://picsum.photos/v2/list?page=1&limit=48',
    show : 4,
    template :  `
        <div class="item" style="background-image: url({download_url})">
            <h2>{author}</h2>
            <a href="{url}" target="_blank">
                <img src="./assets/pixel.svg" alt="pixel" />
            </a>
        </div>
        `
};

new DataLoader(Opt);