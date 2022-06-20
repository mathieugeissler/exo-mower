import {Mower, Orientation} from '../mower';

describe('MowItNow', () => {

    test('should initialise and return the mower position', () => {
        const mower = new Mower(0, 0);
        expect(mower).toBeTruthy();
        const position = mower.position;
        expect(position).toEqual({x: 0, y: 0, orientation: Orientation.N});
    });

    test('should move the mower north', () => {
        // MM
        const mower = new Mower(1, 2);
        const position = mower.sendCommands('MM');
        expect(position).toEqual({x: 1, y: 4, orientation: Orientation.N});
    });

    test('should rotate the mower right', () => {
        // RRR
        const mower = new Mower(1, 2);
        const position = mower.sendCommands('RRR');
        expect(position).toEqual({x: 1, y: 2, orientation: Orientation.W});
    });

    test('should rotate the mower left', () => {
        // LLL
        const mower = new Mower(1, 2);
        const position = mower.sendCommands('LLL');
        expect(position).toEqual({x: 1, y: 2, orientation: Orientation.E});
    });

    test('should be able to move the mower in every directions', () => {
        // MRMRMRMR
        const mower = new Mower(1, 2);
        const position = mower.sendCommands('MRMRMRMR');
        expect(position).toEqual({x: 1, y: 2, orientation: Orientation.N});
    });

    test('should keep the mower in the allowed coordinate area', () => {
        // LMMLMMM
        const mower = new Mower(1, 2);
        const position = mower.sendCommands('LMMLMMM');
        expect(position).toEqual({x: 0, y: 0, orientation: Orientation.S});
    });

    test('yeah, everything seems to work as expected', () => {
        // LLMMMRRRRRMMRMMMRMLM
        const mower = new Mower(1, 2);
        const position = mower.sendCommands('LLMMMRRRRRMMRMMMRMLM');
        expect(position).toEqual({x: 1, y: 4, orientation: Orientation.N});
    });

    test('should get position in string', () => {
        const mower = new Mower(1, 2);
        const position = mower.sendCommands('MRMRMRMR');
        expect(position.toString()).toEqual('1 2 N');
    })
});






