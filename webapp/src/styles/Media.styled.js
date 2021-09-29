import { css } from 'styled-components';

export const sizes = {
    largeDevice: 1280,
    mediumDevice: 1024,
    smalDevice: 768,
    mobileDevice: 576
}

export default Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media(max-width: ${sizes[label]}px) {
            ${css(...args)}
        }
     `;

    return acc;
}, {})