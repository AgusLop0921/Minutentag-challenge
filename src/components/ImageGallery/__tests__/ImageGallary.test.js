import { render, screen, fireEvent } from '@testing-library/react';
import { ImageGallery } from '../ImageGallery';

const links = [
    "https://indiehoy.com/wp-content/uploads/2020/12/the-office.jpg",
    "https://www.laprimerapiedra.com.ar/wp-content/uploads/the-office-1200.jpg",
    "https://tn.com.ar/resizer/AdGS3ukVnbM2FscYiZDdkzVWNGc=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/F4QFIWLQMZEBDLSXTVIMACS24U.jpg"
];

describe('ImageGallery', () => {
    it('render all the images the first time', () => {
        render(<ImageGallery links={links}/>);
        const images = screen.getAllByAltText('img');
        expect(images.length).toBe(3)
    });

    it('remove image when the x is clicked', () => {
        const continaer = render(<ImageGallery links={links}/>);
        fireEvent.click(screen.getAllByRole('button')[0]);
        const images = screen.getAllByAltText('img');
        expect(images.length).toBe(2)
    });
});