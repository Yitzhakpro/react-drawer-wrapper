import { getDefaultDrawerHeight, getDefaultDrawerWidth } from '../defaults';
import type { directionType } from '../defaults';

describe('Get Default Drawer Height Function', () => {
    it('Should return 100% height when direction is: left/right', () => {
        const options: directionType[] = ['left', 'right'];

        for (const option of options) {
            const height = getDefaultDrawerHeight(option);

            expect(height).toEqual('100%');
        }
    });

    it('Should return 20% height when direction is: top/bottom', () => {
        const options: directionType[] = ['top', 'bottom'];

        for (const option of options) {
            const height = getDefaultDrawerHeight(option);

            expect(height).toEqual('20%');
        }
    });
});

describe('Get Default Drawer Width Function', () => {
    it('Should return 30% width when direction is: left/right', () => {
        const options: directionType[] = ['left', 'right'];

        for (const option of options) {
            const width = getDefaultDrawerWidth(option);

            expect(width).toEqual('30%');
        }
    });

    it('Should return 100% width when direction is: top/bottom', () => {
        const options: directionType[] = ['top', 'bottom'];

        for (const option of options) {
            const width = getDefaultDrawerWidth(option);

            expect(width).toEqual('100%');
        }
    });
});
