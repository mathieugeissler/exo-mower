import {DirectionUtils} from "../directionUtils";

describe('DirectionUtils', () => {

    test('should return 0 when degrees is 0', () => {
        const direction = DirectionUtils.getDirectionFromDegrees(0);
        expect(direction).toEqual(0)
    })

    test('should return 1 when degrees is 90', () => {
        const direction = DirectionUtils.getDirectionFromDegrees(90);
        expect(direction).toEqual(1)
    })

    test('should return 2 when degrees is 180', () => {
        const direction = DirectionUtils.getDirectionFromDegrees(180);
        expect(direction).toEqual(2)
    })

    test('should return 3 when degrees is 270', () => {
        const direction = DirectionUtils.getDirectionFromDegrees(270);
        expect(direction).toEqual(3)
    })

    test('should return 0 when degrees is 360', () => {
        const direction = DirectionUtils.getDirectionFromDegrees(360);
        expect(direction).toEqual(0)
    })

    test('should return 1 when degrees is 450', () => {
        const direction = DirectionUtils.getDirectionFromDegrees(450);
        expect(direction).toEqual(1)
    })

})
