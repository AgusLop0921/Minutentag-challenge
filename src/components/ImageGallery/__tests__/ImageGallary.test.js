import { render, screen, fireEvent } from '@testing-library/react';
import { ImageGallery } from '../ImageGallery';
import { links } from '../../../mocks/mocks';


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